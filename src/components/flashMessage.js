const flashMessage = (showMessage) => {
    showMessage.current.style.display = 'block'
    setTimeout(() => {
        showMessage.current.style.display = 'none'
    }, 2000);
    return showMessage
}

export default flashMessage
