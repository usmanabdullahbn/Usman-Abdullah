import React from 'react'

const About = () => {
    return (
        <section className="w-full bg-black text-white py-24 font-poppins">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-[1400px] mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                {/* Heading - Takes up 3 columns */}
                <div className="md:col-span-3">
                  <h2 className="text-[24px]">About Me</h2>
                </div>
    
                {/* Description - Takes up 9 columns */}
                <div className="md:col-span-9">
                  <p className="text-[24px]">
                    I am currently expanding my skillset to encompass full(mern)-stack development. With a strong foundation in Front-End Development and React experience. I am working on cool Projects like an e-commerce platform. I am committed to honing my abilities and contributing to meaningful projects that make a difference.
                  </p>
    
                  {/* Stats */}
                  {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12 mt-20">
                    <div>
                      <h3 className="text-[56px] md:text-[64px] font-bold mb-1 leading-none">8+</h3>
                      <p className="text-[18px] text-gray-400 font-light">Years Of Experience</p>
                    </div>
                    <div>
                      <h3 className="text-[56px] md:text-[64px] font-bold mb-1 leading-none">1k+</h3>
                      <p className="text-[18px] text-gray-400 font-light">Completed Projects</p>
                    </div>
                    <div>
                      <h3 className="text-[56px] md:text-[64px] font-bold mb-1 leading-none">90%+</h3>
                      <p className="text-[18px] text-gray-400 font-light">Client Satisfactions</p>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </section>
      )
}

export default About