function servicesToggle() {
    const buttons = document.querySelectorAll('[data-services-btn]');
    const container = document.querySelector('[data-services-container]')

    buttons.forEach(btn => {
        
        btn.addEventListener('click', _ => {
            btn.classList.toggle('is-opened');
            container.classList.toggle('is-opened');
        })

    })
}

export default servicesToggle;