import { useEffect, useState } from 'react';
import { TenagaKesehatan, dummyTenagaKesehatan } from '../tenaga/constants';

export const getTenagaKesehatanList = () => {
  const [listTenkes, setListTenkes] = useState<TenagaKesehatan[]>();

  useEffect(() => {
    if (!listTenkes && typeof window !== undefined) {
      const listTenkesStorage = localStorage.getItem('listTenkesStorage');
      if (listTenkesStorage) {
        setListTenkes(JSON.parse(listTenkesStorage));

        return;
      }

      localStorage.setItem(
        'listTenkesStorage',
        JSON.stringify(dummyTenagaKesehatan),
      );

      setListTenkes(dummyTenagaKesehatan);
    }
  }, [listTenkes]);

  return {
    listTenkes,
  };
};

export const getTenkesBySIP = (sip: number) => {
  const listTenkesStorage = localStorage.getItem('listTenkesStorage');
  if (listTenkesStorage) {
    const listTenkes: TenagaKesehatan[] = JSON.parse(listTenkesStorage);

    return listTenkes.find((tenkes) => tenkes.sip === sip);
  }

  return null;
};
