import { GetStaticPaths, GetStaticProps } from "next";
import { supportedSchools } from "../../../staticData/supportedSchools";
import clientPromise from "../../../lib/mongodb";
import CourseCard from "../../../components/CourseCard";
import Link from "next/link";
import { useRouter } from "next/router";

interface School {
  name: String;
  database: String;
}

export default function School({ fall_courses, spring_courses }) {
  const router = useRouter();
  const { school } = router.query;
  console.log(school);

  return (
    <div>
      <p>School Page for {school}.</p>
      {fall_courses.map((course) => {
        return (
          <Link
            key={course._id}
            href={`/school/${school}/course/${course._id}`}
          >
            <CourseCard
              course={course.Course}
              instructor={course.Instructor}
              section={course.Section}
            />
          </Link>
        );
      })}
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
