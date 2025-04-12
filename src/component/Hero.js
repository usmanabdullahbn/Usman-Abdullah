import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="w-full pt-16 bg-[#F4F3ED] relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center">
          {/* Name heading */}
          <h1 className="font-oswald text-[120px] font-bold leading-[246px] text-[#070707] tracking-tighter mt-14">
            Usman Abdullah
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-6xl mx-auto items-start">
            {/* Left column - Reviews */}
            <div className="flex flex-col space-y-4 text-left">
              <div className="flex -space-x-3 mt-[50px]">
                <img
                  src="https://nino-next-js.vercel.app/assets/images/avatar/01.jpg"
                  alt="Client 1"
                  className="w-12 h-12 rounded-full border-2 border-white z-30"
                />
                <img
                  src="https://nino-next-js.vercel.app/assets/images/avatar/02.jpg"
                  alt="Client 2"
                  className="w-12 h-12 rounded-full border-2 border-white z-20"
                />
                <img
                  src="https://nino-next-js.vercel.app/assets/images/avatar/03.jpg"
                  alt="Client 3"
                  className="w-12 h-12 rounded-full border-2 border-white z-10"
                />
              </div>
              <div>
                <p className="text-xl font-semibold">
                  100+ reviews{" "}
                  <span className="text-gray-500">(4.96 of 5)</span>
                </p>
                <p className="text-base mt-2">
                I am specialize in building modern and responsive applications using <br/>MERN Technology.
                </p>
              </div>
            </div>

            {/* Middle column - Profile Image */}
            <div className="flex justify-center">
              <div className="w-[500px] h-[500px] mt-[-70px] mb-[5px] rounded-3xl overflow-hidden border-4 border-white shadow-lg transform rotate-6 transition-transform duration-300 hover:rotate-0">
                <img
                  src="https://nino-next-js.vercel.app/assets/images/about/me.jpg"
                  alt="Nino Walker"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            {/* Right column - Bio and CTA */}
            <div className="flex flex-col space-y-6 text-left mt-[50px]">
              <p className="text-lg">
                Hi, I'm Usman, a passionate Front End developer with expertise in web development. 
              </p>
              <Link
                to="#contact"
                className="inline-flex h-12 w-40 items-center justify-center rounded-md bg-black px-8 text-sm font-medium text-white hover:bg-black/90 focus:outline-none"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
