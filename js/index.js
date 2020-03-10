// Your code goes here
//all notes and code from this mornings lecture
/*a really good diagram that he made, showed that the event listeners have 3 phases
the first phase is the capture phase. where the event object that chrome builds is passed down through the nesting to the target element.
then the second phase is the target phase where the event listener, if there is one on it is activated.
the next is the bubbling phase, where it goes to each layer outside of the target and activates */
// let myaTag = document.querySelector('a')
// console.log(myaTag);

//if you have an id on an object, you dont even need to qeury it. you can just write that shit down

// homelink.addEventListener(
//     'click',
//     ()=>{
//         console.log('the link got clicked');
//     }
// )

// document.querySelector('header').addEventListener(
//         'click',
//         ()=>{
//             console.log('the header got clicked');
//         }
//     )


//you can use document.body to select the body without a query selector.

//when you click on the a tag in a nav

// function clickEventHandler(event){
//     console.log(event.type);
// }
// function clickEventHandler(event) {
//     event.preventDefault()
//     console.log(event.type + '!!!!!!!!!!!!!!!!!!!!!!!!!!!')
//     console.log(event.target)
//     console.log(event.currentTarget);
//   }

// function clickEventHandler(event) {
//     console.log(event.type + '!!!!!!!!!!!!!!!!!!!!!!!!!!!')
//     console.log(event.target)
//   }
//   document.querySelector('a').addEventListener('click', clickEventHandler)
//   document.querySelector('nav').addEventListener('click', clickEventHandler)
//   document.querySelector('header').addEventListener('click', clickEventHandler)
//   document.body.addEventListener('click', clickEventHandler)
//   document.addEventListener('click', clickEventHandler)
//   window.addEventListener('click', clickEventHandler)

//my code
function clickEventPropEx(){
    console.log('needs to be only 1')
}
function clickEventHandler(){
    console.log('placeholder')
}
//click 1, prevent default
let count = 0

function navClickEventHandler(e){
    e.preventDefault()
    count++
    if(count === 1){
        e.target.style.color = 'blue'
    }
    if(count%2 === 0){
        e.target.style.color = 'green'
    }
    if(count%3 === 0){
        e.target.style.color = 'red'
        count = 0;
    }
}

// function navClickStopPropagation(e){
//     console.log(e.target + ' has been clicked')
// }

const navbtn = document.querySelectorAll('a')
navbtn.forEach( item => {
    item.addEventListener('click', navClickEventHandler)
})

//mouseover 2
function navMouseOver(e){
    e.target.style.backgroundColor = 'red'
}
function navMouseOut(e){
    e.target.style.backgroundColor = 'white'
}

document.querySelector('.nav-container').addEventListener('mouseover', navMouseOver)
//mouseout 3
document.querySelector('.nav-container').addEventListener('mouseout', navMouseOut)
//stop propagation
// document.querySelector('.nav-container').addEventListener('click', navClickStopPropagation)

document.querySelector('a').addEventListener('click', clickEventPropEx)
document.querySelector('nav').addEventListener('click', clickEventPropEx)

//mouseenter 4
document.querySelector('header').addEventListener('mouseenter', clickEventHandler)
//mouseleave 5
document.querySelector('header').addEventListener('mouseleave', clickEventHandler)

//mousemove 6
document.querySelector('img').addEventListener('mousemove', clickEventHandler)

//keydown 7

//keyup 8

//wheel

//drag/drop

//load

//focus

//resize

//scroll

//select

//dblclick

//other students code
// var busImg = document.querySelector(".intro img");

// busImg.addEventListener("dblclick", magicSchoolBus);

// function magicSchoolBus() {
//   let ifrm = document.createElement("iframe");

//   ifrm.setAttribute(
//     "src",
//     "https://www.youtube.com/embed/GAaWl9poEK4?autoplay=1&autohide=1&border=0&wmode=opaque&enablejsapi=1"
//   );

//   this.parentNode.replaceChild(ifrm, this);
//   ifrm.style.height = "242px";
//   let intro = document.querySelector(".intro");
//   intro.style.display = "flex";
//   intro.style.flexDirection = "column";
//   intro.style.alignContent = "center";
//   console.log("wat");
// }