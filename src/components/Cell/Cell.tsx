import React, { useState } from "react";
import { FiCircle } from "react-icons/fi";

const Cell: React.FC = () => {
    const [move,setMove] = useState<boolean>(false);

    return (
        <div 
            className="flex justify-center items-center bg-red border-solid shadow-b-squareShadow rounded-[15px] w-[100px] h-[100px] cursor-pointer"
            onClick={() => setMove(true)}
        >
            {move && <FiCircle size={"50px"}/>}
        </div>
    )
}

export default Cell;