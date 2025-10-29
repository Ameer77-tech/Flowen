import AppSideBar from "@/components/SideBar";
import React from "react";
import Main from "./components/Main";

const page = async ({ params, searchParams }) => {
  const urlData = await searchParams;
  const filter = urlData.filter;
  const data = [
    {
      id: "PRJ-001",
      name: "Website Redesign",
      description:
        "Revamp the company website with a modern UI and improved UX flow.",
      longDescription:
        "This project involves redesigning the company’s marketing website to enhance user engagement and conversion. It includes new layouts, accessibility improvements, and updated branding elements. The goal is to deliver a fresh, intuitive experience that reflects our updated design system.",
      dueDate: "2025-11-15",
      priority: "High",
      status: "In Progress",
      totalTasks: 20,
      totalDone: 12,
    },
    {
      id: "PRJ-002",
      name: "Mobile App Development",
      description: "Develop a cross-platform mobile app for task management.",
      longDescription:
        "Build a React Native or Flutter-based mobile application to allow users to manage tasks and projects on the go. Features include offline mode, push notifications, and seamless synchronization with the web dashboard.",
      dueDate: "2025-12-10",
      priority: "Medium",
      status: "In Progress",
      totalTasks: 18,
      totalDone: 9,
    },
    {
      id: "PRJ-003",
      name: "Marketing Campaign",
      description: "Plan and execute Q4 digital marketing campaign.",
      longDescription:
        "Coordinate social media, email, and content marketing strategies for the Q4 campaign. Focus on lead generation through paid ads, partnerships, and community engagement. Measure success with analytics dashboards.",
      dueDate: "2025-11-05",
      priority: "Low",
      status: "Completed",
      totalTasks: 30,
      totalDone: 30,
    },
    {
      id: "PRJ-004",
      name: "AI Task Assistant",
      description: "Integrate AI-powered task recommendations.",
      longDescription:
        "Create a system that suggests next tasks based on user activity and deadlines using a lightweight AI model. This includes natural language task input, contextual reminders, and smart prioritization.",
      dueDate: "2025-12-22",
      priority: "High",
      status: "Planning",
      totalTasks: 10,
      totalDone: 2,
    },
    {
      id: "PRJ-005",
      name: "Team Collaboration Tools",
      description: "Add real-time collaboration features for teams.",
      longDescription:
        "Implement shared project boards, comments, and mentions to enhance collaboration. Integrate socket-based live updates and versioning for concurrent task edits.",
      dueDate: "2025-12-05",
      priority: "High",
      status: "In Progress",
      totalTasks: 15,
      totalDone: 7,
    },
    {
      id: "PRJ-006",
      name: "Data Analytics Dashboard",
      description: "Develop analytics to visualize project metrics.",
      longDescription:
        "Build a dashboard that shows task completion rates, user activity, and team productivity metrics. Include charts and filters for timeline-based insights and export options for reports.",
      dueDate: "2025-11-30",
      priority: "Medium",
      status: "Not Started",
      totalTasks: 12,
      totalDone: 0,
    },
    {
      id: "PRJ-007",
      name: "New Feature Launch",
      description: "Introduce AI-driven analytics for project forecasting.",
      longDescription:
        "This feature predicts project completion timelines using historical data and team performance. It will be integrated into the analytics dashboard and allow project managers to view risk indicators in real-time.",
      dueDate: "2025-12-18",
      priority: "High",
      status: "In Progress",
      totalTasks: 16,
      totalDone: 8,
    },
    {
      id: "PRJ-008",
      name: "Internal API Refactor",
      description: "Refactor backend services for scalability.",
      longDescription:
        "Optimize Express.js routes, introduce caching with Redis, and migrate some services to microservice architecture. This improves response time and reduces server load for high-traffic usage.",
      dueDate: "2025-11-20",
      priority: "Medium",
      status: "In Progress",
      totalTasks: 14,
      totalDone: 6,
    },
    {
      id: "PRJ-009",
      name: "User Onboarding Revamp",
      description: "Simplify and gamify new user onboarding.",
      longDescription:
        "Redesign the onboarding flow with checklists, tooltips, and progress indicators. Add animations and rewards to make new users more engaged with the product during their first week.",
      dueDate: "2025-11-12",
      priority: "Low",
      status: "Planning",
      totalTasks: 8,
      totalDone: 1,
    },
    {
      id: "PRJ-010",
      name: "Performance Optimization",
      description: "Improve overall app performance and loading speed.",
      longDescription:
        "Audit the front-end bundle size, enable lazy loading, and implement caching strategies for assets and APIs. The goal is to reduce initial load time by 40% and improve Lighthouse scores.",
      dueDate: "2025-12-08",
      priority: "High",
      status: "In Progress",
      totalTasks: 11,
      totalDone: 4,
    },
  ];
  return (
    <div className="h-screen w-screen flex justify-start">
      <AppSideBar />
      <Main data={data} filter={filter} />
    </div>
  );
};

export default page;
