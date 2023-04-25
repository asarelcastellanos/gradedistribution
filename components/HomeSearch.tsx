import { useRouter } from "next/router";
import { useState } from "react";

export default function HomeSearch() {
  const router = useRouter();
  const [course, setCourse] = useState("");
  const [showCourseSearch, setShowSearchCouse] = useState(true);

  function handleChange(event: any) {
    setCourse(event.target.value.toUpperCase());
  }

  function goCoursePage() {
    router.push(`/course/${course}`);
  }

  // function SchoolSearch() {
  //   return(
  //     <div className="flex flex-col justify-center items-center mb-10 bg-orange-500">
  //     <input
  //       className="w-full md:w-1/2 border-2 border-gray-200 hover:border-gray-500 rounded-full h-10 p-4"
  //       placeholder="Example: Santa Moinca College"
  //       onChange={searchSchool}
  //       value={school}
  //     />
  //     {school ? (
  //       <div className="bg-yellow-500 flex flex-col overflow-scroll mb-4 w-full md:w-1/2 rounded-lg h-32">
  //         {supportedSchools?.map((school_name) => {
  //           return (
  //             <button
  //               key={school_name}
  //               onClick={() => {
  //                 setSchool(school_name);
  //               }}
  //               className="mt-2 border-b-2"
  //             >
  //               {school_name}
  //             </button>
  //           );
  //         })}
  //       </div>
  //     ) : (
  //       <></>
  //     )}
  //     <button onClick={() => {
  //       setShowSearchCouse(true);
  //     }} className="md:ml-2 mt-2 md:mt-0 rounded-full w-28 h-10 border-2 border-gray-500 hover:bg-gray-200">
  //       Continue
  //     </button>
  //   </div>
  //   )
  // }

  const CourseSearch = () => {
    return (
      <div className="flex flex-col md:flex-row justify-center items-center mb-10">
        <input
          className="w-full md:w-1/2 border-2 border-gray-200 rounded-full h-10 p-2"
          placeholder="Example: PHYSCS 8"
          onChange={handleChange}
        />
        <button
          onClick={goCoursePage}
          className="md:ml-2 mt-2 md:mt-0 rounded-full w-28 h-10 border-2 border-gray-500 hover:bg-gray-200"
        >
          Continue
        </button>
      </div>
    );
  };

  return (
    <div className="flex flex-col flex-grow justify-center text-center">
      <h1 className="text-lg md:text-2xl lg:text-4xl font-semibold mb-10">
        How Hard Is This Class?
      </h1>
      {/* Search Course */}
      {showCourseSearch ? (
        <div className="flex flex-col md:flex-row justify-center items-center mb-10">
          <input
            className="w-full md:w-1/2 border-2 border-gray-200 rounded-full h-10 p-2"
            placeholder="Example: PHYSCS 8"
            onChange={handleChange}
          />
          <button
            onClick={goCoursePage}
            className="md:ml-2 mt-2 md:mt-0 rounded-full w-28 h-10 border-2 border-gray-500 hover:bg-gray-200"
          >
            Continue
          </button>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
