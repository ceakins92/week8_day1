let typeAny
let typeString:string
let typeNumber:number
let typeBoolean:boolean
let typeObj:object
let typeNull:null
let typeUndefined:undefined
let typeArray: string[] = []


typeArray.push('1')
typeString = 'hello World'

// create 3 variables, data types string, number boolean, icestring, iceboolean, icenumber.  Then assign a value

let iceString:string
let iceBoolean:boolean
let iceNumber:number


iceBoolean =  1==1
iceNumber = 15
iceString = 'Brrr, it\'s cold outside'

// Implicit Declaration
let stringVar = 'matrix'
stringVar = 'Let there be light'

const stringArray = ['1','2','3']

let numVar = 10

numVar += 2

let numArray: number[]
numArray = [10,5,1,55]


// Declare an array which will be filled with null
// assign value of array with nulls

let nullArray: null[] = []
nullArray = [null,null,null,null]

let mixedArray: [string, number, number, string]
mixedArray = ['Hello', 1, 2, 'World']

let anyArray: any[]
anyArray = [1,'12',{a:1},[33]]

let mixedArray2: [string,string, ...number[]]
mixedArray2 = ['12','13', 1,2,10,34]

// create an array with one num, any number of bool, and named stringboolsarray:

let stringBoolArray: [number,...boolean[]]
stringBoolArray = [15,6==6,true==true,35==35]

function lowerCaseName(name:string) {
    name=name.toLowerCase()
    return name
}

lowerCaseName('sean')

function nameLength(name:string){
    return name.length
}

console.log(nameLength('sean'))

function lowerCaseName2(name:string):string{
    name = name.toLowerCase()
    return name
}

lowerCaseName2('sean')

//create function whcih takes in 2 parameters that are numbers
// return a string ex: first number plus second number = num1 + num2

function numNumToString(number1:number, number2:number, name:string):string{
    num1 = number1.toString
    num2 = number2.toString
}

