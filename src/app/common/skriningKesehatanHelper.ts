import { useEffect, useState } from 'react';
import { Skrining, dummySkriningList } from '../screening/constants';

export const getSkriningKesehatanList = () => {
  const [listSkrining, setListSkrining] = useState<Skrining[]>();

  useEffect(() => {
    if (!listSkrining && typeof window !== 'undefined') {
      const listSkriningStorage = localStorage.getItem('listSkriningStorage');
      if (listSkriningStorage) {
        setListSkrining(JSON.parse(listSkriningStorage));
        return;
      }

      setListSkrining(dummySkriningList);
    }
  }, [listSkrining]);

  return {
    listSkrining,
  };
};

export const addSkriningKesehatan = (
  newSkriningKesehatan: Skrining,
  existingSkriningKesehatan: Skrining[],
) => {
  const updatedSkriningKesehatan =
    existingSkriningKesehatan!.concat(newSkriningKesehatan);

  localStorage.setItem(
    'listSkriningStorage',
    JSON.stringify(updatedSkriningKesehatan),
  );
};
