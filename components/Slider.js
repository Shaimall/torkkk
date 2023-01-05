import React, { useRef, useEffect } from "react";

const Slider = () => {
  const slider = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const slideInAt =
        window.scrollY + window.innerHeight - slider.current.offsetHeight / 2;
      const imageBottom =
        slider.current.offsetTop + slider.current.offsetHeight;
      const isHalfShown = slideInAt > slider.current.offsetTop;
      const isNotScrolledPast = window.scrollY < imageBottom;
      if (isHalfShown && isNotScrolledPast) {
        slider.current.classList.add("active");
      } else {
        slider.current.classList.remove("active");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={slider} className="slider">
      Slide in on scrollshhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhworecdoreonoenn
    </div>
  );
};

export default Slider;
