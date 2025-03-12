/**
 * @file Contact.tsx
 * @description Contact form component for submitting messages to the backend via email.
 * Utilizes EmailJS for email submission and Zod for form validation.
 * @author Quadups Dev Team
 * @last_modified 2025
 */

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { X } from "lucide-react";

// Zod schema for form validation
const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
  from_name: z.string().default("Quadups Ltd"), 
});

export const Contact = ({ onClose }: { onClose?: () => void }) => {
  const YOUR_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const YOUR_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const YOUR_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const formRef = useRef<HTMLFormElement | null>(null);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      from_name: "Quadups Ltd",
    },
  });

  const onSubmit = async () => {
    try {
      emailjs
        .sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, formRef.current || "", YOUR_PUBLIC_KEY)
        .then(
          () => {
            toast({
              title: "Success",
              description: "Email sent successfully!",
            });
            form.reset();
          },
          (error) => {
            toast({
              variant: "destructive",
              title: "Error",
              description: `Failed to send email: ${error.text}`,
            });
          }
        );
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        variant: "destructive",
        title: "Unexpected Error",
        description: "An unexpected error occurred. Please try again later.",
      });
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        key="modal"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4"
      >
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.9 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="relative w-full max-w-[885px] min-h-[400px] md:h-[558px] rounded-lg bg-white dark:bg-[#1E1E1E] p-4 sm:p-6 md:p-8 lg:p-10 text-center shadow-lg"
        >
          {/* Close Button */}
          <motion.button
            whileHover={{ rotate: 90, scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10"
            onClick={onClose}
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-100" />
          </motion.button>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-black dark:text-white leading-tight mb-4 sm:mb-6 md:mb-[36px] mt-6 sm:mt-8 md:mt-10"
          >
            We are happy to hear from you
          </motion.h2>

          {/* Form */}
          <Form {...form}>
            <motion.form
              ref={formRef}
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-4 sm:space-y-5 md:space-y-7"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
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
                          className="bg-gray-100 dark:bg-[#1E1E1E] border border-gray-300 dark:border-gray-600 text-black dark:text-white rounded-lg p-3 w-full sm:w-[80%] md:w-[458px] h-[45px] sm:h-[50px] mx-auto"
                        />
                      </motion.div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Email Field */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <motion.div whileFocus={{ scale: 1.02 }}>
                        <Input
                          placeholder="Email"
                          {...field}
                          className="bg-gray-100 dark:bg-[#1E1E1E] border border-gray-300 dark:border-gray-600 text-black dark:text-white rounded-lg p-3 w-full sm:w-[80%] md:w-[458px] h-[45px] sm:h-[50px] mx-auto"
                        />
                      </motion.div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Message Field */}
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <motion.div whileFocus={{ scale: 1.02 }}>
                        <Textarea
                          placeholder="Message"
                          className="bg-gray-100 dark:bg-[#1E1E1E] border border-gray-300 dark:border-gray-600 text-black dark:text-white rounded-lg p-3 w-full sm:w-[80%] md:w-[458px] h-[100px] sm:h-[128px] mx-auto"
                          rows={5}
                          {...field}
                        />
                      </motion.div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="from_name"
                render={({ field }) => (
                  <input type="hidden" {...field} value="Quadups Ltd" />
                )}
              />

              {/* Submit Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="pt-2 sm:pt-4"
              >
                <Button
                  type="submit"
                  className="w-[120px] sm:w-[130px] h-[38px] sm:h-[42px] rounded-[10px] mx-auto bg-[#870A81] dark:bg-[#620664] text-white px-6 py-2 sm:px-8 sm:py-3 text-sm sm:text-base"
                >
                  Contact Us
                </Button>
              </motion.div>
            </motion.form>
          </Form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
