document.getElementById('yesButton').addEventListener('click', () => {
    document.querySelector('.container').style.display = 'none';
    document.getElementById('surprise').classList.remove('hidden');
});

document.getElementById('noButton').addEventListener('mouseover', function() {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 100);
    this.style.left = `${x}px`;
    this.style.top = `${y}px`;
});
