"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getUserData } from "@/app/common/dataHelper";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { userData } = getUserData();

  const router = useRouter();

  const handleClickLogin = () => {
    const user = userData.find((user) => user.email === email && user.password === password);
    if (user && user.email) {
      localStorage.setItem('authUserEmail', user.email);
      router.push("/");
    } else {
      alert('Login gagal');
    }
  };

  return (
    <div className="mt-8">
      <div className="relative mt-4 px-8">
        <label
          htmlFor="input"
          className="absolute left-12 -top-3 bg-white px-1 text-gray-600 text-sm"
        >
          Email
        </label>
        <input
          type="text"
          id="input"
          className="w-full px-4 py-2 border border-gray-400 rounded-2xl bg-transparent focus:outline-none focus:border-gray-900"
          placeholder="mail@mail.com"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="relative mt-8 px-8 ">
        <label
          htmlFor="input"
          className="absolute left-12 -top-3 bg-white px-1 text-gray-600 text-sm"
        >
          Password
        </label>
        <input
          type="password"
          id="input"
          className="w-full px-4 py-2 border border-gray-400 rounded-2xl bg-transparent focus:outline-none focus:border-gray-900"
          placeholder="****"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="px-8 mt-8">
        <button
          className="rounded-2xl bg-mainBlue w-full h-10 text-white"
          onClick={handleClickLogin}
        >
          Login
        </button>
      </div>

      {/* Disabled login with google */}
      {/* <p className="w-full text-center mt-4 text-lightGrey">atau</p>

      <div className="px-8 mt-4">
        <button className="flex justify-center items-center gap-2 rounded-2xl bg-transparent w-full h-10 text-mainBlue border border-mainBlue py-5">
          <Image src="/images/google.png" alt="" width={25} height={25} />
          Login dengan Google
        </button>
      </div> */}

      <p className="w-full text-center mt-6 text-lightGrey">
        Belum punya akun? <span className="text-mainBlue">Register</span>
      </p>

      <p className="w-full text-center mt-2 text-lightGrey">Lupa Password?</p>
    </div>
  );
};

export default LoginForm;
