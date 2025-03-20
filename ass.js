document.getElementById('gender-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;

    fetch(`https://api.genderize.io?name=${name}`)
        .then(response => response.json())
        .then(data => {
            const resultDiv = document.getElementById('result');
            if (data.gender) {
                resultDiv.textContent = `The gender for the name "${name}" is likely ${data.gender} with a probability of ${data.probability}.`;
            } else {
                resultDiv.textContent = `The gender for the name "${name}" could not be determined.`;
            }
        })
        .catch(error => {
            const resultDiv = document.getElementById('result');
            resultDiv.textContent = 'An error occurred while guessing the gender.';
            console.error('Error:', error);
        });
});
