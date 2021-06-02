//var, let, const
let sayi1 = 10
sayi1 = "türker özakıncı"
let student = {id:1, name:"turker"}
//console.log(student)

function save(puan=10, ogrenci) {
    console.log(ogrenci.name + " : " + puan)
}
//save(undefined, student)

let students = ["engin demiroğ", "halit kalaycı", "engin toprak","büşra"]

//console.log(students)

let students2 = [student, {id:2, name:"halit"}, "ankara", {city: "istanbul"}]

//console.log(students2)

//rest - parametreleri array olarak tutuyo. restin karşılıkları: params, varArgs
let showProducts = function (id,...products) {
    console.log(id)
    console.log(products[0])
}

//Console.log(typeof showProducts)
//howProducts(10, "elma","armut","karpuz")

//spread - 
let points = [1,2,3,4,50,4,60,14]
console.log(...points)
console.log(Math.max(...points))
console.log(..."abc","d",..."efg","h")

//destructure
let populations = [10000,20000,30000,[40000,50000]]
let [small, medium, high,[veryhigh,max]] = populations
console.log(small) 
console.log(medium)
console.log(high)
console.log(veryhigh)
console.log(max)

function someFunction([small1],number) {
    console.log(small1)
}

someFunction(populations)

let category = {id:1, name: "ışıklar"}
console.log(category.id)
console.log(category["name"])

let {id, name} = category
console.log(id)
console.log(name)

