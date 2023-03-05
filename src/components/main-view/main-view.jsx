import {useState, useEffect} from 'react';
import {ItemCard} from '../item-card/item-card';
import {ItemView} from '../item-view/item-view';
import {LoginView} from '../login-view/login-view';
import {RegistrationView} from '../registration-view/registration-view';
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
    //Force login if user not in
    if (!user) {
        return (
                <div>
                    <LoginView onEntered={function (user, token) {
                                    setUser(user);
                                    setToken(token);
                                           }} />
                    or <RegistrationView />
                </div>
                );
    }
    if (selectedItem) {
        return <ItemView itemInfo={selectedItem} onBackClick={function () {
                        setSelectedItem(null);
                              }} />;
    }
    //Message for empty item array
    if (items.length === 0) {
        return <div><marquee behavior='alternate' scrollamount='15'><h1>Loading NuMuseum Collection</h1></marquee></div>;
    }
    //Return divs with cards if item array not empty
    return (
            <div>
                {items.map(function (item) {
                                return <ItemCard key={item.itemId} itemInfo={item} onItemCardClick={function (newItemSelection) {
                                                                setSelectedItem(newItemSelection);
                                                                      }} />;
                            })}
                <button onClick={function () {
                        setUser(null);
                        setToken(null);
                        localStorage.clear();
                            }}>LOGOUT</button>
            </div>
            );
};

export default MainView;