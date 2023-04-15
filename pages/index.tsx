import Head from "next/head";
import clientPromise from "../lib/mongodb";
import { InferGetStaticPropsType } from "next";

export default function Home({
  fall_grades,
  spring_grades,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  

  let search = fall_grades.filter(value => {
    return value.Course.match("CS 8")
  })
  console.log(search);

  // console.log(fall_grades);
  // console.log(spring_grades);

  return (
    <div className="container">
      <Head>
        <title>Class Grades</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
}

export async function getStaticProps() {
  try {
    const client = await clientPromise;
    const db = client.db("santa-monica-college");

    const fall_grades = await db.collection("fall").find({}).toArray();
    const spring_grades = await db.collection("spring").find({}).toArray();

    return {
      props: {
        fall_grades: JSON.parse(JSON.stringify(fall_grades)),
        spring_grades: JSON.parse(JSON.stringify(spring_grades)),
      },
    };
  } catch (e) {
    console.error(e);
  }
}
