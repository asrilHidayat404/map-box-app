import { Icon } from "@phosphor-icons/react";
import {
  ArrowCircleUp,
  Calendar,
  ChartBarHorizontal,
  MapTrifold,
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { ReactElement } from "react";

type Links = {
  label: string;
  href: string;
  icon: ReactElement<Icon>;
}[];

const links: Links = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: <ChartBarHorizontal className="mr-3" size={20} weight="bold" />,
  },
  {
    label: "Map",
    href: "/dashboard/map",
    icon: <MapTrifold className="mr-3" size={20} weight="bold" />,
  },
];

const DashboardSidebar = () => {
  return (
    <aside className="relative min-h-screen max-w-64 w-64 hidden shadow-white shadow-sm sm:block">
      <div className="fixed max-w-full w-52">
        <div className="p-6">
          <Link
            href="/"
            className="text-white text-3xl font-semibold uppercase hover:text-gray-300"
          >
            Admin
          </Link>
        </div>
        <nav className="text-white w-full text-base font-semibold px-1 pt-3">
          {links.map((link, i) => {
            return (
              <Link
                key={i}
                href={link.href}
                className="flex items-center active-nav-link w-full hover:bg-slate-900 text-white py-4 pl-6 nav-item"
              >
                {link.icon}
                {link.label}
              </Link>
            );
          })}
        </nav>
        {/* <a
          href="#"
          className="absolute w-full upgrade-btn bottom-0 active-nav-link text-white flex items-center justify-center py-4"
        >
          <ArrowCircleUp className="mr-3" size={20} weight="bold" />
          Upgrade to Pro!
        </a> */}
      </div>
    </aside>
  );
};

export default DashboardSidebar;
