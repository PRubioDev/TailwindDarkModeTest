import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';

const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <div>
      {currentTheme === 'dark' ? (
        <SunIcon
          className="w-6 sm:w-8 h-6 sm:h-8 text-yellow-500 "
          role="button"
          onClick={() => setTheme('light')}
        />
      ) : (
        <MoonIcon
          className="w-6 sm:w-8 h-6 sm:h-8 text-gray-900 "
          role="button"
          onClick={() => setTheme('dark')}
        />
      )}
    </div>
  );
};

export default ThemeChanger;
