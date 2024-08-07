import { UserButton } from "@clerk/nextjs";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <main className="">
      <div className="flex flex-col lg:flex-row items-center bg-[#1e1919] dark:bg-slate-800">
        <div className="p-10 flex flex-col bg-[#2b2929] dark:bg-slate-800 text-white space-y-5">
          <h1 className="text-5xl font-bold">
            Welcome to your personal cloud storage. <br />
            <br /> storing your files, sharing with others, and managing your data all in one place.
          </h1>

          <p className="pb-20">
            enhance your personal storage with Dropbox, offering unlimited storage, file sharing, 
            and collaboration features.
            Securely and privately store your files across all devices.
          </p>

          <Link href='/dashboard' className="flex cursor-pointer bg-blue-500 w-fit p-5">
            Try it now
            <ArrowRightIcon className="ml-10"/>
          </Link>
        </div>

        {/* <div className="bg-[#1e1919] dark:bg-slate-800 h-full p-10">
          <Image
                src="" 
                alt="logo"
                className="invert" 
                height={50} 
                width={50}
            />
        </div> */}
      </div>
    </main>
  );
}
