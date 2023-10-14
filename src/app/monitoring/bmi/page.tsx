'use client';

import Header from '@/app/components/Header';
import CardHasil from '../components/CardHasil';
import FormIndeksMassa from '../components/FormIndeksMassa';
import { useState } from 'react';
import { getLoggedInUser } from '@/app/common/userDataHelper';

export type BMIForm = {
  gender: string;
  age: number;
  weight: number;
  height: number;
};

const KalkulatorIndeksMassa = () => {
  const [bmiResult, setBmiResult] = useState(0);
  const [formState, setFormState] = useState<BMIForm>({
    gender: '',
    age: 0,
    weight: 0,
    height: 0,
  });
  const { loggedInUser: user } = getLoggedInUser();
  if (!user) {
    return <div> Loading... </div>;
  }
  if (formState.age == 0) {
    setFormState({
      ...formState,
      gender: user.gender,
      age: user.age,
    });
  }

  const validateForm = () => {
    for (const [key, value] of Object.entries(formState)) {
      if (typeof value === 'number' && value === 0) {
        alert('Data harus diisi semua');
        return false;
      }

      if (!value) {
        alert('Data harus diisi semua');
        return false;
      }
    }

    return true;
  };

  const handleCalculate = () => {
    const isValidated = validateForm();
    if (!isValidated) {
      return;
    }
    const result =
      formState.weight! /
      ((formState.height! / 100) * (formState.height! / 100));
    setBmiResult(Math.round(result * 10) / 10);
  };

  return (
    <div className="flex flex-col">
      <Header title="Kalkulator Kesehatan" />

      <div className="flex flex-col w-full px-4 py-4 gap-3">
        <h3 className="font-semibold text-mainGrey pl-2 mb-3">
          Indeks Massa Tubuh
        </h3>

        <FormIndeksMassa
          setFormState={setFormState}
          formState={formState}
          handleCalculate={handleCalculate}
        />

        <h3 className="font-semibold text-mainGrey pl-2 mb-3">Hasil</h3>

        {bmiResult > 0 && (
          <CardHasil bmiResult={bmiResult} formState={formState} />
        )}
      </div>
    </div>
  );
};

export default KalkulatorIndeksMassa;
