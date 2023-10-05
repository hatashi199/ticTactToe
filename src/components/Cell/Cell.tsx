import { FiCircle } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";

interface CellProps {
    value: string | null,
    setValue: () => void
}

const Cell: React.FC<CellProps> = ({value, setValue}) => {
    console.log(value);
    
    return (
        <div 
            className="flex justify-center items-center bg-red border-solid shadow-b-squareShadow rounded-[15px] w-[100px] h-[100px] cursor-pointer"
            onClick={setValue}
        >
            {value === "O" && <FiCircle size={"50px"}/>}
            {value === "X" && <RxCross2 size={"50px"}/>}
        </div>
    )
}

export default Cell;