import { Facebook, Linkedin, Youtube, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#006341] text-white !pt-16 mt-20" >
      {/* Territorial Acknowledgement */}
      <div className="max-w-7xl mx-auto px-6 text-left">
        <h2 className="text-3xl md:text-4xl font-light mb-4">
          <span className="text-[#FFDB05] font-semibold">
            Territorial Acknowledgement
          </span>
        </h2>
        <p className="text-lg max-w-5xl">
          The University of Alberta, its buildings, labs and research stations
          are primarily located on the territory of the Néhiyaw (Cree),
          Niitsitapi (Blackfoot), Métis, Nakoda (Stoney), Dene, Haudenosaunee
          (Iroquois) and Anishinaabe (Ojibway/Saulteaux), lands that are now
          known as part of Treaties 6, 7 and 8 and homeland of the Métis. The
          University of Alberta respects the sovereignty, lands, histories,
          languages, knowledge systems and cultures of all First Nations, Métis
          and Inuit nations.
        </p>
      </div>

      <div className="border-t border-green-400 mt-10 pt-12 pb-8">
        {/* Footer Grid */}
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-sm font-light">
          <div>
            <h4 className="font-bold text-white mb-2">ABOUT US</h4>
            <ul className="space-y-1">
              <li>Contact Us</li>
              <li>Media Relations</li>
              <li>Careers</li>
              <li>News</li>
              <li>Events</li>
              <li>Giving</li>
              <li>In Memoriam</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-2">CAMPUS INFO</h4>
            <ul className="space-y-1">
              <li>Maps</li>
              <li>Building Hours</li>
              <li>Bookstore</li>
              <li>Library</li>
              <li>Parking</li>
              <li>Museums</li>
              <li>Recreation</li>
              <li>Athletics</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-2">STUDENT INFORMATION</h4>
            <ul className="space-y-1">
              <li>University Calendar</li>
              <li>Registrar</li>
              <li>Students’ Union</li>
              <li>Grad Students’ Assoc.</li>
              <li>Residence</li>
              <li>Dining Services</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-2">SERVICES</h4>
            <ul className="space-y-1">
              <li>Emergencies</li>
              <li>Campus Security</li>
              <li>Support During a Crisis</li>
              <li>IT Help</li>
              <li>Maintenance Request</li>
              <li>Associations</li>
              <li>Staff Services</li>
              <li>Alumni Services</li>
              <li>Research Services</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-2">TOOLS + APPS</h4>
            <ul className="space-y-1">
              <li>Canvas</li>
              <li>eClass</li>
              <li>ONEcard</li>
              <li>Bear Tracks</li>
              <li>CERegister</li>
              <li>Email + Apps</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-2">ADMINISTRATION</h4>
            <ul className="space-y-1">
              <li>President</li>
              <li>Leadership</li>
              <li>Governance</li>
              <li>Policies + Procedures</li>
              <li>Privacy Statement</li>
              <li>Reporting</li>
              <li>Compensation Disclosure</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-green-500 pt-6 px-6 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm">
          {/* Social Icons */}
          <div className="flex space-x-4 mb-4 md:mb-0">
            <Linkedin size={18} />
            <Facebook size={18} />
            <Twitter size={18} />
            <Youtube size={18} />
            <Instagram size={18} />
          </div>

          {/* University Branding */}
          <div className="text-center text-gray-300">
            <strong className="block text-white text-lg">
              UNIVERSITY OF ALBERTA
            </strong>
            <span className="text-sm">
              © 2025 University of Alberta. All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
