import React from 'react';
import { Link, useLoaderData, useLocation } from 'react-router-dom';
import '../Breadcumb/Breadcump.css';

const Breadcumb =() => {
    const location = useLocation();
    let currentLink = '';

    const crumbs = location.pathname.split('/')
    .filter(crumb=> crumb !=='')
    .map(crumb=>{
        currentLink += `/${crumb}`;
        return(
            <div className='crumb' key={crumb}>
                <Link to={currentLink}>{crumb}</Link>
            </div>
        )
    })
    return (
        <div className='breadcrumbs'>
            {crumbs}
        </div>
    )
}
export default Breadcumb;