import React from "react"
import ScrollArea from "./ScrollArea"

type ModalProps = {
  children: React.ReactNode
  isOpen: boolean
  onClose?: () => void
  headerComponent: React.ReactElement
}

const Modal: React.FC<ModalProps> = ({children, onClose,headerComponent, isOpen}) => {
  if (!isOpen) return null
  return (
    <div className="absolute top-0 left-0 w-full h-full z-50 md:w-[100%]">
      <div className="relative w-full flex flex-col h-full bg-white border  rounded shadow-lg">
        <>{headerComponent}</>
        <ScrollArea className="h-[70vh] px-4 flex-1">{children}</ScrollArea>
        <footer className="bg-[#F0F0F0] py-4 flex items-center justify-center">
          <div className="flex items-center gap-5">
            <button
              onClick={() => onClose?.()}
              className="bg-[#F0F0F0] text-[#346633] px-4 py-3 rounded-[100px] flex items-center gap-2 text-[13px] border border-[#346633] font-[700] hover:bg-[#d4d4d4] transition"
            >
              Cancel
            </button>

            <button
              className="bg-[#346633] text-white px-4 py-3 rounded-[100px] flex items-center gap-2 text-[13px] font-[700] hover:bg-[#174319] transition"
            >
              Create Estate
            </button>
          </div>
        </footer>
      </div>
    </div>
  )
}
export default Modal
