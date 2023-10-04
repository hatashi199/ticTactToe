import { FiCircle } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";

const GameConfig: React.FC = () => {
    return (
        <div className="flex flex-col gap-[15px] items-center">
            <span>Selecciona con que quieres empezar.</span>
            <div className="flex gap-[10px]">
                <button className="bg-white px-[30px] py-[10px] rounded-[10px]">
                    <FiCircle size={"36px"}/>
                </button>
                <button className="bg-white px-[30px] py-[10px] rounded-[10px]">
                    <RxCross2 size={"36px"}/>
                </button>
            </div>
        </div>
    )
}

export default GameConfig;