import Image from 'next/image';

interface Props {
  title: string;
  date: string;
  description: string;
}

const CardNotification = ({ date, description, title }: Props) => {
  return (
    <div className="flex items-center gap-3">
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
          <p className="text-xs font-bold text-mainGrey">{title}</p>
          <p className="text-xs text-lightGrey">{date}</p>
        </div>

        <div className="text-xs">{description}</div>
      </div>
    </div>
  );
};

export default CardNotification;
