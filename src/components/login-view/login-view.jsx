import {React,useState} from 'react';

export const LoginView = function ({onEntered}) {
    const [username, setUsername] = useState('');
    const [code, setCode] = useState('');
    const hdlSubmit = function (evt) {
        evt.preventDefault();
        fetch(`https://rubbersuitleatherpantsspacesuit.onrender.com/login?username=${username}&code=${code}`, {
            method: 'POST'
        }).then(function (res) {
            if (res.status === 200) {
                onEntered(username);
            } else {
                alert('SITE ENTRY FAILURE');
            }
        });
    };
    return (
            <form onSubmit={hdlSubmit}>
                <label>
                    Username
                    <input type='text' value={username} onChange={function (e) {setUsername(e.target.value);}} placeholder='Your Username' />
                </label>
                <label>
                    Code
                    <input type='password' value={code} onChange={function (e) {setCode(e.target.value);}} placeholder='CorrectHorseBatteryStaple' />
                </label>
                <button type='submit'>SUBMIT</button>
            </form>
    );
};