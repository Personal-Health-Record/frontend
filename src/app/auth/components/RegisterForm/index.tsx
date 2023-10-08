"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getUserData } from "@/app/common/dataHelper";
import TextInput from "@/app/components/TextInput";
import RadioInput from "@/app/components/RadioInput";

export type RegisterFormAttributes = {
  email: string,
  password: string,
  confirmPassword: string,
  name: string,
  nik: string,
  dateOfBirth: string,
  age: number,
  gender: string,
  bloodType: string,
  maritalStatus: string,
  phoneNumber: string,
  profilePicture: string,
}

const RegisterForm = () => {
  const [formState, setFormState] = useState<RegisterFormAttributes>(
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
  // const { userData } = getUserData();

  const router = useRouter();

  const handleClickRegister = () => {
    validateForm();
    // const user = userData!.find((user) => user.email === email && user.password === password);
    // if (user && user.email) {
    //   localStorage.setItem('authUserEmail', user.email);
    //   router.push("/");
    // } else {
    //   alert('Register gagal');
    // }
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

  // if (!userData) {
  //   return <div> Loading... </div>
  // }

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
        type="text"
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
          onClick={handleClickRegister}
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default RegisterForm;
