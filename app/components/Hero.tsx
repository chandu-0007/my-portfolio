import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex relative ">
      <div
        className="bg-cyan-50 w-700 h-screen overflow-hidden flex justify-center items-center">
        <div
          className="flex justify-center pl-24 items-center ">
          <p
            className="font-semibold  text-neutral-700 font-sans text-7xl ">
            I build software that simplify and automate real world business operations using
            <span className="font-serif font-normal ">Full Stack ()</span> .
          </p>
        </div>
      </div>
      <div
        className="bg-cyan-50 w-500 h-screen  pl-40 overflow-hidden flex justify-end-safe  items-end ">
           <Image
           src="/profile.webp"
           alt="user profile image"
           width={800}
           height={500}>
           </Image>
      </div>
  
    </div>
  );
}