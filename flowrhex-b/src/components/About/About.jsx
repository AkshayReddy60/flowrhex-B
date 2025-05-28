import { FaGem, FaCamera, FaCloud, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { BiSolidTagAlt } from 'react-icons/bi';
import { Link, useNavigate } from 'react-router-dom';
import cardone from '../../assets/cardone.png';
import cardtwo from '../../assets/cardtwo.png';
import cardthird from '../../assets/cardthird.png';
import { motion } from "framer-motion";

const MotionIcon = ({ IconComponent }) => (
  <motion.div
    whileHover={{
      scale: 2.0,
      backgroundColor: "#f87171", // Tailwind red-400
    }}
    transition={{
      type: "spring",
      stiffness: 300,
    }}
    className="text-white text-2xl"  
  >
    <IconComponent />
  </motion.div>
);


const teamMembers = [
  {
    id: "abhijeet-kulkarni",
    name: "Abhijeet Kulkarni",
    title: "Managing Director and CEO",
    image: cardone,
    description: "Abhijeet is our team leader and also looking over management of the firm. With excellent academic record throughout, he completed Master of Technology in Chemical Engineering from NIT Warangal with project thesis based on Process Design and Control in Continuous Systems.",
    fullDetails: "He has more than 10 years of industry experience...",
    linkedin: "https://www.linkedin.com/in/abhijeet-kulkarni-65126479/",
    facebook: "https://www.facebook.com/kulkarni.abhijeet121"
  },
  {
    id: "amol-raykar",
    name: "Amol Raykar",
    title: "Director and COO",
    image: cardtwo,
    description: "Amol looks after sales and marketing of the firm. He completed Master of Technology in Chemical Engineering from NIT Warangal with project thesis based on intensified separation processes.",
    fullDetails: "His work experience is related to consulting for new chemical plant setups...",
    linkedin: "https://www.linkedin.com/in/amol-raykar-0198a153/",
    facebook: "https://www.facebook.com/amol.raykar.77"
  },
  {
    id: "medidi-satyarakesh",
    name: "Medidi Satyarakesh",
    title: "Chief Technology Officer",
    image: cardthird,
    description: "Satyarakesh joined FlowRHEX® as an Application Manager in 2018. He pursued his Bachelor's of technology (B.Tech) in Chemical Engineering from Andhra University and Master of Technology (M.Tech) from NIT Warangal.",
    fullDetails: "He currently heads the technology development and application engineering division...",
    linkedin: "https://www.linkedin.com/in/satyarakesh-medidi/",
    facebook: "https://www.facebook.com/satya.rakesh.1"
  },
];

const AboutCard = ({ icon, title, text }) => (
  <div className="flex items-start gap-4">
    <div className="bg-teal-400 p-3 rounded shadow-md">{icon}</div>
    <div>
      <h3 className="text-xl font-semibold transition-colors duration-300 hover:text-[#EC5342] cursor-pointer">{title}</h3>
      <p className="font-roboto text-[15px] font-normal leading-[19px] text-[rgb(145,152,153)]">
        {text}
      </p>
    </div>
  </div>
);

const TeamCard = ({ member }) => {
  const navigate = useNavigate();

  const handleReadMore = () => {
    navigate(`/team/${member.id}`);
  };

  return (
    <div className="bg-white shadow-md border border-gray-300 rounded-lg p-6 text-center">
      <img
        src={member.image}
        alt={member.name}
        className="w-58 h-70 object-cover mx-auto rounded"
      />
      <h3 className="mt-4 text-xl font-bold text-gray-900">{member.name}</h3>
      <p className="font-roboto text-[16px] font-medium leading-[24px] text-[rgb(236,92,66)] mt-1">
        {member.title}
      </p>
      <p className="font-roboto text-[15px] font-normal leading-[19px] text-[rgb(145,152,153)]">
        {member.description}
      </p>
      <button
        onClick={handleReadMore}
        className="text-teal-500 text-sm mt-2 inline-block hover:underline"
      >
        Read More
      </button>
      <div className="flex justify-center gap-4 mt-4 text-gray-600">
        <a href={member.facebook} aria-label="Facebook" className="hover:text-blue-600" target="_blank" rel="noopener noreferrer">
          <FaFacebookF />
        </a>
        <a href={member.linkedin} aria-label="LinkedIn" className="hover:text-blue-800" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn />
        </a>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <div className="font-sans text-gray-700">
      {/* Hero Banner */}
      <section className="bg-[#234146] text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold">About Us</h1>
          <p className="mt-2 text-teal-300">
            <Link to="/" className="text-white hover:underline">Home</Link> / <span className="text-[rgb(236,92,66)]">About</span>
          </p>
        </div>
      </section>

      {/* About Cards Section */}
      <section className="py-16 bg-white">
        <div className="text-left mb-12 max-w-7xl mx-auto px-6">
          <h2 className="font-roboto text-[35px] font-medium leading-[46px] text-[rgb(17,51,58)]">
            About <span className="text-[rgb(17,51,58)]">FlowRHEX®</span>
          </h2>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6">
          <AboutCard
            icon={<MotionIcon IconComponent={FaGem} />}
            title="Our Profile"
            text="We are process intensification enthusiasts..."
          />
          <AboutCard
            icon={<MotionIcon IconComponent={BiSolidTagAlt} />}
            title="We are a Startup!!!"
            text="FlowRHEX® is a DIPP, Govt. of India recognized startup..."
          />
          <AboutCard
            icon={<MotionIcon IconComponent={FaCloud} />}
            title="Our Mission"
            text="To make conventional chemical production routes greener, safer, smaller..."
          />
          <AboutCard
            icon={<MotionIcon IconComponent={FaCloud} />}
            title="Our Vision"
            text="To make process intensification and flow chemistry, available, applicable and affordable..."
          />
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <TeamCard key={index} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Collaborations Section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
         <h2 className="font-roboto text-[40px] font-medium leading-[40px] text-[rgb(17,51,58)] mb-8">
  Our Collaborations
</h2>
         <p className="font-roboto text-[17px] font-normal leading-[24px] text-[rgb(119,119,119)] mb-6">
  FlowRHEX® Technologies as an intensified technology provider looking to develop relations with academia as well as intensification related entities. With this collaboration, our aim is to give opportunity for fresher students to develop latest technological knowledge and create an interface between academic institutes and industry.
</p>
          <p className="font-roboto text-[17px] font-normal leading-[24px] text-[rgb(119,119,119)] mb-6">
            Currently we have collaboration with Chemical Engineering Department, NIT Warangal, Telangana. With the team post graduated from NIT, Warangal FlowRHEX® Technologies look to continue the relation with the department. Assc. Prof. Dr. Shirish Sonawane is our mentor giving technical guidance as process intensification specialist. Other staff also provides background whenever required. We look forward to utilize the elite experience, knowledge and guidance from our professors for nourishment of our startup.
          </p>
          <ul className="font-roboto text-[17px] font-normal leading-[24px] text-[rgb(119,119,119)] mb-6">
            <li>
              FlowRHEX® as an intensified technology provider looking to develop relations with academia as well as intensification related entities. With this collaboration, our aim is to give opportunity for fresher students to develop latest technological knowledge and create an interface between academic institutes and industry.
            </li>
            <li>
              Currently we have collaboration with Chemical Engineering Department, NIT Warangal, Telangana. With the team post graduated from NIT, Warangal FlowRHEX® looks to continue the relation with the department. We receive needed support from all the professors and staff. We look forward to utilize the elite experience, knowledge and guidance from our professors for nourishment of our startup.
            </li>
            <li>
              Through Incubation Centre and support from Chemical Engineering Department from NIT Warangal we have established a flow chemistry research lab. Product development and Product Demonstrations happen mainly from FlowRHEX® lab.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default About;

