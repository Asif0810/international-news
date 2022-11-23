import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import {
    FaGofore,
    FaGithub,
    FaYoutube,
    FaTwitter,
    FaInstagram,
    FaFacebook,
    FaWhatsapp,
    FaTwitch

} from "react-icons/fa";
import { ListGroup } from 'react-bootstrap';
import BrandCarousal from './BrandCarousal';
const RightNav = () => {
    return (

        <div>
            <ButtonGroup vertical>
                <Button variant="outline-primary"> <FaGofore /> sign via google</Button >
                <Button variant="outline-secondary"><FaGithub /> sign via github</Button>
            </ButtonGroup >
            <div>
                <ListGroup className='mt-5'>
                    <ListGroup.Item><FaFacebook /> facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter />twitter</ListGroup.Item>
                    <ListGroup.Item><FaTwitch />twitch</ListGroup.Item>
                    <ListGroup.Item><FaInstagram />instagram</ListGroup.Item>
                    <ListGroup.Item><FaWhatsapp />whatsapp</ListGroup.Item>
                </ListGroup>
            </div>
            <div>
                <BrandCarousal></BrandCarousal>
            </div>
        </div>

    );
};

export default RightNav;