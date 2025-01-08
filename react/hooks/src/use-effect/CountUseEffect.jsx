import { useEffect, useState } from "react";

function CountUseEffect() {
  const [count, setCount] = useState(0);
  const [notCount, setNotCount] = useState(0);
  const [cleanupCount, setCleanupCount] = useState(0);

  // on Every render
  useEffect(() => console.log("MyComponent rendered"));

  // on first render (mount) only
  useEffect(() => console.log("MyComponent mounted "), []);

  // on first render and when dependency changes
  useEffect(() => {
    console.log(`Count rendered: ${count}`);
  }, [count]);

  useEffect(() => {
    console.log(`CleanupCount rendered: ${cleanupCount}`);
    // on unmount
    return () => console.log(`CleanupCount unmounted: ${cleanupCount}`);
  }, [cleanupCount]);

  return (
    <>
      <h1>CountUseEffect</h1>
      <button
        onClick={() => {
          setCount((c) => c + 10);
        }}
      >
        Count: {count}
      </button>
      <button
        onClick={() => {
          setNotCount((c) => c + 10);
        }}
      >
        Not Count: {notCount}
      </button>
      <button
        onClick={() => {
          setCleanupCount((c) => c + 10);
        }}
      >
        Cleanup Count: {cleanupCount}
      </button>
      <br />
    </>
  );
}
export default CountUseEffect;
