import {useState,useEffect} from 'react';
import {ItemCard} from '../item-card/item-card';
import {ItemView} from '../item-view/item-view';
const MainView = function () {
    const [items, setItems] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);;
    useEffect(function () {
        fetch('https://rubbersuitleatherpantsspacesuit.onrender.com/collection').then(function (res) {
            return res.json();
        }).then(function (info) {
            console.log('Info from json ', info);
            setItems(info);
        });
    }, []);
    if (selectedItem) {
        return <ItemView itemInfo={selectedItem} onBackClick={function () {setSelectedItem(null);}} />;
    }
    //Message for empty item array
    if (items.length === 0) {
        return <div><marquee behavior='alternate' scrollamount='15'><h1>Loading NuMuseum Collection</h1></marquee></div>;
    }
    //Return divs with cards if item array not empty
    return (
        <div>
            {items.map(function (item) {
                return <ItemCard key={item.itemId} itemInfo={item} onItemCardClick={function (newItemSelection) {setSelectedItem(newItemSelection);}} />;
            })}
        </div>
            );
};

export default MainView;