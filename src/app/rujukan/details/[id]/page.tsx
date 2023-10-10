'use client';

import Header from '@/app/components/Header';
import CardRujukanDetail from '../../components/CardRujukanDetail';
import { dummyRujukanData } from '../../constants';
import BottomNavbarMedis from '@/app/components/BottomNavbarMedis';
import { useParams } from 'next/navigation';
import { formatDate } from '@/app/common/dateHelper';

const RujukanDetails = () => {
  const params = useParams();
  const rujukan = dummyRujukanData.find(
    (data) => data.id === parseInt(params.id as string),
  )!;

  return (
    <div className="flex flex-col">
      <Header title="Rujukan" />

      <div className="flex flex-col w-full px-4 py-4 gap-3 mb-20">
        <h3 className="font-semibold">Informasi Umum</h3>
        <CardRujukanDetail
          title={'No Rujukan'}
          data={rujukan.referenceNumber}
        />
        <CardRujukanDetail
          title={'Tanggal Rujukan'}
          data={formatDate(rujukan.date)}
        />
        <CardRujukanDetail title={'NIK Pasien'} data={rujukan.nik} />
        <CardRujukanDetail title={'Jenis Pasien'} data={rujukan.patientType} />
        <CardRujukanDetail title={'Nama Pasien'} data={rujukan.patientName} />
        <CardRujukanDetail
          title={'Nama Tenaga Medis'}
          data={rujukan.doctorName}
        />
        <CardRujukanDetail
          title={'Fakses Perujuk'}
          data={rujukan.referenceLocation}
        />
        <CardRujukanDetail title={'Faskes Rujukan'} data={rujukan.location} />
        <CardRujukanDetail title={'Nama Poli'} data={rujukan.polyName} />
        <CardRujukanDetail title={'Diagnosis'} data={rujukan.diagnose} />
        <CardRujukanDetail
          title={'Obat yang diberikan'}
          data={rujukan.medicine}
        />
        <CardRujukanDetail
          title={'Tindakan yang telah diberikan'}
          data={rujukan.actionsTaken}
        />
        <CardRujukanDetail
          title={'alasan Rujukan'}
          data={rujukan.referenceReason}
        />
      </div>
      <BottomNavbarMedis />
    </div>
  );
};

export default RujukanDetails;
