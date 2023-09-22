import React from 'react';

function SecondSection() {
    return (
        <>
            <div className='second-section container-fluid'>
                <div className='row work-days align-items-center justify-content-center'>
                    <h1 className='col'>Open Mon-Sat</h1>
                    <h1 className='col'>Open Mon-Sat</h1>
                    <h1 className='col'>Open Mon-Sat</h1>
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
