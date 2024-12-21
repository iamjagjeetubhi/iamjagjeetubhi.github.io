import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Jagjeet Singh",
  initials: "JS",
  url: "https://jagjeet.io", // Placeholder URL
  location: "Brampton, Ontario, Canada",
  locationLink: "https://www.google.com/maps/place/brampton",
  description:
    "Seasoned Software Engineer with expertise in Python & Django. Passionate about building scalable web applications and sharing calligraphy art.",
  summary:
    `A seasoned engineer who recently relocated from India to Canada, bringing a wealth of experience from leading roles in startups like [UrbanPiper](https://urbanpiper.com/), [Daloopa](https://daloopa.com/), and [Pickrr](https://www.pickrr.com/). Strong background in building scalable web applications, including developing systems at UrbanPiper that were used by industry giants such as **McDonald's**, **Subway**, and **Pizza Hut**. Led a team of four developers, managing **DevOps** and **infrastructure** to handle systems processing **250K+** daily orders. Embodies an entrepreneurial spirit, having successfully launched multiple products from scratch. Additionally, a skilled calligrapher, sharing art on Instagram [@akhar.kaari](https://instagram.com/akhar.kaari) with over **50K+** followers.`,
  avatarUrl: "/me.png", // Keeping existing placeholder
  skills: [
    // Core Backend & Architecture
    "Python",
    "Django",
    "System Design",
    "Microservices",
    
    // Database & Caching
    "PostgreSQL",
    "MySQL",
    "Redis",
    "MongoDB",
    
    // Frontend & APIs
    "React",
    "REST APIs",
    "GraphQL",
    
    // DevOps & Cloud
    "AWS",
    "CI/CD",
    "Docker",
    "Kubernetes",
    
    // Leadership & Process
    "Team Leadership",
    "Agile",
    "System Architecture",
    
    // Monitoring & Quality
    "Datadog",
    "ELK Stack",
    "SonarQube",
    
    // Performance & Scaling
    "Performance Optimization",
    "High-Scale Systems",
    
    // Security & Best Practices
    "Security Best Practices",
    "Code Review"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" }
  ],
  contact: {
    email: "iamjagjeetubhi@gmail.com",
    tel: "+1 647 965 6787",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/iamjagjeetubhi",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/iamjagjeetubhi",
        icon: Icons.linkedin,
        navbar: true,
      },
      // X: {
      //   name: "X",
      //   url: "https://twitter.com/iamjagjeetubhi",
      //   icon: Icons.x,
      //   navbar: true,
      // },
      Instagram: {
        name: "Instagram",
        url: "https://instagram.com/akhar.kaari",
        icon: Icons.instagram,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:iamjagjeetubhi@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },
  work: [
    {
      company: "Passage",
      href: "https://passage.com",
      badges: [],
      location: "Toronto, Ontario, Canada",
      title: "Senior Software Engineer",
      logoUrl: "/passage.png",
      start: "Aug 2024",
      end: "Oct 2024",
      description:
        "- Implemented **comprehensive monitoring system** using **Datadog**, integrating with **PagerDuty** and **Slack** for real-time error tracking\n- Developed end-to-end **guarantor workflow system** for student loan applications\n- Implemented **phone number validation** with international formatting standards",
    },
    {
      company: "UrbanPiper",
      href: "https://urbanpiper.com",
      badges: [],
      location: "Bengaluru, Karnataka, India",
      title: "Lead Software Engineer",
      logoUrl: "/urbanpiper.png",
      start: "Sep 2022",
      end: "Jul 2024",
      description:
        "- Led a team of **four developers** for Enterprise Integration Service, supporting major brands like **McDonald's**, **Subway**, and **Pizza Hut**\n- Implemented **circuit breaker logic** handling **250K-300K daily orders**\n- Established **CI/CD pipelines** and code quality processes\n- Successfully expanded business operations to **MENA**, **KSA**, **UK** and **NA** regions",
    },
    {
      company: "Daloopa",
      href: "https://daloopa.com",
      badges: [],
      location: "Remote",
      title: "Software Engineer III",
      logoUrl: "/daloopa.png",
      start: "Sep 2021",
      end: "Jun 2022",
      description:
        "- Led critical **data security projects**, optimizing API performance for **2500 datasets** and **2.5M datapoints**\n- Developed **GraphQL APIs** for marketplace platform\n- Improved excel model checker performance by **3x**",
    },
    {
      company: "Pickrr",
      href: "https://pickrr.com",
      badges: [],
      location: "Gurugram, Haryana, India",
      title: "Software Engineer II",
      logoUrl: "/pickrr.png",
      start: "Mar 2021",
      end: "Sep 2021",
      description:
        "- Migrated **Django 1.5** project to **Django 3.2.5**, including **Python 2 to 3** migration\n- Created **async microservice** for shipment tracking\n- Developed integrations with **Shopify** and **InstaMojo** for last-mile delivery",
    },
    {
      company: "Houzen",
      href: "https://houzen.co.uk",
      badges: [],
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "/houzen.png",
      start: "Jul 2020",
      end: "Mar 2021",
      description:
        "- Developed backend for **BuySide** - AI based real estate valuation platform\n- Created microservice for **Zoopla** data scraping\n- Optimized APIs for **Xchange** platform",
    },
    {
      company: "GramFactory",
      href: "https://gramfactory.com",
      badges: [],
      location: "Gurugram, Haryana, India",
      title: "Software Engineer",
      logoUrl: "/gramfactory.png",
      start: "Aug 2018",
      end: "Jul 2020",
      description:
        "- Built **scalable system** from scratch including multi-level **ERP system** and **product pricing module**\n- Developed **last-mile delivery system** and **Khata Book**\n- Implemented **OTP module** and extended **BaseUserManager** for mobile authentication",
    }
  ],
  education: [
    {
      school: "Guru Nanak Dev Engineering College",
      href: "https://gndec.ac.in",
      degree: "Bachelor's Degree in Information Technology",
      logoUrl: "/gndec.png",
      start: "2014",
      end: "2018"
    }
  ],
  projects: [
    {
      title: "Ladle",
      href: "https://ladle.cloud",
      dates: "Dec 2023 - Oct 2024",
      active: true,
      image: "/ladle.png",
      description: 
        "- Built a **cross-platform mobile application** (iOS/Android) helping NRIs and tourists access Indian digital services\n- 🚀 Available on App Store and Play Store with **200+ active users**\n- 💳 Implemented international payment processing with **50+ successful orders**",
      technologies: [
        "React Native",
        "Python",
        "Django",
      ],
      links: [
        {
          type: "Website",
          href: "https://ladle.cloud",
          icon: <Icons.globe className="h-4 w-4"/>,
        },
        {
          type: "App Store",
          href: "https://apps.apple.com/ca/app/ladle-gateway-to-india/id6504798678",  // Updated App Store link
          icon: <Icons.link className="h-4 w-4"/>,
        },
        {
          type: "Play Store",
          href: "https://play.google.com/store/apps/details?id=com.ladle.cloud&pcampaignid=web_share",  // Updated Play Store link
          icon: <Icons.link className="h-4 w-4"/>,
        }
      ]
    },
    {
      title: "Goseta",
      href: "https://goseta.in",
      dates: "Sep 2023 - Nov 2023",
      active: false,
      image: "/goseta.png",
      description:
        "- Built **MVP for Indian MSMBs** focusing on simplified GST compliance and invoice management\n- 📄 Implemented automated invoice generation system with **GST compliance**\n- 📱 Developed SMS-based GST filing feature for **easier accessibility**",
      technologies: [
        "React",
        "Python",
        "Django",
      ],
      links: [
        {
          type: "Website",
          href: "https://goseta.in",
          icon: <Icons.globe className="h-4 w-4"/>,
        }
      ]
    }
  ],
  // Keeping existing hackathons array as it's not present in the resume
  hackathons: []
} as const;