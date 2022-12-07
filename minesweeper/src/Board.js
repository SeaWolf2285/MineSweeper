import BoardSettup from "./BoardSettup"
import React, { useEffect, useContext } from "react";
import { Context } from "./App";

const Board = () => {
    const { grid, setGrid } = useContext(Context);
    const { height } = useContext(Context);
    const { width } = useContext(Context);
    const { mines } = useContext(Context);
    const style = {
        display: 'flex',
        flexDirection: 'row'
    }



    console.log('grid1', grid)

    useEffect(() => {
        const newboard = BoardSettup(height, width, mines)
        setGrid(newboard)
        console.log('grid2', grid)
    }, [])




    return (
        <div>
            {grid.field?.map((row, idx) => {
                return (
                    <div style={style} key={idx}>
                        {row.map((row2) => {
                            return <div key={row2.x + row2.y}
                                style={{
                                    width: 50,
                                    height: 50,
                                    padding: '5px',
                                    border: '3px black solid'
                                }}
                            >
                                {JSON.stringify(row2.value)}
                            </div>
                        })}
                    </div>
                )
            })}
        </div>
    )

}
export default Board