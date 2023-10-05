import Cell from "../Cell/Cell";
import { INITIAL_BOARD } from "../../appConst";
import { GameConfigTurnInterface } from "../GameConfig/useGameConfigTurn";
import { useState } from "react";

interface BoardProps {
    gameConfig: GameConfigTurnInterface
}

const Board : React.FC<BoardProps> = ({gameConfig}) => {
    const [board, setBoard] = useState<(null | string)[]>(INITIAL_BOARD);

    const makeMovement = (position: number): void => {
        const isValidPosition = position > 8;

        if(!isValidPosition) {
            switch(gameConfig.gameConfigTurn) {
                case "O":
                    board[position] = "O";
                    setBoard([...board]);
                    gameConfig.setGameConfigX();
                    break;
                case "X":
                    board[position] = "X";
                    setBoard([...board]);
                    gameConfig.setGameConfigO();
                    break;
                default: console.log("Error");
            }
        }
    }

    return (
        <div className="flex flex-wrap max-w-[350px] w-full gap-[15px]">
            <Cell value={board[0]} setValue={() => makeMovement(0)}/>
            <Cell value={board[1]} setValue={() => makeMovement(1)}/>
            <Cell value={board[2]} setValue={() => makeMovement(2)}/>
            <Cell value={board[3]} setValue={() => makeMovement(3)}/>
            <Cell value={board[4]} setValue={() => makeMovement(4)}/>
            <Cell value={board[5]} setValue={() => makeMovement(5)}/>
            <Cell value={board[6]} setValue={() => makeMovement(6)}/>
            <Cell value={board[7]} setValue={() => makeMovement(7)}/>
            <Cell value={board[8]} setValue={() => makeMovement(8)}/>
        </div>
    )
}

export default Board;