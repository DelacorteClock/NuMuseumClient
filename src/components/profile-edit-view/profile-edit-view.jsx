import {React, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Link} from 'react-router-dom';

export const ProfileEditView = function () {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    const storedToken = localStorage.getItem('token');
    var {userForename, userSurname, userUsername, userEmail, userCelebrate} = storedUser;
    var birthdayArray = userCelebrate.split('-');
    //All possible modifyable values
    const [forename, setForename] = useState(userForename);
    const [surname, setSurname] = useState(userSurname);
    const [username, setUsername] = useState(userUsername);
    const [email, setEmail] = useState(userEmail);
    const [code, setCode] = useState('');
    const [birthday, setBirthday] = useState(`${birthdayArray[2].split('T')[0]} ${birthdayArray[1]}`);
    const hdlSubmit = function (evt) {
        evt.preventDefault();
        const builtDate = birthday.split(' ');
        if (code) {
            var info = {
                userForename: forename,
                userSurname: surname,
                userEmail: email,
                userUsername: username,
                userCode: code,
                userCelebrate: `1618-${builtDate[1]}-${builtDate[0]}`
            };
        } else {
            var info = {
                userForename: forename,
                userSurname: surname,
                userEmail: email,
                userUsername: username,
                userCelebrate: `1618-${builtDate[1]}-${builtDate[0]}`
            };
        }
        fetch(`https://rubbersuitleatherpantsspacesuit.onrender.com/users/username/${userUsername}`, {
            method: 'PUT',
            body: JSON.stringify(info),
            headers: {
                "Content-Type": 'application/json',
                "Authorization": `Bearer ${storedToken}`
            }
        }).then(function (res) {
            if (res.status === 200) {
                fetch(`https://rubbersuitleatherpantsspacesuit.onrender.com/min/users/username/${storedUser.userUsername}/`, {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${storedToken}`
                    }
                }).then(function (res) {
                    return res.json();
                }).then(function (info) {
                    console.log(info);
                    localStorage.setItem('user', JSON.stringify(info));
                    var notify = new SpeechSynthesisUtterance(`Attention! Profile is now updated.`);
                    speechSynthesis.speak(notify);
                    alert(`PROFILE UPDATED`);
                    window.location.reload();
                });
            } else {
                alert('UPDATE FAILURE');
            }
        });
    };
    const forceDelete = function (evt) {
        evt.preventDefault();
        fetch(`https://rubbersuitleatherpantsspacesuit.onrender.com/users/username/${userUsername}`, {
            method: 'DELETE',
            headers: {
                "Authorization": `Bearer ${storedToken}`
            }
        }).then(function (res) {
            if (res.status === 200) {
                var notify = new SpeechSynthesisUtterance(`Attention! Profile is now deleted successfully.`);
                speechSynthesis.speak(notify);
                alert(`PROFILE DELETED SUCCESSFULLY`);
                localStorage.clear();
                window.location.reload();
            } else {
                var notify = new SpeechSynthesisUtterance(`Attention! Profile is not deleted successfully.`);
                speechSynthesis.speak(notify);
                alert(`PROFILE NOT DELETED SUCCESSFULLY`);
            }
        });
    };
    return (
        <div>
            <Form onSubmit={hdlSubmit}>
                    <Form.Group controlId='regForename'>
                        <Form.Label>Forename</Form.Label>
                        <Form.Control type='text' value={forename} onChange={function (e) {setForename(e.target.value);}} placeholder='Your Forename' pattern='[A-Za-z]{2,}' />
                    </Form.Group>
                    <Form.Group controlId='regSurname'>
                        <Form.Label>Surname</Form.Label>
                        <Form.Control type='text' value={surname} onChange={function (e) {setSurname(e.target.value);}} placeholder='Your Surname' pattern='[A-Za-z]{2,}' />
                    </Form.Group>
                    <Form.Group controlId='regEmail'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type='email' value={email} onChange={function (e) {setEmail(e.target.value);}} placeholder='Your Email' required />
                    </Form.Group>
                    <Form.Group controlId='regUsername'>
                        <Form.Label>Username</Form.Label>
                        <Form.Control type='text' value={username} onChange={function (e) {setUsername(e.target.value);}} placeholder='Your Username' pattern='\w{5,}' />
                    </Form.Group>
                    <Form.Group controlId='regCode'>
                        <Form.Label>Code</Form.Label>
                        <Form.Control type='password' value={code} onChange={function (e) {setCode(e.target.value);}} placeholder='Type New Code' minLength='10' />
                    </Form.Group>
                    <Form.Group controlId='regBirthday'>
                        <Form.Label className='my-4'>(Optional) Birthday (dd mm)</Form.Label>
                        <Form.Control type='text' value={birthday} onChange={function (e) {setBirthday(e.target.value);}} placeholder='DD MM (Optional)' pattern='[0-3][0-9] [0-1][0-9]' />
                    </Form.Group>
                    <div className='btn-group'>
                        <Button variant='primary' className='my-2' type='submit'>DONE</Button>
                        <Link as={Link} to='/profile'>
                            <Button variant='secondary text-white' className='m-2'>RETURN TO PROFILE</Button>
                        </Link>
                    </div>
            </Form>
            <Form onSubmit={forceDelete}>
                <Form.Group controlId='delForce'>
                    <Form.Label className='my-4'><b>FORCE DELETE ACCOUNT</b></Form.Label>
                    <Form.Control type='text' placeholder="Type 'FORCE DELETE NOW' to delete account." pattern='FORCE DELETE NOW' required />
                </Form.Group>
                <Button variant='primary' className='my-2' type='submit'>DELETE USER</Button>
            </Form>
        </div>
    );
};