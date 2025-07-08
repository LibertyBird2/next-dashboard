import { HiCheck, HiClock } from 'react-icons/hi';

export default function InvoiceStatus({ status }: { status: string }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2 py-1 text-xs' ${status === 'pending' ? 'bg-gray-100 text-gray-500' : 'bg-green-500 text-white'}`}
    >
      {status === 'pending' ? (
        <>
          Pending
          <HiClock className="ml-1 w-4 text-gray-500" />
        </>
      ) : null}
      {status === 'paid' ? (
        <>
          Paid
          <HiCheck className="ml-1 w-4 text-white" />
        </>
      ) : null}
    </span>
  );
}
