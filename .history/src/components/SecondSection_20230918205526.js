import React from 'react';

function SecondSection() {
    return (
        <>
            <div className='second-section container-fluid'>
                <div className='row work-days text-center'>
                    <div className='time'>
                    <img src='time.png' /><br /><br />
                        <h1>Open Mon-Sat</h1>
                    </div>
                    <div className='personal-training'>
                        <img src='personal-trainer.png' /><br /><br />
                        <h1>Personal Training</h1>
                    </div>
                    <div className='book'>
                        <img src='book.png' /><br /><br />
                        <h1>Book Your Time</h1>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default SecondSection;
