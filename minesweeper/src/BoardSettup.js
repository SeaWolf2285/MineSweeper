

const BoardSettup = (height, width, mines) => {
    //const { height, width, mines } = useContext(Context);
    let field = [];
    let minelocation = [];
    let minecount = 0;
    for(let i = 0; i < width; i++){
       let mineField = [];
         for(let j = 0; j < height; j++){
              mineField.push({
                value: 0, 
                clicked: false,
                flagged: false,
                revealed: false,
                mine: false,
                x: i,
                y: j,
                });
            
            }
            field.push(mineField);
    }
    while(minecount < mines){
        let i = Math.floor(Math.random() * width );
        let j = Math.floor(Math.random() * height );
        if(field[i][j].mine === false){
            field[i][j].mine = true;
            field[i][j].value = "X";
            minelocation.push([i,j]);
            minecount++;
        }
    }
    for(let i = 0; i < height; i++){
        for(let j = 0; j < width; j++){
            if(field[i][j].mine == true){
                continue
            }
            if(i > 0 && field[i - 1][j].mine === true){
                field[i][j].value++;
            }
            if(i > 0 && j > 0 && field[i - 1][j - 1].mine === true){
                field[i][j].value++;
            }
            if(i > 0 && j < width - 1 && field[i - 1][j + 1].mine === true){
                field[i][j].value++;
            }
            if(j < width - 1 && field[i][j + 1].mine === true){
                field[i][j].value++;
            }
            if(j > 0 && field[i][j - 1].mine === true){
                field[i][j].value++;
            }
            if(i < height - 1 && field[i + 1][j].mine === true){
                field[i][j].value++;
            }
            if(i < height - 1 && j > 0 && field[i + 1][j - 1].mine === true){
                field[i][j].value++;
            }
            if(i < height - 1 && j < width - 1 && field[i + 1][j + 1].mine === true){
                field[i][j].value++;
            }
            
      } 
    }return {field}
    
};

export default BoardSettup;