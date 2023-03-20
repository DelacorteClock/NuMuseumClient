import {useState, useEffect} from 'react';
import {ItemCard} from '../item-card/item-card';
import {ItemView} from '../item-view/item-view';
import {LoginView} from '../login-view/login-view';
import {ProfileView} from '../profile-view/profile-view';
import {ProfileEditView} from '../profile-edit-view/profile-edit-view';
import {RegistrationView} from '../registration-view/registration-view';
import {NavigationBar} from '../navigation-bar/navigation-bar';
import {Row, Col, Button, Form} from 'react-bootstrap';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';

const MainView = function () {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    const storedToken = localStorage.getItem('token');
    const [items, setItems] = useState([]);
    const [user, setUser] = useState(storedUser ? storedUser : null);
    const [token, setToken] = useState(storedToken ? storedToken : null);
    //For search feature
    const [search, setSearch] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    useEffect(function () {
        if (!token) {
            return;
        }
        fetch('https://rubbersuitleatherpantsspacesuit.onrender.com/collection', {
            headers: {Authorization: `Bearer ${token}`}
        }).then(function (res) {
            return res.json();
        }).then(function (info) {
            setItems(info);
            localStorage.setItem('items', JSON.stringify(info));
        });
    }, [token]);
    useEffect(function () {
        if (search && search.length > 0) {
            var filterResults = items.filter(function (itm) {
                return (itm.title.toLowerCase().includes(search.toLowerCase().trim()) ||
                itm.artist.artistName.toLowerCase().includes(search.toLowerCase().trim()) ||
                itm.department.deptTitle.toLowerCase().includes(search.toLowerCase().trim()) ||
                itm.medium.toLowerCase().includes(search.toLowerCase().trim()) ||
                itm.description.toLowerCase().includes(search.toLowerCase().trim()));
            });
            console.log(items, search, search.toLowerCase().trim(), filterResults);
            setSearchResults(filterResults);
        } else {
            setSearchResults([]);
        }
    }, [search]);
    //Force login
    return (
            <BrowserRouter>
                <NavigationBar user={user} onExited={function () {setUser(null); setToken(null); localStorage.clear();}} />
                <Row className='justify-content-md-center'>
                    <Routes>
                        <Route path='/registration' element={<div>
                            {user ? (
                                <Navigate to='/' />
                            ) : (
                                <Col md={5}><RegistrationView /></Col>
                            )}
                        </div>} />
                        <Route path='/login' element={<div>
                            {user ? (
                                <Navigate to='/' />
                            ) : (
                                <Col md={5}>
                                    <LoginView onEntered={function (user, token) {setUser(user); setToken(token); }} />
                                </Col>
                            )}
                        </div>} />
                        <Route path='/items/:itemId' element={<div>
                            {!user ? (
                                <Navigate to='/login' replace />
                            ) : items.length === 0 ? (
                                <Col md={10}>
                                    <marquee behavior='alternate' scrollamount='15'><h1>Loading NuMuseum Collection</h1></marquee>
                                </Col>
                            ) : (
                                <Col md={10}><ItemView items={items} /></Col>
                            )}
                        </div>} />
                        <Route path='/profile' element={<div>
                            {!user ? (
                                <Navigate to='/login' replace />
                            ) : (
                                <Col md={10}><ProfileView /></Col>
                            )}
                        </div>} />
                        <Route path='/profile/edit' element={<div>
                            {!user ? (
                                <Navigate to='/login' replace />
                            ) : (
                                <Col md={5}><ProfileEditView /></Col>
                            )}
                        </div>} />
                        <Route path='/' element={<div>
                            {!user ? (
                                <Navigate to='/login' replace />
                            ) : items.length === 0 ? (
                                <Col md={10}>
                                    <marquee behavior='alternate' scrollamount='15'><h1>Loading NuMuseum Collection</h1></marquee>
                                </Col>
                            ) : searchResults.length > 0 ? (
                                <div>
                                    <Row className='search-bar'>
                                        <Col className='mt-2'>
                                        <Form>
                                          <Form.Control
                                            type='text'
                                            placeholder='Collection Search'
                                            value={search}
                                            onChange={function (e) {setSearch(e.target.value);}}
                                          />
                                        </Form>
                                      </Col>
                                    </Row>
                                    <Row>{searchResults.map(function (item) {return <Col className='my-2' key={item.itemId} lg={3} md={4} sm={6}><ItemCard itemInfo={item} /></Col>;})}</Row>
                                </div>
                            ) : (
                                <div>
                                    <Row className='search-bar'>
                                        <Col className='mt-2'>
                                        <Form>
                                          <Form.Control
                                            type='text'
                                            placeholder='Collection Search (Title, Artist, Department or Description)'
                                            value={search}
                                            onChange={function (e) {setSearch(e.target.value);}}
                                          />
                                        </Form>
                                      </Col>
                                    </Row>
                                    <Row>{items.map(function (item) {return <Col className='my-2' key={item.itemId} lg={3} md={4} sm={6}><ItemCard itemInfo={item} /></Col>;})}</Row>
                                </div>
                            )}
                        </div>} />
                    </Routes>
                </Row>
            </BrowserRouter>
            );
    };
    
export default MainView;