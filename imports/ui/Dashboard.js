/**
 * Created by jay on 3/26/17.
 */
import React from 'react';
import PrivateHeader from './PrivateHeader';

export default () => {
    return (
        <div>
            <PrivateHeader title="Dashboard" />
            <div className="page-content">
                Dashboard page content
            </div>
        </div>
    );
}


