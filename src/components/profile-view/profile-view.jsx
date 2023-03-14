import {useState} from 'react';
import {Button, Form, Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {ItemCard} from '../item-card/item-card';
export const ProfileView = function ({items}) {
    //Use for enabling edit view
    const [editing, setEditing] = useState(false);
    //Essentials for getting full user info 
    const storedUser = JSON.parse(localStorage.getItem('user'));
    const storedToken = localStorage.getItem('token');
    //Needed user info
    var {userForename, userSurname, userUsername, userEmail, userCelebrate, userFavourites} = storedUser;
    //Birthday formatting
    var birthdayArray = userCelebrate.split('-');
    function monthRead(n) {
        wordMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        var num = parseInt(n);
        return wordMonths[num - 1];
    };
    var trueBirthday = `${birthdayArray[2].split('T')[0]} ${monthRead(birthdayArray[1])} (${birthdayArray[2].split('T')[0]} ${birthdayArray[1]})`;
    //The long ids of all favourites
    var listOfFavourites = [];
    userFavourites.forEach(function (i) {
        listOfFavourites.push(items.find(function (o) {return o._id === i;}));
    });
    /*Testing*/
    console.log('It received', items);
    console.log(storedUser);
    console.log(userFavourites);
    console.log(listOfFavourites);
    return (
            <div>
                <div><b>YOUR PROFILE</b></div>
                <div><b>Forename: </b>{userForename}</div>
                <div><b>Surname: </b>{userSurname}</div>
                <div><b>Username: </b>{userUsername}</div>
                <div><b>Email: </b>{userEmail}</div>
                <div><b>Birthday: </b>{trueBirthday}</div>
                <Link as={Link} to='/profile/edit'>
                    <Button variant='secondary text-white' className='my-2'>EDIT USER INFO</Button>
                </Link>
                <div><b>YOUR FAVOURITES</b></div>
                <div>
                    <Row>{listOfFavourites.map(function (item) {return <Col className='my-2' key={item.itemId} lg={3} md={4} sm={6}><ItemCard itemInfo={item} /></Col>;})}</Row>
                </div>
            </div>
        );
};