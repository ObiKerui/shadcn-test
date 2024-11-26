'use client';

import { useState } from 'react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './tooltip';
import { MoonIcon, SunIcon } from 'lucide-react';

type tProps = {
  className?: string;
};

export function LightDarkToggle({ className }: tProps) {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger
          className={className}
          onClick={() => {
            setIsDarkMode(prevValue => !prevValue);
            document.body.classList.toggle('dark');
          }}
        >
          {isDarkMode ? <MoonIcon /> : <SunIcon />}
        </TooltipTrigger>
        <TooltipContent>
          {isDarkMode ? 'Enable light mode' : 'Enable dark mode'}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
