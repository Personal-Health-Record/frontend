export type TenagaKesehatan = {
  name: string;
  specialist: string;
  yoe: number;
  sip: number;
  almamater: string;
  practiceLocation: {
    name: string;
    id: number;
  };
  profilePicture: string;
};

export const dummyTenagaKesehatan: TenagaKesehatan[] = [
  {
    name: 'dr. Ali Abdul',
    specialist: 'Spesialis Penyakit Dalam',
    practiceLocation: {
      name: 'RS Medika',
      id: 1,
    },
    profilePicture: '/images/docter-1.png',
    almamater: 'Universitas Indonesia',
    sip: 87192672,
    yoe: 12,
  },
  {
    name: 'dr. Budi Santoso',
    specialist: 'Spesialis Mata',
    practiceLocation: {
      name: 'RS Medika',
      id: 1,
    },
    profilePicture: '/images/docter-2.png',
    almamater: 'Universitas Diponegoro',
    sip: 65478923,
    yoe: 8,
  },
];
