import Header from "@/app/components/Header";
import EditProfileForm from "../../components/EditProfileForm";

const AddInsurancePage = () => {
    return (
        <div className="flex flex-col">
            <Header title="Tambah Asuransi" />
            <div className="flex flex-col px-4 gap-6">
                <EditProfileForm />
            </div>
        </div>
    );
};

export default AddInsurancePage;
