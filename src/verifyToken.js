
async function verifyToken(token) {
    const verified = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/user/verifyuser`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ token: token })
    })

    return await verified.json()
}

export default verifyToken