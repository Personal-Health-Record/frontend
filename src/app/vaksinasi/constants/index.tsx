import { Vaksinasi } from "../models"

export const TIPE_VAKSINASI_DEWASA = {
  INFLUENZA_FLU: "Influenza (Flu)",
  TD_TDAP: "Tetanus, diphteria, pertusis (Td/Tdap)",
  VARISELA: "Varisela",
  HPV: "Human Papilloma Virus (HPV)",
  ZOSTER: "Zoster",
  MEASLES: "Measles / Campak",
  PNEUMOKOKAL_KONJUGAT: "Pneumokokal Konjugat 13-valent (PCV-13)",
  PNEUMOKOKAL_POLISAKARIDA: "Pneumokokal Polisakarida (PPSV23)",
  MENINGITIS_MENINGOKOKAL: "Meningitis meningokokal",
  HEPATITIS_A: "Hepatitis A",
  HEPATITIS_B: "Hepatitis B",
  HEPATITIS_A_HEPATITIS_B: "Hepatitis A dan Hepatitis B (kombinasi)",
  HEPATITIS_A_TYPHOID: "Hepatitis A dan Thypoid (kombinasi)",
  DEMAM_TIFOID: "Demam Tifoid",
  DEMAM_KUNING: "Demam Kuning",
  JAPANESE_ENCEPHALITIS: "Japanese Encephalitis (JE)",
  RABIES: "Rabies",
  COVID_19: "COVID-19",
}

export const TIPE_VAKSINASI_ANAK = {
  HEPATITIS_B: "Hepatitis B",
  POLIO: "Polio",
  BCG: "BCG",
  DTP: "DTP",
  HIB: "Hib",
  PNEUMOKOKUS: "Pneumokokus (PCV)",
  ROTAVIRUS: "Rotavirus",
  INFLUENZA_FLU: "Influenza (Flu)",
  MR_MMR: "MR/MMR",
  JAPANESE_ENCEPHALITIS: "Japanese Encephalitis (JE)",
  VARISELA: "Varisela",
  HEPATITIS_A: "Hepatitis A",
  TIFOID_POLISAKARIDA: "Tifoid Polisakarida",
  HUMAN_PAPILLOMA_VIRUS: "Human Papiloma Virus (HPV)",
  DENGUE: "Dengue",
}


export const dummyVaksinasiData: Vaksinasi[] = [
  {
    id: "1",
    userId: "1",
    date: "03-24-2022",
    location: "Klinik Makmur Jaya",
    type: TIPE_VAKSINASI_DEWASA.COVID_19,
    detailType: "AstraZeneca"
  },
  {
    id: "2",
    userId: "1",
    date: "03-21-2022",
    location: "Klinik Bio Farma",
    type: TIPE_VAKSINASI_DEWASA.INFLUENZA_FLU,
  },
  {
    id: "3",
    userId: "1",
    date: "03-19-2022",
    location: "Siloam Hospital",
    type: TIPE_VAKSINASI_DEWASA.DEMAM_TIFOID,
  },
  {
    id: "4",
    userId: "1",
    date: "03-17-2022",
    location: "Premier Hospital",
    type: TIPE_VAKSINASI_DEWASA.MEASLES,
  },
  {
    id: "5",
    userId: "3",
    date: "03-14-2022",
    location: "Klinik Makmur Jaya",
    type: TIPE_VAKSINASI_DEWASA.COVID_19,
    detailType: "Coronavac (Sinovac)"
  },
  {
    id: "6",
    userId: "3",
    date: "03-12-2022",
    location: "Klinik Bio Farma",
    type: TIPE_VAKSINASI_DEWASA.MEASLES,
  },
  {
    id: "7",
    userId: "3",
    date: "03-11-2022",
    location: "Siloam Hospital",
    type: TIPE_VAKSINASI_DEWASA.HEPATITIS_B,
  },
  {
    id: "8",
    userId: "3",
    date: "03-9-2022",
    location: "Premier Hospital",
    type: TIPE_VAKSINASI_DEWASA.HPV,
  },
  {
    id: "9",
    userId: "4",
    date: "03-4-2022",
    location: "Premier Hospital",
    type: TIPE_VAKSINASI_ANAK.DENGUE,
  },
  {
    id: "10",
    userId: "1",
    date: "06-15-2022",
    location: "Klinik Makmur Jaya",
    type: TIPE_VAKSINASI_DEWASA.COVID_19,
    detailType: "Coronavac (Sinovac)"
  },
]