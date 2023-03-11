import React from 'react';
import PropTypes from 'prop-types';
import {Button, Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export const ItemCard = function ({itemInfo}) {
    var {artist, primaryImage, title, isFeatured, itemId} = itemInfo;
    function featuredScan(featuredStatus) {
        if (featuredStatus) {
            return '\u{1F605}';
        }
    }
    return (
        <Card className='h-100'>
            <Card.Img variant='top' src={primaryImage} />
            <Card.Body>
                <Card.Title>{title} {featuredScan(isFeatured)}</Card.Title>
                <Card.Text>{artist.artistName}</Card.Text>
                <Link to={`/items/${encodeURIComponent(itemId)}`}><Button variant='secondary' className='text-white'>MORE INFO</Button></Link>
            </Card.Body>
        </Card>
            );
};

//Define requirements for ItemCard props
ItemCard.propTypes = {
    itemInfo: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        itemId: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        artist: PropTypes.shape({
            _id: PropTypes.string.isRequired,
            artistName: PropTypes.string.isRequired,
            artistBiography: PropTypes.string.isRequired,
            artistStart: PropTypes.string.isRequired,
            artistMedium: PropTypes.arrayOf(PropTypes.string).isRequired
        }).isRequired,
        exhibit: PropTypes.string.isRequired,
        primaryImage: PropTypes.string.isRequired,
        links: PropTypes.arrayOf(PropTypes.string).isRequired,
        objectName: PropTypes.string.isRequired,
        objectDate: PropTypes.string.isRequired,
        medium: PropTypes.string.isRequired,
        dimensions: PropTypes.arrayOf(PropTypes.number).isRequired,
        department: PropTypes.shape({
            _id: PropTypes.string.isRequired,
            deptTitle: PropTypes.string.isRequired,
            deptDescription: PropTypes.string.isRequired,
            deptId: PropTypes.string.isRequired
        }).isRequired,
        isPublicDomain: PropTypes.bool.isRequired,
        isFeatured: PropTypes.bool.isRequired
    }).isRequired,
    onItemCardClick: PropTypes.func.isRequired
};