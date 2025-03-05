const express = require('express');
const app = express();

let users = { "user@example.com": { password: "1234", saldo: 50 } };

app.get("/login", (req, res) => {
    let { email, password } = req.query;
    if (users[email] && users[email].password === password) {
        res.json({ saldo: users[email].saldo });
    } else {
        res.status(401).send("Login gagal");
    }
});

app.listen(3000, () => console.log("Server berjalan!"));
