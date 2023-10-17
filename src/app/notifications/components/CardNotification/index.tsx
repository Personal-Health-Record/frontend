import Image from 'next/image';
import { Notification } from '../../constants';
import { useRouter } from 'next/navigation';
import { formatDate } from '@/app/common/dateHelper';

interface Props {
  notification: Notification;
}

const CardNotification = ({ notification }: Props) => {
  const router = useRouter();
  return (
    <div
      className="flex items-center gap-3"
      onClick={() => {
        router.push(notification.link);
      }}
    >
      <div>
        <Image
          src="/images/notification.png"
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
