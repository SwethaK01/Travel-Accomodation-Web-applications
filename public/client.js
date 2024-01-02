// client.js
const stripe = Stripe("pk_test_51NzXxFSJNTLQYyrVBCy3xlJGr4val1eugZEnKmQvVP2VICy8ryyi7WbjK4GRdcZlQ2T0C9wGuqPhB5r38nOAQmrl00xMFsZO2D");
const elements = stripe.elements();
const cardElement = elements.create('card');

cardElement.mount('#card-element');

const form = document.getElementById('payment-form');
const paymentStatusElement = document.getElementById('payment-status');
// Inside your form submit event handler
form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const { token, error } = await stripe.createToken(cardElement);

    if (error) {
        paymentStatusElement.textContent = error.message;
    } else {
        fetch('/charge', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ token: token.id }),
        })
        .then(response => response.json())
        .then(data => {
            if (data.client_secret) {
                // Transaction succeeded, redirect to success.html
                paymentStatusElement.textContent = 'Payment successful';
                window.location.href = '/successpay.html';
            } else {
                // Transaction failed, redirect to failed.html
                paymentStatusElement.textContent = 'Payment failed: ' + data.error;
                window.location.href = '/failed.html';
            }
        });
    }
});
