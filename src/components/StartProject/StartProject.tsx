import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { Logo } from "../ui/Logo";
import { NavBar } from "../Layout/NavBar";
import { Contact } from "../ContactPage.tsx/ContactPage";
import Modal from "../ui/Modal";
import { useNavigate } from "react-router-dom";
import { useForm as useSpreeForm } from "@formspree/react";

const projectSchema = z.object({
  project_type: z.string().min(1, { message: "Please select a project type." }),
  name: z.string().min(1, { message: "Please fill this field" }),
  email: z.string().email({ message: "Invalid email address." }),
  message: z.string().min(10, { message: "Description must be at least 10 characters." }),
});

const StartProject = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isModalOpen, setModalOpen] = useState(false);

  // Formspree form hook
  const [state, handleSubmit] = useSpreeForm("myzekwel"); // Replace with your Formspree ID
  const complete = state.succeeded;

  const form = useForm<z.infer<typeof projectSchema>>({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      project_type: "",
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof projectSchema>) => {
    await handleSubmit(data);

    if (complete) {
      toast({
        variant: "destructive",
        title: "Submission Failed",
        description: "An error occurred. Please check your inputs and try again.",
      });
    } else {
      toast({
        title: "Success",
        description: "Project submitted successfully!",
      });
      form.reset();
    }
  };

  return (
    <>
      <div className="flex flex-col md:flex-row min-h-[calc(100vh-80px)] h-screen">
        {/* Left: Mobile View Navbar */}
        <div className="md:hidden block w-full md:w-2/4">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
            <NavBar onContactClick={() => setModalOpen(true)} />
          </motion.div>
        </div>

        {/* Left: Desktop View */}
        <div className="hidden md:flex w-full md:w-2/4 justify-center items-center h-full">
          <motion.div
            style={{ backgroundImage: `url(/homeBg.jpg )` }}
            className="w-full h-full shadow-lg bg-cover bg-no-repeat py-6 px-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <button
              onClick={() => navigate(-1)}
              className="text-white text-2xl py-2 px-3 shadow-lg rounded-full bg-[#870A81] hover:bg-[#442042] m-2"
            >
              &larr;
            </button>
            <Logo isServicePage={false} />
          </motion.div>
        </div>

        {/* Right: Form */}
        <div className="w-full h-screen md:w-3/4 bg-white dark:bg-[#2E2E2E] md:p-6 p-2 rounded-lg shadow-lg flex flex-col justify-center items-center">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center md:hidden">
            Let’s bring your vision into reality
          </h2>
          <div className="box md:w-[30rem] w-full p-3">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                {/* Project Type */}
                <FormField
                  control={form.control}
                  name="project_type"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Select onValueChange={field.onChange} {...field}>
                          <SelectTrigger className="border-none outline-none md:p-5 p-7 md:m-0 mt-8 bg-[#D9D9D975] dark:bg-[#3A3A3A] text-black dark:text-white">
                            <SelectValue placeholder="Select Project Type" />
                          </SelectTrigger>
                          <SelectContent className="bg-[#000] dark:bg-[#1A1A1A] text-white">
                            <SelectItem value="UI/UX design">UI/UX Design</SelectItem>
                            <SelectItem value="web app development">Website Design & Development</SelectItem>
                            <SelectItem value="software consultations">Software Consultations</SelectItem>
                            <SelectItem value="mobile app development">Mobile App Development</SelectItem>
                            <SelectItem value="business branding">Business Branding</SelectItem>
                            <SelectItem value="smart contract development">Smart Contract Development</SelectItem>
                            <SelectItem value="dapp development">DApp Development</SelectItem>
                            <SelectItem value="web3 integration">Web3 Integration</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Name Field */}
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Name"
                          {...field}
                          className="w-full md:p-5 p-7 md:m-0 mt-8 border rounded-lg bg-[#D9D9D975] dark:bg-[#3A3A3A] text-black dark:text-white"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Email */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Email"
                          {...field}
                          className="w-full md:p-5 p-7 md:m-0 mt-8 border rounded-lg bg-[#D9D9D975] dark:bg-[#3A3A3A] text-black dark:text-white"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Description */}
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea
                          placeholder="Project Description"
                          {...field}
                          className="w-full md:p-5 p-7 md:m-0 mt-8 border rounded-lg bg-[#D9D9D975] dark:bg-[#3A3A3A] text-black dark:text-white"
                          rows={4}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Submit Button */}
                <Button type="submit" disabled={state.submitting} className="bg-[#870A81] text-white py-3 px-12 rounded-lg">
                  {state.submitting ? "Sending..." : "Send Project Enquiry"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <Contact onClose={() => setModalOpen(false)} />
      </Modal>
    </>
  );
};

export default StartProject;
