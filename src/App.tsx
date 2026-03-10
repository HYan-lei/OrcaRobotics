import { useState, useEffect, useRef, MouseEvent } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { 
  Menu, X, ChevronRight, Trophy, Users, Calendar, Heart, 
  BookOpen, Mail, Instagram, Youtube, Linkedin, MapPin, 
  Award, Star, ArrowRight, ExternalLink, Send
} from 'lucide-react';
import { 
  SEASONS, 
  TEAM_MEMBERS, 
  MENTORS, 
  OUTREACH_ACTIVITIES, 
  IMPACT_STATS, 
  BLOG_POSTS, 
  SPONSORS 
} from './data';

// --- Components ---

const Navbar = ({ currentView, setCurrentView }: { currentView: string, setCurrentView: (view: string) => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', id: 'about' },
    { name: 'Seasons', id: 'seasons' },
    { name: 'Team', id: 'team' },
    { name: 'Outreach', id: 'outreach' },
    { name: 'Blog', id: 'blog' },
    { name: 'Sponsors', id: 'sponsors' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (id: string) => {
    if (id === 'blog') {
      setCurrentView('blog');
      window.scrollTo(0, 0);
    } else {
      if (currentView !== 'home') {
        setCurrentView('home');
        setTimeout(() => {
          document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-navy/90 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div 
          className="text-2xl font-display font-bold tracking-tighter cursor-pointer"
          onClick={() => {
            setCurrentView('home');
            window.scrollTo(0, 0);
          }}
        >
          ORCA<span className="text-blue-400">ROBOTICS</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.id)}
              className="text-sm font-medium hover:text-blue-400 transition-colors uppercase tracking-wider"
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Mobile Nav Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-navy border-t border-white/10"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.id)}
                  className="text-left text-lg font-medium py-2 border-b border-white/5"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = ({ setCurrentView }: { setCurrentView: (view: string) => void }) => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    if (id === 'blog') {
      setCurrentView('blog');
      window.scrollTo(0, 0);
    } else {
      scrollToSection(id);
    }
  };

  return (
    <section className="hero-robotics" role="banner" aria-label="Orca Robotics hero">
      <div className="hero-overlay"></div>

      <div className="hero-container">
        <p className="kicker">FTC Team #21587</p>

        <h1 className="hero-title">
          <span className="hero-line">ORCA</span>
          <span className="hero-line robotics-line">
            ROBOTICS
            <div className="sweep"></div>
          </span>
        </h1>

        <p className="hero-sub">Engineering the Future. Inspiring the Next Generation.</p>

        <nav className="hero-ctas" aria-label="Hero actions">
          <a className="btn btn-primary" href="#seasons" onClick={(e) => handleNavClick(e, 'seasons')}>View Our Season</a>
          <a className="btn btn-outline" href="#team" onClick={(e) => handleNavClick(e, 'team')}>Meet the Team</a>
          <a className="btn btn-outline" href="#outreach" onClick={(e) => handleNavClick(e, 'outreach')}>Outreach & Impact</a>
          <a className="btn btn-outline" href="#blog" onClick={(e) => handleNavClick(e, 'blog')}>Read the Blog</a>
          <a className="btn btn-ghost" href="#sponsors" onClick={(e) => handleNavClick(e, 'sponsors')}>Sponsor Us</a>
        </nav>

        <div className="scroll-cue" aria-hidden="true">⌄</div>
      </div>
    </section>
  );
};

const About = () => (
  <section id="about" className="py-24 bg-navy relative">
    <div className="max-w-4xl mx-auto px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-8">About Us</h2>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
          Orca Robotics #21587 is a First Tech Challenge robotics team from Potomac, Maryland dedicated to making STEM more accessible and advancing to higher levels of FTC competition.
        </p>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
          We believe STEM leadership begins with curiosity and hands-on learning. Through robotics competition and outreach programs, we inspire students to explore engineering, design, and innovation.
        </p>
      </motion.div>
    </div>
  </section>
);

const Seasons = () => (
  <section id="seasons" className="py-24 bg-gradient-to-b from-navy to-ocean/30 relative">
    <div className="max-w-6xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold mb-4">Competition Seasons</h2>
        <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
      </motion.div>

      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-white/10 -translate-x-1/2 hidden md:block"></div>

        <div className="space-y-16">
          {SEASONS.map((season, index) => (
            <motion.div 
              key={season.year}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="flex-1 md:text-right">
                <div className={`hidden md:block ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                  <span className="text-6xl mb-2 block">{season.medal}</span>
                  <h3 className="text-3xl font-bold text-white mb-2">{season.year}</h3>
                  <h4 className="text-xl text-blue-300 font-medium tracking-widest uppercase mb-6">{season.theme}</h4>
                </div>
              </div>
              
              {/* Timeline Dot */}
              <div className="relative flex items-center justify-center md:w-12 shrink-0">
                <div className="w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)] z-10 hidden md:block"></div>
              </div>

              <div className="flex-1">
                 <div className="md:hidden mb-6">
                    <span className="text-4xl mr-3">{season.medal}</span>
                    <span className="text-2xl font-bold">{season.year}</span>
                    <div className="text-blue-300 font-medium tracking-widest uppercase mt-1">{season.theme}</div>
                 </div>

                <div className="space-y-6">
                  {season.events.map((event, i) => (
                    <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
                      <h5 className="text-lg font-bold text-white mb-2">{event.name}</h5>
                      {event.details && <p className="text-gray-400 text-sm mb-3 font-mono">{event.details}</p>}
                      <div className="flex flex-wrap gap-2">
                        {event.awards.map((award, j) => (
                          <span key={j} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-200 border border-blue-500/30">
                            <Award className="w-3 h-3 mr-1.5" />
                            {award}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="text-center mt-16">
        <a 
          href="https://ftc-events.firstinspires.org/team/21587" 
          target="_blank" 
          rel="noreferrer"
          className="inline-flex items-center px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/20 rounded-full text-white font-medium transition-all group"
        >
          View Full FTC Record
          <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  </section>
);

const Team = () => (
  <section id="team" className="py-24 bg-navy relative">
    <div className="max-w-7xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold mb-4">Meet the Team</h2>
        <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
      </motion.div>

      {/* Featured Member - Sophia */}
      <div className="mb-16">
        {TEAM_MEMBERS.filter(m => m.isFeatured).map((member) => (
          <motion.div 
            key={member.name}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-900/40 to-navy border border-blue-500/30 rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-[0_0_50px_rgba(37,99,235,0.15)]"
          >
            <div className="flex flex-col md:flex-row gap-10 items-center">
              <div className="w-48 h-48 md:w-64 md:h-64 shrink-0 rounded-full overflow-hidden border-4 border-blue-500/30 shadow-2xl">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-3xl md:text-4xl font-bold mb-2">{member.name}</h3>
                <div className="text-xl text-blue-400 font-medium mb-6">{member.role}</div>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">{member.description}</p>
                
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Key Accomplishments</h4>
                  <ul className="space-y-3">
                    {member.details?.map((detail, i) => (
                      <li key={i} className="flex items-start text-gray-300">
                        <ChevronRight className="w-5 h-5 text-blue-500 mr-2 shrink-0 mt-0.5" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Other Members Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        {TEAM_MEMBERS.filter(m => !m.isFeatured).map((member, index) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all hover:-translate-y-1 group"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-blue-500/50 transition-colors">
                 <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <div className="text-blue-400 text-sm font-medium">{member.role}</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">{member.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Mentors */}
      <div className="max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold text-center mb-8 text-gray-400 uppercase tracking-widest">Mentors</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {MENTORS.map((mentor, index) => (
            <motion.div
              key={mentor.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-navy border border-white/5 rounded-xl"
            >
              <h4 className="text-lg font-bold mb-2">{mentor.name}</h4>
              <p className="text-sm text-gray-500">{mentor.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Outreach = () => (
  <section id="outreach" className="py-24 bg-gradient-to-b from-ocean/20 to-navy relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold mb-4">Outreach & Impact</h2>
        <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full mb-12"></div>
        
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-20">
          {IMPACT_STATS.map((stat, index) => (
            <div key={index} className="p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {stat.value}{stat.suffix}
              </div>
              <div className="text-blue-300 font-medium uppercase tracking-wider text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {OUTREACH_ACTIVITIES.map((activity, index) => (
          <motion.div
            key={activity.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all group cursor-pointer flex flex-col h-full"
          >
            <div className="aspect-video overflow-hidden relative bg-black/20">
              <img 
                src={activity.image} 
                alt={activity.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">{activity.title}</h3>
              <p className="text-gray-400 text-sm flex-grow">
                {activity.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const BlogPreview = ({ setCurrentView }: { setCurrentView: (view: string) => void }) => (
  <section id="blog" className="py-24 bg-navy">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h2 className="text-4xl font-bold mb-4">Latest Updates</h2>
          <div className="w-20 h-1 bg-blue-500 rounded-full"></div>
        </div>
        <button 
          onClick={() => { setCurrentView('blog'); window.scrollTo(0, 0); }}
          className="hidden md:flex items-center text-blue-400 hover:text-white transition-colors font-medium"
        >
          View All Posts <ArrowRight className="w-4 h-4 ml-2" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {BLOG_POSTS.slice(0, 4).map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all group cursor-pointer flex flex-col h-full"
            onClick={() => { setCurrentView('blog'); window.scrollTo(0, 0); }}
          >
            <div className="aspect-video overflow-hidden relative bg-black/20">
              <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full uppercase tracking-wider shadow-lg">
                  {post.tags[0]}
                </span>
              </div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <div className="text-gray-400 text-xs font-mono mb-3">{post.date}</div>
              <h3 className="text-lg font-bold mb-3 line-clamp-2 group-hover:text-blue-400 transition-colors">{post.title}</h3>
              <p className="text-gray-400 text-sm line-clamp-3 mb-4 flex-grow">{post.excerpt}</p>
              <div className="flex items-center mt-auto pt-4 border-t border-white/5">
                <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-xs font-bold text-blue-300 mr-2">SW</div>
                <div className="text-xs text-gray-400">By {post.author}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-8 text-center md:hidden">
        <button 
          onClick={() => { setCurrentView('blog'); window.scrollTo(0, 0); }}
          className="inline-flex items-center px-6 py-3 bg-white/10 rounded-full text-white font-medium"
        >
          View All Posts <ArrowRight className="w-4 h-4 ml-2" />
        </button>
      </div>
    </div>
  </section>
);

const Sponsors = () => (
  <section id="sponsors" className="py-24 bg-white text-navy">
    <div className="max-w-7xl mx-auto px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-4">Our Sponsors</h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-16"></div>
        
        <div className="mb-16">
          <h3 className="text-xl font-bold text-gray-500 uppercase tracking-widest mb-8">Current Partners</h3>
          <div className="flex flex-wrap justify-center gap-12 items-center">
            {SPONSORS.current.map((sponsor) => (
              <div key={sponsor} className="text-3xl md:text-5xl font-bold text-navy opacity-80 hover:opacity-100 transition-opacity">
                {sponsor}
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-8">Past Supporters</h3>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            {SPONSORS.past.map((sponsor) => (
              <div key={sponsor} className="text-xl md:text-2xl font-bold text-gray-400">
                {sponsor}
              </div>
            ))}
          </div>
        </div>

        <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1">
          Become a Sponsor
        </button>
      </motion.div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="py-24 bg-navy relative">
    <div className="max-w-4xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-400">Interested in joining the team, mentoring, or sponsoring? We'd love to hear from you.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 shrink-0 mr-4">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-1">Email Us</h3>
                <a href="mailto:OrcaRoboticsUSA@gmail.com" className="text-gray-300 hover:text-white transition-colors">OrcaRoboticsUSA@gmail.com</a>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 shrink-0 mr-4">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-1">Location</h3>
                <p className="text-gray-300">Potomac, Maryland</p>
              </div>
            </div>

            <div className="pt-8 border-t border-white/10">
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-red-600 transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-700 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">Name</label>
              <input type="text" className="w-full bg-navy border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors" placeholder="Your name" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">Email</label>
              <input type="email" className="w-full bg-navy border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors" placeholder="your@email.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">Message</label>
              <textarea rows={4} className="w-full bg-navy border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors" placeholder="How can we help?"></textarea>
            </div>
            <button className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-bold transition-colors flex items-center justify-center">
              Send Message <Send className="w-4 h-4 ml-2" />
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-8 bg-navy border-t border-white/10 text-center text-gray-500 text-sm">
    <p>© {new Date().getFullYear()} Orca Robotics FTC Team #21587. All rights reserved.</p>
  </footer>
);

// --- Blog View ---

const BlogView = ({ setCurrentView }: { setCurrentView: (view: string) => void }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-navy pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <button 
            onClick={() => setCurrentView('home')}
            className="flex items-center text-gray-400 hover:text-white mb-6 transition-colors"
          >
            <ChevronRight className="w-4 h-4 rotate-180 mr-2" /> Back to Home
          </button>
          <h1 className="text-5xl font-bold mb-4">Team Blog</h1>
          <p className="text-xl text-gray-300">Updates, recaps, and insights from Orca Robotics.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all group flex flex-col"
            >
              <div className="h-56 overflow-hidden relative">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full uppercase tracking-wider shadow-lg">
                    {post.tags[0]}
                  </span>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-400 text-xs font-mono">{post.date}</span>
                  <div className="flex gap-2">
                    <button className="text-gray-400 hover:text-blue-400"><Linkedin className="w-4 h-4" /></button>
                    <button className="text-gray-400 hover:text-blue-400"><ExternalLink className="w-4 h-4" /></button>
                  </div>
                </div>
                
                <h2 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors">{post.title}</h2>
                <p className="text-gray-300 mb-6 leading-relaxed flex-grow">{post.excerpt}</p>
                
                <div className="pt-6 border-t border-white/10 mt-auto">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-sm font-bold text-blue-300 mr-3">SW</div>
                    <div>
                      <div className="text-sm font-bold text-white">{post.author}</div>
                      <div className="text-xs text-gray-400">{post.role}</div>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mt-3 italic">
                    "I lead strategy, outreach, and write the Orca Robotics blog."
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [currentView, setCurrentView] = useState('home');

  return (
    <div className="bg-navy min-h-screen text-white selection:bg-blue-500 selection:text-white">
      <Navbar currentView={currentView} setCurrentView={setCurrentView} />
      
      {currentView === 'home' ? (
        <main>
          <Hero setCurrentView={setCurrentView} />
          <About />
          <Seasons />
          <Team />
          <Outreach />
          <BlogPreview setCurrentView={setCurrentView} />
          <Sponsors />
          <Contact />
        </main>
      ) : (
        <BlogView setCurrentView={setCurrentView} />
      )}
      
      <Footer />
    </div>
  );
}
