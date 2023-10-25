import CardPatient from './CardPatient';
import { getUserData } from '@/app/common/userDataHelper';

const HomeListPatient = () => {
  const { userData } = getUserData();

  if (!userData) {
    return <div> Loading... </div>;
  }

  const patientData = userData.filter((user) => user.role === 'patient');

  return (
    <div className="flex flex-col gap-3 p-4">
      <h3 className="font-semibold text-mainGrey">
        Pasien yang Perlu ditangani
      </h3>

      <div className="flex overflow-x-auto gap-3  py-1">
        {patientData.map((patient, idx) => (
          <CardPatient
            name={patient.name}
            profileIcon={patient.profilePicture}
            key={`patient-${idx}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeListPatient;
