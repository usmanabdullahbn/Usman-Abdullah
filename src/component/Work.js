import { ArrowDown } from "lucide-react";
import img1 from "../asserts/branding.jpg";
import img2 from "../asserts/mockup.jpg";
import img3 from "../asserts/video.jpg";
import img4 from "../asserts/branding.jpg";
import img5 from "../asserts/mockup2.jpg";

const Work = () => {
  const projects = [
    {
      id: 1,
      image: img1,
      tag: "MERN Ecommerce 24",
      className: "col-span-1 md:col-span-2 row-span-1",
      link: "https://mern-ecommerce-frontend-smoky.vercel.app/",
    },
    {
      id: 2,
      image: img2,
      tag: "Comando Fitness Club",
      className: "col-span-1 md:col-span-2 row-span-1",
      link: "https://xtreme-fitness-ruby.vercel.app/",
    },
    {
      id: 3,
      image: img3,
      tag: "Voting App",
      className: "col-span-1 row-span-1 w-full md:w-[400px]",
      link: "https://voting-app-76441.web.app/",
    },
    {
      id: 4,
      image: img4,
      tag: "Admin Dashboard",
      className: "col-span-1 row-span-1 w-full md:w-[400px] md:ml-24",
      link: "https://admin-dashboard-eight-ruby.vercel.app/",
    },
    {
      id: 5,
      image: img5,
      tag: "AI Chatbot",
      className: "col-span-1 row-span-1 w-full md:w-[400px] md:ml-48",
      link: "https://ai-chatbot-917d5.web.app/",
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
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`relative group overflow-hidden rounded-lg block ${project.className}`}
            >
              <div className="relative aspect-[4/3] w-full">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.tag}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105 rounded-lg"
                />
                <div className="absolute top-4 right-4">
                  <span className="px-4 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                    {project.tag}
                  </span>
                </div>
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium">
                    View Project
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
