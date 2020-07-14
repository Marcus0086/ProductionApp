import React from 'react';
import CardsInfo from './CardsInfo';

function Cards(props) {
    return (
        <React.Fragment>
            <div className="d-inline-block g-card" onClick={(e) => props.click(props.item)}>
                <img className="g-card-image" src={props.item.imgSrc} alt={props.item.imgSrc} />
                {props.item.selected && <CardsInfo title={props.item.title} subTitle={props.item.subTitle} link={props.item.link} />}
            </div>
        </React.Fragment>
        );
}

export default Cards;