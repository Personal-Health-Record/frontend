'use client';

import { getUserData } from '../common/userDataHelper';
import Header from '../components/Header';
import withAuth from '../components/PrivateRoute';
import CardPatient from './components/CardPatient';
import SearchBar from './components/SearchBar';

const PatientPage = () => {
  const { userData } = getUserData();

  if (!userData) {
    return <div> Loading... </div>;
  }

  const patientData = userData.filter((user) => user.role === 'patient');

  return (
    <div className="flex flex-col">
      <Header title="Profil Pasien" />

      <div className="flex flex-col w-full px-4 py-2 gap-6">
        <SearchBar onSearch={() => {}} />

        <div className="flex flex-col gap-5">
          {patientData.map((patient, idx) => (
            <CardPatient
              name={patient.name}
              profilePicture={patient.profilePicture}
              id={patient.id}
              key={`patient-${idx}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default withAuth(PatientPage);
