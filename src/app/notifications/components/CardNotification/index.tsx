import Image from 'next/image';
import { Notification } from '../../constants';
import { useRouter } from 'next/navigation';
import { formatDate } from '@/app/common/dateHelper';
import { setReadNotification } from '@/app/common/notificationDataHelper';

interface Props {
  notification: Notification;
  notificationList: Notification[];
}

const CardNotification = ({ notification, notificationList }: Props) => {
  const router = useRouter();

  return (
    <div
      className="flex items-center gap-3"
      style={{
        backgroundColor: notification.isRead
          ? 'rgba(245, 245, 245, 0.60)'
          : '#FFFFFF',
        padding: '10px 15px',
        borderBottom: '1px solid #E5E5E5',
      }}
      onClick={() => {
        setReadNotification(notification.id, notificationList);
        router.push(notification.link);
      }}
    >
      <div>
        <Image
          src={
            notification.isRead
              ? '/images/notification-open.png'
              : '/images/notification.png'
          }
          alt="notification-icon"
          width={60}
          height={60}
        />
      </div>

      <div className="flex flex-col gap-2 w-full">
        <div className="flex justify-between">
          <p className="text-xs font-bold text-mainGrey">
            {notification.title}
          </p>
          <p className="text-xs text-lightGrey">
            {formatDate(notification.date)}
          </p>
        </div>

        <div className="text-xs">{notification.body}</div>
      </div>
    </div>
  );
};

export default CardNotification;
