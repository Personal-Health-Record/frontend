"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getUserData } from "@/app/common/dataHelper";
import TextInput from "@/app/components/TextInput";
import RadioInput from "@/app/components/RadioInput";

type RegisterFormAttributes = {
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
  const [formState, setFormState] = useState({} as RegisterFormAttributes);
  // const { userData } = getUserData();

  const router = useRouter();

  const handleClickRegister = () => {
    console.log(formState)
    // const user = userData!.find((user) => user.email === email && user.password === password);
    // if (user && user.email) {
    //   localStorage.setItem('authUserEmail', user.email);
    //   router.push("/");
    // } else {
    //   alert('Register gagal');
    // }
  };

  const validateForm = () => {
    if (!formState.email || !formState.password) {
      alert('Email dan password harus diisi');
      return false;
    }
    if (formState.password !== formState.confirmPassword) {
      alert('Password dan konfirmasi password harus sama');
      return false;
    }
    if (!formState.bloodType || !formState.maritalStatus || !formState.gender) {
      alert('Data harus diisi semua');
      return false;
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
        isRequired={true}
      />
      <TextInput
        label="Password"
        placeholder="****"
        type="password"
        onChange={(value: any) => setFormState({ ...formState, password: value })}
        isRequired={true}

      />
      <TextInput
        label="Confirmation Password"
        placeholder="****"
        type="password"
        onChange={(value: any) => setFormState({ ...formState, confirmPassword: value })}
        isRequired={true}

      />
      <TextInput
        label="Nama Lengkap"
        placeholder="Nama Lengkap"
        type="text"
        onChange={(value: any) => setFormState({ ...formState, name: value })}
        isRequired={true}

      />
      <TextInput
        label="NIK"
        placeholder="NIK"
        type="text"
        onChange={(value: any) => setFormState({ ...formState, nik: value })}
        isRequired={true}

      />
      <TextInput
        label="Tanggal Lahir"
        placeholder="Tanggal Lahir"
        type="date"
        onChange={(value: any) => setFormState({ ...formState, dateOfBirth: value })}
        isRequired={true}
      />
      <TextInput
        label="Umur"
        placeholder="Umur"
        type="number"
        onChange={(value: any) => setFormState({ ...formState, age: value })}
        isRequired={true}
      />
      <TextInput
        label="Nomor Telepon"
        placeholder="Nomor Telepon"
        type="number"
        onChange={(value: any) => setFormState({ ...formState, phoneNumber: value })}
        isRequired={true}
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
