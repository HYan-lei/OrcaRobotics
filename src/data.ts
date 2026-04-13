import { 
  Trophy, 
  Users, 
  Calendar, 
  Heart, 
  BookOpen, 
  Mail, 
  Instagram, 
  Youtube, 
  Linkedin,
  MapPin,
  Award,
  Star,
  Wrench,
  Cpu,
  Megaphone,
  PenTool
} from 'lucide-react';

export const COLORS = {
  navy: '#0B1F3A',
  ocean: '#123E7C',
  white: '#FFFFFF',
  silver: '#E2E8F0', // slate-200
};

export const SEASONS = [
  {
    year: "2025–2026",
    theme: "Decode",
    medal: "🥇",
    events: [
      {
        name: "Moorefield, WV Qualifier II",
        awards: ["Winning Alliance — Captain", "Reach Award — 2nd Place"]
      },
      {
        name: "Laurel, MD Qualifier I",
        awards: ["Finalist Alliance — 1st Team Selected", "Sustain Award"]
      },
      {
        name: "Laurel, MD Qualifier 2",
        awards: ["Winning Alliance — Captain", "Inspire Award — 2nd Place"]
      },
      {
        name: "Chesapeake Championship",
        awards: ["Finalist Alliance — Captain", "Red Cardinal Division Winning Alliance — Captain", "FTC World Championship Qualifier"]
      }
    ]
  },
  {
    year: "2024–2025",
    theme: "Into the Deep",
    medal: "🥈",
    events: [
      {
        name: "DCI #2 Qualifier, DC",
        awards: ["Winning Alliance — 1st Pick"]
      },
      {
        name: "Laurel Qualifier, MD",
        awards: ["2nd Seed Captain"]
      },
      {
        name: "Chesapeake Championship",
        awards: ["5th Seed — 1st Pick", "Finalist"]
      }
    ]
  },
  {
    year: "2023–2024",
    theme: "Centerstage",
    medal: "🥉",
    events: [
      {
        name: "DC Qualifier",
        awards: ["Winning Alliance Captain"]
      },
      {
        name: "Jackson Reed Qualifier",
        awards: ["Winning Alliance Captain"]
      },
      {
        name: "Harrisonburg Qualifier",
        awards: ["2nd Seed Captain"]
      },
      {
        name: "Chesapeake Championship",
        awards: ["1st Seed — 1st Pick", "Finalist"]
      }
    ]
  }
];

export const TEAM_MEMBERS = [
  {
    name: "Sophia Wang",
    isFeatured: true,
    role: "Founder, Captain",
    description: "Founder and current team captain. Leads match strategy, team leadership, outreach initiatives, and authors all team blog posts.",
    details: [
      "Led the team to multiple Finalist and Winning Alliance placements.",
      "Organized and led free summer STEM camps and community demos.",
      "Primary author of the Orca Robotics blog."
    ],
    image: "https://picsum.photos/seed/sophia/800/800"
  },
  {
    name: "Christopher Wang",
    role: "Founder, Previous Captain, Current Mentor",
    description: "Served as team captain in previous seasons. Guides build strategy and mentors drivers and builders.",
    image: "https://picsum.photos/seed/christopher/800/800"
  },
  {
    name: "Yixuan",
    role: "Main Driver",
    description: "Primary competition driver. Executes match strategy and drive practice routines.",
    image: "https://picsum.photos/seed/yixuan/800/800"
  },
  {
    name: "Jincheng",
    role: "Builder",
    description: "Mechanical subsystem design and assembly. Supports prototyping and 3D printing.",
    image: "https://picsum.photos/seed/jincheng/800/800"
  },
  {
    name: "Malinda",
    role: "Outreach Lead",
    description: "Organizes summer camp curriculum. Coordinates community STEM events and scrimmages.",
    image: "https://picsum.photos/seed/malinda/800/800"
  },
  {
    name: "Hannah",
    role: "Builder",
    description: "CAD contributor and subsystem integration support. Assists with prototyping and testing.",
    image: "https://picsum.photos/seed/hannah/800/800"
  },
  {
    name: "Larry",
    role: "Builder",
    description: "Robot assembly and field testing. Participates in outreach and fundraising events.",
    image: "https://picsum.photos/seed/larry/800/800"
  }
];

export const MENTORS = [
  {
    name: "Dr. Wang",
    description: "Helps students develop technical skills and discover their STEM passions."
  },
  {
    name: "Christopher (Chris) Wang",
    description: "Uses past team experience to guide strategy and growth."
  },
  {
    name: "Dr. Li",
    description: "Leads brainstorming sessions and provides technical guidance."
  }
];

export const OUTREACH_ACTIVITIES = [
  {
    title: "Free Summer Camp",
    description: "Week-long free camp for disadvantaged youth. Taught CAD, 3D printing, engineering design, and robot driving.",
    image: "/freesummercamp.JPG"
  },
  {
    title: "Reaching Lower-Income Families",
    description: "Partnered with Housing Opportunities Commission. Introduced FTC and hands-on robotics experience.",
    image: "/lowincomefamilies.JPG"
  },
  {
    title: "Comcast Scrimmage",
    description: "Hosted scrimmage event. Supported rookie teams and collaboration.",
    image: "/comcastscrimmage.jpg"
  },
  {
    title: "Community Fundraising",
    description: "Raised over $800 through bake sales. Combined fundraising with interactive robot demos.",
    image: "/communityfundraiser.jpg"
  }
];

export const IMPACT_STATS = [
  { label: "Students Reached", value: 500, suffix: "+" },
  { label: "Events Hosted", value: 12, suffix: "" },
  { label: "Seasons Competed", value: 4, suffix: "" }
];

export const BLOG_POSTS = [
  {
    id: 1,
    title: "Season Kickoff — Goals & Early Designs",
    date: "September 10, 2025",
    author: "Sophia Wang",
    role: "Founder & Captain",
    excerpt: "We're diving into the new season with ambitious goals. Here's a look at our initial brainstorming and prototyping process.",
    tags: ["Kickoff", "Design", "Strategy"],
    image: "/seasonkickoff.JPG",
    content: "Full content would go here..."
  },
  {
    id: 2,
    title: "Moorefield Qualifier II — Match Recap",
    date: "November 15, 2025",
    author: "Sophia Wang",
    role: "Founder & Captain",
    excerpt: "A thrilling weekend at Moorefield! We secured the Winning Alliance Captain spot and took home the Reach Award.",
    tags: ["Competition", "Recap", "Awards"],
    image: "/moorefield (1).png",
    content: "Full content would go here..."
  },
  {
    id: 3,
    title: "Summer Camp Recap — STEM in Action",
    date: "August 20, 2025",
    author: "Sophia Wang",
    role: "Founder & Captain",
    excerpt: "Our week-long free summer camp was a huge success. Seeing the students' faces light up when their code worked was priceless.",
    tags: ["Outreach", "Community", "Education"],
    image: "/freesummercamp.JPG",
    content: "Full content would go here..."
  },
  {
    id: 4,
    title: "Mid-Season Build Update",
    date: "January 5, 2026",
    author: "Sophia Wang",
    role: "Founder & Captain",
    excerpt: "Iterating on our intake mechanism and refining the autonomous pathing. Here is what we have learned so far.",
    tags: ["Build", "Engineering", "Update"],
    image: "/midseason.jpg",
    content: "Full content would go here..."
  }
];

export const SPONSORS = {
  current: ["Comcast", "MSBR", "Bechtel"],
  past: ["Lockheed Martin", "DEKA", "GoBILDA", "TechAction", "BAE Systems"]
};
