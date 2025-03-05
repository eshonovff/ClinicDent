// ScrollContext.js
import { createContext, useContext, useRef } from "react";

const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const APPOINMENTRef = useRef(null);
  const RegisterRef = useRef(null);
  const HomeRef = useRef(null);
  const AppointmentRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <ScrollContext.Provider
      value={{
        aboutRef,
        servicesRef,
        APPOINMENTRef,
        RegisterRef,
        HomeRef,
        AppointmentRef,
        scrollToSection,
      }}
    >
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = () => useContext(ScrollContext);