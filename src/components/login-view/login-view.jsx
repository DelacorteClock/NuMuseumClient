import {React,useState} from 'react';

export const LoginView = function ({onEntered}) {
    const [username, setUsername] = useState('');
    const [code, setCode] = useState('');
    const hdlSubmit = function (evt) {
        evt.preventDefault();
        fetch(`https://rubbersuitleatherpantsspacesuit.onrender.com/login?username=${username}&code=${code}`, {
            method: 'POST'
        }).then(function (res) {
            return res.json();
        }).then(function (info) {
            console.log('SPACESUIT SYSTEM RESPONSE',info);
            if (info.user) {
                localStorage.setItem('user', JSON.stringify(info.user));
                localStorage.setItem('token', info.token);
                onEntered(info.user, info.token);
            } else {
                alert('SITE ENTRY FAILURE');
            }
        }).catch(function (e) {
            alert('SYSTEM ISSUE OCCURRED');
        });
    };
    return (
            <form onSubmit={hdlSubmit}>
                <label>
                    Username
                    <input type='text' value={username} onChange={function (e) {setUsername(e.target.value);}} placeholder='Your Username' pattern='\w{5,}' required />
                </label>
                <label>
                    Code
                    <input type='password' value={code} onChange={function (e) {setCode(e.target.value);}} placeholder='CorrectHorseBatteryStaple' minLength='10' required />
                </label>
                <button type='submit'>SUBMIT</button>
            </form>
    );
};