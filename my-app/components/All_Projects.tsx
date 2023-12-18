import React from 'react';
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  imageUrl: string;
  projectUrl: string;
  description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  imageUrl,
  projectUrl,
  description,
}) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto">
      <a href={projectUrl} target="_blank" rel="noopener noreferrer">
        <Image
          src={imageUrl}
          alt={title}
          width={640}
          height={427}
          layout="responsive"
        />
      </a>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-center">{title}</div>
        <p className="text-gray-700 text-base text-center">{description}</p>
      </div>
    </div>
  );
};


interface Project {
  title: string;
  imageUrl: string;
  projectUrl: string;
  description: string;
}

const ProjectsShowcase: React.FC = () => {
 const projects: Project[] = [
   {
     title: "Photography Portfolio",
     imageUrl: "/images/photography-portfolio.webp", 
     projectUrl: "https://www.uniquephotography.art",
     description:
       "A captivating front-end web platform dedicated to photography.",
   },
   {
     title: "E-commerce Web App",
     imageUrl: "/images/e-commerce-web-app.webp", 
     projectUrl: "https://www.dinfluenceart.com",
     description: "A unique e-commerce business full-stack web application.",
   },
 ];


  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold underline text-center my-6">
        PROJECTS SHOWCASE
      </h2>
      <div className="justify-items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <div key={index} className="m-4">
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsShowcase;
