import { lusitana } from '@/app/ui/fonts';

export default function SampleUser() {
  return (
    <div
      className={`${lusitana.className} absolute top-5 w-full max-w-[400px] flex-col space-y-2.5 rounded-lg bg-gray-100 p-4 text-xl`}
    >
      <p>
        Sample User:
        <span className="ml-2 cursor-pointer italic text-blue-500 hover:underline">
          user@nextmail.com
        </span>
      </p>
      <p>
        Sample Password:
        <span className="ml-2 cursor-pointer italic text-blue-500 hover:underline">
          123456
        </span>
      </p>
    </div>
  );
}
