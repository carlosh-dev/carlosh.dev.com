"use client"
import { useTheme } from "next-themes"
import { RxMoon, RxSun } from "react-icons/rx"

export default function ToogleTheme() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <button
      onClick={() => theme == "dark" ? setTheme('light') : setTheme("dark")}
      className=''>
      {currentTheme == "dark" ?
        <RxSun className="text-primary dark:text-secondary" /> :
        <RxMoon className="text-primary dark:text-secondary" />}
    </button>
  )
}
