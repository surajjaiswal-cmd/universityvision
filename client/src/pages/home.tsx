import { motion } from "framer-motion";
import { Lightbulb, Globe, Cpu, Users, Building, MapPin, Award, BookOpen } from "lucide-react";
import Footer from "./footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* University Header */}
      <header className="bg-ua-burgundy text-white py-6 border-b-4 border-ua-gold">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <div className="w-16 h-16 bg-ua-gold flex items-center justify-center rounded-full">
                <Building className="w-10 h-10 text-ua-burgundy" />
              </div>
              <div>
                <h1 className="text-3xl font-bold tracking-wide">
                  UNIVERSITY OF ALBERTA
                </h1>
                <p className="text-sm text-orange-200 font-medium">
                  Est. 1908 • Edmonton, Alberta
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://preview.ualberta.ca/en/research/media-library/innovation-2023/northcampus-divider-2800x1000.jpg')",
          }}>
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center min-h-screen">
          <div className="max-w-7xl mx-auto px-8 py-32">
            <motion.div
              className="text-center text-white"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}>
              <div className="mb-16">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-light mb-10 leading-tight">
                  Where Ideas Begin.
                  <br />
                  <span className="text-ua-gold font-bold">
                    Where Futures Are Shaped.
                  </span>
                </h1>
                <div className="w-40 h-2 bg-gradient-to-r from-ua-gold to-ua-green mx-auto mb-10"></div>
                <p className="text-2xl md:text-3xl max-w-5xl mx-auto leading-relaxed font-light opacity-95">
                  A distinguished community of scholars, researchers, and
                  innovators committed to academic excellence and transformative
                  discovery.
                </p>
              </div>

              {/* University Emblem */}
              <motion.div
                className="inline-flex items-center justify-center w-40 h-40 bg-gradient-to-br from-ua-gold/20 to-white/10 backdrop-blur-sm rounded-full mb-12 shadow-xl border-2 border-ua-gold"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}>
                <BookOpen className="w-20 h-20 text-ua-gold" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* University at a Glance */}
      <section className="py-24 bg-white border-t-4 border-ua-green shadow-sm">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}>
            <h2 className="text-5xl font-light ua-burgundy mb-6 tracking-wide">
              INSTITUTIONAL DISTINCTION
            </h2>
            <div className="w-24 h-2 bg-gradient-to-r from-ua-gold to-ua-green mx-auto mb-8"></div>
            <p className="text-xl ua-text-dark max-w-4xl mx-auto leading-relaxed">
              Since 1908, the University of Alberta has emerged as Canada's
              leading comprehensive research university, committed to
              transforming lives through innovative teaching, groundbreaking
              research, and meaningful community partnerships.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                number: "200+",
                title: "Academic Programs",
                description:
                  "Comprehensive undergraduate, graduate, and professional degree offerings across all major disciplines.",
                icon: <BookOpen className="w-10 h-10 text-ua-green" />,
              },
              {
                number: "140+",
                title: "Countries Represented",
                description:
                  "International student body fostering global perspectives and cultural diversity.",
                icon: <Globe className="w-10 h-10 text-ua-green" />,
              },
              {
                number: "Top 5",
                title: "Research University",
                description:
                  "Nationally ranked research institution driving innovation and scholarly excellence.",
                icon: <Award className="w-10 h-10 text-ua-green" />,
              },
              {
                number: "300,000+",
                title: "Alumni Network",
                description:
                  "Global community of graduates leading in academia, industry, and public service.",
                icon: <Users className="w-10 h-10 text-ua-green" />,
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-ua-cream to-white p-10 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-ua-burgundy"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}>
                <div className="text-center">
                  <div className="flex justify-center mb-6">{stat.icon}</div>
                  <div className="text-5xl font-light ua-burgundy mb-6">
                    {stat.number}
                  </div>
                  <h3 className="text-xl font-semibold ua-navy mb-4">
                    {stat.title}
                  </h3>
                  <p className="text-sm ua-text-dark leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Focus Areas */}
      <section className="py-24 bg-gradient-to-br from-ua-light-green to-ua-cream border-t-4 border-ua-burgundy">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}>
            <h2 className="text-5xl font-light ua-burgundy mb-6 tracking-wide">
              ACADEMIC EXCELLENCE
            </h2>
            <div className="w-24 h-2 bg-gradient-to-r from-ua-gold to-ua-green mx-auto mb-8"></div>
            <p className="text-xl ua-text-dark max-w-4xl mx-auto leading-relaxed">
              Our distinguished faculties and schools champion excellence across
              diverse academic disciplines, fostering innovative
              interdisciplinary collaboration and transformative research
              initiatives.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                image:
                  "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
                title: "Indigenous Knowledge and Reconciliation",
                description:
                  "Integrating traditional knowledge systems with contemporary academic inquiry through collaborative partnerships with Indigenous communities.",
                faculty: "Faculty of Native Studies",
              },
              {
                image:
                  "https://www.ualberta.ca/en/media-library/new-brand/homepage/homepage-walterdale-bridge.jpg",
                title: "Engineering and Applied Sciences",
                description:
                  "Advancing technological innovation and sustainable engineering solutions for complex global challenges in urban development and infrastructure.",
                faculty: "Faculty of Engineering",
              },
              {
                image:
                  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
                title: "Student Leadership and Governance",
                description:
                  "Developing future leaders through student government, research initiatives, and community engagement programs that address societal needs.",
                faculty: "Student Affairs",
              },
              {
                image:
                  "https://www.ualberta.ca/media-library/indigenous-excellence/indigenous-excellence-homepage-1636x780.jpg",
                title: "Global Alumni Network",
                description:
                  "Our distinguished graduates contribute to international leadership in academia, industry, government, and non-profit sectors worldwide.",
                faculty: "Alumni Relations",
              },
            ].map((area, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-ua-dark-gray"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}>
                <div className="relative overflow-hidden">
                  <img
                    src={area.image}
                    alt={area.title}
                    className="w-full h-52 object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-ua-burgundy text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    {area.faculty}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold ua-burgundy mb-4">
                    {area.title}
                  </h3>
                  <p className="text-sm ua-text-dark leading-relaxed">
                    {area.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Excellence */}
      <section className="py-24 bg-white border-t-4 border-ua-green">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}>
            <h2 className="text-5xl font-light ua-burgundy mb-6 tracking-wide">
              RESEARCH INNOVATION
            </h2>
            <div className="w-24 h-2 bg-gradient-to-r from-ua-gold to-ua-green mx-auto mb-8"></div>
            <p className="text-xl ua-text-dark max-w-4xl mx-auto leading-relaxed">
              As a distinguished research-intensive institution, we advance
              human knowledge through pioneering scholarly inquiry, cutting-edge
              technological innovation, and strategic collaborative partnerships
              addressing society's most complex challenges.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: <Lightbulb className="w-12 h-12 text-ua-green" />,
                title: "Health Sciences and Biomedical Research",
                description:
                  "Faculty of Medicine & Dentistry and School of Public Health lead groundbreaking research in clinical medicine, health policy, and biomedical innovation.",
                metrics: "$180M Annual Research Funding",
              },
              {
                icon: <Globe className="w-12 h-12 text-ua-green" />,
                title: "Environmental and Earth Sciences",
                description:
                  "Faculty of Science conducts critical research in climate change, sustainable energy, and environmental conservation through interdisciplinary collaboration.",
                metrics: "50+ Research Centers",
              },
              {
                icon: <Cpu className="w-12 h-12 text-ua-green" />,
                title: "Computing and Information Technology",
                description:
                  "Department of Computing Science advances artificial intelligence, machine learning, and computational research with industry partnerships.",
                metrics: "Top 50 Global CS Program",
              },
              {
                icon: <Users className="w-12 h-12 text-ua-green" />,
                title: "Social Sciences and Humanities",
                description:
                  "Faculty of Arts explores cultural identity, social policy, and human behavior through rigorous academic research and community engagement.",
                metrics: "15+ Research Institutes",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-ua-cream to-white p-10 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-ua-burgundy"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}>
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 p-3 bg-ua-burgundy rounded-full">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold ua-burgundy mb-4">
                      {item.title}
                    </h3>
                    <p className="text-sm ua-text-dark leading-relaxed mb-6">
                      {item.description}
                    </p>
                    <div className="inline-block bg-ua-gold text-ua-burgundy px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider">
                      {item.metrics}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* University News and Events */}
      <section className="py-24 bg-gradient-to-br from-ua-light-green to-ua-cream border-t-4 border-ua-burgundy">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}>
            <h2 className="text-5xl font-light ua-burgundy mb-6 tracking-wide">
              CAMPUS LIFE & EVENTS
            </h2>
            <div className="w-24 h-2 bg-gradient-to-r from-ua-gold to-ua-green mx-auto mb-8"></div>
            <p className="text-xl ua-text-dark max-w-4xl mx-auto leading-relaxed">
              Stay connected with our vibrant academic calendar, groundbreaking
              research announcements, and transformative institutional
              developments across our dynamic campus community.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Academic Calendar */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}>
              <h3 className="text-3xl font-semibold ua-burgundy mb-10">
                Academic Calendar
              </h3>
              <div className="space-y-6">
                {[
                  {
                    date: { month: "JUL", days: "14-18" },
                    title: "Campus Sustainability Week",
                    description:
                      "University-wide sustainability initiatives including research presentations, policy forums, and community engagement activities.",
                    type: "Special Event",
                  },
                  {
                    date: { month: "OCT", days: "10" },
                    title: "Fall Convocation 2025",
                    description:
                      "Formal graduation ceremony celebrating academic achievement across all faculties and degree programs.",
                    type: "Convocation",
                  },
                  {
                    date: { month: "NOV", days: "2" },
                    title: "International Research Symposium",
                    description:
                      "Annual scholarly conference featuring collaborative research presentations from global academic partners.",
                    type: "Academic Conference",
                  },
                ].map((event, index) => (
                  <motion.div
                    key={index}
                    className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-ua-dark-gray"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -3 }}>
                    <div className="flex items-start space-x-6">
                      <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-ua-burgundy to-ua-navy flex items-center justify-center text-white rounded-lg">
                        <div className="text-center">
                          <div className="text-xs font-bold">
                            {event.date.month}
                          </div>
                          <div className="text-lg font-bold">
                            {event.date.days}
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="inline-block bg-ua-gold text-ua-burgundy px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
                          {event.type}
                        </div>
                        <h4 className="text-xl font-semibold mb-3 ua-burgundy">
                          {event.title}
                        </h4>
                        <p className="text-sm ua-text-dark leading-relaxed">
                          {event.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* University News */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}>
              <h3 className="text-3xl font-semibold ua-burgundy mb-10">
                University News
              </h3>
              <div className="space-y-6">
                {[
                  {
                    image:
                      "https://www.ualberta.ca/en/media-library/new-brand/a-and-p/hands-on-research.jpg",
                    title: "Arctic Climate Research Initiative",
                    description:
                      "Faculty of Science researchers receive major federal funding for groundbreaking climate change studies in the Canadian Arctic.",
                    category: "Research News",
                  },
                  {
                    image:
                      "https://www.ualberta.ca/en/media-library/new-brand/a-and-p/chemistry-lab.jpg",
                    title: "Student Innovation Award Recognition",
                    description:
                      "University of Alberta students receive international recognition for sustainable technology solutions and social entrepreneurship.",
                    category: "Student Achievement",
                  },
                  {
                    image:
                      "https://www.ualberta.ca/en/media-library/new-brand/a-and-p/funding.jpg",
                    title: "Engineering Diversity Milestone",
                    description:
                      "Faculty of Engineering celebrates ten years of successful diversity and inclusion programming in STEM education.",
                    category: "Faculty News",
                  },
                ].map((news, index) => (
                  <motion.div
                    key={index}
                    className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-ua-dark-gray"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -3 }}>
                    <div className="flex items-start space-x-6">
                      <img
                        src={news.image}
                        alt={news.title}
                        className="w-24 h-24 object-cover rounded-lg"
                      />
                      <div>
                        <div className="inline-block bg-ua-gold text-ua-burgundy px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
                          {news.category}
                        </div>
                        <h4 className="text-xl font-semibold mb-3 ua-burgundy">
                          {news.title}
                        </h4>
                        <p className="text-sm ua-text-dark leading-relaxed">
                          {news.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Campus Information */}
      <section className="py-20 bg-white border-t-4 border-ua-green">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}>
            <h2 className="text-4xl font-bold ua-navy mb-4 uppercase tracking-wider">
              CAMPUS LOCATIONS & GLOBAL REACH
            </h2>
            <div className="w-20 h-1 bg-ua-gold mx-auto mb-6"></div>
            <p className="text-lg ua-text-dark max-w-3xl mx-auto">
              The University of Alberta operates multiple campus locations
              across Alberta while maintaining strategic international
              partnerships and global academic collaborations.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}>
            <div className="bg-ua-gray p-6 border-2 border-ua-dark-gray">
              <img
                src="https://www.ualberta.ca/en/media-library/new-brand/homepage/augustana-campus.jpeg"
                alt="North Campus - Edmonton"
                className="w-full h-48 object-cover mb-4"
              />
              <h3 className="text-lg font-bold ua-navy mb-2 uppercase tracking-wide">
                North Campus - Edmonton
              </h3>
              <p className="text-sm ua-text-dark">
                Main campus featuring comprehensive academic facilities,
                research centers, and student services.
              </p>
            </div>
            <div className="bg-ua-gray p-6 border-2 border-ua-dark-gray">
              <img
                src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400"
                alt="Campus Saint-Jean"
                className="w-full h-48 object-cover mb-4"
              />
              <h3 className="text-lg font-bold ua-navy mb-2 uppercase tracking-wide">
                Campus Saint-Jean
              </h3>
              <p className="text-sm ua-text-dark">
                French-language campus offering undergraduate and graduate
                programs in francophone education.
              </p>
            </div>
            <div className="bg-ua-gray p-6 border-2 border-ua-dark-gray">
              <img
                src="https://www.ualberta.ca/en/media-library/new-brand/homepage/campus-saint-jean.jpeg"
                alt="International Programs"
                className="w-full h-48 object-cover mb-4"
              />
              <h3 className="text-lg font-bold ua-navy mb-2 uppercase tracking-wide">
                Global Programs
              </h3>
              <p className="text-sm ua-text-dark">
                International partnerships and study abroad opportunities across
                50+ countries worldwide.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="text-center bg-ua-light-green p-12 border-2 border-ua-green"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}>
            <blockquote className="text-xl md:text-2xl font-semibold ua-navy leading-relaxed mb-8 max-w-4xl mx-auto">
              "With five campuses across Alberta and international
              collaborations spanning over 50 countries, the University of
              Alberta connects local academic excellence with global scholarly
              leadership."
            </blockquote>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold ua-navy mb-2">5</div>
                <p className="text-sm font-bold ua-green uppercase tracking-wider">
                  Alberta Campuses
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold ua-navy mb-2">50+</div>
                <p className="text-sm font-bold ua-green uppercase tracking-wider">
                  International Partners
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold ua-navy mb-2">159</div>
                <p className="text-sm font-bold ua-green uppercase tracking-wider">
                  Countries Represented
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* University Footer */}
      {/* Footer */}
      <Footer />
    </div>
  );
}
