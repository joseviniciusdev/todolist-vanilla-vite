export const disableButtonClick = (el: HTMLButtonElement) => {
    el.addEventListener('click', function() {
        el.setAttribute('disabled', '')
    })
}