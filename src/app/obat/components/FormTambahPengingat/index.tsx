'use client';

import { useRouter } from 'next/navigation';
import Notifikasi from '../Notifikasi';
import { Obat } from '../../constants';
import { useState } from 'react';
import { getLoggedInUser } from '@/app/common/userDataHelper';
import TextInput from '@/app/components/TextInput';
import RadioInput from '@/app/components/RadioInput';
import { addObatData, getObatData } from '@/app/common/obatDataHelper';

const FormTambahPengingat = () => {
  const router = useRouter();

  const [formState, setFormState] = useState<Obat>({
    id: '',
    name: '',
    dosage: '',
    type: '',
    consumptionPerDay: 0,
    consumptionTime: '',
    consumptionMethod: '',
    consumptionMandatory: '',
    dateFrom: '',
    dateTo: '',
    listPengingat: [],
    userId: '',
  });

  const { loggedInUser } = getLoggedInUser();
  const { obatData } = getObatData();
  if (!loggedInUser || !obatData) {
    return <div> Loading... </div>;
  }
  if (formState.userId === '') {
    setFormState({
      ...formState,
      id: (obatData.length + 1).toString(),
      userId: loggedInUser.id,
    });
  }

  const handleOnSubmit = () => {
    const isValidated = validateForm();
    if (isValidated) {
      addObatData(formState, obatData);
      router.push('/obat');
    }
  };

  const validateForm = () => {
    for (const [key, value] of Object.entries(formState)) {
      if (!value) {
        alert('Data harus diisi semua');
        return false;
      }
    }

    if (formState.listPengingat.length === 0) {
      alert('Notifikasi harus diisi minimal satu');
      return false;
    }

    return true;
  };

  return (
    <div className="flex flex-col gap-4">
      <TextInput
        label="Nama Obat"
        onChange={(value) =>
          setFormState({
            ...formState,
            name: value,
          })
        }
      />

      <div className="flex gap-2 justify-center">
        <TextInput
          label="Dosis"
          onChange={(value) =>
            setFormState({
              ...formState,
              dosage: value,
            })
          }
          type="number"
        />
        <TextInput
          label="Jenis"
          onChange={(value) =>
            setFormState({
              ...formState,
              type: value,
            })
          }
        />
      </div>

      <TextInput
        label="Jumlah Konsumsi per Hari"
        type="number"
        onChange={(value) =>
          setFormState({
            ...formState,
            consumptionPerDay: value,
          })
        }
      />

      <RadioInput
        label="Waktu Konsumsi"
        options={[
          { label: 'Setelah Makan', value: 'Setelah Makan' },
          { label: 'Sebelum Makan', value: 'Sebelum Makan' },
        ]}
        onClick={(value: any) =>
          setFormState({ ...formState, consumptionTime: value })
        }
        inputKey="consumptionTime"
        value={formState.consumptionTime}
      />
      <RadioInput
        label="Cara Konsumsi Obat"
        options={[
          { label: 'Ditelan', value: 'Ditelan' },
          { label: 'Disuntik', value: 'Disuntik' },
        ]}
        onClick={(value: any) =>
          setFormState({ ...formState, consumptionMethod: value })
        }
        inputKey="consumptionMethod"
        value={formState.consumptionMethod}
      />
      <RadioInput
        label="Wajib dihabiskan"
        options={[
          { label: 'Ya', value: 'Ya' },
          { label: 'Tidak', value: 'Tidak' },
        ]}
        onClick={(value: any) =>
          setFormState({ ...formState, consumptionMandatory: value })
        }
        inputKey="consumptionMandatory"
        value={formState.consumptionMandatory}
      />

      <div className="flex flex-col gap-4">
        <TextInput
          label="Tanggal Mulai"
          placeholder="Tanggal Mulai"
          type="date"
          onChange={(value: any) =>
            setFormState({ ...formState, dateFrom: value })
          }
        />
        <TextInput
          label="Tanggal Selesai"
          placeholder="Tanggal Selesai"
          type="date"
          onChange={(value: any) =>
            setFormState({ ...formState, dateTo: value })
          }
        />
      </div>

      <div className="mt-2 px-4">
        <Notifikasi formState={formState} setFormState={setFormState} />
      </div>

      <button
        className="bg-mainBlue rounded-3xl text-white font-semibold py-3 mb-6 mt-2 mx-4"
        onClick={handleOnSubmit}
      >
        Simpan
      </button>
    </div>
  );
};

export default FormTambahPengingat;
