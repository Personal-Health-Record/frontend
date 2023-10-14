'use client';

import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { useState } from 'react';
import { storage } from '../../../firebaseconfig';

const UploadImageToStorage = () => {
  const [imageFile, setImageFile] = useState<File>();
  const [downloadURL, setDownloadURL] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const [progressUpload, setProgressUpload] = useState(0);

  const handleSelectFile = (files: any) => {
    if (files && files[0].size < 10000000) {
      setImageFile(files[0]);

      console.log(files[0]);
    } else {
      alert('File size to large');
    }
  };

  const handleUploadFile = () => {
    if (imageFile) {
      setIsUploading(true);
      const name = imageFile.name;
      const storageRef = ref(storage, `${name}`);
      const uploadTask = uploadBytesResumable(storageRef, imageFile);

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

          setProgressUpload(progress); // to show progress upload

          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused');
              break;
            case 'running':
              console.log('Upload is running');
              break;
          }
        },
        (error) => {
          alert(error.message);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            //url is download url of file
            setDownloadURL(url);

            // TODO: submit url to backend
          });
        },
      );
    } else {
      alert('File not found');
    }
    setIsUploading(false);
  };

  const handleRemoveFile = () => setImageFile(undefined);

  return {
    imageFile,
    downloadURL,
    isUploading,
    progressUpload,
    handleSelectFile,
    handleUploadFile,
    handleRemoveFile,
  };
};

export default UploadImageToStorage;
