import Head from "next/head";
import clientPromise from "../lib/mongodb";
import { InferGetStaticPropsType } from "next";
import SchoolCard from "../components/SchoolCard";
import Link from "next/link";

export default function Home() {
  // let search = fall_grades.filter((value: { Course: string; }) => {
  //   return value.Course.match("CS 8")
  // })
  // console.log(search);

  // console.log(fall_grades);
  // console.log(spring_grades);

  let schools: string[] = ['santa-monica-college', 'orange-coast-college'];

  return (
    <div className="container">
      <h1>Welcome!</h1>
      <h4>Click on a school to view grade distributions.</h4>
      {schools.map((school) => {
        return (
          <Link key={school} href={`/${school}`}>
            <SchoolCard key={school} name={school} />
          </Link>
        );
      })}
    </div>
  );
}

// export async function getStaticProps() {
//   try {
//     const client = await clientPromise;
//     const db = client.db("santa-monica-college");

//     const fall_grades = await db.collection("fall").find({}).toArray();
//     const spring_grades = await db.collection("spring").find({}).toArray();

//     return {
//       props: {
//         fall_grades: JSON.parse(JSON.stringify(fall_grades)),
//         spring_grades: JSON.parse(JSON.stringify(spring_grades)),
//       },
//     };
//   } catch (e) {
//     console.error(e);
//   }
// }
