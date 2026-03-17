import { useMutation } from "@tanstack/react-query";
import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactInput = z.infer<typeof contactSchema>;

// Mock API function since this is a frontend-only portfolio
const submitContactForm = async (data: ContactInput) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Form submitted:", data);
      resolve({ success: true, message: "Message sent successfully!" });
    }, 1500); // Simulate network latency
  });
};

export function useSubmitContact() {
  return useMutation({
    mutationFn: submitContactForm,
  });
}
