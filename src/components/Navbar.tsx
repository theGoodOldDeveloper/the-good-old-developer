import Link from "next/link";
import Image from "next/image";
import Flag_PT from "../images/pt-flag.png";
import Flag_FR from "../images/fr-flag.png";
import Flag_ES from "../images/es-flag.png";
import Flag_HU from "../images/hu-flag.png";
import Flag_DE from "../images/de-flag.png";
import Flag_EN from "../images/gb-flag.png";
//import portrait from "../images/portrait_main.jpg";
import portrait from "@/images/portrait_main.jpg";

export default function Navbar() {
  return (
    <header className="bg-slate-200 fixed z-30 w-full ">
      <nav className="flex justify-between items-center ps-2 pe-2">
        <div className="flex items-center">
          <Image
            src={portrait}
            alt="Logo"
            width={25}
            height={25}
            className="rounded-full"
          />

          <h1 className="text-sm font-bold ml-3">THE GOOD OLD DEVELOPER</h1>
        </div>
        <div className="flex justify-end gap-4 p-1">
          <Link href="/en">
            <Image src={Flag_EN} alt="english flag" width={36} height={36} />
          </Link>
          <Link href="/hu">
            <Image src={Flag_HU} alt="hungarian flag" width={36} height={36} />
          </Link>
          <Link href="/fr">
            <Image src={Flag_FR} alt="french flag" width={36} height={36} />
          </Link>
          <Link href="/de">
            <Image src={Flag_DE} alt="german flag" width={36} height={36} />
          </Link>
        </div>
      </nav>
    </header>
  );
}
