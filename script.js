document.getElementById('patientForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const birthDate = document.getElementById('birthDate').value;
    const age = document.getElementById('age').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const disease = document.getElementById('disease').value;
    const email = document.getElementById('email').value;
    const pin = document.getElementById('pin').value;

    // Display the entered details
    const output = document.getElementById('output');
    output.innerHTML = `
        <h3>Entered Details:</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>Birth Date:</strong> ${birthDate}</p>
        <p><strong>Age:</strong> ${age}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>Disease:</strong> ${disease}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>PIN:</strong> ${pin}</p>
    `;
});