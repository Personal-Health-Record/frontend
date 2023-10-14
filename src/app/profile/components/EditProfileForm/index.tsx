'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { getLoggedInUser, updateUserData } from '@/app/common/userDataHelper';
import TextInput from '@/app/components/TextInput';
import RadioInput from '@/app/components/RadioInput';
import { User } from '@/app/common/constants';
import cloudMediaStorageUtils from '@/app/common/cloudMediaStorageUtil';
import FileInput from '@/app/components/ImageInput';

export type EditProfileFormAttributes = {
  email?: string;
  name?: string;
  nik?: string;
  dateOfBirth?: string;
  age?: number;
  gender?: string;
  bloodType?: string;
  maritalStatus?: string;
  phoneNumber?: string;
  profilePicture?: string;
};

const EditProfileForm = () => {
  const router = useRouter();
  const [formState, setFormState] = useState<EditProfileFormAttributes>({
    email: '',
    name: '',
    nik: '',
    dateOfBirth: '',
    age: 0,
    gender: '',
    bloodType: '',
    maritalStatus: '',
    phoneNumber: '',
    profilePicture: '',
  });

  const { downloadURL, handleSelectFile } = cloudMediaStorageUtils();

  const { loggedInUser, userData } = getLoggedInUser();
  if (!userData || !loggedInUser) {
    return <div> Loading... </div>;
  }
  // set default state from logged in user data
  if (formState.email === '') {
    setFormState({
      email: loggedInUser.email,
      name: loggedInUser.name,
      nik: loggedInUser.nik,
      dateOfBirth: loggedInUser.dateOfBirth,
      age: loggedInUser.age,
      gender: loggedInUser.gender,
      bloodType: loggedInUser.bloodType,
      maritalStatus: loggedInUser.maritalStatus,
      phoneNumber: loggedInUser.phoneNumber,
      profilePicture: loggedInUser.profilePicture,
    });
  }

  const handleSelectProfilePicture = (files: FileList | null) => {
    if (!files) {
      return;
    }
    handleSelectFile(files);
  };

  const handleClickEditProfile = () => {
    const isValidated = validateForm();
    if (!isValidated) {
      return;
    }

    if (!downloadURL) {
      alert('Sedang mengunggah gambar');
      return;
    }

    const updatedUser: User = {
      id: loggedInUser.id,
      email: formState.email,
      password: loggedInUser.password,
      name: formState.name!,
      nik: formState.nik,
      dateOfBirth: formState.dateOfBirth,
      age: formState.age!,
      gender: formState.gender!,
      bloodType: formState.bloodType,
      maritalStatus: formState.maritalStatus,
      phoneNumber: formState.phoneNumber,
      profilePicture: downloadURL,
      role: 'patient',
    };

    // validate email uniqueness
    for (const user of userData) {
      if (user.id === updatedUser.id) {
        continue;
      }
      if (user.email === updatedUser.email) {
        alert('Email sudah terdaftar');
        return;
      }
    }

    updateUserData(updatedUser, userData);

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
        label="Email"
        placeholder="mail@mail.com"
        type="email"
        onChange={(value: any) => setFormState({ ...formState, email: value })}
        value={formState.email}
      />
      <TextInput
        label="Nama Lengkap"
        placeholder="Nama Lengkap"
        type="text"
        onChange={(value: any) => setFormState({ ...formState, name: value })}
        value={formState.name}
      />
      <TextInput
        label="NIK"
        placeholder="NIK"
        type="number"
        onChange={(value: any) => setFormState({ ...formState, nik: value })}
        value={formState.nik}
      />
      <TextInput
        label="Tanggal Lahir"
        placeholder="Tanggal Lahir"
        type="date"
        onChange={(value: any) =>
          setFormState({ ...formState, dateOfBirth: value })
        }
        value={formState.dateOfBirth}
      />
      <TextInput
        label="Umur"
        placeholder="Umur"
        type="number"
        onChange={(value: any) => setFormState({ ...formState, age: value })}
        value={formState.age}
      />
      <TextInput
        label="Nomor Telepon"
        placeholder="Nomor Telepon"
        type="number"
        onChange={(value: any) =>
          setFormState({ ...formState, phoneNumber: value })
        }
        value={formState.phoneNumber}
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
        label="Golongan Darah"
        options={[
          { label: 'A', value: 'A' },
          { label: 'B', value: 'B' },
          { label: 'AB', value: 'AB' },
          { label: 'O', value: 'O' },
        ]}
        onClick={(value: any) =>
          setFormState({ ...formState, bloodType: value })
        }
        inputKey="bloodType"
        value={formState.bloodType!}
      />
      <RadioInput
        label="Status Pernikahan"
        options={[
          { label: 'Belum Menikah', value: 'Belum Menikah' },
          { label: 'Sudah Menikah', value: 'Sudah Menikah' },
          { label: 'Sudah Cerai', value: 'Sudah Cerai' },
        ]}
        onClick={(value: any) =>
          setFormState({ ...formState, maritalStatus: value })
        }
        inputKey="maritalStatus"
        value={formState.maritalStatus!}
      />
      <FileInput
        label="Profile Picture"
        handleSelectFile={handleSelectProfilePicture}
      />
      <div className="px-8 mt-8 mb-4">
        <button
          className="rounded-2xl bg-mainBlue w-full h-10 text-white"
          onClick={handleClickEditProfile}
        >
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default EditProfileForm;
