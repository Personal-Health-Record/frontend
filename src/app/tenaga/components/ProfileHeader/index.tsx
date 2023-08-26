const ProfileHeader = () => {
  return (
    <div className="flex border-b-4 border-t-2 py-3 justify-evenly">
      <div className="flex flex-col items-center gap-1 text-mainGrey">
        <p className="text-xs font-semibold">SPECIALIS</p>
        <p className="text-sm">Penyakit Dalam</p>
      </div>
      <div className="flex flex-col items-center gap-1 text-mainGrey">
        <p className="text-xs font-semibold">PENGALAMAN KERJA</p>
        <p className="text-sm">10 Tahun</p>
      </div>
    </div>
  );
};

export default ProfileHeader;
