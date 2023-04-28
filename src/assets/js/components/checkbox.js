export const checkbox = (Checkboxes) => {
    const checkboxes = document.querySelectorAll(Checkboxes);

    const nameOfCheckboxes = {
        requirements: ['minimum', 'recommended'],
        ps4requirements: ['standard', 'limited']
    }

    checkboxes.forEach(box => {
        box.addEventListener('click', ({currentTarget: {checked, name}}) => {
            const value = nameOfCheckboxes[name][Number(checked)];
            const ulList = document.getElementById(value);
            const tabs = document.querySelectorAll(`[data-${name}]`);
            const sibling = ulList.parentNode.children;

            for(const list of sibling) list.classList.remove('active');

            for(let tab of tabs) {
                tab.classList.remove('active');
                tab.dataset[name] === value && tab.classList.add('active')
            }
            ulList.classList.add('active');
        }) 
    })
}