import React from 'react';
import FontAwesomeIcon from 'https://kit.fontawesome.com/35d5cee135.js';

function SecondSection() {
    return (
        <>
            <div className='second-section container-fluid'>
                <div className='row work-days text-center'>
                    <div className='col-md-4 col-sm-6 col-12'>

                        <h1>Open Mon-Sat</h1>
                    </div>
                    <div className='col-md-4 col-sm-6 col-12'>
                        <FontAwesomeIcon icon="fa-regular fa-user" />
                        <h1>Open Mon-Sat</h1>
                    </div>
                    <div className='col-md-4 col-sm-6 col-12'>
                        <h1>Open Mon-Sat</h1>
                    </div>
                </div>
                <div className='row personal-training'>
                    {/* Content for the personal-training row */}
                </div>
                <div className='row book-your-time'>
                    {/* Content for the book-your-time row */}
                </div>
            </div>
        </>
    )
}

export default SecondSection;
