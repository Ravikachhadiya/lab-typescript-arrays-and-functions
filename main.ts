import { StringManipulationService } from "./app-service";

class ArrayManipulations  implements StringManipulationService {

    public arrayFindMultiples(myArray: number[]) : Array<Number> {
        let output: number[] = [];
        for (let i: number = 0; i < myArray.length; i++){
            if (myArray[i] % 15 == 0) {
                output.push(myArray[i]);
            }
        }
        return output;
    }

    public arraySeparate(myArray: any) : Array<string>{
        let output: string[] = [];
        for (let i: number = 0; i < myArray.length; i++){
            if (isNaN(myArray[i])) {
                output.push(myArray[i]);
            }
        }
        return output;
    }

    public arraySplit(str: string): Array<number>{
        let myArray: any = str.split(" ");
        let semiOutput: number[] = [];
        let output: number[] = [];
        for (let i: number = 0; i < myArray.length; i++){
            if (!isNaN(myArray[i])) {
                semiOutput.push(myArray[i]);
            }
        }
        for (let i: number = 0; i < semiOutput.length; i++){
            if (semiOutput[i] > 1) {
                if (semiOutput[i] == 2) {
                    output.push(semiOutput[i]);
                }
                else {
                    let check: boolean = true;
                    for (let j: number = 2; j <= Math.sqrt(semiOutput[i]); j++){
                        if (semiOutput[i] % j == 0) {
                            check = false;
                            break;
                        }
                    }
                    if (check) {
                        output.push(semiOutput[i]);
                    }
                }
            }
        }
        return output;
    }

    public arraySort(myArray:any):Array<string>{
        myArray.sort();
        myArray.reverse();
        return myArray;
    }

    public arrayReplace(myArray: any): Array<number> {
        for (let i: number = 0; i < myArray.length; i++){
            if (myArray[i] % 3 == 0) {
                myArray[i] = 5;
            }
        }
        return myArray;
    }
       
}

let array = new ArrayManipulations();

let myArray: number[] = [34, 45, 60, 23, 13, 25, 70];
let mixedString: string = "prograd 50 25 FacePrep 37";
let mixedArray: any = ["prograd",  "50",  25 ,"FacePrep"];
let stringArray: string[] = ["prograd", "FacePrep", "Fullstack"];

console.log("Multiple of 3 and 5 : " +  array.arrayFindMultiples(myArray));
console.log("sperated by only string : " + array.arraySeparate(mixedArray));
console.log("split : " + array.arraySplit(mixedString))
console.log("sorting : " + array.arraySort(stringArray));
console.log("replace with  5 : " + array.arrayReplace(myArray));



