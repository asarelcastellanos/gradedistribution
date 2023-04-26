// @ts-nocheck
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

export default function CourseCard({ course }) {

  let passRate = (((course.A + course.B + course.C) / course.Grand_Total)*100).toFixed(2);

  return (
    <div className="flex flex-col md:flex-row flex-grow mb-10">
      <div className="md:w-1/4 w-full h-full p-4">
        <p className="">{course.Instructor}</p>
        <p className="">Section: {course.Section}</p>
        <p className="">
          Pass Rate: {passRate}%
        </p>
      </div>
      <div className="md:w-3/4 w-full h-full p-4">
        <p className="font-bold">Total Students</p>
        <span className="font-normal">{course.Grand_Total}</span>
        <div className="h-52 md:h-80">
          <Bar
            options={{
              responsive: true,
              maintainAspectRatio: false,
              elements: {
                bar: {
                  borderWidth: 2,
                },
              },
            }}
            data={{
              labels: [
                "A",
                "B",
                "C",
                "D",
                "F",
                "P",
                "NP",
                "IX",
                "RD",
                "EW",
                "W",
              ],
              datasets: [
                {
                  label: "Letter Grades",
                  data: [
                    course.A,
                    course.B,
                    course.C,
                    course.D,
                    course.F,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                  ],
                  backgroundColor: "blue",
                },
                {
                  label: "Other",
                  data: [
                    0,
                    0,
                    0,
                    0,
                    0,
                    course.P,
                    course.NP,
                    course.IX,
                    course.RD,
                    course.EW,
                    course.W,
                  ],
                  backgroundColor: "lightblue",
                },
              ],
            }}
          />
        </div>
      </div>
    </div>
  );
}
