import {React,useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Link} from 'react-router-dom';

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
            <div>
                <Form onSubmit={hdlSubmit}>
                    <Form.Group controlId='loginUsername'>
                        <Form.Label>Username</Form.Label>
                        <Form.Control type='text' value={username} onChange={function (e) {setUsername(e.target.value);}} placeholder='Your Username' pattern='\w{5,}' required />
                    </Form.Group>
                    <Form.Group controlId='loginCode'>
                        <Form.Label>Code</Form.Label>
                        <Form.Control type='password' value={code} onChange={function (e) {setCode(e.target.value);}} placeholder='Your Code' minLength='10' required />
                    </Form.Group>
                    <div class='btn-group'>
                        <Button variant='primary' className='my-2' type='submit'>SUBMIT</Button>
                        <Link as={Link} to='/registration'>
                            <Button variant='secondary text-white' className='m-2' type='submit'>NEW USER</Button>
                        </Link>
                    </div>
                </Form>
            </div>
    );
};