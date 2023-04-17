// @ts-nocheck
import { useRouter } from "next/router";
import clientPromise from "../../lib/mongodb";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function CoursePage({ courses }) {
  const router = useRouter();
  const { course } = router.query;

  return (
    <div>
      <h1>{course}'s Grade Distribution</h1>
      {courses.map((individual_course) => {
        return (
          <div key={individual_course._id}>
            <p>Instructor: {individual_course.Instructor}</p>
            <p>Section: {individual_course.Section}</p>
            <Bar
              options={{
                responsive: false,
                plugins: {
                  title: {
                    display: true,
                    text: "Total Students = ",
                  },
                },
              }}
              data={{
                labels: ["A", "B", "C", "D", "F", "W", "P", "NP"],
                datasets: [
                  {
                    label: "Grades",
                    data: [
                      individual_course.A,
                      individual_course.B,
                      individual_course.C,
                      individual_course.D,
                      individual_course.F,
                      individual_course.W,
                      individual_course.P,
                      individual_course.NP,
                    ],
                    backgroundColor: "lightblue",
                  },
                ],
              }}
            />
          </div>
        );
      })}
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
