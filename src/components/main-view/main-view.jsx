import {useState, useEffect} from 'react';
import {ItemCard} from '../item-card/item-card';
import {ItemView} from '../item-view/item-view';
import {LoginView} from '../login-view/login-view';
import {RegistrationView} from '../registration-view/registration-view';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const MainView = function () {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    const storedToken = localStorage.getItem('token');
    const [items, setItems] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);
    const [user, setUser] = useState(storedUser ? storedUser : null);
    const [token, setToken] = useState(storedToken ? storedToken : null);
    useEffect(function () {
        if (!token) {
            return;
        }
        fetch('https://rubbersuitleatherpantsspacesuit.onrender.com/collection', {
            headers: {Authorization: `Bearer ${token}`}
        }).then(function (res) {
            return res.json();
        }).then(function (info) {
            console.log('Info from json', info);
            setItems(info);
        });
    }, [token]);
    //Force login
    return (
            <Row className='justify-content-md-center'>
                {!user ? (
                    <Col md={5}>
                        <LoginView onEntered={function (user, token) {setUser(user); setToken(token); }} />
                        or <RegistrationView />
                    </Col>
                ) : selectedItem ? (
                    <Col md={10}><ItemView itemInfo={selectedItem} onBackClick={function () {setSelectedItem(null);}} /></Col>
                ) : items.length === 0 ? (
                    <Col md={10}><marquee behavior='alternate' scrollamount='15'><h1>Loading NuMuseum Collection</h1></marquee></Col>
                ) : (
                    <div>
                        <Row>{items.map(function (item) {return <Col className='mb-4' key={item.itemId} lg={3} md={4} sm={6}><ItemCard itemInfo={item} onItemCardClick={function (newItemSelection) {setSelectedItem(newItemSelection);}} /></Col>;})}</Row>
                        <Button variant='primary' onClick={function () {setUser(null); setToken(null); localStorage.clear();}}>LOGOUT</Button>
                    </div>
            )}
            </Row>
            );
};

export default MainView;