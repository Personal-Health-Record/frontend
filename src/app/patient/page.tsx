'use client';

import Header from '../components/Header';
import { dummyDataPatient } from '../components/HomeListPatient/contants';
import withAuth from '../components/PrivateRoute';
import CardPatient from './components/CardPatient';
import SearchBar from './components/SearchBar';

const PatientPage = () => {
  return (
    <div className="flex flex-col">
      <Header title="Profil Pasien" />

      <div className="flex flex-col w-full px-4 py-2 gap-6">
        <SearchBar onSearch={() => {}} />

        <div className="flex flex-col gap-5">
          {dummyDataPatient.map((patient, idx) => (
            <CardPatient
              name={patient.name}
              profilePicture={patient.profileIcon}
              key={`patient-${idx}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default withAuth(PatientPage);
