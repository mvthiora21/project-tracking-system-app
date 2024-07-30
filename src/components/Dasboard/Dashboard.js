import React from 'react';
import { useSelector } from 'react-redux';
import ProjectList from './ProjectList';
import './Dashboard.css';

const Dashboard = () => {
  const projects = useSelector((state) => state.projects.projects);

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="dashboard-content">
        <h2>Projects Overview</h2>
        <ProjectList projects={projects} />
      </div>
    </div>
  );
};

export default Dashboard;
