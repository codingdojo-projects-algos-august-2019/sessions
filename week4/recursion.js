// Flood Fill
// Most graphical “paint” applications have a ‘paintcan fill’ function that floods part of an image with a certain color. We change the image as if we painted a canvas: a two-dimensional array of integers, where each integer represents a color for that pixel. The canvas Array.length is the Y dimension of our canvas; each spot in the canvas array is a row in our image, with a length equal to our canvas’ X dimension. You are given a canvas (2-dimensional array of integers), starting coordinate (2-element array), and the color to flood (integer value). Build floodFill(canvas2D,startXY,newColor)! Replace a pixel’s color value only if it is the same color as the origin coordinate and is directly adjacent via X or Y to another pixel you will change.

// exampleCanvas = [[3,2,3,4,3],
//                  [2,3,3,4,0],
//                  [7,3,3,5,3],
//                  [6,5,3,4,1],
//                  [1,2,3,3,3]]

// floodFill(exampleCanvas, [2,2], 1)

//     --> [[3,2,1,4,3],
//          [2,3,1,4,0],
//          [7,1,1,5,3],
//          [6,5,1,4,1],
//          [1,2,1,1,1]]

// Note: diagonally related pixels are not considered adjacent.

function floodFill(canvas, coord, color) {
    // if (canvas[0][0] !== canvas[coord[0]][coord[1]]) {
    //     return "Should Not Change This Color"
    // }
    // else{
    //     canvas[coord[0]][coord[1]] = color;
    // }
    let ogVal=canvas[coord[0]][coord[1]]
    canvas[coord[0]][coord[1]] = color;
    let newCoord = coord;
    newCoord[1] -= 1;
    if (canvas[newCoord[0]][newCoord[1]] == ogVal){
        floodFill(canvas, newCoord, color);
    }
    newCoord = coord;
    newCoord[1] += 1;
    if (canvas[newCoord[0]][newCoord[1]] == ogVal){
        floodFill(canvas, newCoord, color);
    }
    newCoord = coord;
    newCoord[0] += 1;
    if (canvas[newCoord[0]][newCoord[1]] == ogVal){
        floodFill(canvas, newCoord, color);
    }
    newCoord = coord;
    newCoord[0] -= 1;
    if (canvas[newCoord[0]][newCoord[1]] == ogVal){
        floodFill(canvas, newCoord, color);
    }
    return "Finished"
}

let testCanvas = [[3, 2, 3, 4, 3],
                  [2, 3, 3, 4, 0], 
                  [7, 3, 3, 5, 3], 
                  [6, 5, 3, 4, 1], 
                  [1, 2, 3, 3, 3]]

console.log("************************")

console.log(floodFill([[3, 2, 3, 4, 3],
    [2, 3, 3, 4, 0], 
    [7, 3, 3, 5, 3], 
    [6, 5, 3, 4, 1], 
    [1, 2, 3, 3, 3]], [2,2], 1))