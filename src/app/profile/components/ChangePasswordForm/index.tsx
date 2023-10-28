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
import cloudMediaStorageUtils from '@/app/common/cloudMediaStorageUtil';
import FileInput from '@/app/components/ImageInput';

export type ChangePasswordFormAttributes = {
  previousPass: string;
  newPass: string;
  confirmationPass: string;
};

const ChangePasswordForm = () => {
  const router = useRouter();
  const [formState, setFormState] = useState<ChangePasswordFormAttributes>({
    previousPass: '',
    newPass: '',
    confirmationPass: '',
  });
  const { loggedInUser, userData } = getLoggedInUser();
  if (!userData || !loggedInUser) {
    return <div> Loading... </div>;
  }

  const handleSubmit = () => {
    const isValidated = validateForm();
    if (!isValidated) {
      return;
    }

    const newUser: User = {
      ...loggedInUser,
      password: formState.newPass,
    };

    updateUserData(newUser, userData);

    alert('Password berhasil diubah');

    router.back();
  };

  const validateForm = () => {
    for (const [key, value] of Object.entries(formState)) {
      if (!value) {
        alert('Data harus diisi semua');
        return false;
      }
    }

    if (formState.previousPass !== loggedInUser.password) {
      alert('Password sebelumnya tidak sesuai');
      return false;
    }

    if (formState.newPass !== formState.confirmationPass) {
      alert('Password baru tidak sama');
      return false;
    }

    return true;
  };

  return (
    <div className="mt-8">
      <TextInput
        label="Password Sebelumnya"
        placeholder="Password Sebelumnya"
        type="password"
        onChange={(value: any) =>
          setFormState({ ...formState, previousPass: value })
        }
        value={formState.previousPass}
      />
      <TextInput
        label="Password Baru"
        placeholder="Password Baru"
        type="password"
        onChange={(value: any) =>
          setFormState({ ...formState, newPass: value })
        }
        value={formState.newPass}
      />
      <TextInput
        label="Konfirmasi Password"
        placeholder="Konfirmasi Password"
        type="password"
        onChange={(value: any) =>
          setFormState({ ...formState, confirmationPass: value })
        }
        value={formState.confirmationPass}
      />
      <div className="px-8 mt-8 mb-4">
        <button
          className="rounded-2xl bg-mainBlue w-full h-10 text-white"
          onClick={handleSubmit}
        >
          Ubah Password
        </button>
      </div>
    </div>
  );
};

export default ChangePasswordForm;
