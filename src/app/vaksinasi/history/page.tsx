'use client';
import Header from '@/app/components/Header';
import CardNextVaksinasi from '../components/CardNextVaksinasi';
import CardVaksinHistory from '../components/CardVaksinHistory';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { dummyVaksinasiData } from '../constants';

const VaksinasiHistory = () => {
  const searchParams = useSearchParams();
  const type = searchParams.get('type');
  const userId = searchParams.get('userId');
  const router = useRouter();

  const userVaksinData = dummyVaksinasiData
    .filter((item) => item.userId === userId)
    .filter((item) => item.type.includes(type!));

  const handleClick = (id: string) => {
    router.push(`/vaksinasi/details/${id}`);
  };

  return (
    <div className="flex flex-col">
      <Header title="Vaksinasi" />

      <div className="flex flex-col w-full px-4 py-4 gap-5">
        <div className="flex flex-col gap-1">
          <h3 className="font-semibold text-mainGrey">Vaksinasi Selanjutnya</h3>
          <CardNextVaksinasi type={type!} />
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="font-semibold text-mainGrey">Riwayat Vaksinasi</h3>

          <div className="flex flex-col gap-3">
            {userVaksinData.map((item, index) => (
              <CardVaksinHistory
                key={index}
                vaksinData={item}
                handleClick={handleClick}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VaksinasiHistory;
