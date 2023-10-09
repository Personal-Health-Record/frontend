import { type } from "os";

export type Obat = {
    id: string;
    name: string;
    dosage: string;
    type: string;
    consumptionPerDay: number;
    consumptionTime: string;
    consumptionMethod: string;
    consumptionMandatory: string;
    dateFrom: string;
    dateTo: string;
    notificationTime: string[];
}

export const dummyObatData: Obat[] = [
    {
        id: "1",
        name: "Paracetamol",
        dosage: "500 mg",
        type: "Tablet",
        consumptionPerDay: 2,
        consumptionTime: "Setelah makan",
        consumptionMethod: "Diminum",
        consumptionMandatory: "Ya",
        dateFrom: "2021-09-01",
        dateTo: "2021-09-06",
        notificationTime: ["08:00"]
    },
    {
        id: "2",
        name: "Bodrex",
        dosage: "500 mg",
        type: "Tablet",
        consumptionPerDay: 2,
        consumptionTime: "Setelah makan",
        consumptionMethod: "Diminum",
        consumptionMandatory: "Ya",
        dateFrom: "2021-09-06",
        dateTo: "2021-09-07",
        notificationTime: ["08:00", "12:00", "16:00"]
    },
    {
        id: "3",
        name: "Mylanta",
        dosage: "500 mg",
        type: "Tablet",
        consumptionPerDay: 2,
        consumptionTime: "Setelah makan",
        consumptionMethod: "Diminum",
        consumptionMandatory: "Ya",
        dateFrom: "2021-09-01",
        dateTo: "2021-09-06",
        notificationTime: ["08:00", "16:00"]
    },
    {
        id: "4",
        name: "Cdr",
        dosage: "500 mg",
        type: "Tablet",
        consumptionPerDay: 1,
        consumptionTime: "Setelah makan",
        consumptionMethod: "Diminum",
        consumptionMandatory: "Ya",
        dateFrom: "2021-09-01",
        dateTo: "2021-09-06",
        notificationTime: ["08:00", "16:00"]
    },
    {
        id: "5",
        name: "Neuralgin",
        dosage: "500 mg",
        type: "Tablet",
        consumptionPerDay: 2,
        consumptionTime: "Setelah makan",
        consumptionMethod: "Diminum",
        consumptionMandatory: "Ya",
        dateFrom: "2021-09-01",
        dateTo: "2021-09-06",
        notificationTime: ["12:00", "16:00"]
    }
]
