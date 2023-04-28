export const faq = (Questions) => {
    const questions = document.querySelectorAll(Questions);

    questions.forEach(item => {
        item.addEventListener('click', ({currentTarget: target}) => {
            target.classList.toggle('opened');
            const isOpened = target.classList.contains('opened');
            const content = target.querySelector('.faq_item-content');
            const height = target.querySelector('p').clientHeight;
            content.style.height = `${isOpened ? height : 0}px`;
        })
    })
}