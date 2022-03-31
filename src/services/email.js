export default (args) => {
    return fetch(process.env.REACT_APP_EMAIL_SERVER, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            ...args,
            token: process.env.REACT_APP_SECRET
        }),
    }).then(response => response)
}