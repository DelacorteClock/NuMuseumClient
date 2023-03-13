import {useParams} from 'react-router';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';

export const ItemView = function ({items}) {
    var {itemId} = useParams();
    const itemInfo = items.find(function (i) {return i.itemId === itemId;});
    var {primaryImage, title, artist, exhibit, objectName, objectDate, medium, dimensions, description, department, isPublicDomain, isFeatured, _id} = itemInfo;
    const storedUser = JSON.parse(localStorage.getItem('user'));
    const storedToken = localStorage.getItem('token');
    //Check favourite status
    function statusScanner(i) {
        var idArray = [];
        storedUser.userFavourites.forEach(function (i) {idArray.push(i._id);});
        var loc = idArray.indexOf(i);
        console.log(loc);
        console.log(idArray);
        if (loc > -1) {
            return 'REMOVE FAVOURITE';
        } else {
            return 'ADD FAVOURITE';
        }
    }
    const buttonText = statusScanner(_id);
    //Switch favourite status
    function statusSwitcher(i) {
        var idArray = [];
        storedUser.userFavourites.forEach(function (i) {idArray.push(i._id);});
        var loc = idArray.indexOf(i);
        console.log(loc);
        console.log(idArray);
        if (loc > -1) {
            favItemRemove(i);
        } else {
            favItemAdd(i);
        }
    }
    //Function for favourite item removal
    function favItemRemove(i) {
        fetch(`https://rubbersuitleatherpantsspacesuit.onrender.com/users/username/${storedUser.userUsername}/favitem/${i}`, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${storedToken}`
            }
        }).then(function (res) {
            if (res.status === 200) {
                fetch(`https://rubbersuitleatherpantsspacesuit.onrender.com/users/username/${storedUser.userUsername}/`, {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${storedToken}`
                    }
                }).then(function (res) {
                    return res.json();
                }).then(function (info) {
                    console.log(info);
                    localStorage.setItem('user', JSON.stringify(info));
                    var notify = new SpeechSynthesisUtterance(`Favourite item ${title} removed from profile. Just to let you know`);
                    speechSynthesis.speak(notify);
                    alert(`FAVOURITE ITEM \u00AB${title}\u00BB REMOVED`);
                    window.location.reload();
                });
            } else {
                alert('SITE ERROR OCCURRED');
            }
        });
    }
    function favItemAdd(i) {
        fetch(`https://rubbersuitleatherpantsspacesuit.onrender.com/users/username/${storedUser.userUsername}/favitem/${i}`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${storedToken}`
            }
        }).then(function (res) {
            if (res.status === 200) {
                fetch(`https://rubbersuitleatherpantsspacesuit.onrender.com/users/username/${storedUser.userUsername}/`, {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${storedToken}`
                    }
                }).then(function (res) {
                    return res.json();
                }).then(function (info) {
                    console.log(info);
                    localStorage.setItem('user', JSON.stringify(info));
                    var notify = new SpeechSynthesisUtterance(`Favourite item ${title} added to profile. Just to let you know`);
                    speechSynthesis.speak(notify);
                    alert(`FAVOURITE ITEM \u00AB${title}\u00BB ADDED`);
                    window.location.reload();
                });
            } else {
                alert('SITE ERROR OCCURRED');
            }
        });
    }
    
    //Check whether or not to display dimensions
    function dimensionScan(dimensionArray) {
        if (dimensionArray.length === 0) {
            return;
        } else if (dimensionArray.length === 2) {
            return (
                    <div>
                        <span>Dimensions: </span>
                        <span>{dimensionArray[0]}cm by {dimensionArray[1]}cm</span>
                    </div>
                    );
        } else if (dimensionArray.length === 3) {
            return (
                    <div>
                        <span>Dimensions: </span>
                        <span>{dimensionArray[0]}cm by {dimensionArray[1]}cm by {dimensionArray[2]}cm</span>
                    </div>
                    );
        } else {
            //A single dimension array should not exist
            console.error('BAD DIMENSIONS ARRAY FOR ' + itemId);
        }
    }
    //Check whether or not to display exhibit
    function exhibitScan(exhibitName) {
        if (exhibitName) {
            return (
                    <div>
                        <span>Exhibit: </span>
                        <span>{exhibitName}</span>
                    </div>
                    );
        } else {
            console.log('NO EXHIBIT FOR ' + itemId);
        }
    }
    //Returns logo if item is featured
    function featuredScan(featuredStatus) {
        if (featuredStatus) {
            return '\u{1F605}';
        }
    }
    //Give pd status
    function pdScan(pdStatus) {
        if (pdStatus) {
            return (
                    <div>
                        <span>Status: </span>
                        <span>In public domain</span>
                    </div>
                    );
        } else {
            return (
                    <div>
                        <span>Status: </span>
                        <span>Not in public domain</span>
                    </div>
                    );
        }
    }
    return (
            <div>
                <div><img src={primaryImage} width='300px' className='mt-2' /></div>
                <div>
                    <span>{title}</span>
                    <span> by </span>
                    <span>{artist.artistName}</span>
                    <span> </span>
                    <span>{featuredScan(isFeatured)}</span>
                </div>
                <div>
                    <div>ABOUT THIS WORK</div>
                    <div>{description}</div>
                </div>
                <div>
                    <div>ITEM FACTS</div>
                    <div>
                        <span>Item ID: </span>
                        <span>{itemId}</span>
                    </div>
                    <div>
                        <span>Artist: </span>
                        <span>{artist.artistName}</span>
                    </div>
                    <div>
                        <span>Year Created: </span>
                        <span>{objectDate}</span>
                    </div>
                    <div>
                        <span>Department: </span>
                        <span>{department.deptTitle}</span>
                    </div>
                    <div>
                        <span>Medium: </span>
                        <span>{medium}</span>
                    </div>
                    <div>
                        <span>Type: </span>
                        <span>{objectName}</span>
                    </div>
                    {dimensionScan(dimensions)}
                    {exhibitScan(exhibit)}
                    {pdScan(isPublicDomain)}
                </div>
                <div className='btn-group'>
                    <Link to='/'>
                        <Button variant='primary' className='my-2'>VIEW FULL COLLECTION</Button>
                    </Link>
                    <Button variant='secondary text-white' className='m-2' onClick={function () {statusSwitcher(_id);}}>{buttonText}</Button>
                </div>
            </div>
            );
};