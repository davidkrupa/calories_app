import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex lg:flex-row flex-col-reverse max-w-7xl px-8 gap-6">
      <div className="flex flex-col flex-1 justify-center text-center">
        <h1 className="text-7xl my-5 font-medium">Count, Plan</h1>
        <h2 className="font-bold text-8xl text-orange-500">STAY FIT</h2>
        <div>
          <button className="outline-none rounded-full bg-transparent hover:bg-orange-500 border-[1.5px] border-orange-500 hover:border-orange-500 px-4 py-1 text-lg font-semibold hover:text-white mt-5">
            Start now
          </button>
        </div>
      </div>
      <div className="">
        <Image
          alt="hero"
          src="/hero-image.jpg"
          height={480}
          width={640}
          className="object-contain rounded-s-[25%]"
        />
      </div>
    </div>
  );
};

export default Hero;
