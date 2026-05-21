export const personalInfo = {
  name: "Sundaram N",
  title: "ROS 2 Robotics Engineer",
  roles: ["ROS 2 Developer", "Autonomous Systems Engineer", "Community Manager — KKR Robotics", "Embedded Systems Developer"],
  email: "sundaramn353@gmail.com",
  phone: "+91 7339257336",
  location: "Coimbatore, Tamil Nadu, India",
  linkedin: "https://www.linkedin.com/in/sundaram-n",
  github: "https://github.com/sundaramn353-dot",
  rosWiki: "https://github.com/sundaramn353-dot/KKR-Robotics-Community/wiki",
  summary: "Passionate ROS 2 Robotics Engineer specializing in autonomous mobile robots, SLAM-based navigation, and embedded systems. Community Manager of KKR Robotics Community — creating open-source robotics resources and troubleshooting guides for the ROS developer community.",
};

export const communityWork = [
  {
    id: 1,
    title: "Community Manager — ROS TamilNadu Community",
    description: "Managing the KKR Robotics open-source community on GitHub — creating practical troubleshooting resources, documenting real ROS 2 issues and fixes, and helping developers solve common robotics problems.",
    icon: "🌐",
    highlights: [
      "Created and manage the KKR Robotics Community GitHub organization",
      "Authored the ROS 2 Troubleshooting Log wiki for common issues and fixes",
      "Documenting real-world Nav2, SLAM, and hardware integration problems",
      "Building a knowledge base for ROS 2 developers in Tamil Nadu",
      "Encouraging open-source contribution in the local robotics community",
    ],
    link: "https://github.com/sundaramn353-dot/KKR-Robotics-Community",
    color: "#00d4ff",
  },
  {
    id: 2,
    title: "ROS 2 Troubleshooting Wiki",
    description: "Created a detailed Troubleshooting Log wiki documenting real ROS 2 issues encountered during autonomous robot development — covering Nav2, SLAM, TF2, hardware drivers, and Gazebo simulation.",
    icon: "📖",
    highlights: [
      "Documents real ROS 2 errors with root causes and verified fixes",
      "Covers Nav2, SLAM, TF2 frame errors, and sensor integration",
      "Helps ROS 2 beginners avoid common pitfalls",
      "Based on hands-on autonomous robot development experience",
      "Publicly accessible on GitHub for the global ROS community",
    ],
    link: "https://github.com/sundaramn353-dot/KKR-Robotics-Community/wiki",
    color: "#7c3aed",
  },
];

export const blogs = [
  {
    id: 1,
    title: "ROS 2 Troubleshooting Guide — Common Issues & Fixes",
    summary: "A practical troubleshooting log documenting real ROS 2 errors encountered during autonomous robot development, with verified root causes and fixes for Nav2, SLAM, TF2, and hardware drivers.",
    date: "15 May 2026",
    readTime: "8 min read",
    tags: ["ROS 2", "Nav2", "SLAM", "Troubleshooting"],
    category: "Tutorial",
    icon: "🛠️",
    link: "https://github.com/sundaramn353-dot/KKR-Robotics-Community/wiki",
  },
];

export const skills = {
  robotics: [
    { name: "ROS 2 (Jazzy / Humble)", level: 95 },
    { name: "Nav2 Navigation Stack", level: 90 },
    { name: "SLAM (Cartographer, slam_toolbox)", level: 88 },
    { name: "Gazebo / Gz Sim", level: 85 },
    { name: "RViz2", level: 88 },
    { name: "URDF / Xacro", level: 87 },
    { name: "TF2 Transform Trees", level: 85 },
    { name: "Behavior Trees (BT.cpp)", level: 78 },
  ],
  programming: [
    { name: "Python", level: 92 },
    { name: "C++", level: 50 },
    { name: "JavaScript / React", level: 30 },
    { name: "Bash / Shell Scripting", level: 80 },
    { name: "CMake / Colcon Build", level: 78 },
  ],
  hardware: [
    { name: "Raspberry Pi", level: 88 },
    { name: "Arduino / Microcontrollers", level: 85 },
    { name: "LiDAR (RPLidar, Hokuyo)", level: 83 },
    { name: "IMU / Odometry Sensors", level: 80 },
    { name: "Motor Controllers / ESC", level: 78 },
  ],
  tools: [
    "Git / GitHub", "Docker", "Linux (Ubuntu 22/24)",
    "OpenCV", "PCL", "ROSBridge / WebSocket",
    "React / Node.js", "NumPy / Matplotlib", "VS Code", "Notion",
  ],
};

export const projects = [
  {
    id: 1,
    title: "ScrubBot — Industrial Floor Cleaning Robot",
    subtitle: "Autonomous Coverage with React Dashboard",
    description: "Full autonomous industrial scrubbing robot with Boustrophedon coverage path planning, real-time React monitoring UI, auto-docking, and obstacle-aware Nav2 navigation.",
    tech: ["ROS 2 Jazzy", "Nav2", "SLAM", "Python", "React", "WebSocket", "Gazebo", "LiDAR"],
    highlights: [
      "Boustrophedon coverage path planning",
      "Real-time canvas map with robot tracking",
      "Auto-docking via fiducial marker detection",
      "Click-to-navigate with safety buffer",
      "Full Gazebo simulation + React control UI",
    ],
    category: "Robotics",
    color: "#00d4ff",
    icon: "🤖",
    github: "https://github.com/sundaramn353-dot",
  },
  {
    id: 2,
    title: "Autonomous Vacuum Robot",
    subtitle: "ROS 2 Differential Drive Navigation",
    description: "Complete ROS 2 navigation pipeline with SLAM mapping, AMCL localization, Nav2 path planning, and Gazebo simulation for a differential drive vacuum robot.",
    tech: ["ROS 2", "Cartographer SLAM", "AMCL", "Nav2", "URDF", "Gazebo", "Python", "C++"],
    highlights: [
      "Custom differential drive URDF with LiDAR & camera",
      "Cartographer SLAM for real-time map building",
      "AMCL particle-filter localization",
      "Smac Planner + DWB controller integration",
      "Multi-room Gazebo simulation environment",
    ],
    category: "Robotics",
    color: "#7c3aed",
    icon: "🔄",
    github: "https://github.com/sundaramn353-dot",
  },
];

export const experience = [
  {
    id: 1,
    role: "ROS 2 Developer",
    company: "Self-Directed Autonomous Robotics Projects",
    location: "Coimbatore, Tamil Nadu, India",
    duration: "2023 – Present",
    type: "Project / Academic",
    description: [
      "Built complete autonomous navigation pipelines using ROS 2 Nav2 with SLAM-based mapping",
      "Implemented Boustrophedon coverage path planning for industrial floor-cleaning robots",
      "Integrated RPLidar A1 with custom ROS 2 hardware drivers for obstacle detection",
      "Developed React dashboards with real-time robot telemetry via ROSBridge WebSocket",
      "Designed and simulated differential drive robots in Gazebo with full URDF + sensor plugins",
      "Built auto-docking system using fiducial marker detection and Nav2 behavior trees",
    ],
    tech: ["ROS 2", "Nav2", "SLAM", "Python", "C++", "Gazebo", "React"],
  },
];

export const education = [
  {
    id: 1,
    degree: "B.E. — Robotics and Automation",
    institution: "Dhaanish Ahmed Institute of Technology",
    location: "Coimbatore, Tamil Nadu, India",
    duration: "2021 – 2025",
    grade: "CGPA: 7.5 / 10",
    highlights: [
      "Final Year Project: Rocker-Bogie Based Robot — terrain-adaptive rover for uneven surfaces",
      "Specialized in autonomous systems, robot kinematics, and embedded control",
      "Hands-on with ROS 2, Gazebo simulation, and hardware integration throughout the program",
    ],
  },
];

export const certifications = [
  { name: "Wheeled Mobile Robots Navigation Course", issuer: "NPTEL", year: "2026" },
  { name: "Self Driving And ROS2 - Learn by Doing Plan & Navigation", issuer: "UDEMY", year: "2025" },
  { name: "Wheeled Mobile Robots Navigation", issuer: "NPTEL", year: "2026" },
  { name: "NEXT GEN ROBOTICS", issuer: "IIT MADRAS", year: "2025" },
];

export const stats = [
  { label: "ROS 2 Projects", value: 2, suffix: "" },
  { label: "Wiki Published", value: 1, suffix: "" },
  { label: "Blog Articles", value: 1, suffix: "" },
  { label: "GitHub Repos", value: 5, suffix: "+" },
];

export const navLinks = [
  { name: "Home", href: "home" },
  { name: "About", href: "about" },
  { name: "Skills", href: "skills" },
  { name: "Projects", href: "projects" },
  { name: "Experience", href: "experience" },
  { name: "Community", href: "community" },
  { name: "Blog", href: "blog" },
  { name: "Contact", href: "contact" },
];
