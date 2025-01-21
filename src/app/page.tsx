import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (
   <div>
    <p>GymApp</p>
    <div className="flex flex-col ">
    <Link href="/Auth/Register"> Register </Link>
    <Link href="/Auth/login"> Register </Link>
    </div>
   </div>
  );
}
