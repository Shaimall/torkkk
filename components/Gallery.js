import React, { useRef, useEffect } from "react";

const Gallery = () => {
  const panels = useRef([]);

  useEffect(() => {
    const toggleOpen = (panel) => {
      panel.current.classList.toggle("open");
    };

    const addTransitionClasses = (e) => {
      if (e.propertyName.includes("flex")) {
        e.target.classList.add("transition-enter", "transition-enter-active");
        e.target.classList.remove(
          "transition-leave",
          "transition-leave-active"
        );
      }
    };

    const removeTransitionClasses = (e) => {
      if (e.propertyName.includes("flex")) {
        e.target.classList.add("transition-leave", "transition-leave-active");
        e.target.classList.remove(
          "transition-enter",
          "transition-enter-active"
        );
      }
    };

    panels.current.forEach((panel) => {
      panel.addEventListener("click", toggleOpen.bind(null, panel));
      panel.addEventListener("transitionend", addTransitionClasses);
      panel.addEventListener("transitionstart", removeTransitionClasses);
    });

    return () => {
      panels.current.forEach((panel) => {
        panel.removeEventListener("click", toggleOpen.bind(null, panel));
        panel.removeEventListener("transitionend", addTransitionClasses);
        panel.removeEventListener("transitionstart", removeTransitionClasses);
      });
    };
  }, []);

  return (
    <div className="flex flex-wrap justify-center">
      <div
        ref={(el) => (panels.current = [...panels.current, el])}
        className="panel w-1/3 h-64 bg-gray-300 cursor-pointer"
      >
        <img
          src="img/phones2.png"
          alt="Image 1"
          className="w-full h-full object-cover"
        />
        <p className="p-4 font-bold text-2xl">Image 1</p>
      </div>
      <div
        ref={(el) => (panels.current = [...panels.current, el])}
        className="panel w-1/3 h-64 bg-gray-300 cursor-pointer"
      >
        <img
          src="img/phones2.png"
          alt="Image 2"
          className="w-full h-full object-cover"
        />
        <p className="p-4 font-bold text-2xl">Image 2</p>
      </div>
    </div>
  );
};

export default Gallery;
