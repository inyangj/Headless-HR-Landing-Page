const apiKey = 'rhfsdikclojdx nvdsxpodsxpojqfw scjx nio'; 

const api = axios.create({
    baseURL: 'https://api.sendinblue.com/v3',
    headers: {
        'api-key': apiKey,
        accept: 'application/json',
        'content-type': 'application/json',
    },
});

const joinWaitList = async () => {
    const email = document.getElementById('emailInput').value;

    if (!email) {
        alert('Please enter a valid email address');
        return;
    }

    const payload = {
        email: email,
        emailBlacklisted: false,
        smsBlacklisted: false,
        listIds: [34],
        updateEnabled: false,
    };

    try {
        const res = await api.post('/contacts', payload);
        if (res.status === 201) {
            alert('Your message was sent successfully');
        } else {
            alert('Something went wrong! Try again');
        }
    } catch (err) {
        alert('Something went wrong! Try again');
    }
};

document.getElementById('joinWaitlistBtn').addEventListener('click', joinWaitList);