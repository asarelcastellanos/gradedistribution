import { SetStateAction, useState } from "react";
import Link from "next/link";

export default function Home() {
  const [course, setCourse] = useState("");

  function handleChange(event: any) {
    let unformattedCourse = event.target.value;
    setCourse(unformattedCourse.toUpperCase());
  }

  return (
    <>
      <h1>How Hard Is This Class?</h1>
      <h4>
        Welcome to the website that helps you decide which class at Santa Monica
        College to take based on grade distributions.
      </h4>
      <div>
        <input placeholder="Example: CS 8" onChange={handleChange}/>
        <Link href={`/course/${course}`}>
          <button>Go to Course</button>
        </Link>
      </div>
    </>
  );
}