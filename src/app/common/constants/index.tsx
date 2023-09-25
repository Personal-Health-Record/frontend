type User = {
    id: number;
    name: string;
    age: number;
    role: string;
    parentId?: number;
    relation?: string;
    email?: string;
    password?: string;
}

export const dummyUserData: User[] = [
    {
        id: 1,
        email: "patient@gmail.com",
        password: "pass",
        role: "patient",
        age: 29,
        name: 'Jimmy'
    },
    {
        id: 2,
        email: "doctor@gmail.com",
        password: "pass",
        role: "doctor",
        age: 35,
        name: 'dr. Ali Abdul'
    },
    {
        id: 3,
        parentId: 1,
        name: 'Mawar Indah',
        role: 'Istri',
        age: 29,
    },
    {
        id: 4,
        parentId: 1,
        name: 'Milo Cornelius',
        role: 'Anak',
        age: 5,
    }
]
