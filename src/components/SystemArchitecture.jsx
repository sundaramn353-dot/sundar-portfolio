import { useState } from 'react';
import { motion } from 'framer-motion';

export default function SystemArchitecture() {
  const [activeTab, setActiveTab] = useState('pipeline'); // 'pipeline', 'tf', 'bt'

  return (
    <section id="architecture" className="py-24 bg-cyber-bg relative border-b border-cyber-border/40 z-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="px-3 py-1 text-xs font-mono border border-cyber-blue/30 rounded-full bg-cyber-blue/5 text-cyber-blue tracking-widest uppercase inline-block mb-3">
            SYSTEM ARCHITECTURE
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight mb-4">
            Production ROS 2 Dataflow & Orchestration
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm sm:text-base font-sans">
            Detailed engineering schematic showing the distributed node topology, transform hierarchies, and task synchronization workflows.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex justify-center gap-4 mb-12">
          {[
            { id: 'pipeline', label: 'Nodes & Message Pipeline' },
            { id: 'tf', label: 'TF Coordinate Tree (tf2)' },
            { id: 'bt', label: 'Nav2 Behavior Tree (XML)' }
          ].map(t => (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              className={`px-4 py-2 font-mono text-xs border rounded transition duration-300 ${
                activeTab === t.id 
                  ? 'border-cyber-blue text-cyber-blue bg-cyber-blue/5 shadow-[0_0_15px_rgba(0,240,255,0.15)]' 
                  : 'border-gray-800 text-gray-400 hover:text-white'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Dynamic Display Panel */}
        <div className="bg-cyber-card border border-cyber-border rounded-lg p-6 md:p-8 backdrop-blur-md min-h-[400px] flex flex-col justify-between">
          {activeTab === 'pipeline' && (
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
                
                {/* 1. Sensors */}
                <div className="p-4 bg-gray-900/40 border border-gray-800 rounded text-center font-mono">
                  <span className="text-[10px] text-gray-500 block">01 / INPUTS</span>
                  <span className="text-white font-bold text-sm">Sensors</span>
                  <div className="mt-3 text-[10px] text-gray-400 text-left space-y-1">
                    <p>• RPLidar A1 (LiDAR)</p>
                    <p>• MPU6050 (IMU)</p>
                    <p>• Hall Effect Encoders</p>
                  </div>
                </div>

                <div className="text-center text-cyber-blue font-mono text-xs md:rotate-0 rotate-90 my-2 md:my-0">
                  <span className="block text-[8px] text-gray-600">/scan</span>
                  <span className="block text-[8px] text-gray-600">/raw_odom</span>
                  <span>➔➔➔</span>
                </div>

                {/* 2. ROS 2 Nodes */}
                <div className="p-4 bg-cyber-purple/5 border border-cyber-purple/20 rounded text-center font-mono">
                  <span className="text-[10px] text-cyber-purple block">02 / ESTIMATION</span>
                  <span className="text-white font-bold text-sm">ROS 2 Nodes</span>
                  <div className="mt-3 text-[10px] text-gray-400 text-left space-y-1">
                    <p>• rplidar_node</p>
                    <p>• robot_localization (EKF)</p>
                    <p>• odom_to_tf coordinator</p>
                  </div>
                </div>

                <div className="text-center text-cyber-purple font-mono text-xs md:rotate-0 rotate-90 my-2 md:my-0">
                  <span className="block text-[8px] text-gray-600">/odometry/filtered</span>
                  <span>➔➔➔</span>
                </div>

                {/* 3. Nav2 Navigation */}
                <div className="p-4 bg-cyber-blue/5 border border-cyber-blue/20 rounded text-center font-mono">
                  <span className="text-[10px] text-cyber-blue block">03 / PLANNING</span>
                  <span className="text-white font-bold text-sm">Nav2 Stack</span>
                  <div className="mt-3 text-[10px] text-gray-400 text-left space-y-1">
                    <p>• Costmap 2D (Global/Local)</p>
                    <p>• SmacPlanner (A* paths)</p>
                    <p>• DWB Local Controller</p>
                  </div>
                </div>

              </div>

              {/* Down arrow row */}
              <div className="flex justify-center text-cyber-blue font-mono text-xs md:translate-x-[200px]">
                <div className="text-center">
                  <span className="block text-[8px] text-gray-600">/cmd_vel (Twist)</span>
                  <span>▼</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
                <div className="hidden md:block col-span-1" />
                <div className="hidden md:block col-span-1" />

                {/* 4. Controller */}
                <div className="p-4 bg-[#f59e0b]/5 border border-[#f59e0b]/20 rounded text-center font-mono">
                  <span className="text-[10px] text-[#f59e0b] block">04 / COORDINATION</span>
                  <span className="text-white font-bold text-sm">Main Controller</span>
                  <div className="mt-3 text-[10px] text-gray-400 text-left space-y-1">
                    <p>• State Machine executor</p>
                    <p>• Order preemption node</p>
                    <p>• Cancel/Re-plan server</p>
                  </div>
                </div>

                <div className="text-center text-[#f59e0b] font-mono text-xs md:rotate-0 rotate-90 my-2 md:my-0">
                  <span className="block text-[8px] text-gray-600">/cmd_vel_raw</span>
                  <span>➔➔➔</span>
                </div>

                {/* 5. Motor Driver */}
                <div className="p-4 bg-emerald-950/20 border border-emerald-900/30 rounded text-center font-mono">
                  <span className="text-[10px] text-emerald-500 block">05 / ACTUATOR</span>
                  <span className="text-white font-bold text-sm">Motor Driver</span>
                  <div className="mt-3 text-[10px] text-gray-400 text-left space-y-1">
                    <p>• ESP32 (micro-ROS Client)</p>
                    <p>• PWM Motor Driver H-Bridge</p>
                    <p>• Closed-loop PID control</p>
                  </div>
                </div>

              </div>

              <div className="pt-6 border-t border-gray-800 grid grid-cols-1 sm:grid-cols-3 gap-6 font-mono text-[11px] text-gray-400">
                <div>
                  <span className="block text-white font-bold mb-1">💬 ACTIVE TOPICS</span>
                  <p className="text-cyber-blue">/scan <span className="text-gray-600">[sensor_msgs/LaserScan]</span></p>
                  <p className="text-cyber-blue">/odom <span className="text-gray-600">[nav_msgs/Odometry]</span></p>
                  <p className="text-cyber-blue">/cmd_vel <span className="text-gray-600">[geometry_msgs/Twist]</span></p>
                </div>
                <div>
                  <span className="block text-white font-bold mb-1">🛠️ SERVICES</span>
                  <p className="text-[#a855f7]">/global_costmap/get_costmap</p>
                  <p className="text-[#a855f7]">/clear_entirely_global_costmap</p>
                </div>
                <div>
                  <span className="block text-white font-bold mb-1">🎬 ACTIONS</span>
                  <p className="text-emerald-500">/navigate_to_pose</p>
                  <p className="text-emerald-500">/spin <span className="text-gray-600">[recovery]</span></p>
                  <p className="text-emerald-500">/backup <span className="text-gray-600">[recovery]</span></p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'tf' && (
            <div className="space-y-6">
              <div className="border border-gray-800 rounded bg-gray-950 p-4 font-mono text-xs text-gray-400">
                <div className="flex justify-between border-b border-gray-800 pb-2 mb-4">
                  <span className="text-cyber-blue font-bold">📡 TF COORDINATE TREE (tf2_msgs)</span>
                  <span className="text-gray-600">Active transform rate: 120Hz</span>
                </div>
                <div className="flex flex-col items-center gap-4">
                  {/* map */}
                  <div className="px-4 py-1.5 border border-[#10b981] bg-[#10b981]/5 text-white font-bold rounded text-center">
                    map
                    <span className="block text-[8px] font-normal text-gray-500">Broadcaster: AMCL / SLAM Node</span>
                  </div>
                  <div className="text-cyber-blue">↓ [Transform: map ➔ odom]</div>
                  
                  {/* odom */}
                  <div className="px-4 py-1.5 border border-cyber-purple bg-cyber-purple/5 text-white font-bold rounded text-center">
                    odom
                    <span className="block text-[8px] font-normal text-gray-500">Broadcaster: robot_localization (EKF)</span>
                  </div>
                  <div className="text-[#a855f7]">↓ [Transform: odom ➔ base_link]</div>
                  
                  {/* base_link */}
                  <div className="px-4 py-1.5 border border-cyber-blue bg-cyber-blue/5 text-white font-bold rounded text-center">
                    base_link
                    <span className="block text-[8px] font-normal text-gray-500">Broadcaster: robot_state_publisher (URDF)</span>
                  </div>

                  {/* branches */}
                  <div className="w-full max-w-md flex justify-between pt-2">
                    <div className="flex flex-col items-center">
                      <div className="text-gray-500">↙</div>
                      <div className="px-2 py-1 border border-gray-800 bg-gray-900 text-[10px] rounded">
                        laser_frame
                        <span className="block text-[7px] text-gray-500">LiDAR Offset</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="text-gray-500">↓</div>
                      <div className="px-2 py-1 border border-gray-800 bg-gray-900 text-[10px] rounded">
                        imu_link
                        <span className="block text-[7px] text-gray-500">IMU Sensor Offset</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="text-gray-500">↘</div>
                      <div className="px-2 py-1 border border-gray-800 bg-gray-900 text-[10px] rounded">
                        camera_link
                        <span className="block text-[7px] text-gray-500">Depth Cam Offset</span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
              <p className="text-xs sm:text-sm text-gray-400 font-sans leading-relaxed">
                <span className="font-bold text-cyber-blue">Coordinate Transforms:</span> The TF tree links all physical parts of the robot to a global spatial coordinate. Decoupling the high-frequency EKF odom-to-base_link transform from the slower, loop-closing map-to-odom transform prevents frame jumps during navigation.
              </p>
            </div>
          )}

          {activeTab === 'bt' && (
            <div className="space-y-6">
              <div className="border border-gray-800 rounded bg-gray-950 p-4 font-mono text-xs text-gray-300">
                <div className="flex justify-between border-b border-gray-800 pb-2 mb-4">
                  <span className="text-cyber-blue font-bold">🧬 Nav2 BEHAVIOR TREE TREE-VIEW</span>
                  <span className="text-gray-500">nav2_default_recovery_tree.xml</span>
                </div>
                
                {/* Visual Behavior Tree representation */}
                <div className="space-y-2 font-mono text-xs">
                  <div className="text-cyber-purple font-bold">➔ &lt;Sequence name="NavigateWithReplanning"&gt;</div>
                  <div className="pl-6 text-amber-500">? &lt;Selector name="ComputePathAndCheckRecovery"&gt;</div>
                  <div className="pl-12 text-[#10b981]">&lt;ComputePathToPose goal="{"{goal}"}" path="{"{path}"}" planner_id="GridTransition"/&gt;</div>
                  <div className="pl-12 text-cyber-purple">➔ &lt;Sequence name="RecoverySequence"&gt;</div>
                  <div className="pl-18 text-red-400">&lt;ClearEntirelyCostmap name="ClearGlobalCostmap" service_name="global_costmap/clear_entirely_global_costmap"/&gt;</div>
                  <div className="pl-18 text-[#10b981]">&lt;Spin spin_dist="1.57" server_timeout="5.0"/&gt;</div>
                  <div className="pl-6 text-cyber-purple">➔ &lt;Sequence name="FollowPath"&gt;</div>
                  <div className="pl-12 text-[#10b981]">&lt;FollowPath path="{"{path}"}" controller_id="DWBController"/&gt;</div>
                </div>

              </div>
              <p className="text-xs sm:text-sm text-gray-400 font-sans leading-relaxed">
                <span className="font-bold text-cyber-blue">Behavior Tree Logic:</span> Nav2 relies on `Behavior Trees` (via BT.cpp) to coordinate navigation behaviors. If path planning fails, the Selector node triggers a fallback recovery sequence (clearing costmaps, spinning 90 degrees) before attempting to re-plan the path.
              </p>
            </div>
          )}

          {/* Diagnostic Stats Overlay */}
          <div className="mt-8 pt-4 border-t border-gray-800 flex justify-between items-center text-[10px] font-mono text-gray-500">
            <span>DDS_PARTICIPANTS: 3 ACTIVE</span>
            <span>SYSTEM_LATENCY: 0.24ms</span>
            <span>STATUS: STABLE</span>
          </div>

        </div>
      </div>
    </section>
  );
}
