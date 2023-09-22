import React from 'react';

function SecondSection() {
    return (
        <>
            <div className='second-section container-fluid'>
                <div className='row work-days text-center'>
                    <div className='col-md-4 col-sm-6 col-12'>
                    <img src='time.png' /><br /><br />
                        <h1>Open Mon-Sat</h1>
                    </div>
                    <div className='col-md-4 col-sm-6 col-12'>
                        <img src='coach.png' /><br /><br />
                        <h1>Personal Training</h1>
                    </div>
                    <div className='col-md-4 col-sm-6 col-12'>
                        <img src='star.png' /><br /><br />
                        <h1>Book Your Time</h1>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default SecondSection;
