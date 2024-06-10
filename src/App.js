import React from "react";

import "./App.css";

import ProjectList from "./components/ProjectList";
import Toolbar from "./components/Toolbar";
import projects from "./assets/projects.json";

const filters = ["All", "Websites", "Flayers", "Business Cards"];

function App() {
  const [activeFilter, setActiveFilter] = React.useState("All");

  const onClickFilter = (filter) => {
    setActiveFilter(filter);
  };
  const getFilteredProjects = () => {
    if (activeFilter === "All") {
      return projects;
    }
    return projects.filter((project) => project.category === activeFilter);
  };

  const filteredProjects = getFilteredProjects();
  return (
    <div className="container">
      <Toolbar
        filters={filters}
        selected={activeFilter}
        onSelectFilter={onClickFilter}
      />
      <div className="categories"></div>
      <ProjectList projects={filteredProjects} />
    </div>
  );
}

export default App;
