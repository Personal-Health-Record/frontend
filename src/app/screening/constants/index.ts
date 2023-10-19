export const screeningData = [
  {
    title: 'Skrining Mandiri Penyakit Tidak Menular',
    image: '/images/screening/screening-0.png',
    path: '/screening/ptm',
  },
  {
    title: 'Skrining COVID-19',
    image: '/images/screening/screening-2.png',
    path: '/screening/covid',
  },
  {
    title: 'Skrining Kesehatan Mental',
    image: '/images/screening/screening-3.png',
    path: '/screening/mental',
  },
];

export const dataHistory = [
  {
    title: 'Tanggal Skrining',
    data: '18 Maret 2022',
  },
  {
    title: 'NIK Pasies',
    data: '13759027827823',
  },
  {
    title: 'Nama Pasien',
    data: 'Jimmy Daniel',
  },
  {
    title: 'Jenis Kelamin',
    data: 'Laki-laki',
  },
  {
    title: 'Usia',
    data: '30 tahun',
  },
  {
    title: 'Lokasi Skrining',
    data: 'Puskesmas Serpong',
  },
];

export const mentalQuestion = [
  'Kurang berminat atau bergairah dalam melakukan apapun',
  'Merasa murung, sedih, atau putus asa',
  'Sulit tidur/mudah terbangun, atau terlalu banyak tidur',
  'Merasa lelah atau kurang bertenaga',
  'Kurang nafsu makan atau terlalu banyak makan',
  'Kurang percaya diri — atau merasa bahwa Anda adalah orang yang gagal atau telah mengecewakan diri sendiri atau keluarga',
  'Sulit berkonsentrasi pada sesuatu, misalnya membaca koran atau menonton televisi',
  'Bergerak atau berbicara sangat lambat sehingga orang lain memperhatikannya. Atau sebaliknya; merasa resah atau gelisah sehingga Anda lebih sering bergerak dari biasanya.',
  'Merasa lebih baik mati atau ingin melukai diri sendiri dengan cara apapun.',
];

export type Skrining = {
  id: number;
  date: string;
  location: string;
  skriningType: string;
  detail?: Covid | Mental;
};

export type Covid = {
  kontak: boolean;
  luarNegri: boolean;
  area: boolean;
  gejala: string;
};

export type Mental = {
  gairah: number;
  murung: number;
  sulitTidur: number;
  lelah: number;
  nafsuMakanKurang: number;
  kurangPd: number;
  sulitKonsen: number;
  lambat: number;
  melukai: number;
};

export const dummySkriningList: Skrining[] = [
  {
    id: 1,
    date: 'Senin, 18 Maret 2023',
    location: 'Puskesmas Serpong',
    skriningType: 'Skrining Penyakit Tidak Menular',
  },
  {
    id: 2,
    date: 'Kamis, 1 Febaruari 2023',
    location: 'Mandiri',
    skriningType: 'Skrining COVID-19',
  },
  {
    id: 3,
    date: 'Sabtu, 8 Januari 2023',
    location: 'Mandiri',
    skriningType: 'Skrining Kesehatan Mental',
  },
];
