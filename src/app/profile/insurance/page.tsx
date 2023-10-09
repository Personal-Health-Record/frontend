"use client";

import Header from "@/app/components/Header";
import { getLoggedInUser } from "@/app/common/userDataHelper";
import BottomNavbarOneButton from "../../components/BottomNavbarOneButton";
import InsuranceCard from "../components/InsuranceCard";
import { getInsuranceData } from "@/app/common/insuranceDataHelper";

const FamilyPage = () => {
  const { loggedInUser: user, userData } = getLoggedInUser();
  const { insuranceData } = getInsuranceData();

  if (!user || !userData || !insuranceData) {
    return <div> Loading... </div>
  }

  return (
    <div className="flex flex-col">
      <Header title="Asuransi Kesehatan" />
      <div className="flex flex-col w-full px-4 py-4 mb-16">
        {
          insuranceData.map((insurance) => {
            return (
              <InsuranceCard
                key={insurance.id}
                title={insurance.title}
                cardNumber={insurance.cardNumber}
                isActive={insurance.isActive}
              />
            )
          }
          )}
      </div>

      <BottomNavbarOneButton
        path="/profile/edit/insurance"
        iconPath="/images/plus.png"
        text="Tambahkan Asuransi Kesehatan" />
    </div>
  );
};

export default FamilyPage;
