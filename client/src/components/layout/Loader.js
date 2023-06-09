import React from 'react';
import { Spinner } from 'react-bootstrap';
import '../layout/Loader.css';

const Loader = () => {
    return (
        <div className="loader">
            <Spinner animation="border" variant="danger" />
        </div>
    )
}

export default Loader;
