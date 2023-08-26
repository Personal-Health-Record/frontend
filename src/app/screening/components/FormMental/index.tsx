interface Props {
  title: string;
}

const FormMental = ({ title }: Props) => {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-sm text-lightGrey">{title}</p>

      <div className="flex gap-20">
        <div className="flex-col">
          <label className="flex items-center mb-2 p-2">
            <input type="radio" name="radioOption" value="A" className="mr-2" />
            <p className="text-sm">Tidak Pernah</p>
          </label>
          <label className="flex items-center mb-2 p-2">
            <input type="radio" name="radioOption" value="B" className="mr-2" />
            <p className="text-sm">Beberapa hari</p>
          </label>
          <label className="flex items-center mb-2 p-2">
            <input type="radio" name="radioOption" value="C" className="mr-2" />
            <p className="text-sm">Lebih dari separuh waktu yang dimaksud</p>
          </label>
          <label className="flex items-center p-2">
            <input type="radio" name="radioOption" value="D" className="mr-2" />
            <p className="text-sm">Hampir setiap hari</p>
          </label>
        </div>
      </div>
    </div>
  );
};

export default FormMental;
