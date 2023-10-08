"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getUserData } from "@/app/common/dataHelper";
import TextInput from "@/app/components/TextInput";

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
      {/* gender pake select option */}
      {/* blood type pake select option */}
      {/* marital status pake select option */}
      <TextInput
        label="Nomor Telepon"
        placeholder="Nomor Telepon"
        type="number"
        onChange={(value: any) => setFormState({ ...formState, phoneNumber: value })}
        isRequired={true}
      />
      {/* profile picture upload ke firebase */}

      <div className="px-8 mt-8">
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
