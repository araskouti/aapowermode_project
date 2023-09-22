function FirstSection() {
    const style = {
        color: 'rgb(255, 179, 37)'
    }
    const styleTwo = {
        fontSize: '45px',
        color: 'rgb(255, 179, 37)'
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
            <div class="calendly-inline-widget" data-url="https://calendly.com/araskouti6/book-an-appointment?background_color=1a1a1a&text_color=ffffff" style={{minWidth:'320px', height:'700px'}}></div>

        </div>

        </>
    )
}
export default FirstSection;
