import React from 'react';
import { Col, Figure } from 'react-bootstrap';

import Fancybox from './Fancybox';

const Picture = (props) => {
    return (
        <Col xs={6} md={3} lg={2} xl={1} className="p-1">
            <Fancybox>
                <a
                    href={props.image.src}
                    data-fancybox="gallery"
                    data-src={props.image.src}
                    data-caption={props.image.caption}
                    className="text-decoration-none"
                >
                    <Figure className="d-inline">
                        <Figure.Image
                            src={props.image.thumb}
                            title={props.image.caption}
                            alt={props.image.caption}
                            width={350}
                            height={350}
                            fluid={true}
                            className="shadow"
                        />
                        <Figure.Caption className="cut-text">
                            {props.image.caption}
                        </Figure.Caption>
                    </Figure>
                </a>
            </Fancybox>
        </Col>
    );
}

export default Picture;