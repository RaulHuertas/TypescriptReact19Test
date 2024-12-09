import {BasicKey} from './key';

export class Keyboard {
    name: string = ""
    author:string = "";
    contact:string = "";
    keys : BasicKey[] = []
    boundingBox : [xLeft:number,xRight:number,top:number,bottom:number] = [-20.0, 20.0, -7.0,7.0]

    constructor(
        filename: string = ""
    ){

        let firstKey = new BasicKey(
            1,
            [-1, 0]
        );
        let secondKey = new BasicKey(
            2,
            [ 1, 0]
        );
        this.keys = [firstKey, secondKey]
        //if(filename.length===0){
        //    return
        //}
         
    }

}


