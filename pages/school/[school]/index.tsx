import { GetStaticPaths, GetStaticProps } from "next";
import { supportedSchools } from "../../../staticData/supportedSchools";
import clientPromise from "../../../lib/mongodb";

interface School {
  name: String;
  database: String;
}

interface Course {
    count: Number,
    gradeA: String,
    gradeB: String,
    gradeC: String,
    courseName: String,
    gradeD: String,
    gradeEW: String,
    gradeF: String,
    gradeIX: String,
    instructorName: String,
    gradeNP: String,
    gradeP: String,
    gradeSP: String,
    sectionNumber: Number,
    totalCount: Number,
    gradeW: String,
    _id: String,
}

export default function School({ fall_courses, spring_courses }) {
  console.log(fall_courses);
  return (
    <div>
      <p>School Page</p>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = () => {
  const paths = supportedSchools.map((school) => ({
    params: { school: school.database },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const client = await clientPromise;
    const db = client.db(params.school);

    const fall_courses = await db.collection("fall").find({}).toArray();
    const spring_courses = await db.collection("spring").find({}).toArray();

    return {
      props: {
        fall_courses: JSON.parse(JSON.stringify(fall_courses)),
        spring_courses: JSON.parse(JSON.stringify(spring_courses)),
      },
    };
  } catch (e) {
    console.error(e);
  }
};
