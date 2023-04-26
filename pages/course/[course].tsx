// @ts-nocheck
import { useRouter } from "next/router";
import clientPromise from "../../lib/mongodb";
import CourseCard from "../../components/CourseCard";

export default function CoursePage({ courses }) {
  const router = useRouter();
  const { course } = router.query;

  console.log(courses);

  function CoursePage({ courses }) {
    return (
      <div className="flex flex-col flex-grow">
        {courses.map((single_course) => {
          return <CourseCard key={single_course._id} course={single_course} />;
        })}
      </div>
    );
  }

  function CourseNotFound() {
    return (
      <div className="flex flex-col flex-grow mt-10 p-8">
        <h1 className="text-2xl">Course Data Not Avaiable</h1>
      </div>
    );
  }

  return (
    <div className="flex flex-col m-auto h-screen">
      <div className="h-32 p-8">
        <p className="text-gray-800">Course Searched:</p>
        <h1 className="font-bold">{course}</h1>
      </div>
      {courses.length != 0 ? (
        <CoursePage courses={courses} />
      ) : (
        <CourseNotFound />
      )}
    </div>
  );
}

export async function getServerSideProps({ params }) {
  try {
    const client = await clientPromise;
    const db = client.db("santa-monica-college");

    const courses = await db
      .collection("fall-2022")
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
