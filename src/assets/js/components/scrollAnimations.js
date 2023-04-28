export const scrollAnimations = (Sections) => {
    const sections = document.querySelectorAll(Sections);
    
    window.addEventListener('scroll', () => {
        const {scrollY: y, innerHeight: h} = window;
        sections.forEach(section => {
            if(y > section.offsetTop - h / 1.5) {
                section.classList.remove('hidden');
            }
        })
    })
}