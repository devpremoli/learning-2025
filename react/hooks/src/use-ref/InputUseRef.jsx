import { useRef, useEffect } from "react";

function InputUseRef() {
  let inputRef = useRef(null);

  useEffect(() => {
    console.log({ inputRef });
  });
  return (
    <>
      <input
        ref={
          // ref attribute of the element references to its DOM node i.e.,
          // ref={inputRef} = inputref.curent = input
          inputRef
        }

        onChange={() => {
          console.log(inputRef.current.value);
        }}

        onClick={() => {
          inputRef.current.focus();
          console.log(inputRef.current.style)
          Object.assign(inputRef.current.style, {
            color: "red",
            backgroundColor: "yellow",
          });
        }}
      />
    </>
  );
}

export default InputUseRef;
