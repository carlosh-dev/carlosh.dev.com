import { TbBrandTypescript, TbBrandNextjs } from 'react-icons/tb';
import { FaReact, FaJs, FaCss3Alt, FaHtml5, FaNode } from 'react-icons/fa';
import { SiMysql, SiPostgresql } from 'react-icons/si';
import Link from 'next/link';
import { TooltipWrapper } from 'components/ui/tooltip';

export default function Stacks() {
  return (
    <div className=" flex w-full   flex-wrap items-center justify-center gap-2 text-zinc-900 dark:text-white">
      <TooltipWrapper content={'NextJS'}>
        <Link
          target="_blank"
          href="https://nextjs.org/"
          className=" transition-all duration-300 hover:-translate-y-1 hover:text-violet-100"
        >
          <TbBrandNextjs size={24} />
        </Link>
      </TooltipWrapper>

      <TooltipWrapper content={'TypeScript'}>
        <Link
          target="_blank"
          href="https://www.typescriptlang.org/"
          className=" transition-all duration-300 hover:-translate-y-1 hover:text-violet-100"
        >
          <TbBrandTypescript size={24} />
        </Link>
      </TooltipWrapper>

      <TooltipWrapper content={'React'}>
        <Link
          target="_blank"
          href="https://react.dev/"
          className=" transition-all duration-300 hover:-translate-y-1 hover:text-violet-100"
        >
          <FaReact size={24} />
        </Link>
      </TooltipWrapper>

      <TooltipWrapper content={'CSS3'}>
        <div className=" transition-all duration-300 hover:-translate-y-1 hover:text-violet-100">
          <FaCss3Alt size={24} />
        </div>
      </TooltipWrapper>

      <TooltipWrapper content={'HTML5'}>
        <div className=" transition-all duration-300 hover:-translate-y-1 hover:text-violet-100">
          <FaHtml5 size={24} />
        </div>
      </TooltipWrapper>

      <TooltipWrapper content={'NodeJS'}>
        <Link
          target="_blank"
          href="https://nodejs.org/pt"
          className=" transition-all duration-300 hover:-translate-y-1 hover:text-violet-100"
        >
          <FaNode size={24} />
        </Link>
      </TooltipWrapper>

      <TooltipWrapper content={'MySQL'}>
        <Link
          target="_blank"
          href="https://www.mysql.com/"
          className=" transition-all duration-300 hover:-translate-y-1 hover:text-violet-100"
        >
          <SiMysql size={24} />
        </Link>
      </TooltipWrapper>

      <TooltipWrapper content={'PostgreSQL'}>
        <Link
          target="_blank"
          href="https://www.postgresql.org/"
          className=" transition-all duration-300 hover:-translate-y-1 hover:text-violet-100"
        >
          <SiPostgresql size={24} />
        </Link>
      </TooltipWrapper>
    </div>
  );
}
