import Chip from '@/app/faskes/components/Chip';

const HeaderMonitoring = () => {
  return (
    <div className="flex items-center justify-between">
      <Chip text="Senin, 11 April 2022" />
      <p className="text-lightGrey text-sm">Lihat Dashboard</p>
    </div>
  );
};

export default HeaderMonitoring;
