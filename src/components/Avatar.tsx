import Image from 'next/image';
import AvatarImage from '@/../public/images/avatar.png';

export default function Avatar() {
  return (
    <div className={` relative h-[12.5rem] w-[12.5rem] rounded-full`}>
      <div className="h-full w-full overflow-hidden rounded-full">
        <Image src={AvatarImage} alt="My profile picture." />
      </div>
      <div className="animate-spin absolute top-0 h-[12.5rem] w-[12.5rem] overflow-hidden rounded-full shadow-[5px_5px_35px_0px_#9f7aea,-5px_-5px_35px_0px_#5a67d8]"></div>
    </div>
  );
} 
