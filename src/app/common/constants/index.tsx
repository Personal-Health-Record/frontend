export type User = {
  id: string;
  name: string;
  age: number;
  role: string;
  gender: string;
  profilePicture: string;

  // child
  parentId?: string;
  relation?: string;

  // auth user
  email?: string;
  password?: string;
  phoneNumber?: string;
  nik?: string;
  dateOfBirth?: string;
  bloodType?: string;
  maritalStatus?: string;

  // doctor
  specialist?: string;
  practicePlace?: string;
};

export const dummyUserData: User[] = [
  {
    id: '1',
    email: 'patient@gmail.com',
    phoneNumber: '08123456789',
    password: 'pass',
    role: 'patient',
    age: 29,
    name: 'Jimmy',
    gender: 'laki-laki',
    profilePicture: '/images/profile-icon.png',
    nik: '3175121267251234',
    dateOfBirth: '1990-10-01',
    bloodType: 'O',
    maritalStatus: 'Sudah Menikah',
  },
  {
    id: '2',
    email: 'doctor@gmail.com',
    phoneNumber: '08123456789',
    password: 'pass',
    role: 'doctor',
    age: 35,
    name: 'dr. Ali Abdul',
    gender: 'laki-laki',
    profilePicture: '/images/docter-2.png',
    nik: '3175121267251234',
    dateOfBirth: '1990-10-01',
    bloodType: 'O',
    maritalStatus: 'Sudah Menikah',
    specialist: 'Obgyn',
    practicePlace: 'Siloam Hospital',
  },
  {
    id: '3',
    parentId: '1',
    name: 'Mawar Indah',
    gender: 'perempuan',
    role: 'patient',
    relation: 'Istri',
    age: 29,
    profilePicture: '/images/profile-icon-2.png',
  },
  {
    id: '4',
    parentId: '1',
    name: 'Milo Cornelius',
    gender: 'laki-laki',
    role: 'patient',
    relation: 'Anak',
    age: 5,
    profilePicture: '/images/profile-icon-3.png',
  },
  {
    id: '5',
    email: 'doctor2@gmail.com',
    phoneNumber: '08123456789',
    password: 'pass',
    role: 'doctor',
    age: 35,
    name: 'dr. zainal',
    gender: 'laki-laki',
    profilePicture: '/images/docter-2.png',
    nik: '3175121267251234',
    dateOfBirth: '1990-10-01',
    bloodType: 'O',
    maritalStatus: 'Sudah Menikah',
    specialist: 'Ortho',
    practicePlace: 'Siloam Hospital',
  },
];
