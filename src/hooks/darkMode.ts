import { useEffect, useState } from 'react';

export default function useDarkMode() {
    const [isDark, setIsDark] = useState(() =>
        localStorage.theme === 'dark'
    );

    useEffect(() => {
        const root = window.document.documentElement;
        if (isDark) {
            root.classList.add('dark');
            localStorage.theme = 'dark';
        } else {
            root.classList.remove('dark');
            localStorage.theme = 'light';
        }
    }, [isDark]);

    return { isDark, toggleDarkMode: () => setIsDark(!isDark) };
}
