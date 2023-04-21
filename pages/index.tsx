import HomeHeader from "../components/HomeHeader";
import SearchCourse from "../components/SearchCourse";

export default function Home() {
  return (
      <div className="flex flex-col bg-black h-screen">
        <HomeHeader />
        <SearchCourse />
      </div>
  );
}
