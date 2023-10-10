'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import {
  getLoggedInUser,
} from '@/app/common/userDataHelper';
import TextInput from '@/app/components/TextInput';
import RadioInput from '@/app/components/RadioInput';
import { Insurance } from '../../constants';
import { getInsuranceData } from '@/app/common/insuranceDataHelper';

export type AddInsuranceFormAttributes = {
  title: string;
  cardNumber: string;
  isActive: string;
  userId: string;
};

const AddInsuranceForm = () => {
  const router = useRouter();
  const [formState, setFormState] = useState<AddInsuranceFormAttributes>({
    title: '',
    cardNumber: '',
    isActive: 'Tidak Aktif',
    userId: '',
  });
  const { loggedInUser } = getLoggedInUser();
  const { insuranceData } = getInsuranceData();
  if (!insuranceData || !loggedInUser) {
    return <div> Loading... </div>;
  }
  // set default state from logged in user data
  if (formState.userId === '') {
    setFormState({
      title: '',
      cardNumber: '',
      isActive: 'Tidak Aktif',
      userId: loggedInUser.id,
    });
  }

  const handleClickAddInsurance = () => {
    const isValidated = validateForm();
    if (!isValidated) {
      return;
    }

    const newInsurance: Insurance = {
      id: (insuranceData.length + 1).toString(),
      title: formState.title,
      cardNumber: formState.cardNumber,
      isActive: formState.isActive,
      userId: formState.userId,
    };

    const newInsuranceData = JSON.stringify([...insuranceData, newInsurance]);

    localStorage.setItem('insuranceDataStorage', newInsuranceData);

    router.push('/profile');
  };

  const validateForm = () => {
    for (const [key, value] of Object.entries(formState)) {
      // TODO: remove validation for profile picture until firebase storage is ready
      if (!value && key !== 'profilePicture') {
        alert('Data harus diisi semua');
        return false;
      }
    }

    return true;
  };

  return (
    <div className="mt-8">
      <TextInput
        label="Jenis Kartu Asuransi"
        placeholder="Jenis Kartu Asuransi"
        type="text"
        onChange={(value: any) => setFormState({ ...formState, title: value })}
        value={formState.title}
      />
      <TextInput
        label="Card Number"
        placeholder="Card Number"
        type="number"
        onChange={(value: any) =>
          setFormState({ ...formState, cardNumber: value.toString() })
        }
        value={formState.cardNumber}
      />
      <RadioInput
        label="Apakah Aktif?"
        options={[
          { label: 'Aktif', value: 'Aktif' },
          { label: 'Tidak Aktif', value: 'Tidak Aktif' },
        ]}
        onClick={(value: any) =>
          setFormState({ ...formState, isActive: value })
        }
        inputKey="isActive"
        value={formState.isActive}
      />
      <div className="px-8 mt-8 mb-4">
        <button
          className="rounded-2xl bg-mainBlue w-full h-10 text-white"
          onClick={handleClickAddInsurance}
        >
          Tambah Asuransi
        </button>
      </div>
    </div>
  );
};

export default AddInsuranceForm;
