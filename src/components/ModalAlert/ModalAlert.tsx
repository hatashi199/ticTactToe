interface ModalAlertProps {
    children: React.ReactNode
}

const ModalAlert: React.FC<ModalAlertProps> = ({ children }) => {
    return (
        <div className="absolute top-0 bottom-0 left-0 right-0 bg-black bg-opacity-75 flex flex-col justify-center w-[100vw] h-[100vh] z-1">
            <div className="bg-red-500 flex justify-center w-full py-[20px] px-[10px]">
                {children}
            </div>
        </div>
    )
}

export default ModalAlert;