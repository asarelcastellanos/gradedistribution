import HomeHeader from "../components/HomeHeader";
import HomeSearch from "../components/HomeSearch";

export default function Home() {
  return (
      <div className="flex flex-col h-screen">
        <HomeHeader />
        <HomeSearch />
      </div>
  );
}
