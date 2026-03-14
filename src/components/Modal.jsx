import { useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

export default function Modal({ ref }) {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
      close() {
        dialog.current.close();
      },
    };
  });
  return createPortal(
    <dialog ref={dialog} className="result-modal">
      <h2>Judul</h2>
      <p>isi dari cart</p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById("modal"),
  );
}
