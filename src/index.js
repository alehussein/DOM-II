import './less/index.less'

// Your code goes here!
// const headerNav = document.getElementsByTagName("nav");
// const navLinks = document.querySelectorAll("nav-link");
// const pTag = document.getElementsByTagName('p')
const heading = document.querySelector('header')
const bodyPage =document.querySelector('body')


document.body.addEventListener('click', evt => {
    evt.target.classList = 'mirror'
})
document.body.addEventListener('mouseover', evt => {
    evt.target.style.fontWeight = 'bold'
})

document.body.addEventListener('dblclick', evt => {
    evt.target.outerHTML = ''
})
document.body.addEventListener('copy', () => {
    navigator.clipboard.readText()
    .then( text => heading.textContent += text)
})
function keydown(event) {
    if(event.key === '5'){
        bodyPage.style.backgroundColor = 'red'
    }
}
document.addEventListener("keydown", keydown);

document.body.addEventListener("select", evt => {
    evt.target.style.color = 'yellow'
}) 

document.body.addEventListener('scroll', evt => {
    evt.target.style.fontSize = "6rem"
})

console.log("hello"); 