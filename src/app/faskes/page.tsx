'use client';

import { useCallback, useState } from 'react';
import Header from '../components/Header';
import withAuth from '../components/PrivateRoute';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const FaskesPage = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyDITiNAxw43DqK1QeYXeaoTfFFJS8C8Rkk',
  });

  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [markerPosition, setMarkerPosition] = useState({
    lat: -6.218938755964828,
    lng: 106.81725999301412,
  });

  const onLoad = useCallback(
    (map: google.maps.Map) => {
      if (window.google) {
        const bounds = new window.google.maps.LatLngBounds(markerPosition);
        map.fitBounds(bounds);

        setMap(map);
      }
    },
    [markerPosition],
  );

  const onUnmount = useCallback((map: google.maps.Map) => {
    setMap(null);
  }, []);

  const handleChangeMap = (lat: number, lng: number) => {
    setMarkerPosition({ lat: lat, lng: lng });
  };

  return (
    <div className="flex flex-col">
      <Header title="Profil Fasilitas Kesehatan" />

      {!isLoaded ? (
        <div className="flex justify-center items-center mt-20">
          <p>Loading Maps</p>
        </div>
      ) : (
        <div className="flex flex-col w-full gap-3 justify-center items-center">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={markerPosition}
            zoom={10}
            onLoad={onLoad}
            onUnmount={onUnmount}
          >
            {map && (
              <Marker
                position={markerPosition}
                title="Klinik Terpilih"
                label="Klikini"
              />
            )}
          </GoogleMap>
        </div>
      )}

      <div>
        <button
          onClick={() =>
            handleChangeMap(-6.196020716164743, 106.84649681231201)
          }
        >
          Pindah
        </button>
      </div>
    </div>
  );
};

export default withAuth(FaskesPage);
