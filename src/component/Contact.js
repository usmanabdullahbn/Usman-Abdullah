import { Link } from "react-router-dom";
import { MapPin, Headphones, Mail, Facebook, Twitter, Linkedin, Github, User, Send, Instagram } from "lucide-react";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
  };

  return (
    <section className="w-full bg-[#F4F3ED] font-poppins py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-[1400px] mx-auto">
          {/* Heading */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-16">CONTACT ME</h1>

          <div className="grid md:grid-cols-2 ml-8">
            {/* Left Column - Contact Info */}
            <div className="space-y-12 text-lg md:text-xl">
              {/* Office */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <MapPin className="w-7 h-7" />
                  <h2 className="font-bold text-2xl">OUR OFFICE:</h2>
                </div>
                <p className="text-gray-600 pl-8">Shah-e-Faisal,Karachi Pakistan</p>
              </div>

              {/* Contact Number */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Headphones className="w-7 h-7" />
                  <h2 className="font-bold text-2xl">CONTACT NUMBER:</h2>
                </div>
                <p className="text-gray-600 pl-8">+923492045983</p>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Mail className="w-7 h-7" />
                  <h2 className="font-bold text-2xl">EMAIL US:</h2>
                </div>
                <p className="text-gray-600 pl-8">usmanabdullahbn@mail.com</p>
              </div>

              {/* Socials */}
              <div className="space-y-4">
                <h2 className="font-bold text-2xl">SOCIALS</h2>
                <div className="flex gap-4 pl-4">
                  <Link to="https://www.instagram.com/usmanabdullahbn" className="p-3 bg-white rounded-md hover:bg-gray-50">
                    <Instagram className="w-6 h-6" />
                  </Link>
                  <Link to="https://www.instagram.com/usmanabdullahbn" className="p-3 bg-white rounded-md hover:bg-gray-50">
                    <Facebook className="w-6 h-6" />
                  </Link>
                  <Link to="https://www.linkedin.com/in/usman-abdullah-061a3623a/" className="p-3 bg-white rounded-md hover:bg-gray-50">
                    <Linkedin className="w-6 h-6" />
                  </Link>
                  <Link to="https://github.com/usmanabdullahbn" className="p-3 bg-white rounded-md hover:bg-gray-50">
                    <Github className="w-6 h-6" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">FULL NAME</label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Steve Milner"
                      className="w-full p-4 bg-white rounded-lg pl-4 pr-10"
                    />
                    <User className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">EMAIL ADDRESS</label>
                  <div className="relative">
                    <input
                      type="email"
                      placeholder="hello@websitename.com"
                      className="w-full p-4 bg-white rounded-lg pl-4 pr-10"
                    />
                    <Mail className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">SUBJECT</label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Your Subject"
                      className="w-full p-4 bg-white rounded-lg pl-4 pr-10"
                    />
                    <User className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">YOUR MESSAGE</label>
                  <textarea
                    placeholder="Write Your message"
                    rows={6}
                    className="w-full p-4 bg-white rounded-lg resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="flex items-center gap-2 bg-black text-white px-6 py-4 rounded-lg hover:bg-black/90 transition-colors"
                >
                  Send Me Message
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;