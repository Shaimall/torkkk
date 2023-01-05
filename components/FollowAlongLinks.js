import React, { useRef, useEffect } from "react";

const FollowAlongLinks = () => {
  const triggers = useRef([]);
  const highlights = useRef(null);

  useEffect(() => {
    const handleEnter = (highlight, trigger) => {
      highlight.style.width = `${trigger.offsetWidth}px`;
      highlight.style.left = `${trigger.offsetLeft}px`;
    };

    triggers.current.forEach((trigger) => {
      trigger.addEventListener(
        "mouseenter",
        handleEnter.bind(null, highlights.current, trigger)
      );
    });

    return () => {
      triggers.current.forEach((trigger) => {
        trigger.removeEventListener(
          "mouseenter",
          handleEnter.bind(null, highlights.current, trigger)
        );
      });
    };
  }, []);

  return (
    <div className="relative">
      <ul className="list-none m-0 p-0">
        <li ref={(el) => (triggers.current = [...triggers.current, el])}>
          <a href="#">Link 1</a>
        </li>
        <li ref={(el) => (triggers.current = [...triggers.current, el])}>
          <a href="#">Link 2</a>
        </li>
        <li ref={(el) => (triggers.current = [...triggers.current, el])}>
          <a href="#">Link 3</a>
        </li>
      </ul>
      <div
        ref={(el) => (highlights.current = el)}
        className="bg-blue-500 h-96 w-1 absolute bottom-0"
      ></div>
    </div>
  );
};

export default FollowAlongLinks;
