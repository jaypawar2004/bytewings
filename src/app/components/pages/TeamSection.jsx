// components/TeamSection.jsx
import { Linkedin, Twitter, Users } from "lucide-react";

// Placeholder Avatar
const TeamAvatar = ({ img }) => (
  <div
    className="w-32 h-32 rounded-full mx-auto mb-4 bg-cover bg-center shadow-lg"
    style={{ backgroundImage: `url(${img})` }}
  ></div>
);

const teamMembers = [
  {
    name: "Jay Pawar", // Aapka naam
    role: "Founder & CEO",
    href: "https://www.linkedin.com/in/jay-pawar-b68589273/",
    href2: "https://x.com/JAY_Pawar_20",
    img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop", // Placeholder
  },
  {
    name: "Manish Sharma",
    role: "CTO",
   
    img: "https://plus.unsplash.com/premium_photo-1727942416727-9f16462ef11b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1935", // Placeholder
  },
  {
    name: "Abhishek",
    role: "CMO",
     href: "https://www.linkedin.com/in/abhishek-gayakwad-44b769222?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    href2: "https://x.com/AbhishekGayakwad",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1974", // Placeholder
  },
];

export default function TeamSection() {
  return (
    <section className="relative w-full py-20 sm:py-28 overflow-hidden bg-white">
      {/* Floating Element */}
      <Users
        className="absolute top-[15%] right-[10%] text-gray-300 animate-float"
        size={32}
        style={{ animationDelay: "2s" }}
      />

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold font-primary text-gray-900 mb-4">
            Meet Our Expert Team
          </h2>
          <p className="text-lg text-gray-600">
           At ByteWings, our expert team is driven by passion and purpose — transforming your ideas into powerful digital experiences.          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="bg-gray-50/50 p-8 rounded-xl shadow-lg border border-gray-100 text-center"
            >
              <TeamAvatar img={member.img} />
              <h3 className="text-xl font-semibold font-primary text-gray-800 mb-1">
                {member.name}
              </h3>
              <p className="text-teal-600 font-medium mb-4">{member.role}</p>
              <div className="flex justify-center space-x-4">
                <a href={member.href} _target="_blank"  className="text-gray-500 hover:text-gray-800">
                  <Linkedin size={20} />
                </a>
                <a href={member.href2}className="text-gray-500 hover:text-gray-800">
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}