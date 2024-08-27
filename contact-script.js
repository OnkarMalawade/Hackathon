document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const action = form.action;
    
    fetch(action, {
        method: 'POST',
        body: data,
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Email successfully sent!');
            form.reset();
        } else {
            alert('There was a problem sending your email.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was a problem sending your email.');
    });
});
