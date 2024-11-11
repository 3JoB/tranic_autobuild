import clsx from "clsx";
import Link from "next/link";

//import LogoMarkerDark from "@/assets/brand/logo-marker-dark.svg";
import Logo from "@/assets/brand/logo.svg";
import classes from "@/styles/components/layout/Footer.module.css";

const Footer = () => (
  <footer className={clsx("bg-background-dark-80 py-12 mt-8", classes.footer)}>
    <div className="max-w-7xl m-auto px-4">
      <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-sm text-white">
        <div>
          <span className="font-semibold">Getting Started</span>
          <ul className="mt-4 leading-5 text-gray-400 space-y-2">
            <li>
              <Link href="/downloads">Downloads</Link>
            </li>
          </ul>
        </div>
        <div>
          <span className="font-semibold">Community</span>
          <ul className="mt-4 leading-5 text-gray-400 space-y-2">
            <li>
              <a
                href="https://github.com/LevelTranic"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://discord.gg/dBbSbv2Vuz"
                target="_blank"
                rel="noreferrer"
              >
                Discord
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-row items-center gap-2 border-t border-gray-600/50 mt-8 pt-10">
        <Logo className="h-12 cursor-pointer" alt="TranicSoft" />
        <div className="flex-1" />
        <span className="text-gray-300 text-sm">
          © {new Date().getFullYear()} TranicSoft Studio
        </span>
      </div>
    </div>
  </footer>
);

export default Footer;
