import Image from "next/image";

export default function HomeHeader() {
  return (
    <div className="flex flex-row h-32">
      <div className="flex h-full w-40">
        <Image src={"../assets/logo.svg"} alt={"HowHardIsThisClass Logo"} width={100} height={100} className="m-auto"/>
      </div>
    </div>
  );
}
