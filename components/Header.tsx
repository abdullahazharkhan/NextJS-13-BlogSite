import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div className="flex items-center space-x-2">
        <Link href={"/"}>
          <Image
            src={
              "https://cdn.logojoy.com/wp-content/uploads/2018/05/30164225/572.png"
            }
            width={100}
            className="rounded-full"
            height={100}
            alt="logo"
          />
        </Link>
        <h1>The BLOG</h1>
      </div>
      <div>
        <Link href={"/"} className="px-5 py-3 text-sm md:text-base bg-gray-900 text-[#f7ab0a] flex items-center rounded-full text-center">
            Sign Up to The BLOG
        </Link>
      </div>
    </header>
  );
}

export default Header;
