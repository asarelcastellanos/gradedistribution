import Image from "next/image";

export default function SchoolHeader() {
  return (
    <header className="bg-slate-300 flex w-full h-20 sticky justify-center items-center">
      <div>
        <Image
          src="../assets/logo.svg"
          alt={"how hard is this class logo"}
          height={80}
          width={80}
        />
      </div>
      <h1>School Name</h1>
    </header>
  );
}
