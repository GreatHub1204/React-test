import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Background = () => {
    const particlesInit = async (main) => { 
        console.log(main); 

        await loadFull(main); 
      }; 
      const particlesLoaded = (container) => { 
        console.log(container); 
      }; 
    return (
        <div className="particles">
            <Particles 
                height="100vh"
                width="100%"
                id = "tsparticles"    
                init={particlesInit} 
                loaded={particlesLoaded}             
                options={{ 
                    background: {
                        color: {
                          value: "#232741",
                        },
                    
                        position: "50% 50%",
                        repeat: "no-repeat",
                        size: "20%",
                      },
                      fullScreen: {
                        zIndex:-1,
                      },
                      interactivity: {
                        events: {
                          onClick: {
                            enable: true,
                            mode: "repulse",
                          },
                          onHover: {
                            enable: true,
                            mode: "bubble",
                          },
                        },
                        modes: {
                          bubble: {
                            distance: 250,
                            duration: 2,
                            opacity: 0,
                            size: 0,
                          },
                          grab: {
                            distance: 400,
                          },
                          repulse: {
                            distance: 400,
                          },
                        },
                      },
                      particles: {
                        color: {
                          value: "#ffffff",
                        },
                        links: {
                          color: {
                            value: "#ffffff",
                          },
                          distance: 150,
                          opacity: 0.4,
                        },
                        move: {
                          attract: {
                            rotate: {
                              x: 600,
                              y: 600,
                            },
                          },
                          enable: true,
                          outModes: {
                            bottom: "out",
                            left: "out",
                            right: "out",
                            top: "out",
                          },
                          random: true,
                          speed: 1,
                        },
                        number: {
                          density: {
                            enable: true,
                          },
                          value: 160,
                        },
                        opacity: {
                          random: {
                            enable: true,
                          },
                          value: {
                            min: 0,
                            max: 1,
                          },
                          animation: {
                            enable: true,
                            speed: 1,
                            minimumValue: 0,
                          },
                        },
                        size: {
                          random: {
                            enable: true,
                          },
                          value: {
                            min: 1,
                            max: 3,
                          },
                          animation: {
                            speed: 4,
                            minimumValue: 0.3,
                          },
                        },
                      },
                  }} 
            />
        </div>
    )
}

export default Background;