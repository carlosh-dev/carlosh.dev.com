import Avatar from '@/components/home/avatar';
import Head from '@/components/home/head';
import Stacks from '@/components/home/stacks';
import LinkButton from '@/components/ui/link-button';
import { FaGithubAlt, FaLinkedinIn } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="flex w-full justify-center">
      <section className="flex w-full max-w-[18.75rem] flex-col items-center space-y-4 py-9">
        <Avatar />
        <Head />
        <Stacks />

        <p className="mt-10 cursor-default text-center text-xs">
          Se você está me procurando, você pode me encontrar em:
        </p>

        <ul className="mt-6 flex w-full flex-col gap-4">
          <LinkButton href="https://github.com/carlosh-dev/" icon={<FaGithubAlt size={24} />}>
            Github
          </LinkButton>
          <LinkButton href="https://www.linkedin.com/in/carlosh-dev/" icon={<FaLinkedinIn size={24} />}>
            Linkedin
          </LinkButton>
        </ul>
      </section>
    </div>
  );
}
