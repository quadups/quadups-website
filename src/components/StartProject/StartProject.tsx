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
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { Logo } from "../ui/Logo";
import { NavBar } from "../Layout/NavBar";
import { Contact } from "../ContactPage.tsx/ContactPage";
import Modal from "../ui/Modal";
import { useNavigate } from "react-router-dom";

const projectSchema = z.object({
  projectType: z.string().min(1, { message: "Please select a project type." }),
  name: z.string().min(1, { message: "Please fill this field" }),
  email: z.string().email({ message: "Invalid email address." }),
  description: z.string().min(10, { message: "Description must be at least 10 characters." }),
  from_name: z.string().default("Quadups Ltd"), 
});

const StartProject = () => {
  const navigate = useNavigate()
  const [isModalOpen, setModalOpen] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof projectSchema>>({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      projectType: "",
      name: "",
      from_name: "Quadups Ltd",
      email: "",
      description: "",
    },
  });

  const onSubmit = async () => {
    try {
      if (formRef.current) {
        await emailjs.sendForm(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          formRef.current,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        );
        toast({ title: "Success", description: "Project submitted successfully!" });
        form.reset(); // Reset form after successful submission
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to submit project. Please try again.",
      });
      console.error("Error submitting project:", error);
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-[calc(100vh-80px)] h-screen">
      {/* Left: Full-height Image */}

      {/*Left: mobile view */}
      <div className="md:hidden block w-full md:w-2/4 md:h-full ">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
          <NavBar onContactClick={() => setModalOpen(true)} />
        </motion.div>
      </div>

      {/*Left: desktop */}
      <div className="hidden md:flex w-full md:w-2/4 justify-center items-center p-0 h-32 md:h-full ">
        <motion.div
          style={{ backgroundImage: `url(/homeBg.jpg )` }}
          className="w-full h-full shadow-lg bg-cover bg-no-repeat py-6 px-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <button onClick={()=> navigate(-1)} className="text-white text-2xl py-2 px-3 shadow-lg rounded-full bg-[#870A81] hover:bg-[#442042] m-2">&larr;</button>
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
      <form ref={formRef} onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        {/* Project Type */}
        <FormField
          control={form.control}
          name="projectType"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Select onValueChange={field.onChange}>
                  <SelectTrigger className="border-none outline-none md:p-5 p-7 md:m-0 mt-8 bg-[#D9D9D975] dark:bg-[#3A3A3A] text-black dark:text-white">
                    <SelectValue placeholder="Select Project Type" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#000] dark:bg-[#1A1A1A] text-white">
                    <SelectItem value="ui-ux-design">UI/UX Design</SelectItem>
                    <SelectItem value="web-app-development">Website Design & Development</SelectItem>
                    <SelectItem value="software-consultations">Software Consultations</SelectItem>
                    <SelectItem value="mobile-app-development">Mobile App Development</SelectItem>
                    <SelectItem value="business-branding">Business Branding</SelectItem>
                    <SelectItem value="smart-contract-development">Smart Contract Development</SelectItem>
                    <SelectItem value="dapp-development">DApp Development</SelectItem>
                    <SelectItem value="web3-integration">Web3 Integration</SelectItem>
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
                      <motion.div whileFocus={{ scale: 1.02 }}>
                        <Input
                          placeholder="Name"
                          {...field}
                          className="w-full md:p-5 p-7 md:m-0 mt-8 border rounded-lg border-none outline-none bg-[#D9D9D975] dark:bg-[#3A3A3A] placeholder:text-black dark:placeholder:text-gray-400 text-black dark:text-white"
                        />
                      </motion.div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

                  {/* hidden */}
              <FormField
                control={form.control}
                name="from_name"
                render={({ field }) => (
                  <input type="hidden" {...field} value="Quadups Ltd" />
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
                  className="w-full md:p-5 p-7 md:m-0 mt-8 border rounded-lg border-none outline-none bg-[#D9D9D975] dark:bg-[#3A3A3A] placeholder:text-black dark:placeholder:text-gray-400 text-black dark:text-white"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Description */}
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  placeholder="Project Description"
                  {...field}
                  className="w-full md:p-5 p-7 md:m-0 mt-8 border rounded-lg border-none outline-none bg-[#D9D9D975] dark:bg-[#3A3A3A] placeholder:text-black dark:placeholder:text-gray-400 text-black dark:text-white"
                  rows={4}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Submit Button */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex justify-center items-center p-2"
        >
          <Button type="submit" className="bg-[rgb(135,10,129)] dark:bg-[rgb(160,15,150)] text-white py-3 px-12 rounded-lg">
            Send Project Enquiry
          </Button>
        </motion.div>
      </form>
    </Form>
  </div>
</div>

      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <Contact onClose={() => setModalOpen(false)} />
      </Modal>
    </div>
  );
};

export default StartProject;
