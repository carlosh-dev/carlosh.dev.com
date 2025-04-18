import Image from 'next/image';
import getGithubInfos from 'services/getGithubInfos';

export default async function Avatar() {
  const github = await getGithubInfos();

  return (
    <div className={` relative h-[12.5rem] w-[12.5rem] rounded-full border-2 border-solid border-orange-50`}>
      <div className="flex w-full items-center justify-center overflow-hidden rounded-full border-2 border-solid border-orange-200 first-letter:h-full">
        <Image
          src={github.avatar_url}
          width={200}
          height={200}
          blurDataURL={github.avatar_url}
          alt="My profile picture."
        />
      </div>
      <div className="absolute inset-0 top-0 h-[190px] w-[190px] animate-spin-slow overflow-hidden rounded-full shadow-[5px_5px_35px_0px_#993300,-5px_-5px_35px_0px_#ff5500]"></div>
      <div className="absolute top-0 h-[190px] w-[190px] animate-spin-slow-reverse overflow-hidden rounded-full shadow-[inset_5px_5px_35px_0px_#993300,-5px_-5px_35px_0px_#ff5500] "></div>
    </div>
  );
}
