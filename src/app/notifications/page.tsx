'use client';

import { useState } from 'react';
import { getNotificationData } from '../common/notificationDataHelper';
import { getLoggedInUser } from '../common/userDataHelper';
import BottomNavbar from '../components/BottomNavbar';
import withAuth from '../components/PrivateRoute';
import CardNotification from './components/CardNotification';
import SearchBar from './components/Searchbar';
import { Notification } from './constants';

const NotificationPage = () => {
  const [notificationData, setNotificationData] = useState<Notification[]>();
  let { notificationData: storageNotificationData } = getNotificationData();
  const { loggedInUser } = getLoggedInUser();
  if (!storageNotificationData || !loggedInUser) {
    return <div> Loading... </div>;
  }

  if (!notificationData) {
    setNotificationData(
      storageNotificationData.filter(
        (notification) => notification.toUserId === loggedInUser.id,
      ),
    );
  }

  const handleSearch = (keyword: string) => {
    const newNotificationData = storageNotificationData!.filter(
      (notification) =>
        notification.toUserId === loggedInUser.id &&
        notification.title.toLowerCase().includes(keyword.toLowerCase()),
    );
    setNotificationData(newNotificationData);
  };

  return (
    <div className="flex flex-col px-4">
      <SearchBar onSearch={handleSearch} />

      <div className="flex flex-col mt-10 gap-7">
        {notificationData &&
          notificationData.map((notification) => (
            <CardNotification
              key={notification.id}
              notification={notification}
            />
          ))}
      </div>

      <BottomNavbar />
    </div>
  );
};

export default withAuth(NotificationPage);
