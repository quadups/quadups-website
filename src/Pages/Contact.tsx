import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export const Contact = () => {

  const YOUR_SERVICE_ID = 'service_xbht5y8'
  const YOUR_TEMPLATE_ID = 'template_c2hh8u5'
  const YOUR_PUBLIC_KEY = 'kYgJrnWRQaZcpi-m6'

  const formRef = useRef<HTMLFormElement | null>(null);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async () => {
    try {
      emailjs
        .sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, formRef.current || '', YOUR_PUBLIC_KEY)
        .then(
          () => {
            toast({
              title: "Success",
              description: "Email sent successfully!",
            });
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
    <div
      className="relative mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
      style={{
        backgroundImage: 'url("/bg2.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <motion.div
        className="hidden lg:block"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src="/contact-us.png"
          alt="Contact Us"
          className="object-cover w-full h-auto"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="bg-white p-6 rounded-lg shadow-md backdrop-blur-md bg-opacity-80"
      >
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Get in Touch 📨</h2>
        <p className="text-gray-600 mb-10">
          Have questions or inquiries? Fill out the form, and we’ll get back to
          you as soon as possible.
        </p>
        <Form {...form}>
          <form ref={formRef} onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} className="bg-white" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="john@example.com" {...field} className="bg-white" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Write your message here..."
                      className="bg-white"
                      rows={5}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </motion.div>
          </form>
        </Form>
      </motion.div>
    </div>
  );
};

