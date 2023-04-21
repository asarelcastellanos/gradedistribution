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
  return (
    <div className="flex flex-col lg:flex-row m-auto lg:h-96 h-full w-full bg-white mb-10">
      <div className="h-full lg:w-1/4 w-full">
        <p>Professor: {course.Instructor}</p>
        <p>Section: {course.Section}</p>
        <p>Discipline: {course.Discipline}</p>
        <p>Department: {course.Dept}</p>
        <p>Pass Rate: {(( (course.A + course.B + course.C) / course.Grand_Total) * 100).toFixed(2)}%</p>
      </div>
      <div className="h-full lg:w-3/4 w-full">
        <p>Total Grades Given</p>
        <span>{course.Grand_Total}</span>
        <div className="flex-grow h-80">
          <Bar
            options={{
              responsive: true,
              maintainAspectRatio: false,
              elements: {
                bar: {
                  borderWidth: 2,
                },
              },
              plugins: {
                legend: {
                  position: "top" as const,
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
