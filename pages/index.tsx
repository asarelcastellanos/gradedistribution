import { supportedSchools } from "../staticData/supportedSchools";
import SchoolCard from "../components/SchoolCard";
import Link from "next/link";

interface School {
  name: String;
  database: String;
}

export default function Home() {
  return (
    <div className="container">
      <h1>Welcome!</h1>
      <h4>Click on a school to view grade distributions.</h4>
      {supportedSchools?.map((school: School) => {
        return (
          <Link href={`/school/${school.database}`}>
            <SchoolCard name={school.name} />
          </Link>
        );
      })}
    </div>
  );
}
