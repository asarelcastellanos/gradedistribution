// @ts-nocheck
import clientPromise from "../../../lib/mongodb";
import CourseCard from "../../../components/CourseCard";
import Link from "next/link";
import { useRouter } from "next/router";
import { supportedSchools } from "../../../staticData/supportedSchools";

export default function School(props: { courses: String[] }) {
  const router = useRouter();
  const { school } = router.query;
  let schoolPage = supportedSchools.find(
    (specificSchool) => specificSchool.database === school
  );

  return (
    <div>
      <p>School Page for {schoolPage?.name}.</p>
      {props.courses.map((course) => {
        return (
          <Link
            key={course.toString()}
            href={`/school/${school}/course/${course}`}
          >
            <CourseCard course={course} />
          </Link>
        );
      })}
    </div>
  );
}

export async function getServerSideProps({ params }) {
  try {
    const client = await clientPromise;
    const db = client.db(params.school);

    const courses = await db.collection("fall").distinct("Course");

    return {
      props: {
        courses: JSON.parse(JSON.stringify(courses)),
      },
    };
  } catch (e) {
    console.error(e);
  }
}
