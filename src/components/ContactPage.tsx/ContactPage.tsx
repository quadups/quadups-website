/**
 * @file Contact.tsx
 * @description Contact form component for submitting messages to the backend via email.
 * Utilizes Formspree for email submission and Zod for form validation.
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
import { useRef, useState } from "react";
import { X } from "lucide-react";

// Zod schema for form validation
const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export const Contact = ({ onClose }: { onClose?: () => void }) => {
  const FORM_ENDPOINT = "https://formspree.io/f/mldjgbjo"; // Replace with your Formspree endpoint

  const formRef = useRef<HTMLFormElement | null>(null);
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  
  // Add this function to handle Calendly
  const openCalendly = () => {
    // Link to Calendly booking page
    const calendlyLink = 'https://calendly.com/quadupsltd/30min';
    window.open(calendlyLink, '_blank' );
  };

  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof contactSchema>) => {
    setLoading(true);
    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        toast({ title: "Success", description: "Message sent successfully!" });
        form.reset();
        setTimeout(() => onClose && onClose(), 1000); // Auto-close modal after success
      } else {
        toast({ variant: "destructive", title: "Error", description: "Failed to send message." });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        variant: "destructive",
        title: "Unexpected Error",
        description: "An unexpected error occurred. Please try again later.",
      });
    } finally {
      setLoading(false);
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
          className="relative w-full max-w-[780px] min-h-[280px] md:min-h-[420px] rounded-lg bg-white dark:bg-[#1E1E1E] p-4 sm:p-6 md:p-8 lg:p-10 text-center shadow-lg overflow-y-auto"
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

          {/* Header */}
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-black dark:text-white mb-3 sm:mb-4"
          >
            Get in Touch
          </motion.h2>

          {/* Calendly booking option */}
          <div className="mb-4">
            <p className="text-gray-600 dark:text-gray-300 mb-3 text-sm">
              Prefer to schedule a call? 
              <button
                onClick={openCalendly}
                className="text-[#870a81] hover:text-[#9c1396] underline ml-1 transition-colors duration-200"
              >
                Book a meeting with us
              </button>
            </p>

            <div className="flex items-center my-4">
              <div className="flex-1 border-t border-gray-300 dark:border-gray-600"></div>
              <span className="px-4 text-gray-500 dark:text-gray-400 text-xs">OR SEND A MESSAGE</span>
              <div className="flex-1 border-t border-gray-300 dark:border-gray-600"></div>
            </div>
          </div>

          {/* Form */}
          <Form {...form}>
            <motion.form
              ref={formRef}
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-3 sm:space-y-4 md:space-y-4 max-w-md mx-auto pb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
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
                          className="bg-gray-100 dark:bg-[#2A2A2A] border border-gray-300 dark:border-gray-600 text-black dark:text-white rounded-lg p-3 w-full h-[50px] focus:ring-2 focus:ring-[#870a81] focus:border-transparent transition-all"
                        />
                      </motion.div>
                    </FormControl>
                    <FormMessage className="text-red-500 text-sm mt-1" />
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
                          type="email"
                          {...field}
                          className="bg-gray-100 dark:bg-[#2A2A2A] border border-gray-300 dark:border-gray-600 text-black dark:text-white rounded-lg p-3 w-full h-[50px] focus:ring-2 focus:ring-[#870a81] focus:border-transparent transition-all"
                        />
                      </motion.div>
                    </FormControl>
                    <FormMessage className="text-red-500 text-sm mt-1" />
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
                          className="bg-gray-100 dark:bg-[#2A2A2A] border border-gray-300 dark:border-gray-600 text-black dark:text-white rounded-lg p-3 w-full min-h-[120px] resize-none focus:ring-2 focus:ring-[#870a81] focus:border-transparent transition-all"
                          rows={5}
                          {...field}
                        />
                      </motion.div>
                    </FormControl>
                    <FormMessage className="text-red-500 text-sm mt-1" />
                  </FormItem>
                )}
              />

              {/* Submit Button */}
              <div className="pt-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full h-12 rounded-full bg-[#870A81] hover:bg-[#9c1396] disabled:bg-gray-400 text-white font-medium transition-all duration-300"
                  >
                    {loading ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </div>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </motion.div>
                {/* Add this message below the button */}
                <p className="text-sm text-gray-500 dark:text-gray-300 mt-3 text-center">
                  Our team will reach out to you in less than 24 hours.
                </p>
              </div>
            </motion.form>
          </Form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};