import { UnderlineVector } from "@/vectors/vector";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center bg-white w-full h-screen">
      <div className="flex justify-center items-center gap-1.5 w-auto h-auto">
        <h1 className="font-stack-sans text-black text-4xl">
          The modern way to kill every{" "}
        </h1>
        <span className="relative flex flex-col justify-end items-center w-auto h-auto">
          <h1 className="font-stack-sans text-[#006FFF] text-4xl">
            distractions.
          </h1>
          <div className="-bottom-1.5 absolute flex justify-center items-center w-auto h-auto">
            <UnderlineVector />
          </div>
        </span>
      </div>
    </div>
  );
}
