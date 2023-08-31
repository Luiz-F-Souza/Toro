import { createPortal } from "react-dom";


interface Props {
  handleIsModalOpen?: (isOpen: boolean) => void
}
export const BodyOverlay: React.FC<Props> = ({handleIsModalOpen}) => {
  
  const handleClick = () => {
    if(handleIsModalOpen) handleIsModalOpen(false)
  }
  return (   
     <>
      {createPortal(
        <div className="fixed top-0 bottom-0 left-0 right-0 bg-[#00000060] z-40" onClick={handleClick}/>
        , document.body)
      }
     </>
  )
};
