'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import {
  getLoggedInUser,
  getUserData,
  updateUserData,
} from '@/app/common/userDataHelper';
import TextInput from '@/app/components/TextInput';
import RadioInput from '@/app/components/RadioInput';
import { User } from '@/app/common/constants';
import { log } from 'console';

export type AddFamilyFormAttributes = {
  name: string;
  age: number;
  role: string;
  gender: string;
  profilePicture: string;
  parentId: string;
  relation: string;
};

const AddFamilyForm = () => {
  const router = useRouter();
  const [formState, setFormState] = useState<AddFamilyFormAttributes>({
    name: '',
    age: 0,
    role: 'patient',
    gender: '',
    profilePicture: '',
    parentId: '',
    relation: '',
  });
  const { loggedInUser, userData } = getLoggedInUser();
  if (!userData || !loggedInUser) {
    return <div> Loading... </div>;
  }
  // set default state from logged in user data
  if (formState.parentId === '') {
    setFormState({
      name: '',
      age: 0,
      role: 'patient',
      gender: '',
      profilePicture: '',
      parentId: loggedInUser.id,
      relation: '',
    });
  }

  const handleClickAddFamily = () => {
    const isValidated = validateForm();
    if (!isValidated) {
      return;
    }

    const newUser: User = {
      id: (userData.length + 1).toString(),
      name: formState.name,
      age: formState.age,
      role: formState.role,
      gender: formState.gender,
      profilePicture: formState.profilePicture,
      parentId: formState.parentId,
      relation: formState.relation,
    };

    const newUserData = JSON.stringify([...userData, newUser]);
    console.log('newUserData', newUserData);

    localStorage.setItem('userDataStorage', newUserData);

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
        label="Nama Lengkap"
        placeholder="Nama Lengkap"
        type="text"
        onChange={(value: any) => setFormState({ ...formState, name: value })}
        value={formState.name}
      />
      <TextInput
        label="Umur"
        placeholder="Umur"
        type="number"
        onChange={(value: any) => setFormState({ ...formState, age: value })}
        value={formState.age}
      />
      <RadioInput
        label="Jenis Kelamin"
        options={[
          { label: 'Laki-laki', value: 'laki-laki' },
          { label: 'Perempuan', value: 'perempuan' },
        ]}
        onClick={(value: any) => setFormState({ ...formState, gender: value })}
        inputKey="gender"
        value={formState.gender!}
      />
      <RadioInput
        label="Relasi"
        options={[
          { label: 'Istri', value: 'Istri' },
          { label: 'Suami', value: 'Suami' },
          { label: 'Anak', value: 'Anak' },
        ]}
        onClick={(value: any) =>
          setFormState({ ...formState, relation: value })
        }
        inputKey="relation"
        value={formState.relation!}
      />
      {/* TODO: profile picture upload ke firebase */}
      <div className="px-8 mt-8 mb-4">
        <button
          className="rounded-2xl bg-mainBlue w-full h-10 text-white"
          onClick={handleClickAddFamily}
        >
          Tambah Anggota Keluarga
        </button>
      </div>
    </div>
  );
};

export default AddFamilyForm;
