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

export const dummyVaksinasiData = [
  {
    userId: 1,
    vaksinasi: [
      TIPE_VAKSINASI_DEWASA.COVID_19,
      TIPE_VAKSINASI_DEWASA.INFLUENZA_FLU,
      TIPE_VAKSINASI_DEWASA.DEMAM_TIFOID,
      TIPE_VAKSINASI_DEWASA.MEASLES,
    ]
  },
  {
    userId: 3,
    vaksinasi: [
      TIPE_VAKSINASI_DEWASA.COVID_19,
      TIPE_VAKSINASI_DEWASA.INFLUENZA_FLU,
      TIPE_VAKSINASI_DEWASA.MEASLES,
      TIPE_VAKSINASI_DEWASA.HEPATITIS_B,
      TIPE_VAKSINASI_DEWASA.HPV,
    ]
  },
  {
    userId: 4,
    vaksinasi: [
      TIPE_VAKSINASI_ANAK.DENGUE,
    ]
  },
]
