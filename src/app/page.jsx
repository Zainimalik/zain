import Image from "next/image";
import Link from "next/link"
import { FaHouseUser } from "react-icons/fa6";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaGraduationCap } from "react-icons/fa";
import { LuDatabaseBackup, LuFileBarChart2, LuLink } from "react-icons/lu";
import { LuContact2 } from "react-icons/lu";
import { CiFacebook } from "react-icons/ci";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa";

export default function Home() {
  return (
  <main>
    <div className="bg-black text-white w-[230px] h-screen flex flex-col">
      <img src={"/A09A0289.JPG"} alt="Zain Habib" width={80} height={80} 
      className="rounded-full border-white border-[4px] mx-auto mt-12 "  />
      <div ></div>
<h2 className="text-center text-lg font-bold mt-4 mb-8">Zain Habib</h2>

<Link href={"/"} className="flex gap-2 items-center my-3 ml-2 text-sm hover:text-green-400"><FaHouseUser size={16} />Home</Link>

<Link href={"/"} className="flex gap-2 items-center my-3 ml-2 text-sm hover:text-green-400"><FaRegCircleUser  size={16} />About Me</Link>

<Link href={"/"} className="flex gap-2 items-center my-3 ml-2 text-sm hover:text-green-400"><FaGraduationCap  size={16} />Education</Link>

<Link href={"/"} className="flex gap-2 items-center my-3 ml-2 text-sm hover:text-green-400"><LuDatabaseBackup  size={16} />Services</Link>

<Link href={"/"} className="flex gap-2 items-center my-3 ml-2 text-sm hover:text-green-400"><LuFileBarChart2  size={16} /> Blogs</Link>
 
<Link href={"/"} className="flex gap-2 items-center my-3 ml-2 text-sm hover:text-green-400"><LuContact2  size={16} />Contact Me</Link>

<div className="flex-1 flex flex-col justify-end">
  <div className="flex justify-center gap-4">
<div className="border-[1px] border-white p-1 rounded-full">
  <Link href={"/"} > <CiFacebook /></Link>
</div>

<div className="border-[1px] border-white p-1 rounded-full">
  <Link href={"/"}><FaInstagramSquare /></Link>
</div>
<div className="border-[1px] border-white p-1 rounded-full">
  <Link href={"/"}><FaSquareTwitter /></Link>
</div>
<div className="border-[1px] border-white p-1 rounded-full">
  <Link href={"/"}><FaPhoneVolume />
  </Link>
</div>

</div>
</div>



    </div>
  </main>



  )

}
