import { HiGlobeAlt } from 'react-icons/hi';

export default function AcmeLogo() {
  return (
    <div
      className='flex flex-row items-center leading-none text-white'
    >
      <HiGlobeAlt className="h-12 w-12 rotate-[15deg]" />
      <p className="text-[44px]">Acme</p>
    </div>
  );
}
