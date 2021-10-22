import React from "react";
import Head from "next/head";
import MainHeader from "../components/MainHeader";

import PortfolioVisitButton from "../components/PortfolioVisitButton";
import PortfolioItem from "../components/PortfolioItem";

const projects = [
  {
    name: "Keto Clock",
    website: "https://www.ketoclock.com",
    github: null,
    tech: [
      "React Native",
      "MongoDB",
      "Apollo Server",
      "Serverless",
      "Redux Toolkit",
    ],
    description: [
      "Communicating design and development standards to shareholders and developers",
      "Managing ongoing projects and task delegation for junior developers",
      "Performing code reviews to maintain quality code standards",
    ],
  },
  {
    name: "EMCO Energy",
    website: "https://emcoenergy.com",
    github: null,
    tech: ["NextJS", "MongoDB", "Firebase", "Lambda", "EC2", "DynamoDB"],
    description: [
      "Redesigning and rebuilding EMCO energy website and CMS dashboard from the ground up",
      "Deployment of front/backend to AWS EC2 instance",
      "Integrated APIs through Lambda functions via API Gateway connected to DynamoDB",
    ],
  },
  {
    name: "Greengate Energy VR Experience",
    website: "https://youtu.be/3OQSe2HRfJI",
    github: "",
    tech: ["Unreal Engine 4"],
    description: [
      "Creating VR experience to communicate the scale of solar and wind turbine farms in Alberta using Unreal Engine 4",
      "Creating a 1:1 VR level which is the largest solar farm project in North America",
    ],
  },
  {
    name: "URL Shortener",
    website: "https://tinyurl.forestparkdev.ca",
    github: "https://github.com/foresthpark/tiny_url_maker",
    tech: ["S3", "Lambda", "API Gateway", "DynamoDB", "Route 53"],
    description: [
      "Creates a random shortened URL that redirects you to the registered original URL",
      "Completely serverless utilizing AWS S3, Lambda, API Gateway, and DynamoDB",
    ],
  },
  {
    name: "Google Gram",
    website: "https://forest-firegram.web.app",
    github: "https://github.com/foresthpark/google_gram",
    tech: ["NextJS", "Firebase", "Clarifai"],
    description: [
      "Delivering a simple gallery experience with realtime updates via Firebase snapshots and integrated NSFW filter",
    ],
  },
  {
    name: "Inuka",
    website: "https://inuka.forestparkdev.ca",
    github: null,
    tech: ["Flutter", "Firebase"],
    description: [
      "Winner of best in category for Family and Community Centred Care at Innovation 4 Health Hackathon",
      "Delivering a full stack iOS/Android app MVP within the 4 week competition period",
    ],
  },
  {
    name: "Expense Robot",
    website: "https://expenserobot.forestparkdev.ca/#/",
    github: null,
    tech: ["Flutter", "Firebase"],
    description: [
      "Winner of 1st place at ATB Open Banking Hackathon",
      "Delivered full stack iOS/Android application using Flutter in 24 hours",
    ],
  },
  {
    name: "PaintJS",
    website: "https://foresthpark.github.io/PaintJS",
    github: "https://github.com/foresthpark/PaintJS",
    tech: ["HTML", "CSS", "JS"],
    description: ["Delivering a simple painting experience with pure JS"],
  },
  {
    name: "NYT Flutter Times",
    website: "https://nyt-flutter.firebaseapp.com/#/",
    github: "https://github.com/foresthpark/flutter_web_times",
    tech: ["Flutter"],
    description: ["Serving the New York Times through Flutter Web"],
  },

  {
    name: "ClicBitz",
    website:
      "https://play.google.com/store/apps/details?id=com.buildr.clicbitz&hl=en_US",
    github: null,
    tech: ["Flutter", "Firebase"],
    description: [
      "Delivering a full stack NFC scanner/writer app for STEM education in Android and iOS",
    ],
  },
];

// Storybooks
// https://github.com/foresthpark/storybooks

const portfolio = () => {
  return (
    <div className="w-full h-full bg-blue-300 flex flex-col justify-center items-center">
      <Head>
        <title>林 :: Portfolio</title>
      </Head>
      <div className="flex flex-row justify-between">
        <MainHeader currentMenu="portfolio" />
      </div>
      <div className="font-sans font-black text-5xl tracking-wide sm:text-12xl text-center">
        PORTFOLIO
      </div>
      <div className="font-sans font-bold sm:text-4xl text-2xl mx-2 tracking-wide text-center">
        Wondering what I'm capable of?
      </div>
      <div className="sm:my-5 sm:text-base text-sm my-3 mx-2 text-center">
        A few examples of some projects I worked on in the past.
      </div>
      {projects.map((project, index) => {
        return (
          <PortfolioItem
            title={project.name}
            website={project.website}
            github={project.github}
            tech={project.tech}
            description={project.description}
          />
        );
      })}
    </div>
  );
};

export default portfolio;
