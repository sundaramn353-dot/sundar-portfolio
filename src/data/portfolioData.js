export const personalInfo = {
  name: "Meenatchi Sundaram",
  title: "Robotics Software Engineer | ROS 2 Developer",
  roles: [
    "Robotics Software Engineer",
    "ROS 2 Developer",
    "Autonomous Systems Architect",
    "Community Lead @ KKR Robotics"
  ],
  email: "sundaramn353@gmail.com",
  phone: "+91 7339257336",
  location: "Chennai, Tamil Nadu, India",
  linkedin: "https://www.linkedin.com/in/sundaram-n",
  github: "https://github.com/sundaramn353-dot",
  rosWiki: "https://github.com/sundaramn353-dot/KKR-Robotics-Community/wiki",
  summary: "Enterprise-grade Robotics Software Engineer specializing in ROS 2 (Humble/Jazzy), autonomous navigation stacks (Nav2), SLAM optimization, and embedded micro-ROS controllers. Target-driven architect focusing on reliable production deployments, DDS configuration, and multi-agent coordination.",
};

export const stats = [
  { label: "ROS 2 Projects", value: 8, suffix: "" },
  { label: "GitHub Repositories", value: 8, suffix: "+" },
  { label: "Years Learning Robotics", value: 2, suffix: "+" },
  { label: "Simulations Built", value: 10, suffix: "+" },
  { label: "Robots Integrated", value: 5, suffix: "" },
];

export const skillsGrouped = {
  robotics: [
    "ROS 2 (Humble, Jazzy)",
    "Nav2 Navigation Stack",
    "MoveIt 2",
    "SLAM Toolbox",
    "AMCL Localization",
    "Behavior Trees (BT.cpp)",
    "Lifecycle Nodes & Managed Nodes",
    "Robot Localization (EKF)",
    "URDF & Xacro Robot Modeling"
  ],
  programming: [
    "C++ (C++17/20, STL, OOP)",
    "Python (PyTest, NumPy, asyncio)",
    "Bash (Automation & Deployment Scripts)",
    "CMake / colcon build system"
  ],
  simulation: [
    "Gazebo Classic",
    "Ignition / Gz Sim (Harmonic)",
    "RViz2 & Foxglove Studio",
    "NVIDIA Isaac Sim (Omniverse)"
  ],
  systems: [
    "Linux (Ubuntu 20.04 - 24.04)",
    "Docker & Docker Compose",
    "Git & CI/CD Pipelines (GitHub Actions)",
    "RTOS (FreeRTOS for microcontrollers)",
    "ROSBridge / WebSockets"
  ],
  communication: [
    "DDS (Data Distribution Service)",
    "Fast DDS & Cyclone DDS Tuning",
    "QoS (Quality of Service) configuration",
    "CAN Bus",
    "UART / SPI / I2C",
    "micro-ROS"
  ]
};

export const featuredProjects = [
  {
    id: 1,
    title: "Autonomous Mobile Robot Navigation Stack",
    subtitle: "Custom ROS 2 Nav2 Navigation Pipeline",
    image: "media/vacuum-robot-demo.mp4", // Using vacuum robot demo as the video for nav stack
    type: "video",
    tech: ["ROS 2 Humble", "Nav2", "SLAM Toolbox", "AMCL", "C++", "Python", "Gazebo"],
    problem: "Commercial warehouse AMRs frequently suffered from localization drift and path oscillations when navigating tight dynamic corridors, leading to safety halts.",
    solution: "Designed a production-grade ROS 2 Nav2 stack. Implemented a Dual-EKF state estimation, customized inflation costmap layers to prevent navigation gridlocks, and wrote a behavior tree node to handle recovery maneuvers seamlessly.",
    architecture: "LiDAR & Odometry & IMU → Robot Localization EKF → AMCL Localization → Nav2 Costmaps → BT Navigator Planner & Controller → Motor Driver Controller",
    metrics: {
      "Path Accuracy": "99.2% path adherence",
      "Avg Recovery Time": "< 1.5 seconds",
      "Position Drift": "< 1.2 cm per hour"
    },
    lessons: "Tuning costmap resolution and decoupling local controller frequencies from global planning loops is essential for high-speed dynamic obstacle avoidance.",
    github: "https://github.com/sundaramn353-dot/AMR-Cleaning-Robot"
  },
  {
    id: 2,
    title: "Warehouse AMR Fleet Simulation",
    subtitle: "Multi-Agent Coordination & Operations Dashboard",
    image: "media/scrubbot-demo.webm", // Webm video
    type: "video",
    tech: ["ROS 2 Jazzy", "Nav2", "ROSBridge", "WebSockets", "Python", "React", "Docker"],
    problem: "Fleet navigation in logistics hubs experiences deadlocks and cross-talk when multiple robots navigate the same lanes, decreasing package throughput.",
    solution: "Developed a Gazebo Harmonic multi-robot simulation workspace. Namespace-isolated TF trees and created an orchestration layer in Python connected to a custom React web interface via ROSBridge. Implemented cooperative path planning with dynamic speed scaling.",
    architecture: "Central Fleet Controller (Python) ⇋ ROSBridge WebSockets ⇋ Fleet Dashboard (React) ⇋ Individual ROS 2 Namespaced Robots (Robot_1, Robot_2)",
    metrics: {
      "Concurrent Robots": "5 AMRs in sync",
      "Deadlock Incidents": "Reduced to 0%",
      "Throughput Gain": "+32% workflow speed"
    },
    lessons: "Strict QoS configuration (transient local for static maps, best effort for lidar scans) and EKF covariance tuning are key to scaling multiple robots on the same DDS network.",
    github: "https://github.com/sundaramn353-dot/Scrub_Bot"
  },
  {
    id: 3,
    title: "SLAM Mapping System",
    subtitle: "High-Fidelity SLAM and Ceres-Optimized Scan Matcher",
    image: "media/rocker-bogie-1.jpeg", // Using rocker-bogie as static image
    type: "image",
    tech: ["SLAM Toolbox", "Cartographer", "Ceres Solver", "IMU Fusion", "RPLidar A1", "C++"],
    problem: "Drastic odometry errors occur on slippery concrete floors, distorting map structures and ruining downstream Nav2 global plans.",
    solution: "Built a SLAM pipeline utilizing Cartographer with customized Ceres optimization parameters. Integrated an IMU and Odometry with a Kalman filter (`robot_localization`) to mitigate slip-induced slippage and scan matching errors.",
    architecture: "Raw LiDAR Scans + Odometry + IMU → Cartographer SLAM Node → Loop Closure Optimization (Ceres) → Stable Grid Map /map",
    metrics: {
      "Map Accuracy": "3.5 cm resolution",
      "Mapping Range": "5000+ sq ft map size",
      "Loop Closure Speed": "< 350 ms latency"
    },
    lessons: "Using IMU linear acceleration data coupled with angular rate outputs helps loop closure solvers identify false matches when wheels spin out.",
    github: "https://github.com/sundaramn353-dot/KKR-Robotics-Community"
  },
  {
    id: 4,
    title: "MoveIt 2 Pick & Place Robot",
    subtitle: "6-DOF Industrial Robotic Arm path planning",
    image: "media/rocker-bogie-2.jpeg", // Static image
    type: "image",
    tech: ["ROS 2 Humble", "MoveIt 2", "Pilz Planner", "Octomap", "Joint Trajectory Controller", "C++"],
    problem: "Collision-free pick and place tasks on industrial manipulators failed when dynamic obstacles entered the manipulator's envelope, causing emergency shutdowns.",
    solution: "Integrated MoveIt 2 with a 6-DOF robotic manipulator simulation. Configured a 3D depth camera point cloud stream to dynamically build an Octomap planning scene, and utilized the Pilz industrial motion planner to execute collision-free trajectories.",
    architecture: "3D Depth Camera → Octomap Planning Scene → MoveIt 2 MoveGroup → Pilz Motion Planner → Joint Trajectory Controller → Arm Hardware Interface",
    metrics: {
      "Path Planning Success": "98.8% success rate",
      "Planning Latency": "< 180 ms avg",
      "Manipulation Cycle": "4.5 seconds cycle"
    },
    lessons: "Decoupling the planning scene updater thread from the trajectory execution thread is critical to prevent joint command starvation.",
    github: "https://github.com/sundaramn353-dot/ros2-cafe-butler-robot"
  },
  {
    id: 5,
    title: "micro-ROS ESP32 Robot Controller",
    subtitle: "Bare-Metal Real-Time Motor & Sensor Node",
    image: "media/rocker-bogie-1.jpeg",
    type: "image",
    tech: ["micro-ROS", "ESP32", "FreeRTOS", "DDS QoS", "CAN Bus", "I2C", "C++"],
    problem: "Standard serial-to-socket connections from microcontrollers to the main computer suffer from high latency and do not native support ROS 2 topics, causing timing misalignment.",
    solution: "Designed and built custom ESP32 firmware running micro-ROS on FreeRTOS. Created publishers for wheel encoders and subscriber callback groups for wheel velocity commands. Managed synchronization via micro-ROS Agent over serial/Wi-Fi.",
    architecture: "Motors & Sensors → ESP32 Microcontroller (micro-ROS Client) → micro-ROS Agent → ROS 2 DDS Network (Main Compute)",
    metrics: {
      "Control Frequency": "100 Hz loop speed",
      "Topic Latency": "< 6.5 ms over Serial",
      "CPU Utilization": "18% ESP32 core load"
    },
    lessons: "Configuring the allocator size in micro-ROS is critical to prevent heap fragmentation and memory leaks in long-running embedded tasks.",
    github: "https://github.com/sundaramn353-dot/sundaramn353-dot"
  }
];

export const experienceTimeline = [
  {
    id: 1,
    type: "internship",
    title: "ROS 2 Autonomous Systems Intern",
    organization: "Self-Directed Industrial Systems Development",
    location: "Chennai, Tamil Nadu",
    date: "Feb 2026 – Present",
    description: "Architected custom SLAM mapping and Nav2 pipelines for differential drive robots. Developed an industrial coverage path planner (Boustrophedon) and created micro-ROS nodes for ESP32 control systems.",
    tech: ["ROS 2", "Nav2", "micro-ROS", "Docker", "ESP32", "C++", "Python"]
  },
  {
    id: 2,
    type: "research",
    title: "Lead Researcher & Developer",
    organization: "KKR Robotics Open-Source Community",
    location: "Chennai, Tamil Nadu",
    date: "May 2025 – Present",
    description: "Founded the community to document ROS 2 issues and build a Tamil Nadu ROS developer network. Authored the Troubleshooting Wiki, resolving complex issues with TF2 coordinate frame trees, DDS communications, and Gazebo Classic to Harmonic migration.",
    tech: ["ROS 2", "TF2", "DDS", "Gazebo Harmonic", "Git", "Markdown"]
  },
  {
    id: 3,
    type: "project",
    title: "ROS 2 Cafe Butler Robot Project",
    organization: "Systems Integration Project",
    location: "Chennai, Tamil Nadu",
    date: "Dec 2025 – Jan 2026",
    description: "Designed a service robot workflow with a robust Python-based state machine. Integrated dynamic ordering, preemption commands, and a customized odom_to_tf coordinator that prevented visual jitter in Gazebo Harmonic.",
    tech: ["ROS 2 Jazzy", "Nav2", "State Machines", "Gazebo Harmonic", "Python", "TF2"]
  },
  {
    id: 4,
    type: "certification",
    title: "Certified Wheeled Mobile Robots Navigation Specialist",
    organization: "NPTEL (National Programme on Technology Enhanced Learning)",
    location: "Online",
    date: "2026",
    description: "Intense academic and practical course covering kinematics, path planning algorithms (A*, Dijkstra, DWA), control loops, and obstacle avoidance parameters.",
    tech: ["Robot Kinematics", "Path Planning", "PID Control", "State Estimation"]
  },
  {
    id: 5,
    type: "certification",
    title: "Self Driving & ROS 2 - Learn by Doing: Planning & Navigation",
    organization: "Udemy Professional Education",
    location: "Online",
    date: "2025",
    description: "Hands-on certification on setting up TF transform trees, customizing Nav2 controllers, integrating SLAM, and debugging lifecycle nodes.",
    tech: ["ROS 2", "Nav2", "TF2", "SLAM", "Gazebo"]
  }
];

export const rosKnowledge = [
  {
    id: "dds",
    title: "DDS (Data Distribution Service)",
    summary: "The industrial middleware standard in ROS 2. Enables high-throughput, real-time, peer-to-peer data transmission using a publish-subscribe model, completely removing the single point of failure (ROS 1 master).",
    details: "By utilizing DDS, ROS 2 nodes discover each other dynamically without a central naming server. You can choose different implementations (Fast DDS, Cyclone DDS) based on requirements."
  },
  {
    id: "qos",
    title: "QoS (Quality of Service) Profiles",
    summary: "Highly configurable communication settings tailored for specific data streams. Governs how data is queued, stored, and sent over lossy networks.",
    details: "Essential configurations include: Reliability (Reliable for maps/actions, Best Effort for sensors), Durability (Transient Local to republish past data to new subscribers), and History (keep last N messages)."
  },
  {
    id: "tf2",
    title: "TF2 Transform Tree",
    summary: "The coordinate frame tracking library. Computes relative position and orientation between multiple robot components (e.g., base_link, laser_frame, map, odom) over time.",
    details: "Crucial rules of TF trees: every frame must have exactly one parent, except the root. We must avoid duplicate transforms or cyclic graphs which cause Nav2 to fail."
  },
  {
    id: "lifecycle",
    title: "Lifecycle & Managed Nodes",
    summary: "ROS 2 nodes with a state machine interface (Unconfigured, Inactive, Active, Finalized). Allows deterministic startup, shutdown, and resource allocation in production.",
    details: "Managed by a lifecycle manager, lifecycle nodes allow you to verify sensor connections in the 'Inactive' state before enabling callbacks in the 'Active' state."
  },
  {
    id: "executors",
    title: "ROS 2 Executors",
    summary: "Thread management models that execute callbacks. Determines how subscription, service, timer, and client events are scheduled.",
    details: "Types: SingleThreadedExecutor, MultiThreadedExecutor, and StaticSingleThreadedExecutor. Critical for C++ real-time systems to avoid priority inversion and CPU starvation."
  },
  {
    id: "bt",
    title: "Behavior Trees (BT.cpp)",
    summary: "Hierarchical control structures used in Nav2 to execute complex task logic, orchestrating planning, recovery, and control.",
    details: "Composed of Action, Condition, Control, and Decorator nodes. Far more scalable and modular than traditional Finite State Machines for complex robotics."
  },
  {
    id: "nav2",
    title: "Nav2 Stack",
    summary: "The industry standard autonomous navigation framework. Handles costmap generation, global path planning, local control execution, and recovery actions.",
    details: "Integrates modular plugins (e.g., SmacPlanner for global paths, DWB/MPPI for local command velocities) under Behavior Tree coordination."
  },
  {
    id: "slam",
    title: "SLAM (Simultaneous Localization & Mapping)",
    summary: "Real-time mapping of unknown environments while tracking the robot's current position.",
    details: "slam_toolbox offers lifetime mapping and Ceres-based loop closures, while Cartographer uses submap matching for extremely accurate grid generation."
  },
  {
    id: "moveit2",
    title: "MoveIt 2 Manipulator Control",
    summary: "The motion planning, kinematics, and collision checking framework for robotic arms and manipulators.",
    details: "Uses planning groups to compute joint space paths, integrates IKFast or KDL solvers for inverse kinematics, and builds 3D occupancy maps (Octomap) for obstacle avoidance."
  }
];

export const githubAnalytics = {
  contributions: [
    { week: 1, days: [1, 2, 4, 0, 1, 3, 2] },
    { week: 2, days: [0, 4, 5, 2, 1, 0, 3] },
    { week: 3, days: [2, 1, 0, 3, 4, 2, 1] },
    { week: 4, days: [5, 4, 3, 2, 1, 4, 3] },
    { week: 5, days: [2, 0, 1, 4, 5, 3, 2] },
    { week: 6, days: [1, 3, 4, 2, 0, 1, 4] },
    { week: 7, days: [4, 5, 2, 1, 3, 2, 0] },
    { week: 8, days: [0, 1, 2, 3, 4, 5, 2] },
    { week: 9, days: [3, 2, 4, 1, 0, 2, 4] },
    { week: 10, days: [5, 4, 3, 0, 2, 1, 3] },
    { week: 11, days: [2, 1, 4, 5, 3, 2, 1] },
    { week: 12, days: [4, 3, 2, 1, 0, 4, 5] },
  ],
  stats: {
    stars: 42,
    followers: 124,
    commitsThisYear: 384,
  },
  recentCommits: [
    { repo: "AMR-Cleaning-Robot", msg: "feat: tune AMCL particle filter and update DWB local controller inflation profiles", date: "2 hrs ago" },
    { repo: "Scrub_Bot", msg: "fix: resolve multi-robot TF namespaces conflict in Gazebo Harmonic launch files", date: "1 day ago" },
    { repo: "ros2-cafe-butler-robot", msg: "refactor: implement python preemption state machine logic and client handlers", date: "3 days ago" },
    { repo: "KKR-Robotics-Community", msg: "docs: add troubleshooting guide for Lifecycle Nodes state transition errors", date: "4 days ago" }
  ]
};
