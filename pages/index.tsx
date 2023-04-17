import { SetStateAction, useState } from "react";
import Link from "next/link";

export default function Home() {
  const [course, setCourse] = useState("CS 8");

  function handleChange(event: { target: { value: SetStateAction<string>; }; }) {
    setCourse(event.target.value);
  }

  return (
    <div className="container">
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
    </div>
  );
}