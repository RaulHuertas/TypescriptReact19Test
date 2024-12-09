

export class BasicKey {
    //firstChar : string;
    //secondChar?: string;
    //thirdChar?: string;
    index : number;
    coord : [x : number, y: number];
    constructor(
        //firstChar: string, 
        //secondChar: string | undefined, 
        //thirdChar: string | undefined, 
        index: number, 
        coord: [x: number, y: number]
    ) {
        //this.firstChar = firstChar;
        //this.secondChar = secondChar;
        //this.thirdChar = thirdChar;
        this.index = index;
        this.coord = coord;
    }
}






