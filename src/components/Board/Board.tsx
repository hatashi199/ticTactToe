import { Fragment } from "react";
import Cell from "../Cell/Cell";

interface boardCellsInterface {
    component: React.ReactNode
}

const Board : React.FC = () => {
    const boardCells: boardCellsInterface[] = Array(9).fill({
        component: <Cell/>
    });

    return (
        <div className="flex flex-wrap max-w-[350px] w-full gap-[15px]">
            {boardCells.map((item, index) => (
                <Fragment key={index}>
                    {item.component}
                </Fragment>
            ))}
        </div>
    )
}

export default Board;