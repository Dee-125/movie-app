'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { MdLightMode, MdDarkMode } from 'react-icons/md';


export default function DarkModeSwitch() {
    const { theme, setTheme, systemTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const currentTheme = theme === 'system' ? systemTheme : theme;

    useEffect(() => setMounted(true), []);

    return (
        <div>
            {mounted && (
                currentTheme === 'dark' ? (
                    <MdLightMode
                        className="text-2xl cursor-pointer hover:text-amber-400 text-white"
                        onClick={() => setTheme('light')}
                    />
                ) : (
                    <MdDarkMode
                        className="text-2xl cursor-pointer hover:text-amber-400 text-gray-800"
                        onClick={() => setTheme('dark')}
                    />
                )
            )}
        </div>
    );
}