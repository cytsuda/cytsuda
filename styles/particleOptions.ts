import type { Container, ISourceOptions, Engine } from "tsparticles";
const particleOptions: ISourceOptions = {
  // background: {
  //   color: {
  //     value: "#0d47a1",
  //   },
  // },
  fpsLimit: 120,
  interactivity: {
    events: {
      // onClick: {
      //   enable: true,
      //   mode: "push",
      // },
      // onHover: {
      //   enable: true,
      //   mode: "repulse",
      // },
      // resize: true,
    },
    modes: {
      // bubble: {
      //   distance: 1200,
      //   duration: 2,
      //   opacity: 0.8,
      //   size: 40,
      // },
      // push: {
      //   quantity: 4,
      // },
      // repulse: {
      //   distance: 90,
      //   duration: 0.4,
      // },
    },
  },
  particles: {
    color: {
      value: "#ffffff",
    },
    // links: {
    //   color: "#ffffff",
    //   distance: 150,
    //   enable: true,
    //   opacity: 0.5,
    //   width: 1,
    // },
    // collisions: {
    //   enable: true,
    // },
    move: {
      direction: "top",
      enable: true,
      outMode: "out",
      random: false,
      speed: 2,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 10,
    },
    opacity: {
      value: 0.05,
    },
    shape: {
      type: "circle",
    },
    size: {
      random: true,
      value: 5,
    },
  },
  detectRetina: true,
}
export default particleOptions;