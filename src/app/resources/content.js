import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Ridho Aulia",
  lastName: "M A",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Tech Entusiast & Web Developer",
  avatar: "/images/idoo.jpg",
  location: "Asia/Jakarta", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Bahasa Indonesia"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about web design, technology, and share thoughts on
      the intersection of creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/ridhoauliama97?tab=repositories",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/ridhoauliama97/",
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/ridhoauliama/",
  },
  {
    name: "WhatsApp",
    icon: "whatsapp",
    link: "https://wa.me/62895327143852/",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:ridhoauliama97@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Tech Entusiast and web developer</>,
  subline: (
    <>
      I'm Ridho, a tech entusiast & web developer based in <br />{" "}
      <InlineCode>Medan, Indonesia</InlineCode>
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  download: {
    display: true,
    link: "/resume/CV.pdf",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Results-driven IT Support Specialist and Web Developer with 5 years of
        experience in delivering exceptional technical support, troubleshooting
        complex issues, designing responsive, user-friendly websites, digital
        interfaces, interactive experiences, and the convergence of design and
        technology. Skilled in web development, help desk support, and creative
        problem-solving, with a proven ability to maintain and repair systems to
        ensure optimal performance. Adept at collaborating with cross-functional
        teams to deliver innovative solutions and improve operational
        efficiency.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "PT Sumber Rezeki Bersama",
        timeframe: "2023 - 2024",
        role: "Staff IT - Full Time",
        achievements: [
          <>
            Provided technical support to more than 300 users, resolving
            hardware, software, and network issues with a 90% resolution rate.
          </>,
          <>
            Diagnosed and repaired hardware components, including desktops,
            laptops, and peripherals, reducing downtime by 90%.
          </>,
          <>
            Build and develop web-based inventory and helpdesk applications that
            increase inventory management efficiency by up to 30%,using PHP,
            Laravel with Filament and MySQL as DBMS for seamless system
            integration.
          </>,
          <>
            Conducted root cause analysis to resolve recurring technical issues,
            reducing ticket volume by 70%.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          // {
          //   src: "/images/projects/helpdesk/1.png",
          //   alt: "Once UI Project",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        company: "CV Pelita Karya Sejahtera",
        timeframe: "2021 - 2022",
        role: "Web Developer - Work From Home",
        achievements: [
          <>
            Designed and developed a web based Cost Center Application
            responsive websites using PHP, Code Igniter and MySQL as DBMS.
          </>,
          <>
            Maintained and updated existing websites, ensuring compatibility
            with modern browsers and devices.
          </>,
          <>
            Optimized website performance, achieving a 30% improvement in load
            times and user experience.
          </>,
          <>
            Added several features such as multi-user, membership site, manage
            subscription, and digital sales.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "STMIK Triguna Dharma",
        description: <>Bachelor of Information Systems.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Web Design & Development",
        description: (
          <>
            HTML, CSS, JavaScript, Bootstrap, Tailwind, Livewire, PHP, Laravel,
            CodeIgniter, Filament, MySQL, SQLite, Responsive Design.
          </>
        ),
        // optional: leave the array empty if you don't want to display images
        // images: [
        //   {
        //     src: "/images/projects/project-01/cover-02.jpg",
        //     alt: "Project image",
        //     width: 16,
        //     height: 9,
        //   },
        //   {
        //     src: "/images/projects/project-01/cover-03.jpg",
        //     alt: "Project image",
        //     width: 16,
        //     height: 9,
        //   },
        // ],
      },
      {
        title: "Tools & Technologies",
        description: (
          <>
            Visual Studio Code, Git, GitHub, Node JS, Composer, XAMPP, AnyDesk.
          </>
        ),
        // optional: leave the array empty if you don't want to display images
        // images: [
        //   {
        //     src: "/images/projects/project-01/cover-04.jpg",
        //     alt: "Project image",
        //     width: 16,
        //     height: 9,
        //   },
        // ],
      },
      {
        title: "Help Desk & Technical Support",
        description: (
          <>
            Troubleshooting hardware/software issues, remote support, ticketing
            systems.
          </>
        ),
      },
      {
        title: "Problem Solving & Creative Thinking",
        description: (
          <>Analytical mindset, innovative solutions, root cause analysis.</>
        ),
      },
      {
        title: "Maintenance & Repair",
        description: (
          <>
            Hardware diagnostics, system upgrades, network troubleshooting,
            installation software.
          </>
        ),
      },
      {
        title: "Soft Skills",
        description: (
          <>Good communication, teamwork, time management, customer service.</>
        ),
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about web design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "Recent Projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
