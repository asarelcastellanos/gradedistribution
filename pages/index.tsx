import { SetStateAction, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Router, { useRouter } from "next/router";
import SchoolHeader from "../component/SchoolHeader";

export default function Home() {
  const router = useRouter();
  const [course, setCourse] = useState("");

  function handleText(event: any) {
    let unformattedCourse = event.target.value;
    setCourse(unformattedCourse.toUpperCase());
  }

  return (
    <>
      <SchoolHeader />
      <div className="bg-slate-400 flex h-screen">

      </div>
      {/* <div className="flex flex-col text-white h-screen justify-center items-center">
        <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold py-8">
          How Hard Is This Class?
        </h1>
        <div className="flex">
          <input
            className="text-black text-xl font-bold w-full md:w-1/2 h-10 rounded-full p-4"
            placeholder="📖 Example: ACCTG 1"
            onChange={handleText}
          />
          <Link className="ml-4" href={`/course/${course}`}>
            <button className="border border-white rounded-full px-4 h-10 text-xl font-semibold hover:bg-gray-500">
              Find Course
            </button>
          </Link>
        </div>
      </div> */}
    </>
  );
}
