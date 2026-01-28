export type CvVisibility = "full" | "short" | "both";

export type CvContactItem = {
  label: string;
  value: string;
  href?: string;
};

export type CvProfile = {
  name: string;
  title: string;
  location: string;
  email: string;
  website: string;
  summary: string;
};

export type CvExperienceRole = {
  title: string;
  start: string;
  end?: string;
  location?: string;
  summary?: string;
  highlights?: string[];
  tech?: string[];
  visibility?: CvVisibility;
};

export type CvExperience = {
  company: string;
  location?: string;
  roles: CvExperienceRole[];
  visibility?: CvVisibility;
};

export type CvEducation = {
  institution: string;
  degree: string;
  focus?: string;
  start: string;
  end?: string;
  location?: string;
  highlights?: string[];
  visibility?: CvVisibility;
};

export type CvSkillGroup = {
  group: string;
  items: string[];
  visibility?: CvVisibility;
};

export type CvProject = {
  id: string;
  name: string;
  description: string;
  tech?: string[];
  link?: string;
  linkLabel?: string;
  highlights?: string[];
  visibility?: CvVisibility;
  portfolio?: {
    kind: "featured" | "other";
    layout?: "Left" | "Right";
    imageSrc?: string;
    imageAlt?: string;
    imageClass?: string;
  };
};

export type CvCertification = {
  name: string;
  issuer: string;
  date: string;
  url?: string;
  visibility?: CvVisibility;
};

export type CvAward = {
  name: string;
  issuer: string;
  date: string;
  description?: string;
  url?: string;
  visibility?: CvVisibility;
};

export type CvPublication = {
  title: string;
  publisher: string;
  date: string;
  url?: string;
  visibility?: CvVisibility;
};

export type CvTalk = {
  title: string;
  event: string;
  date: string;
  url?: string;
  visibility?: CvVisibility;
};

export type CvVolunteer = {
  organization: string;
  role: string;
  start: string;
  end?: string;
  highlights?: string[];
  visibility?: CvVisibility;
};

export type CvOpenSource = {
  name: string;
  description?: string;
  url?: string;
  visibility?: CvVisibility;
};

export type CvLanguage = {
  name: string;
  level: string;
  visibility?: CvVisibility;
};

export type CvData = {
  profile: CvProfile;
  contact: CvContactItem[];
  highlights: string[];
  experience: CvExperience[];
  education: CvEducation[];
  skills: CvSkillGroup[];
  projects: CvProject[];
  certifications: CvCertification[];
  awards: CvAward[];
  publications: CvPublication[];
  talks: CvTalk[];
  volunteering: CvVolunteer[];
  openSource: CvOpenSource[];
  languages: CvLanguage[];
  interests: string[];
};

export const cvData: CvData = {
  profile: {
    name: "Aniket Arora",
    title: "Senior Data Scientist",
    location: "Brussels, Belgium",
    email: "arora.aniket@hotmail.com",
    website: "https://aniketarora.be",
    summary:
      "Senior Data Scientist at IBM Consulting focused on Generative AI, machine learning, and LLMs. I transform complex data into actionable insights that drive innovation and business growth."
  },
  contact: [
    {
      label: "Email",
      value: "arora.aniket@hotmail.com",
      href: "mailto:arora.aniket@hotmail.com"
    },
    {
      label: "Website",
      value: "aniketarora.be",
      href: "https://aniketarora.be"
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/aniket-arora",
      href: "https://www.linkedin.com/in/aniket-arora/"
    },
    {
      label: "GitHub",
      value: "github.com/AniketArora",
      href: "https://github.com/AniketArora"
    },
    {
      label: "X",
      value: "x.com/AniketArora_1",
      href: "https://x.com/AniketArora_1"
    }
  ],
  highlights: [
    "Consulting",
    "Generative AI",
    "Large Language Models (LLM)",
    "Machine Learning & Deep Learning"
  ],
  experience: [
    {
      company: "IBM Consulting",
      roles: [
        {
          title: "Senior Data Scientist",
          start: "2025-01",
          end: "Present",
          location: "Brussels, Belgium"
        },
        {
          title: "Data Scientist",
          start: "2022-04",
          end: "Present",
          location: "Brussels, Belgium"
        },
        {
          title: "Junior DevOps Engineer",
          start: "2021-09",
          end: "2022-04",
          location: "Brussels, Belgium"
        },
        {
          title: "Automation Intern",
          start: "2021-02",
          end: "2021-09",
          location: "Brussels, Belgium"
        }
      ]
    },
    {
      company: "JD Systems BVBA",
      roles: [
        {
          title: "Intern",
          start: "2018-03",
          end: "2018-03",
          location: "Menen, Belgium"
        }
      ]
    }
  ],
  education: [
    {
      institution: "Howest",
      degree: "Bachelor's degree",
      focus: "New Media & Communication Technology (NMCT)",
      start: "2018",
      end: "2021"
    },
    {
      institution: "Guldensporencollege Kaai",
      degree: "Informaticabeheer",
      start: "2016",
      end: "2018"
    },
    {
      institution: "Spes Nostra Heule",
      degree: "Handel",
      start: "2012",
      end: "2016"
    }
  ],
  skills: [
    {
      group: "Focus",
      items: [
        "Consulting",
        "Generative AI",
        "Large Language Models (LLMs)",
        "Machine Learning",
        "Deep Learning",
        "Statistical Analysis"
      ]
    },
    {
      group: "Tools & Platforms",
      items: [
        "Python",
        "Flask",
        "OpenCV",
        "Google Cloud",
        "Chart.js",
        "SocketIO",
        "Xamarin",
        "Flutter",
        "C#",
        ".NET Core",
        "NumPy",
        "Adobe XD"
      ]
    }
  ],
  projects: [
    {
      id: "office-of-the-future",
      name: "Office Of The Future - ML6",
      description:
        "This project was made with the company ML6. My team and I had to look at how we could make their office 'Future Proof'.",
      tech: ["Chart.js", "Google Cloud", "OpenCV", "Flask"],
      link: "https://github.com/StijnVandendriessche1/MCT-S4-Project-III",
      linkLabel: "View Office Of The Future project on GitHub",
      portfolio: {
        kind: "featured",
        layout: "Right",
        imageSrc: "/assets/images/Office_Of_The_Future.png",
        imageAlt: "Office of the Future project interface preview",
        imageClass: "c-project__img--ml6"
      }
    },
    {
      id: "snek-exergame",
      name: "Snek - Exergame",
      description:
        "The classic snake game made as an exergame. Children between 6 to 12 years need to move the snake around by pushing buttons placed on the ground.",
      tech: ["Flask", "SocketIO", "Python"],
      link: "https://github.com/AniketArora/Project-II",
      linkLabel: "View Snek Exergame on GitHub",
      portfolio: {
        kind: "featured",
        layout: "Left",
        imageSrc: "/assets/images/Snek.png",
        imageAlt: "Snek exergame interface preview",
        imageClass: "c-project__img--Snek"
      }
    },
    {
      id: "krypto",
      name: "Krypto - Cryptocurrency charts",
      description:
        "A Webapp & App that visualizes the most popular cryptocurrencies at the moment. The goal was to make both projects look similar.",
      tech: ["Xamarin", "Chart.js", "Coinbase Api", "Micro Interactions"],
      link: "https://github.com/AniketArora/Krypto-CreateIII",
      linkLabel: "View Krypto project on GitHub",
      portfolio: {
        kind: "featured",
        layout: "Right",
        imageSrc: "/assets/images/Krypto.png",
        imageAlt: "Krypto cryptocurrency charting interface preview",
        imageClass: "c-project__img--ml6"
      }
    },
    {
      id: "point",
      name: "Point",
      description: "A POS system where you can manage stock, make payments, and order.",
      tech: ["Flutter", "Work In Progress"],
      link: "https://github.com/AniketArora/Point",
      linkLabel: "View Point project on GitHub",
      portfolio: {
        kind: "other"
      }
    },
    {
      id: "quiz",
      name: "Quiz",
      description:
        "A .NET site where you can play a quiz with friends. Includes a full auto-generated controller & repo.",
      tech: ["C#", ".Net Core", "Work In Progress"],
      link: "https://github.com/AniketArora/Project-Quiz-Backend",
      linkLabel: "View Quiz project on GitHub",
      portfolio: {
        kind: "other"
      }
    },
    {
      id: "fake-news-database",
      name: "Fake news Database",
      description: "A python server where you can connect clients to and see data.",
      tech: ["Python", "Threading", "Numpy"],
      link: "https://github.com/StijnVandendriessche1/project-2020-Aniket_Arora-Stijn_Vandendriessche",
      linkLabel: "View Fake news database project on GitHub",
      portfolio: {
        kind: "other"
      }
    },
    {
      id: "stadsbouwers",
      name: "Stadsbouwers",
      description: "A website that I designed for a local builder.",
      tech: ["Adobe XD"],
      link: "https://github.com/Jonas-D-M/Stadsbouwers",
      linkLabel: "View Stadsbouwers project on GitHub",
      portfolio: {
        kind: "other"
      }
    },
    {
      id: "portfolio",
      name: "Portfolio",
      description: "My portfolio website that you are currently on.",
      tech: ["Adobe XD", "Web", "Work In Progress"],
      link: "https://github.com/AniketArora/Portfolio",
      linkLabel: "View Portfolio project on GitHub",
      portfolio: {
        kind: "other"
      }
    },
    {
      id: "daylight-app",
      name: "Daylight app",
      description: "An assignment that I got for my course on User Interaction.",
      tech: ["Web", "Micro Interactions"],
      link: "https://github.com/nmct-create3/daylight-app-AniketArora",
      linkLabel: "View Daylight app project on GitHub",
      portfolio: {
        kind: "other"
      }
    }
  ],
  certifications: [],
  awards: [],
  publications: [],
  talks: [],
  volunteering: [],
  openSource: [],
  languages: [],
  interests: []
};
