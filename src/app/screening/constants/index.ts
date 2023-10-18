export const screeningData = [
  {
    title: 'Skrining Mandiri Penyakit Tidak Menular',
    image: '/images/screening/screening-0.png',
    path: '/',
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
];

export type Skrining = {
  date: string;
  location: string;
  skriningType: string;
};

export const dummySkriningList: Skrining[] = [
  {
    date: '18 Maret 2023',
    location: 'Puskesmas Serpong',
    skriningType: 'Skrining Penyakit Tidak Menular',
  },
  {
    date: '1 Febaruari 2023',
    location: 'Mandiri',
    skriningType: 'Skrining COVID-19',
  },
  {
    date: '8 Januari 2023',
    location: 'Mandiri',
    skriningType: 'Skrining Kesehatan Mental',
  },
];
