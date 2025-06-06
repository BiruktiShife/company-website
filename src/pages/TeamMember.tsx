import { useParams } from 'react-router-dom';
import { Star, Award, BookOpen, Briefcase, Users, Phone, Mail } from 'lucide-react';
import { Button } from '../components/Button';

const teamMembers = {
  'yoseph-desta': {
    name: 'Yoseph Desta',
    role: 'Managing Partner',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    rating: 5,
    experience: '25+ years',
    education: [
      'J.D., Harvard Law School',
      'B.A. in Law, Addis Ababa University',
    ],
    expertise: [
      'Commercial Litigation',
      'Corporate Law',
      'International Arbitration',
      'Mergers & Acquisitions',
    ],
    languages: ['English', 'Amharic'],
    bio: `Yoseph Desta is the founding partner of Yoseph Desta Law Office, with over 25 years of experience in commercial litigation and corporate law. He has successfully represented clients in complex international arbitrations and high-stakes commercial disputes.

Mr. Desta has been consistently recognized as one of Ethiopia's leading lawyers in commercial litigation and corporate law. He has handled numerous landmark cases that have shaped Ethiopian commercial law.`,
    achievements: [
      'Named "Lawyer of the Year" by Ethiopian Legal Excellence Awards (2023)',
      'Fellow of the Ethiopian Institute of Arbitrators',
      'Board Member, Ethiopian Bar Association',
      'Published author of "Commercial Law in Ethiopia: A Practical Guide"',
    ],
    recentCases: [
      'Successfully represented a major international corporation in a $50M commercial dispute',
      "Led the legal team in one of Ethiopia's largest merger transactions",
      'Obtained a landmark ruling in a complex international arbitration case',
    ],
  },
};

export function TeamMember() {
  const { id } = useParams();
  const member = teamMembers[id as keyof typeof teamMembers];

  if (!member) {
    return <div>Member not found</div>;
  }

  return (
    <div className="pt-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative">
            <img src={member.image} alt={member.name} className="w-full h-[600px] object-cover rounded-lg shadow-xl" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
              <div className="flex items-center space-x-2 text-yellow-400 mb-2">
                {[...Array(member.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <p className="text-white text-sm">{member.experience} of Experience</p>
            </div>
          </div>
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">{member.name}</h1>
            <p className="text-xl text-accent mb-6">{member.role}</p>
            <div className="prose prose-lg text-gray-600 mb-8">
              {member.bio.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            <div className="flex space-x-4">
              <Button className="flex items-center">
                <Phone className="mr-2 h-5 w-5" /> Contact Now
              </Button>
              <Button variant="outline" className="flex items-center">
                <Mail className="mr-2 h-5 w-5" /> Send Email
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
