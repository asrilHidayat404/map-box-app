"use client";

import { generateBreadcrumbs, UrlFormatting } from "@/utils/script";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const DashboardHeader = () => {
  const path = usePathname();
  console.log(path);
  const breadcrumbs = generateBreadcrumbs(path);

  return (
    <div className="w-full flex flex-col overflow-y-hidden">
      {/* Desktop Header */}
      <header className="w-full items-center shadow-white shadow-sm mb-4 py-4 px-6 hidden sm:flex">
        <div className="w-1/2">
          {breadcrumbs.map((crumb, index) => (
            <span key={index} className="breadcrumb-item">
              {index > 0 && " > "}
              <Link href={crumb.href} className="text-blue-500 hover:underline">
                {crumb.label}
              </Link>
            </span>
          ))}
        </div>
        <div className="relative w-1/2 flex justify-end">
          <button className="relative z-10 w-12 h-12 rounded-full overflow-hidden border-4 border-gray-400 hover:border-gray-300 focus:border-gray-300 focus:outline-none">
            <Image src={"/admin-icon.jpg"} className="w-full h-full" width={20} height={20} alt="User Profile" />
          </button>
          <div className="absolute w-32 bg-white rounded-lg shadow-lg py-2 mt-16 hidden">
            <a
              href="#"
              className="block px-4 py-2 account-link hover:text-white"
            >
              Account
            </a>
            <a
              href="#"
              className="block px-4 py-2 account-link hover:text-white"
            >
              Support
            </a>
            <a
              href="#"
              className="block px-4 py-2 account-link hover:text-white"
            >
              Sign Out
            </a>
          </div>
        </div>
      </header>
    </div>
  );
};

export default DashboardHeader;
