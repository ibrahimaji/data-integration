import * as z from "zod"

export const tahunSchema = z.object({
  id: z.string(),
  tahun: z.number().int(),
  program_id: z.string(),
})
