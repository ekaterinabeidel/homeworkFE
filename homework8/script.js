/*Написать цикл, который создает множество параграфов с каждым десятым числом
 в промежутке от 100 до 50 (т.е. 100, 90, 80, 70, 60, 50). 
 Добавить созданные параграфы в div с классом numbers. */

    const div1 = document.createElement("div")
    div1.setAttribute("class", "numbers")
    document.body.appendChild(div1)
   
    for (let i = 100; i >= 50; i = i-10) {
        const text = document.createElement("p") 
        text.innerText = `${i}`
        div1.appendChild(text)
    }


/*Написать цикл, который проходится по массиву строк, 
для каждой строки создает параграф и 
добавляет его в div с классом strings_container.
 Строки взять произвольные.
 */ 
 const div2 = document.createElement("div")
 div2.setAttribute("class", "strings_container")
 document.body.appendChild(div2)

 const  arrayOfStrings = ["string1", "string2", "string3"]  
    for (let i = 0; i < arrayOfStrings.length; i++) {
        const nameOfStrings = document.createElement("p")
        nameOfStrings.innerText = arrayOfStrings[i]
        div2.appendChild(nameOfStrings)
    
}
/*Написать цикл, который проходится по массиву с объектами - 
у объектов свойства first_name, last_name и  age 
(данные взять произвольные) - 
и создает карточки только для совершеннолетних пользователей. 
Карточка должна содержать информацию об имени, фамилии и возрасте пользователя. 
Добавить все карточки в div с классом users_container.
*/
const main = document.querySelector("main")
const persons = [
    {
        first_name: "Ekaterina",
        last_name: "Beidel",
        age: 30
    },
    {
        first_name: "Nikita",
        last_name: "Seleznev",
        age: 29
    },
    {
        first_name: "Yana",
        last_name: "Korkodinova",
        age: 27
    },
    {
        first_name: "Ivan",
        last_name: "Merkulew",
        age: 30
    },

]
for (let i = 0; i < persons.length; i++) {
    if (persons[i].age >=18) {
        main.innerHTML += `
        <div class = "users_container">
            <h1>${persons[i].first_name}</h1>
            <h2>${persons[i].last_name}</h2>
            <p>${persons[i].age}</p>
        </div>
        ` 
    }
}