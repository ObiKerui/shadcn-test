import { LightDarkToggle } from '@/components/ui/light-dark-toggle';

type tProps = {
  children?: React.ReactNode;
};

export default function LoggedOutLayout({ children }: tProps) {
  return (
    <>
      <div className="flex flex-col min-h-screen items-center p-24 justify-center gap-4">
        {children}
      </div>
      <LightDarkToggle className="fixed top-[calc(50%-12px)] right-2" />
    </>
  );
}
