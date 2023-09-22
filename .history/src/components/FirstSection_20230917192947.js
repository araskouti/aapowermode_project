function FirstSection() {
    const style = {
        color: 'rgb(255, 179, 37)'
    }
    const styleTwo = {
        fontSize: '45px',
        color: 'rgb(255, 179, 37)',
        borderLeft: '2px solid rgb(255, 179, 37)',
        paddingLeft: '10px'
    }
    return (
        <>
       
        <div className='first-section container'>
        <video className='gym-vid' src='gym-vid (2).mp4' autoPlay muted loop>Your browser does not support the video tag.</video>
            <div className='row'>
                <h1 style={styleTwo}></h1>
            </div>
            <div className='row'>
                <h1 className='col text-left'><span style={styleTwo}>Get Ready to Win.</span><br />It all begins with <span style={style}>your mindset.</span><br /> Train <span style={style}>your mind,</span><br /> and your body <span style={style}>will follow.</span></h1>
            </div><br />
            <div className='row'>
                <button className='book-btn'>Book an appointment</button>
            </div>
            
        </div>


        </>
    )
}
export default FirstSection;
