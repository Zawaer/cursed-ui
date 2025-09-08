"use client";

export default function Home() {
  return (
    <div className="flex w-screen h-screen justify-center items-center">
      <div className="bg-amber-50">
        <button className="cursor-pointer" onClick={() => alert(1)}>Test</button>
      </div>
    </div>
  );
}
