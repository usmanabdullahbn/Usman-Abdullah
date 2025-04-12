import { ArrowRight } from "lucide-react";
import img1 from "../asserts/blog/blog1.jpg"
import img2 from "../asserts/blog/blog2.jpg"
import img3 from "../asserts/blog/blog3.jpg"

const StoriesSection = () => {
  const stories = [
    {
      id: 1,
      title: "CREATE A LANDING PAGE THAT PERFORMS GREAT",
      category: "HELP",
      date: "POSTED ON AUG 28",
      image: img1,
      link: "#",
    },
    {
      id: 2,
      title: "STARTING AND GROWING A CAREER IN WEB DESIGN",
      category: "BRANDING",
      date: "POSTED ON AUG 28",
      image: img2,
      link: "#",
    },
    {
      id: 3,
      title: "HOW CAN DESIGNERS PREPARE FOR THE FUTURE?",
      category: "DESIGN",
      date: "POSTED ON AUG 28",
      image: img3,
      link: "#",
    },
  ];

  return (
    <section className="bg-black text-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <h1 className="text-5xl md:text-6xl font-bold mb-16 md:mb-20">STORIES</h1>

        <div className="space-y-8">
          {stories.map((story) => (
            <div key={story.id} className="border border-zinc-800 rounded-lg overflow-hidden">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative aspect-[4/3] md:aspect-auto">
                  <img src={story.image} alt={story.title} className="w-full h-full object-cover" />
                  <span className="absolute top-4 left-4 px-4 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm">
                    {story.category}
                  </span>
                </div>

                <div className="p-8 md:py-12 flex flex-col justify-center">
                  <div className="space-y-4">
                    <p className="text-zinc-400 text-sm">{story.date}</p>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">{story.title}</h2>
                    <a
                      href={story.link}
                      className="inline-flex items-center gap-2 border bg-[#F7F7F7] px-6 py-3 rounded-lg text-black hover:border-[#F7F7F7] hover:bg-black hover:text-white  transition"
                    >
                      Read more
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StoriesSection;
