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
import { useRef } from "react";
import { Logo } from "../ui/Logo";

const projectSchema = z.object({
  projectType: z.string().min(1, { message: "Please select a project type." }),
  email: z.string().email({ message: "Invalid email address." }),
  description: z.string().min(10, { message: "Description must be at least 10 characters." }),
});

const StartProject = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof projectSchema>>({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      projectType: "",
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
        description: "Failed to submit project. Please try again."
      });
      console.error("Error submitting project:", error); 
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-[calc(100vh-80px)] h-screen">
      {/* Left: Full-height Image */}
      <div className=" w-full md:w-2/4 flex justify-center items-center p-0 h-32  md:h-full ">
        <motion.div
          style={{backgroundImage: `url(/bg1.jpg )` }}
          className="w-full h-full shadow-lg bg-cover bg-center bg-no-repeat py-6 px-12 "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Logo isServicePage={false} />
        </motion.div>
      </div>

      {/* Right: Form */}
      <div className="w-full h-screen md:w-3/4 bg-white p-6 rounded-lg shadow-lg flex flex-col justify-center items-center">
        {/* <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Start Your Project</h2> */}
        <div className="box w-[30rem]">
        <Form {...form}>
          <form ref={formRef} onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            {/* Project Type */}
            <FormField
              control={form.control}
              name="projectType"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Select onValueChange={field.onChange} >
                      <SelectTrigger className= {'border-none outline-none p-5 bg-[rgb(238,238,238)]'}>
                        <SelectValue placeholder="Select Project Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="website">Website Development</SelectItem>
                        <SelectItem value="mobile">Mobile App Development</SelectItem>
                        <SelectItem value="software">Software Development</SelectItem>
                      </SelectContent>
                    </Select>
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
                    <Input placeholder="Email" {...field} className="w-full p-5 border rounded-lg border-none outline-none bg-[rgb(238,238,238)] placeholder:text-black" />
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
                    <Textarea placeholder="Project Description" {...field} className="w-full p-5 border rounded-lg border-none outline-none bg-[rgb(238,238,238)] placeholder:text-black" rows={4} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Submit Button */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex justify-center items-center p-2">
              <Button type="submit" className=" bg-[rgb(135,10,129)] text-white py-3 px-12 rounded-lg">Send Project Enquiry</Button>
            </motion.div>
          </form>
        </Form>
        </div>
      
      </div>
    </div>
  );
};

export default StartProject;
