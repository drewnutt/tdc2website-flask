const Span = () => <span></span>
// src/template/HomeDemo1/SecAboutUsClient/SecWhoWeContant/index.jsx

const SecWhoWeContant = () => {

  return (
    <div className="col-12 col-lg-6">
        <div className="who-we-contant">
            <div className="dream-dots">
            <Span /> 
            <Span /> 
            <Span /> 
            <Span /> 
            <Span /> 
            <Span /> 
            <Span /> 
            </div>
            <h4 data-aos="fade-up">TDC Model Server</h4>
            <p data-aos="fade-up">TDC-2 has released open source inference serving software that streamlines AI inferencing for single-cell foundation models across modalities.</p>
            <a data-aos="fade-up" className="btn dream-btn mt-30" href="https://huggingface.co/tdc" style={{borderColor: '#FFDF00'}}>HF Model Hub</a>
        </div>
    </div>
  );
}

export default SecWhoWeContant;