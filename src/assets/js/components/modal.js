export const modal = (Buttons, Modal, ModalSubTitle, ModalPrice, Close, Overlay) => {
    const buttons = document.querySelectorAll(Buttons),
        modal = document.querySelector(Modal),
        modalSubTitle = document.querySelector(ModalSubTitle),
        modalPrice = document.querySelector(ModalPrice),
        close = document.querySelector(Close),
        overlay = document.querySelector(Overlay);

    const values = [
        {
            price: 19.99,
            title: 'Standard Edition'
        },
        {
            price: 18.99,
            title: 'Standard Edition'
        },
        {
            price: 29.99,
            title: 'Deluxe Edition'
        },
        {
            price: 35.99,
            title: 'DualSense with a Standard Edition'
        },
        {
            price: 15.99,
            title: 'Standard Edition for PS4'
        }
    ]

    buttons.forEach(btn => {
        btn.addEventListener('click', ({currentTarget: target}) => {
            const { value } = target.dataset;

            if(!value) return;

            const { price, title } = values[value];
            modalSubTitle.innerText = title;
            modalPrice.innerText = `${price} $`;
            modal.classList.add('opened');
            overlay.classList.add('opened');
        })
    });

    close.addEventListener('click', () => {
        modal.classList.remove('opened');
        overlay.classList.remove('opened');
    });
    overlay.addEventListener('click', () => {
        modal.classList.remove('opened');
        overlay.classList.remove('opened');
    })

}