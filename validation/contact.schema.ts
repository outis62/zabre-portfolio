import { z } from "zod";

export const contactSchema = z.object({
  firstname: z.string().min(1, "First name is required"),
  lastname: z.string().optional(),
  email: z.string().email("Invalid email"),
  phone: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(1, "Message is required"),
});