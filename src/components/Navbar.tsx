import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="bg-slate-200 fixed z-30 w-full ">
      <nav className="flex justify-between items-center ps-2 pe-2">
        <div className="flex items-center">
          <Image
            src="/images/portrait_main.jpg"
            alt="Logo"
            width={25}
            height={25}
            className="rounded-full"
          />

          <h1 className="text-sm font-bold ml-3">THE GOOD OLD DEVELOPER</h1>
        </div>
        <div className="flex justify-end gap-4 p-1">
          <Link href="/en">
            <Image
              src="/images/gb-flag.png"
              alt="english flag"
              width={36}
              height={36}
            />
          </Link>
          <Link href="/hu">
            <Image
              src="/images/hu-flag.png"
              alt="hungarian flag"
              width={36}
              height={36}
            />
          </Link>
          <Link href="/fr">
            <Image
              src="/images/fr-flag.png"
              alt="french flag"
              width={36}
              height={36}
            />
          </Link>
          <Link href="/de">
            <Image
              src="/images/de-flag.png"
              alt="german flag"
              width={36}
              height={36}
            />
          </Link>
        </div>
      </nav>
    </header>
  );
}
