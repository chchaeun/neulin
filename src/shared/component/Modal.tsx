import { useState } from "react";
import Button from "./Button";

interface Props {
  text: string;
  onClose: () => void;
}

const Modal = ({ text, onClose }: Props) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleCloseClick = () => {
    onClose();
    setIsOpen(false);
  };

  return (
    <>
      <div className="fixed top-0 left-0 z-10 w-screen h-screen bg-black opacity-90"></div>
      <div className="fixed top-0 left-0 z-20 flex items-center justify-center w-screen h-full">
        {isOpen && (
          <div className="flex flex-col w-9/12 gap-5 rounded p-7 bg-butter">
            <div>{text}</div>
            <Button className="" onClick={handleCloseClick}>
              확인
            </Button>
          </div>
        )}
      </div>
    </>
  );
};

export default Modal;
