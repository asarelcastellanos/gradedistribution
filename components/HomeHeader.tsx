import Image from "next/image";

export default function HomeHeader() {
  return (
    <div className="flex flex-row h-32 sticky">
      <div className="flex h-32 absolute top-0 left-0">
        <Image src={"../assets/logo.svg"} alt={"HowHardIsThisClass Logo"} width={100} height={100} className="m-auto"/>
      </div>
      <div className="flex h-full w-screen">
        <p className="md:text-2xl sm:text-xl text-lg font-semibold m-auto">Santa Monica College</p>
      </div>
    </div>
  );
}
