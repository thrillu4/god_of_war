import { langObj } from './languageObject';

export const language = (Languages) => {
    const languages = document.querySelectorAll(Languages);

    languages.forEach(lang => {
        lang.addEventListener('click', ({target}) => {
            const {lang} = target.dataset;

            if(!lang) return;

            localStorage.setItem('language', lang);

            const currentLang = localStorage.getItem('language');
            const content = langObj[currentLang];

            Object.entries(content).forEach(([key, value]) => {
                const items = document.querySelectorAll(`[data-text="${key}"]`);
                items.forEach(item => {
                    item.innerText = value;
                })
            })
        })
    })
}