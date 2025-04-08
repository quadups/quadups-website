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
import { useEffect, useState } from "react";
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

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);
  

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
      <div className="flex flex-col md:flex-row h-screen overflow-hidden">
        {/* Left: Mobile View Navbar */}
        <div className="md:hidden w-full relative">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
            <NavBar onContactClick={() => setModalOpen(true)} />
          </motion.div>
          <div className="mt-20 flex justify-center items-center">
            <h2 className="text-white text-xl font-bold text-center px-4">
              Let’s bring your visions into reality
            </h2>
          </div>
        </div>
  
        {/* Left: Desktop View */}
        <div className="hidden md:flex md:w-3/6 h-full justify-center items-center relative overflow-hidden">
          <motion.div
            style={{ backgroundImage: `url(/homeBg.jpg)` }}
            className="w-full h-full shadow-lg bg-cover bg-no-repeat py-6 px-12 flex flex-col items-center justify-center text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <button onClick={() => navigate(-1)} className="absolute top-8 left-8">
              <img src="/logo/small-logo-white.png" alt="Company Logo" className="w-10 h-10" />
            </button>
            <h2 className="text-white text-[27px] font-bold px-6">
              Let’s bring your visions into <br /> reality
            </h2>
          </motion.div>
        </div>
  
        {/* Right: Form */}
        <div className="w-full md:w-3/6 h-full bg-white dark:bg-[#2E2E2E] p-6 shadow-lg flex flex-col justify-center items-center overflow-hidden">
        {/* Mobile view heading */}
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center md:hidden">
            Let’s bring your vision into reality
          </h2>
  
          <div className="box w-full md:w-[30rem]">
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
                          <SelectTrigger className="border-none outline-none p-5 bg-[#D9D9D975] dark:bg-[#3A3A3A] text-black dark:text-white">
                            <SelectValue placeholder="Select Project Type" />
                          </SelectTrigger>
                          <SelectContent className="bg-white dark:bg-[#1E1E1E] text-black dark:text-white">
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
  
                {/* Name */}
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Name"
                          {...field}
                          className="w-full p-5 border rounded-lg bg-[#D9D9D975] dark:bg-[#3A3A3A] text-black dark:text-white"
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
                          className="w-full p-5 border rounded-lg bg-[#D9D9D975] dark:bg-[#3A3A3A] text-black dark:text-white"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
  
                {/* Message */}
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea
                          placeholder="Project Description"
                          {...field}
                          rows={4}
                          className="w-full p-5 border rounded-lg bg-[#D9D9D975] dark:bg-[#3A3A3A] text-black dark:text-white"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
  
                {/* Submit Button */}
                <div className="flex justify-center">
                  <Button
                    type="submit"
                    disabled={state.submitting}
                    className="bg-[#870A81] text-white py-3 px-12 rounded-lg"
                  >
                    {state.submitting ? "Sending..." : "Send Project Enquiry"}
                  </Button>
                </div>
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
