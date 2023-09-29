export type User = {
    id: string;
    name: string;
    age: number;
    role: string;
    gender: string;
    parentId?: string;
    relation?: string;
    email?: string;
    password?: string;
}

export const dummyUserData: User[] = [
    {
        id: "1",
        email: "patient@gmail.com",
        password: "pass",
        role: "patient",
        age: 29,
        name: 'Jimmy',
        gender: 'laki-laki'
    },
    {
        id: "2",
        email: "doctor@gmail.com",
        password: "pass",
        role: "doctor",
        age: 35,
        name: 'dr. Ali Abdul',
        gender: 'laki-laki'
    },
    {
        id: "3",
        parentId: "1",
        name: 'Mawar Indah',
        gender: 'perempuan',
        role: 'patient',
        relation: 'Istri',
        age: 29,
    },
    {
        id: "4",
        parentId: "1",
        name: 'Milo Cornelius',
        gender: 'laki-laki',
        role: 'patient',
        relation: 'Anak',
        age: 5,
    }
]
