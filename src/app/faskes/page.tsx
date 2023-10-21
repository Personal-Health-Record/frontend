'use client';

import { useCallback, useState } from 'react';
import Header from '../components/Header';
import withAuth from '../components/PrivateRoute';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '600px',
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

const FaskesPage = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyDITiNAxw43DqK1QeYXeaoTfFFJS8C8Rkk',
  });

  const [map, setMap] = useState(null);

  const onLoad = useCallback((map) => {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    console.log(typeof map);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = useCallback((map) => {
    setMap(null);
  }, []);

  console.log({ isLoaded });

  return (
    <div className="flex flex-col">
      <Header title="Profil Fasilitas Kesehatan" />

      <div className="flex flex-col w-full px-4 py-4 gap-3 justify-center items-center">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
          {/* Child components, such as markers, info windows, etc. */}
          <></>
        </GoogleMap>
      </div>
    </div>
  );
};

export default withAuth(FaskesPage);
