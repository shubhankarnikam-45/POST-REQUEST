import React, { useState } from 'react'
import axios from 'axios';
const Input = () => {
    let [name, setName] = useState('');
    let [email, setEmail] = useState("");
    let [message, setMessage] = useState("");
    console.log(name, email, message)
    function handleSubmit(e) {
        e.preventDefault();
        let userData = {
            name, email, message
        }
        axios.post("https://www.greatfrontend.com/api/questions/contact-form ", userData).then((response) => {
            alert("sucessful")
        })
            .catch((err) => {
                alert("error")
            })

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                Name:<input
                    type='text'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <br />
                Email: <input
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <br />
                Message:<textarea
                    type='text'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <br />

                <button type='submit' > send </button>
            </form>
        </div>
    )
}

export default Input