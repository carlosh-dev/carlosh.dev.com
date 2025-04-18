import { Roboto_Mono } from 'next/font/google';

const robotoMono = Roboto_Mono({ subsets: ['latin'] });

export default function Footer() {
  return (
    <footer
      className={`${robotoMono.className} absolute bottom-0 flex h-10 w-full items-center 
                  justify-center text-center text-sm shadow-purple text-zinc-900 dark:text-zinc-200`}
    >
      <p className="text-xs">
        Made with{' '}
        <span role="img" aria-label="love">
          💜
        </span>{' '}
        by{' '}
        <a
          href="https://github.com/carlosh-dev"
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-500 transition-all duration-700 hover:text-purple-400 hover:underline"
        >
          Carlos Henrique
        </a>
      </p>
    </footer>
  );
}
