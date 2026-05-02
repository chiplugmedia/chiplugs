// Portfolio constants - All portfolio data in one place

export interface Author {
  _id: string;
  name: string;
  initials: string;
  avatar?: {
    asset?: {
      url?: string;
    };
  };
  description?: any[];
  summary?: any[];
  location?: string;
  skills?: string[];
  social?: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    youtube?: string;
    email?: string;
  };
}

export interface WorkExperience {
  _id: string;
  company: string;
  title: string;
  logo?: {
    asset?: {
      url?: string;
    };
  };
  location?: string;
  startDate: string;
  endDate?: string;
  description?: any[];
  url?: string;
}

export interface Education {
  _id: string;
  school: string;
  degree: string;
  logo?: {
    asset?: {
      url?: string;
    };
  };
  startDate: string;
  endDate: string;
  url?: string;
}

export interface Project {
  _id: string;
  title: string;
  description: any[];
  startDate?: string;
  endDate?: string;
  technologies?: string[];
  image?: {
    asset?: {
      url?: string;
    };
  };
  video?: string;
  links?: {
    title: string | null;
    url: string | null;
    type: string | null;
  }[];
}

// Portfolio data
export const AUTHOR: Author = {
  _id: "author-1",
  name: "Chinemerem E Onyemachi",
  initials: "CHI",
  avatar: {
    asset: {
      url: "/projects/profileimg.jpg",
    },
  },
  description: [
    {
      _type: "block",
      children: [
        {
          _type: "span",
          text: "I build web that builds brands.",
        },
      ],
    },
  ],
  summary: [
    {
      _type: "block",
      children: [
        {
          _type: "span",
          text: "Creative Software Developer & Graphics Designer Innovative software developer with 4+ years of experience, specializing in web development, mobile and desktop applications, graphics design, and game development. Passionate about building scalable products with exceptional user experiences.",
        },
      ],
    },
  ],
  location: "India",
  // All skills from portfolio-8: Frontend (5) + Backend (3) + Tools (4) = 12 skills
  skills: [
    "Next.js",
    "React",
    "TailwindCSS",
    "Php",
    "Bootstrap",
    "JavaScript",
    "Framer Motion",
    "Node.js",
    "MongoDB",
    "Express.js",
    "Postman",
    "Photoshop",
    "Canva",
    "Git",
  ],
  social: {
    github: "https://github.com/chiplugmedia",
    email: "chiplugtv@gmail.com",
  },
};

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    _id: "work-1",
    company: "SelectSkillSet",
    title: "Frontend Developer",
    location: "Remote",
    startDate: "2022",
    endDate: "Present",
    description: [
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "Developing modern, responsive frontend applications with focus on user experience and performance. Working with cutting-edge technologies to build scalable web solutions.",
          },
        ],
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "Key responsibilities include building responsive and interactive user interfaces using React and Next.js, implementing modern UI/UX designs with TailwindCSS and Framer Motion, optimizing application performance and ensuring cross-browser compatibility, and collaborating with design and backend teams to deliver high-quality features.",
          },
        ],
      },
    ],
  },
  {
    _id: "work-2",
    company: "Tekisky",
    title: "Full Stack Developer",
    location: "Remote",
    startDate: "2022",
    endDate: "Present",
    description: [
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "Developed and maintained full-stack web applications, working on both frontend and backend systems. Collaborated with cross-functional teams to deliver robust software solutions.",
          },
        ],
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "Key responsibilities included developing and maintaining full-stack web applications using React, Node.js, and MongoDB, implementing RESTful APIs and integrating third-party services, building responsive user interfaces and optimizing application performance, and working on database design and backend architecture.",
          },
        ],
      },
    ],
  },
  // Graphic Design Experience 1

  // Graphic Design Experience 3
  {
    _id: "work-3",
    company: "Freelance Graphic Designer",
    title: "Graphic Design Consultant",
    location: "Remote",
    startDate: "2022",
    endDate: "Present",
    description: [
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "Provided graphic design services to diverse clients including startups, small businesses, and individuals. Delivered custom design solutions across various media formats.",
          },
        ],
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "Key responsibilities included creating logos, business cards, and stationery for brand identity packages; designing social media graphics, email templates, and digital advertisements; developing print materials including flyers, posters, and packaging designs; and managing client relationships, timelines, and project delivery for over 50 successful projects.",
          },
        ],
      },
    ],
  },
];

export const EDUCATION: Education[] = [
  // Add your education details here if needed
];

// Only 4 projects with images from portfolio-8
export const PROJECTS: Project[] = [
  {
    _id: "project-1",
    title: "Pinatexlogs",
    description: [
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "Pinatexlogs is a trusted digital marketplace specializing in social media logs and gift card trading. We provide verified products, fast processing, and reliable customer support to ensure smooth and secure transactions for all users.",
          },
        ],
      },
    ],
    image: {
      asset: {
        url: "/projects/pinatexlogs.webp",
      },
    },
    links: [
  
      {
        title: "Live Demo",
        url: "https://pinatexlogs.com",
        type: "demo",
      },
    ],
  },
  {
    _id: "project-2",
    title: "BlinkTop",
    description: [
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "BlinkTop is a trusted VTU (Virtual Top-Up) platform offering fast, reliable, and affordable digital services across Nigeria. With BlinkTop, users can instantly purchase airtime, data bundles, cable TV subscriptions, electricity tokens, and even examination PINs such as WAEC, NECO, and JAMB.",
          },
        ],
      },
    ],
    image: {
      asset: {
        url: "/projects/blinktop.com.ng.webp",
      },
    },
    links: [
    
      {
        title: "View Project",
        url: "https://blinktop.com.ng",
        type: "demo",
      },
    ],
  },
  {
    _id: "project-3",
    title: "Blockchain Voting System",
    description: [
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "A secure, transparent, and decentralized voting platform built on Ethereum. Features smart contract-based voting, anonymous ballots, real-time result tracking, and immutable audit trails. Ensures election integrity through cryptographic verification.",
          },
        ],
      },
    ],
    image: {
      asset: {
        url: "/projects/project-3.webp",
      },
    },
    links: [
     
      {
        title: "View Project",
        url: "#",
        type: "demo",
      },
    ],
  },
  {
    _id: "project-4",
    title: "Retry",
    description: [
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "Retry Clothing is a premium streetwear fashion brand offering stylish hoodies, tracksuits, pants, and modern apparel designed for confidence and everyday style. Shop the latest Retry collection.",
          },
        ],
      },
    ],
    image: {
      asset: {
        url: "/projects/retry.webp",
      },
    },
    links: [
     
      {
        title: "View Project",
        url: "#",
        type: "demo",
      },
    ],
  },
  {
    _id: "project-5",
    title: "Creatorix",
    description: [
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "A secure, transparent, and decentralized voting platform built on Ethereum. Features smart contract-based voting, anonymous ballots, real-time result tracking, and immutable audit trails. Ensures election integrity through cryptographic verification.",
          },
        ],
      },
    ],
    image: {
      asset: {
        url: "/projects/creator.webp",
      },
    },
    links: [
     
      {
        title: "View Project",
        url: "#",
        type: "demo",
      },
    ],
  },
];

