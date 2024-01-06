import React from 'react'
import { Helmet } from 'react-helmet'

const MetaData = ({ title }) => {
    return (
        <Helmet>
            <title>{`${title}`}</title>
            <title>{`${title} - 4man Electronic Store`}</title>
        </Helmet>
    )
}

export default MetaData
