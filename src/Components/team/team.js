import React from 'react';
import { Card } from "react-bootstrap";
import './team.css'

function Team() {


    const cardInfo = [
        {
            image: "https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg",
            title: "Praveena P",
            text: "developer"
        },
        {
            image: "https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg",
            title: "Rahul Krishnan",
            text: "developer"
        },
        {
            image: "https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg",
            title: "Monesh Kannan",
            text: "developer"
        },
        {
            image: "https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg",
            title: "Santhosh",
            text: "developer"
        },
        {
            image: "https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg",
            title: "Pavithiran",
            text: "developer"
        },
    ];

    const renderCard = (card, index) => {
        return (

            <Card style={{ width: '18rem' }} key={index} className="box">
                <Card.Img className="rounded-circle z-depth-1 img-fluid" variant="top" src={card.image} />
                <Card.Body>
                    <Card.Title>{card.title}</Card.Title>
                    <Card.Text>
                        {card.text}
                    </Card.Text>

                </Card.Body>
            </Card>

        )
    }
    return (


        <div className="grid">
            {cardInfo.map(renderCard)}
        </div>
    )
}

export default Team
