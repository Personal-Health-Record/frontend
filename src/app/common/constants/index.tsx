export const dummyUserData = [
    {
        id: 1,
        email: "patient@gmail.com",
        password: "pass",
        role: "patient",
    },
    {
        id: 2,
        email: "doctor@gmail.com",
        password: "pass",
        role: "doctor",
    }
]

export const dummyChildUserData = [
    {
        id: 1,
        parentId: 1,
        name: 'Mawar Indah',
        role: 'Istri',
        age: 29,
    },
    {
        id: 2,
        parentId: 1,
        name: 'Milo Cornelius',
        role: 'Anak',
        age: 5,
    }
]
