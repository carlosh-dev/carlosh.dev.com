'use client';
import Image from 'next/image';

export default async function Avatar() {
  return (
    <div className={` relative h-[12.5rem] w-[12.5rem] rounded-full border-2 border-solid border-violet-50`}>
      <div className="w-full overflow-hidden rounded-full border-2 border-solid border-violet-200 first-letter:h-full">
        <Image
          src={'https://avatars.githubusercontent.com/u/56794739?v=4'}
          width={200}
          height={200}
          blurDataURL="https://avatars.githubusercontent.com/u/56794739?v=4"
          alt="My profile picture."
        />
      </div>
      <div className="absolute top-0 h-[12.5rem] w-[12.5rem] animate-spin-slow overflow-hidden rounded-full shadow-[5px_5px_35px_0px_#9f7aea,-5px_-5px_35px_0px_#5a67d8]"></div>
      <div className="absolute top-0 h-[12.5rem] w-[12.5rem] animate-spin-slow-reverse overflow-hidden rounded-full shadow-[inset_5px_5px_35px_0px_#9f7aea,-5px_-5px_35px_0px_#5a67d8] "></div>
    </div>
  );
}
