import * as z from "zod"
import { CompleteTahunAnggaran, relatedTahunAnggaranSchema, CompleteKegiatan, relatedKegiatanSchema } from "./index"

export const programSchema = z.object({
  id: z.number().int(),
  name: z.string(),
  tahunAnggaranId: z.number().int(),
})

export interface CompleteProgram extends z.infer<typeof programSchema> {
  tahunAnggaran: CompleteTahunAnggaran
  kegiatans: CompleteKegiatan[]
}

/**
 * relatedProgramSchema contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const relatedProgramSchema: z.ZodSchema<CompleteProgram> = z.lazy(() => programSchema.extend({
  tahunAnggaran: relatedTahunAnggaranSchema,
  kegiatans: relatedKegiatanSchema.array(),
}))
