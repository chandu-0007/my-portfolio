import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex items-center justify-center py-10">
      <div className="flex items-center ">
        {/* Left Content */}
        <div className="max-w-xl pt-28">
          <h1 className="text-5xl font-semibold leading-snug">
            I build software that simplify <br/>
            and automate real world <br/>
            business operations using <br/>
          </h1>
        </div>
        {/* Right Image */}
        <div className="overflow-hidden">
          <Image
            src="/profile.webp"
            alt="profile"
            width={500}
            height={600}
          />
        </div>
      </div>
    </section>
  );
}