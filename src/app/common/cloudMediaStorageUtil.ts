'use client';

import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  deleteObject,
} from 'firebase/storage';
import { useState } from 'react';
import { storage } from '../../../firebaseConfig';

const cloudMediaStorageUtils = () => {
  const [imageFile, setImageFile] = useState<File>();
  const [downloadURL, setDownloadURL] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const [progressUpload, setProgressUpload] = useState(0);

  const handleSelectFile = (files: any) => {
    if (!files) return;

    if (files[0].size < 10000000) {
      setImageFile(files[0]);
      handleUploadFile(files[0]);
    } else {
      alert('File size to large');
    }
  };

  const handleUploadFile = (file: File | undefined) => {
    if (file) {
      setIsUploading(true);
      const name = file.name;
      const storageRef = ref(storage, `${name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

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
          console.log('Upload complete');
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            //url is download url of file
            setDownloadURL(url);
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
    handleRemoveFile,
  };
};

export default cloudMediaStorageUtils;
