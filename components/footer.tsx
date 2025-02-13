import { AboutData } from "@/data/setup";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="flex max-lg:flex-col flex-row max-lg:px-12 px-24 py-6 justify-between max-lg:space-y-6 lg:space-x-24 border-t-[1px] border-secondary/10">
      <div className="w-full">
        <h5 className="footer_title">{AboutData.name} • Portfolio</h5>
        <span className="text-secondary/70">
          © {year} {AboutData.name}. All rights reserved.
        </span>
      </div>
      <div className="w-full">
        <h5 className="footer_title">Quick Links</h5>
        <div className="flex flex-col space-y-1">
          <Link href="/about" className="menu_link">
            About
          </Link>
          <Link href="/projects" className="menu_link">
            Projects
          </Link>
          <Link href="/contact" className="menu_link">
            Contact
          </Link>
        </div>
      </div>
      <div className="w-full">
        <h5 className="footer_title">Connect</h5>
        <div className="flex flex-row space-x-3">
          {AboutData.links?.map((link, i) => (
            <Link key={i} href={link.url} target="_blank">
              {<link.icon className="menu_link text-xl box-content" />}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
