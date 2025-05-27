import { useParams, Link } from 'react-router-dom';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import cardone from '../../assets/cardone.png';
import cardtwo from '../../assets/cardtwo.png';
import cardthird from '../../assets/cardthird.png';

const teamMembers = [
  {
    id: "abhijeet-kulkarni",
    name: "Abhijeet Kulkarni",
    title: "Managing Director and CEO",
    image: cardone,
    description: "Abhijeet is our team leader and also looking over management of the firm. With excellent academic record throughout, he completed Master of Technology in Chemical Engineering from NIT Warangal with project thesis based on Process Design and Control in Continuous Systems.",
    fullDetails: "He has more than 10 years of industry experience specializing in flow chemistry and intensified flow reactors. With his excellent leadership qualities, technical knowledge and innovative ideas, FLOWRHEX Technologies is developing many intensified solutions for unit operations in chemical industry. His expertise includes process intensification, microreactors, and continuous flow systems.",
    linkedin: "https://www.linkedin.com/in/abhijeet-kulkarni-65126479/",
    facebook: "https://www.facebook.com/kulkarni.abhijeet121"
  },
  {
    id: "amol-raykar",
    name: "Amol Raykar",
    title: "Director and COO",
    image: cardtwo,
    description: "Amol looks after sales and marketing of the firm. He completed Master of Technology in Chemical Engineering from NIT Warangal with project thesis based on intensified separation processes.",
    fullDetails: "His work experience is related to consulting for new chemical plant setups and pilot scale testing of flow reactors. With over 8 years in the field, he has successfully implemented numerous flow chemistry solutions for clients across India. His specialties include business development, client relations, and scaling up laboratory processes to industrial production.",
    linkedin: "https://www.linkedin.com/in/amol-raykar-0198a153/",
    facebook: "https://www.facebook.com/amol.raykar.77"
  },
  {
    id: "medidi-satyarakesh",
    name: "Medidi Satyarakesh",
    title: "Chief Technology Officer",
    image: cardthird,
    description: "Satyarakesh joined FlowRHEX® as an Application Manager in 2018. He pursued his Bachelor's of technology (B.Tech) in Chemical Engineering from Andhra University and Master of Technology (M.Tech) from NIT Warangal.",
    fullDetails: "He currently heads the technology development and application engineering division. With expertise in both theoretical and applied chemical engineering, he has led the development of several proprietary reactor designs. His research focuses on optimizing reaction conditions for flow chemistry applications and developing novel reactor configurations for challenging chemical processes.",
    linkedin: "https://www.linkedin.com/in/satyarakesh-medidi/",
    facebook: "https://www.facebook.com/satya.rakesh.1"
  },
];

const TeamMemberDetails = () => {
  const { id } = useParams();
  const member = teamMembers.find(m => m.id === id);

  if (!member) {
    return (
      <div className="p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Team Member Not Found</h2>
        <Link to="/about" className="text-teal-500 hover:underline">
          Back to About Us
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 font-sans text-gray-700">
      <Link to="/about" className="text-teal-500 hover:underline mb-6 inline-block">
        &larr; Back to About Us
      </Link>

      <div className="bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold text-gray-900">{member.name}</h1>
        <p className="text-xl text-red-600 font-semibold mt-1">{member.title}</p>
        <div className="flex flex-col md:flex-row gap-6 mt-6">
          <img
            src={member.image}
            alt={member.name}
            className="w-48 h-60 object-cover rounded"
          />
          <div>
            <p className="mb-4 text-gray-700">{member.description}</p>
            <p className="text-gray-700">{member.fullDetails}</p>
            <div className="flex gap-4 mt-6 text-gray-600">
              <a href={member.facebook} aria-label="Facebook" className="hover:text-blue-600" target="_blank" rel="noopener noreferrer">
                <FaFacebookF className="text-xl" />
              </a>
              <a href={member.linkedin} aria-label="LinkedIn" className="hover:text-blue-800" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn className="text-xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberDetails;
