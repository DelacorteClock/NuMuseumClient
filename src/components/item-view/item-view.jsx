import {useParams} from 'react-router';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';

export const ItemView = function ({items}) {
    var {itemId} = useParams();
    const itemInfo = items.find(function (i) {return i.itemId === itemId;});
    var {primaryImage, title, artist, exhibit, objectName, objectDate, medium, dimensions, description, department, isPublicDomain, isFeatured} = itemInfo;
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
                <Link to='/'><Button variant='primary'>BACK</Button></Link>
            </div>
            );
};