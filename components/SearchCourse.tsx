import { useRouter } from "next/router";
import { useState } from "react";

export default function SearchCourse() {
  const [course, setCourse] = useState();

  const router = useRouter();

  function handleChange(event: any) {
    setCourse(event.target.value.toUpperCase());
  }

  function goCourse() {
    router.push(`/course/${course}`);
  }

  return (
    <div className="flex flex-col flex-grow justify-center items-center text-white">
      <div className="flex w-1/3 h-16 absolute top-8">
        <h1 className="m-auto text-2xl font-semibold">Santa Monica College</h1>
      </div>
      {/* <div className="bg-pink-500 w-screen"> */}
      <h1 className="text-4xl font-bold mb-10">How Hard Is This Class?</h1>
      <input
        className="w-1/4 h-12 rounded-full p-4 mb-8 text-black"
        placeholder="Example: PHYSCS 8"
        onChange={handleChange}
      />
      <button
        onClick={goCourse}
        className="border-2 border-white hover:bg-gray-500 w-32 h-8 rounded-full"
      >
        Find Class
      </button>
      {/* </div> */}
    </div>
  );
}
