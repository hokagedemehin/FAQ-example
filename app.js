
// traversing the DOM
// const btns = document.querySelectorAll('.question-btn');

// btns.forEach((btn) => {
//     btn.addEventListener('click', (e) => {
//         const question = e.currentTarget.parentElement.parentElement;
//         question.classList.toggle('show-text');

//     });
// });


//using selectors inside the element
const questions = document.querySelectorAll('.question');
questions.forEach((ques) => {
    const btn = ques.querySelector('.question-btn');
    btn.addEventListener('click', ()=>{
        questions.forEach((item) => {
            if(item != ques){
                item.classList.remove('show-text');
            }
        });
        ques.classList.toggle('show-text');
    });
});