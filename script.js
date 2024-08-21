document.getElementById('yes').addEventListener('click', function() {
    document.getElementById('fireworks').style.display = 'block';
    document.getElementById('message').style.display = 'block';
    document.getElementById('yes').disabled = true;
    document.getElementById('no').disabled = true;
});

document.getElementById('no').addEventListener('click', function() {
    this.style.position = 'absolute';
    this.style.left = `${Math.random() * 90}vw`;
    this.style.top = `${Math.random() * 90}vh`;
});