import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { ThemeSwitcher } from '@/components';

export default function Home() {
  return (
    <main className="app-container p-4">
      <div className="flex flex-column gap-4">
        <div className="flex justify-content-between align-items-center flex-wrap gap-2">
          <h1 className="m-0">Peptides with Indra</h1>
          <ThemeSwitcher />
        </div>
        <Card
          title="Welcome"
          className="shadow-2"
          footer={
            <div className="flex gap-2">
              <Button label="Get started" icon="pi pi-check" />
              <Button label="Learn more" icon="pi pi-info-circle" outlined />
            </div>
          }
        >
          <p className="m-0">
            Next.js + PrimeReact app with a multi-theme system. Use the theme
            switcher above to change themes. This card and buttons use CSS
            variables from the active theme.
          </p>
        </Card>
      </div>
    </main>
  );
}
