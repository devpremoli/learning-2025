import { useEffect, useState } from "react";

function WindowResizeUseEffect() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  function handleResize() {
    setWidth((w) => window.innerWidth);
    setHeight((h) => window.innerHeight);
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    console.log("Event listner added");
    return () => {
      window.removeEventListener("resize", handleResize);
      console.log("Event Listener removed");
    };
  }, [width, height]);

  return (
    <>
      <h1>WindowResizeUseEffect</h1>
      <p>Window width: {width}</p>
      <p>Window height: {height}</p>
    </>
  );
}
export default WindowResizeUseEffect;
