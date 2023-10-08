"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getLoggedInUser, getUserData, updateUserData } from "@/app/common/dataHelper";
import TextInput from "@/app/components/TextInput";
import RadioInput from "@/app/components/RadioInput";
import { User } from "@/app/common/constants";
import { log } from "console";

export type EditProfileFormAttributes = {
  email?: string,
  password?: string,
  confirmPassword?: string,
  name?: string,
  nik?: string,
  dateOfBirth?: string,
  age?: number,
  gender?: string,
  bloodType?: string,
  maritalStatus?: string,
  phoneNumber?: string,
  profilePicture?: string,
}

const EditProfileForm = () => {
  const router = useRouter();
  const [formState, setFormState] = useState<EditProfileFormAttributes>(
    {
      email: "",
      password: "",
      confirmPassword: "",
      name: "",
      nik: "",
      dateOfBirth: "",
      age: 0,
      gender: "",
      bloodType: "",
      maritalStatus: "",
      phoneNumber: "",
      profilePicture: "",
    }
  );
  const { loggedInUser, userData } = getLoggedInUser();
  if (!userData || !loggedInUser) {
    return <div> Loading... </div>
  }
  // set default state from logged in user data
  if (formState.email === "") {
    setFormState({
      email: loggedInUser.email,
      password: loggedInUser.password,
      confirmPassword: loggedInUser.password,
      name: loggedInUser.name,
      nik: loggedInUser.nik,
      dateOfBirth: loggedInUser.dateOfBirth,
      age: loggedInUser.age,
      gender: loggedInUser.gender,
      bloodType: loggedInUser.bloodType,
      maritalStatus: loggedInUser.maritalStatus,
      phoneNumber: loggedInUser.phoneNumber,
      profilePicture: loggedInUser.profilePicture,
    })
  }


  const handleClickEditProfile = () => {
    const isValidated = validateForm();
    if (!isValidated) {
      return;
    }

    const updatedUser: User = {
      id: loggedInUser.id,
      email: formState.email,
      password: formState.password,
      name: formState.name!,
      nik: formState.nik,
      dateOfBirth: formState.dateOfBirth,
      age: formState.age!,
      gender: formState.gender!,
      bloodType: formState.bloodType,
      maritalStatus: formState.maritalStatus,
      phoneNumber: formState.phoneNumber,
      profilePicture: formState.profilePicture,
      role: 'patient',
    }

    updateUserData(updatedUser)

    router.push("/profile");
  };

  const validateForm = () => {
    if (formState.password !== formState.confirmPassword) {
      alert('Password dan konfirmasi password harus sama');
      return false;
    }
    for (const [key, value] of Object.entries(formState)) {
      // TODO: remove validation for profile picture until firebase storage is ready
      if (!value && key !== 'profilePicture') {
        alert('Data harus diisi semua');
        return false;
      }
    }

    return true;
  }


  return (
    <div className="mt-8">
      <TextInput
        label="Email"
        placeholder="mail@mail.com"
        type="email"
        onChange={(value: any) => setFormState({ ...formState, email: value })}
      />
      <TextInput
        label="Password"
        placeholder="****"
        type="password"
        onChange={(value: any) => setFormState({ ...formState, password: value })}

      />
      <TextInput
        label="Confirmation Password"
        placeholder="****"
        type="password"
        onChange={(value: any) => setFormState({ ...formState, confirmPassword: value })}

      />
      <TextInput
        label="Nama Lengkap"
        placeholder="Nama Lengkap"
        type="text"
        onChange={(value: any) => setFormState({ ...formState, name: value })}

      />
      <TextInput
        label="NIK"
        placeholder="NIK"
        type="number"
        onChange={(value: any) => setFormState({ ...formState, nik: value })}

      />
      <TextInput
        label="Tanggal Lahir"
        placeholder="Tanggal Lahir"
        type="date"
        onChange={(value: any) => setFormState({ ...formState, dateOfBirth: value })}
      />
      <TextInput
        label="Umur"
        placeholder="Umur"
        type="number"
        onChange={(value: any) => setFormState({ ...formState, age: value })}
      />
      <TextInput
        label="Nomor Telepon"
        placeholder="Nomor Telepon"
        type="number"
        onChange={(value: any) => setFormState({ ...formState, phoneNumber: value })}
      />
      <RadioInput
        label="Jenis Kelamin"
        options={[
          { label: 'Laki-laki', value: 'laki-laki' },
          { label: 'Perempuan', value: 'perempuan' },
        ]}
        onClick={(value: any) => setFormState({ ...formState, gender: value })}
        inputKey="gender"
      />
      <RadioInput
        label="Golongan Darah"
        options={[
          { label: 'A', value: 'A' },
          { label: 'B', value: 'B' },
          { label: 'AB', value: 'AB' },
          { label: 'O', value: 'O' },
        ]}
        onClick={(value: any) => setFormState({ ...formState, bloodType: value })}
        inputKey="bloodType"
      />
      <RadioInput
        label="Status Pernikahan"
        options={[
          { label: 'Belum Menikah', value: 'Belum Menikah' },
          { label: 'Sudah Menikah', value: 'Sudah Menikah' },
          { label: 'Sudah Cerai', value: 'Sudah Cerai' },
        ]}
        onClick={(value: any) => setFormState({ ...formState, maritalStatus: value })}
        inputKey="maritalStatus"
      />
      {/* TODO: profile picture upload ke firebase */}
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
