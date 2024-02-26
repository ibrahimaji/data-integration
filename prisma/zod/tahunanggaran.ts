import * as z from "zod"
import { CompleteProgram, relatedProgramSchema } from "./index"

export const tahunAnggaranSchema = z.object({
  id: z.number().int(),
  tahun: z.number().int(),
})

export interface CompleteTahunAnggaran extends z.infer<typeof tahunAnggaranSchema> {
  programs: CompleteProgram[]
}

/**
 * relatedTahunAnggaranSchema contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const relatedTahunAnggaranSchema: z.ZodSchema<CompleteTahunAnggaran> = z.lazy(() => tahunAnggaranSchema.extend({
  programs: relatedProgramSchema.array(),
}))
