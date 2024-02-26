import * as z from "zod"
import { CompleteProgram, relatedProgramSchema, CompleteSubKegiatan, relatedSubKegiatanSchema } from "./index"

export const kegiatanSchema = z.object({
  id: z.number().int(),
  name: z.string(),
  programId: z.number().int(),
})

export interface CompleteKegiatan extends z.infer<typeof kegiatanSchema> {
  program: CompleteProgram
  subKegiatans: CompleteSubKegiatan[]
}

/**
 * relatedKegiatanSchema contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const relatedKegiatanSchema: z.ZodSchema<CompleteKegiatan> = z.lazy(() => kegiatanSchema.extend({
  program: relatedProgramSchema,
  subKegiatans: relatedSubKegiatanSchema.array(),
}))
