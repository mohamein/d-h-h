import { z } from "zod";

export const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password:z.string().min(2, {
    message:'password most contain 8 character.'
  })
});

export const receiptSchema = z.object({
  place: z.string().min(1),
  telephone: z.string().min(7),
  receiptNumber: z.string().min(1),
  date: z.string().refine((val) => !isNaN(Date.parse(val)), {
    message: "Invalid date format",
  }),
  cabbirka: z.string(),
  dhisan: z.string(),
  taxRef: z.string(),
  receivedFrom: z.string().min(1),
  totalAmount: z.string(),
  amountInWords: z.string(),
});
