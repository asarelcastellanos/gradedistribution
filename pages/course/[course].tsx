// @ts-nocheck
import { useRouter } from "next/router";
import clientPromise from "../../lib/mongodb";
import CourseCard from "../../components/CourseCard";

export default function CoursePage({ courses }) {
  const router = useRouter();
  const { course } = router.query;

  console.log(courses);

  return (
    <div className="flex flex-col container m-auto h-screen">
      <div className="h-32 p-8">
        <p className="text-gray-800">Course Searched:</p>
        <h1 className="font-bold">{course}</h1>
      </div>
      <div className="flex flex-col flex-grow">
        {courses.map((individual_course) => {
          return <CourseCard course={individual_course} />;
        })}
      </div>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  try {
    const client = await clientPromise;
    const db = client.db("santa-monica-college");

    const courses = await db
      .collection("fall")
      .find({ Course: params.course })
      .toArray();

    return {
      props: {
        courses: JSON.parse(JSON.stringify(courses)),
      },
    };
  } catch (e) {
    console.error(e);
  }
}
