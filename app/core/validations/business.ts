import { z } from "zod"

export const Business = z.object({
  name: z.string().min(1).max(50),
  category: z.string().min(1).max(50),
  phone: z.string().min(1).max(15),
  description: z.string().min(1).max(144),
  url: z.string().min(1),
})
