// pages/projects.tsx

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Newsletter";
import Project from "../components/All_Projects";

// Import any other components you need for this page.

const ProjectsPage = () => {
  return (
    <div>
      <Navbar />
      <Project />
      <Footer />
    </div>
  );
};

export default ProjectsPage;
