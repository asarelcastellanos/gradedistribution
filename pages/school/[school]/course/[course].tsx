// @ts-nocheck
import { useRouter } from "next/router";
import clientPromise from "../../../../lib/mongodb";
import InstructorCard from "../../../../components/InstructorCard";

export default function Course(props: { courses: any[] }) {
  const router = useRouter();
  const { school, course } = router.query;
  console.log(props.courses);
  return (
    <div>
      <h1>School Page of {school}</h1>
      <p>Course Page for {course}</p>
      {props.courses.map((course) => {
        return (
          <div key={course._id}>
            <InstructorCard Instructor={course.Instructor} />
          </div>
        );
      })}
    </div>
  );
}

export async function getServerSideProps({ params }) {
  try {
    const client = await clientPromise;
    const db = client.db(params.school);

    const courses = await db
      .collection("fall")
      .find({ Course: params.course })
      .project({ Course: 0 })
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
