import * as z from "zod"
import { CompleteKegiatan, relatedKegiatanSchema } from "./index"

export const subKegiatanSchema = z.object({
  id: z.number().int(),
  name: z.string(),
  kegiatanId: z.number().int(),
  targetKinerja: z.number(),
  anggaran: z.number().int(),
  realisasiAnggaran: z.number().int(),
  realisasiKinerja: z.number(),
  satuan: z.string(),
})

export interface CompleteSubKegiatan extends z.infer<typeof subKegiatanSchema> {
  kegiatan: CompleteKegiatan
}

/**
 * relatedSubKegiatanSchema contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const relatedSubKegiatanSchema: z.ZodSchema<CompleteSubKegiatan> = z.lazy(() => subKegiatanSchema.extend({
  kegiatan: relatedKegiatanSchema,
}))
