'use client';

import { Button } from 'primereact/button';
import { useTheme } from '@/providers';
import { THEMES } from '@/constants';

export function ThemeSwitcher() {
  const { theme, setTheme, cycleTheme } = useTheme();

  return (
    <div className="flex flex-wrap gap-2 align-items-center">
      {THEMES.map((t) => (
        <Button
          key={t.id}
          label={t.label}
          size="small"
          outlined={theme !== t.id}
          onClick={() => setTheme(t.id)}
        />
      ))}
      <Button
        icon="pi pi-refresh"
        size="small"
        rounded
        text
        onClick={cycleTheme}
        title="Cycle theme"
        aria-label="Cycle theme"
      />
    </div>
  );
}
