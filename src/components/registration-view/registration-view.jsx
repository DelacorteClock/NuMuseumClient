import {React,useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Link} from 'react-router-dom';

export const RegistrationView = function () {
    //Required
    const [forename, setForename] = useState('');
    const [surname, setSurname] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [code, setCode] = useState('');
    //Optional
    const [birthday, setBirthday] = useState('');
    const hdlSubmit = function (evt) {
        evt.preventDefault();
        const builtDate = birthday.split(' ');
        const info = {
            userForename: forename,
            userSurname: surname,
            userEmail: email,
            userUsername: username,
            userCode: code,
            userCelebrate: `1618-${builtDate[1]}-${builtDate[0]}`
        };
        fetch('https://rubbersuitleatherpantsspacesuit.onrender.com/users', {
            method: 'POST',
            body: JSON.stringify(info),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(function (res) {
            if (res.status === 201) {
                alert('REGISTRATION COMPLETE');
                window.location.reload();
            } else if (res.status === 400) {
                alert('USERNAME IS TAKEN');
            } else {
                alert('REGISTRATION FAILURE');
            }
        });
    };
    return (
        <Form onSubmit={hdlSubmit}>
                <Form.Group controlId='regForename'>
                    <Form.Label>Forename</Form.Label>
                    <Form.Control type='text' value={forename} onChange={function (e) {setForename(e.target.value);}} placeholder='Your Forename' pattern='[A-Za-z]{2,}' required />
                </Form.Group>
                <Form.Group controlId='regSurname'>
                    <Form.Label>Surname</Form.Label>
                    <Form.Control type='text' value={surname} onChange={function (e) {setSurname(e.target.value);}} placeholder='Your Surname' pattern='[A-Za-z]{2,}' required />
                </Form.Group>
                <Form.Group controlId='regEmail'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type='email' value={email} onChange={function (e) {setEmail(e.target.value);}} placeholder='Your Email' required />
                </Form.Group>
                <Form.Group controlId='regUsername'>
                    <Form.Label>Username</Form.Label>
                    <Form.Control type='text' value={username} onChange={function (e) {setUsername(e.target.value);}} placeholder='Your Username' pattern='\w{5,}' required />
                </Form.Group>
                <Form.Group controlId='regCode'>
                    <Form.Label>Code</Form.Label>
                    <Form.Control type='password' value={code} onChange={function (e) {setCode(e.target.value);}} placeholder='Your Code' minLength='10' required />
                </Form.Group>
                <Form.Group controlId='regBirthday'>
                    <Form.Label className='my-4'>(Optional) Birthday (dd mm)</Form.Label>
                    <Form.Control type='text' value={birthday} onChange={function (e) {setBirthday(e.target.value);}} placeholder='DD MM (Optional)' pattern='[0-3][0-9] [0-1][0-9]' />
                </Form.Group>
                <div className='btn-group'>
                    <Button variant='primary' className='my-2' type='submit'>DONE</Button>
                    <Link as={Link} to='/login'>
                        <Button variant='secondary text-white' className='m-2'>EXISTING USER</Button>
                    </Link>
                </div>
        </Form>
    );
};