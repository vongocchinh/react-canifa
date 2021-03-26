import React from "react";
import HomeTop from "./home-1/Home";
import HomeBody from "./home-2/Home";
import HomeBottom from "./home-3/Home";
import { store } from "react-notifications-component";
import { useEffect } from "react";
function Home() {
  useEffect(() => {
    setTimeout(() => {
      addNotification();
    }, 0);
  });
  const addNotification = () => {
    store.addNotification({
      message: "hello addNotification",
      width:250,
      type: "info",
      insert: "top",
      container: "bottom-left",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 3000,
        onScreen: true,
      },
      touchSlidingExit: {
        swipe: {
          duration: 400,
          timingFunction: "ease-out",
          delay: 0,
        },
        fade: {
          duration: 400,
          timingFunction: "ease-out",
          delay: 0,
        },
      },
    });
  };

  return (
    <>
      <HomeTop />
      <HomeBody />
      <HomeBottom />
    </>
  );
}
export default Home;
