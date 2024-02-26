-- CreateTable
CREATE TABLE "Tahun" (
    "id" TEXT NOT NULL,
    "tahun" INTEGER NOT NULL,
    "program_id" TEXT NOT NULL,

    CONSTRAINT "Tahun_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TahunAnggaran" (
    "id" SERIAL NOT NULL,
    "tahun" INTEGER NOT NULL,

    CONSTRAINT "TahunAnggaran_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Program" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "tahunAnggaranId" INTEGER NOT NULL,

    CONSTRAINT "Program_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Kegiatan" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "programId" INTEGER NOT NULL,

    CONSTRAINT "Kegiatan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SubKegiatan" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "kegiatanId" INTEGER NOT NULL,
    "targetKinerja" DOUBLE PRECISION NOT NULL,
    "anggaran" INTEGER NOT NULL,
    "realisasiAnggaran" INTEGER NOT NULL,
    "realisasiKinerja" DOUBLE PRECISION NOT NULL,
    "satuan" TEXT NOT NULL,

    CONSTRAINT "SubKegiatan_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Tahun_id_key" ON "Tahun"("id");

-- AddForeignKey
ALTER TABLE "Program" ADD CONSTRAINT "Program_tahunAnggaranId_fkey" FOREIGN KEY ("tahunAnggaranId") REFERENCES "TahunAnggaran"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Kegiatan" ADD CONSTRAINT "Kegiatan_programId_fkey" FOREIGN KEY ("programId") REFERENCES "Program"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubKegiatan" ADD CONSTRAINT "SubKegiatan_kegiatanId_fkey" FOREIGN KEY ("kegiatanId") REFERENCES "Kegiatan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
