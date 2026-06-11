export const personalInfo = {
  name: "Sundaram N",
  title: "ROS 2 Developer",
  roles: ["ROS 2 Developer", "Autonomous Systems Engineer", "Community Manager — KKR Robotics",],
  email: "sundaramn353@gmail.com",
  phone: "+91 7339257336",
  location: "Chennai, Tamil Nadu, India",
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
    icon: "globe",
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
    icon: "book",
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
    title: "TF2 in ROS 2 Explained: Coordinate Frames",
    summary: "An in-depth guide to TF2 transform trees in ROS 2, explaining parent/child frames, static vs. dynamic coordinate transforms, and hands-on methods for resolving TF frame errors.",
    date: "08 June 2026",
    readTime: "6 min read",
    tags: ["ROS 2", "TF2", "Coordinate Frames", "Robotics"],
    category: "Tutorial",
    icon: "code",
    link: "https://roboticslearninghub.blogspot.com/2026/06/tf2-in-ros2-explained-coordinate-frames.html",
  },
  {
    id: 2,
    title: "ROS 2 Troubleshooting Guide — Common Issues & Fixes",
    summary: "A practical troubleshooting log documenting real ROS 2 errors encountered during autonomous robot development, with verified root causes and fixes for Nav2, SLAM, TF2, and hardware drivers.",
    date: "15 May 2026",
    readTime: "8 min read",
    tags: ["ROS 2", "Nav2", "SLAM", "Troubleshooting"],
    category: "Tutorial",
    icon: "wiki",
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
    title: "ROS 2 Cafe Butler Robot",
    subtitle: "Autonomous Service Robot with Order Preemption",
    description: "An autonomous service robot simulated in Gazebo Harmonic, designed to serve customers in a cafe layout. Implements a robust state machine for ordering and delivery workflows, dynamic cancel/preemption logic, Nav2 stack integration, and custom odometry transformation nodes.",
    tech: ["ROS 2 Jazzy", "Nav2", "Gazebo Harmonic", "C++", "Python", "State Machine", "URDF"],
    highlights: [
      "Custom state machine coordinating tables, order queues, and delivery status",
      "Dynamic order preemption and cancellation handling during active navigation",
      "Gazebo Harmonic simulation environment modeled as a realistic cafe layout",
      "Custom odom_to_tf translation node eliminating transform frame conflicts",
      "Full autonomous navigation with local costmap obstacle avoidance",
    ],
    category: "Robotics",
    color: "#00f0ff",
    icon: "robot",
    github: "https://github.com/sundaramn353-dot/ros2-cafe-butler-robot",
    media: [
      { type: "video", src: "media/cafe-butler-demo.mp4", label: "Butler Robot Navigation" },
    ],
  },
  {
    id: 2,
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
    icon: "robot",
    github: "https://github.com/sundaramn353-dot/Scrub_Bot",
    media: [
      { type: "video", src: "media/scrubbot-demo.webm", label: "ScrubBot Demo" },
    ],
  },
  {
    id: 3,
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
    icon: "refresh",
    github: "https://github.com/sundaramn353-dot/AMR-Cleaning-Robot",
    media: [
      { type: "video", src: "media/vacuum-robot-demo.mp4", label: "Navigation Demo" },
    ],
  },
  {
    id: 4,
    title: "Automated Metal Detector",
    subtitle: "Real-Time Alert System with Embedded Sensors",
    description: "An automated metal detection system featuring real-time buzzer and LED alerts, with proximity-based sensitivity calibration. Built with embedded microcontrollers for reliable field detection of metallic objects.",
    tech: ["Arduino", "Inductive Sensor", "Buzzer", "LED", "Embedded C", "PCB Design"],
    highlights: [
      "Real-time metal detection with instant alerts",
      "Buzzer + LED dual-alert notification system",
      "Adjustable sensitivity via proximity calibration",
      "Low-power embedded microcontroller design",
      "Portable and field-deployable hardware unit",
    ],
    category: "Embedded",
    color: "#f59e0b",
    icon: "search",
  },
  {
    id: 5,
    title: "Rocker-Bogie Surveillance Robot",
    subtitle: "Hazardous Object Handling & Terrain Traversal",
    description: "A rocker-bogie chassis-based surveillance robot designed for hazardous object detection and handling in uneven terrain. Features a robotic arm for object manipulation and camera-based remote surveillance capabilities.",
    tech: ["Arduino", "Rocker-Bogie", "Servo Motors", "Camera Module", "RF Control", "Robotic Arm"],
    highlights: [
      "Rocker-bogie suspension for rough terrain traversal",
      "Robotic arm for hazardous object handling",
      "Live camera feed for remote surveillance",
      "RF-based wireless control system",
      "Designed for search & rescue operations",
    ],
    category: "Embedded",
    color: "#10b981",
    icon: "shield",
    media: [
      { type: "image", src: "media/rocker-bogie-1.jpeg", label: "Robot Overview" },
      { type: "image", src: "media/rocker-bogie-2.jpeg", label: "Terrain Test" },
    ],
  },
];

export const experience = [
  {
    id: 1,
    role: "ROS 2 Developer",
    company: "Self-Directed Autonomous Robotics Projects",
    location: "Chennai , Tamil Nadu, India",
    duration: " (Feb-2026) – Present",
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
  { label: "ROS 2 Projects", value: 5, suffix: "" },
  { label: "Wiki Published", value: 1, suffix: "" },
  { label: "Blog Articles", value: 2, suffix: "" },
  { label: "GitHub Repos", value: 6, suffix: "+" },
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
