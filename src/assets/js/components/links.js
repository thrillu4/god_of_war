export const links = (links, Hamburger, Header) => {
    const menuLinks = document.querySelectorAll(links),
          hamburger = document.querySelector(Hamburger),
          header = document.querySelector(Header)

    hamburger.addEventListener('click', () => {
        header.classList.toggle('opened');
    });

    menuLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const href = e.currentTarget.getAttribute('href');

            if(!href || !href.startsWith('#')) return;
            const section = href.slice(1);
            const top = document.getElementById(section)?.offsetTop || 0;
            window.scrollTo({top, behavior: 'smooth'});
        })
    })
}