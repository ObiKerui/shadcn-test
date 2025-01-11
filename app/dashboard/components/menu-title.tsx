import { PersonStandingIcon } from 'lucide-react';
import Image from 'next/image';
import Vector from '@/public/Vector.svg';

export default function MenuTitle() {
  return (
    <h4 className="flex items-center">
      <PersonStandingIcon size={40} className="text-primary" /> SupportMe
      <Image src={Vector} width={40} height={40} alt="helmet" />
    </h4>
  );
}
