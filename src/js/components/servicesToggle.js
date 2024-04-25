function servicesToggle() {
    const wrappers = document.querySelectorAll('[data-load-more-container]');

    wrappers.forEach(wrapper => {
        const buttons = wrapper.querySelectorAll('[data-services-btn]');
        const container = wrapper.querySelector('[data-services-container]');

        buttons.forEach(btn => {
        
            btn.addEventListener('click', _ => {
                btn.classList.toggle('is-opened');
                container.classList.toggle('is-opened');
            })
        })

    })
}

export default servicesToggle;