import Image from "next/image";

export default function HomeHeader() {
  return (
    <div className="flex md:flex-row flex-col h-32 absolute top-0">
      {/* <div className="flex h-32">
        <Image src={"../assets/logo.svg"} alt={"HowHardIsThisClass Logo"} width={100} height={100} className="m-auto stroke-red-700 fill-blue-500"/>
      </div> */}
      <div className="flex flex-col h-full w-screen justify-center items-center">
        <h1 className="md:text-2xl sm:text-xl text-lg font-semibold">Santa Monica College</h1>
        <p className="text-base">Last Updated: Fall 2022</p>
      </div>
    </div>
  );
}
