export const calculatorMenuList = [
  {
    image: '/images/kalkulator/bmi.png',
    title: 'Indeks Massa Tubuh (BMI)',
    path: '/monitoring/bmi',
  },
  {
    image: '/images/kalkulator/bmr.png',
    title: 'Kalkulator Kalori (BMR)',
    path: '/monitoring/bmr',
  },
];

export const dataAktifitasFisik = {
  labels: ['S', 'S', 'R', 'K', 'J', 'S', 'M'],
  datasets: [
    {
      label: 'menit',
      data: [10, 20, 15, 5, 25, 10, 20],
      backgroundColor: 'rgba(54, 162, 235, 0.6)',
    },
  ],
};

export const dataWaktuTidur = {
  labels: ['S', 'S', 'R', 'K', 'J', 'S', 'M'],
  datasets: [
    {
      label: 'jam',
      data: [6, 8, 7, 10, 11, 5, 7],
      backgroundColor: 'rgba(54, 162, 235, 0.6)',
    },
  ],
};

export const dataDarah = {
  labels: ['S', 'S', 'R', 'K', 'J', 'S', 'M'],
  datasets: [
    {
      label: 'SYSTOLE',
      data: [102, 110, 90, 120, 97, 103, 100],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'DIASTOLE',
      data: [50, 60, 55, 70, 90, 45, 60],
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};
