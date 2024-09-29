
document.getElementById('swapBtn').addEventListener('click', function() {
    let input1 = document.getElementById('input1');
    let input2 = document.getElementById('input2');

    let tempPlaceholder = input1.placeholder;

    input1.placeholder = input2.placeholder;
    input2.placeholder = tempPlaceholder;
});






// window.addEventListener('scroll', function() {
//     var scrollY = window.scrollY;
    
//     var elementsA = document.getElementsByClassName('header_a');
//     for (var i = 0; i < elementsA.length; i++) {
//         if (scrollY > 100) {
//             elementsA[i].classList.add('scrolled');
//         } else {
//             elementsA[i].classList.remove('scrolled');
//         }
//     }
    
//     var elementsB = document.getElementsByClassName('header_center');
//     for (var i = 0; i < elementsB.length; i++) {
//         if (scrollY > 100) {
//             elementsB[i].classList.add('scrolled2');
//         } else {
//             elementsB[i].classList.remove('scrolled2');
//         }
//     }
// });
