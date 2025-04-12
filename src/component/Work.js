import { ArrowDown } from "lucide-react";
import img1 from "../asserts/branding.jpg"
import img2 from "../asserts/mockup.jpg"
import img3 from "../asserts/video.jpg"
import img4 from "../asserts/branding.jpg"
import img5 from "../asserts/mockup2.jpg"

const Work = () => {
  const projects = [
    {
      id: 1,
      image: img1,
      tag: "BRANDING",
      className: "col-span-1 md:col-span-2 row-span-1",
    },
    {
      id: 2,
      image: img2,
      tag: "MOCKUP",
      className: "col-span-1 md:col-span-2 row-span-1",
    },
    {
      id: 3,
      image: img3,
      tag: "VIDEO",
      className: "col-span-1 row-span-1 w-[400px]",
    },
    {
      id: 4,
      image: img4,
      tag: "BRANDING",
      className: "col-span-1 row-span-1 ml-24 w-[400px]",
    },
    {
      id: 5,
      image: img5,
      tag: "MOCKUP",
      className: "col-span-1 row-span-1 ml-48 w-[400px]",
    },
  ];

  return (
    <section className="bg-black text-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="relative mb-12">
          <h2 className="font-handwriting text-3xl md:text-4xl mb-8 relative inline-block">
            Some recent work
            <span className="absolute -left-12 top-full">
              <ArrowDown className="w-8 h-8 transform -rotate-45" />
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-min">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`relative group overflow-hidden rounded-lg ${project.className}`}
            >
              <div className="relative aspect-[4/3] w-full">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt="Project thumbnail"
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105 rounded-lg"
                />
                <div className="absolute top-4 right-4">
                  <span className="px-4 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                    {project.tag}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
