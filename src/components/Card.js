import { useState } from "react";

export const Card = ({ children, rotate }) => {
  const [addClass, setAddClass] = useState(false);

  function handleAnimation() {
    setAddClass((prev) => !prev);
  }
  return (
    <div
      onClick={handleAnimation}
      className={`${
        addClass ? "disappearing-card" : ""
      } h-72 w-60 absolute z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl ${rotate}`}
    >
      {children}
    </div>
  );
};
