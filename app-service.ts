export interface ArrayService {

}


export interface StringManipulationService {
    arrayFindMultiples(myArray : any) : Array<Number>;
    arraySeparate(myArray : any) : Array<string>;
    arraySplit(myString : string) : Array<Number>;
    arraySort(myArray : any) : Array<string>;
    arrayReplace(myArray : any) : Array<Number>;
}