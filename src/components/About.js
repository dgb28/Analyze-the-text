import React from 'react';

export default function About(props){
  document.title="About Us"
    // const [myStyle,setMyStyle]=useState({
    //   color:'black',
    //   backgroundColor:'white',
      
    // });
    let myStyle={
      color:props.mode==='dark'?'white':'black',
      backgroundColor:props.mode==='dark'?'black':'white',
      border:'2px solid',
      borderColor:props.mode==='dark'?'black':'white'
    }
    return(
        <div className="container my-3" href="">
          <h2>About Us</h2>
            <div className="accordion " id="accordionExample">
              <div className="accordion-item  ">
                <h2 className="accordion-header" id="headingOne">
                  <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <strong>Analyze Your Text</strong>
                  </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" style={myStyle} aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                  <div className="accordion-body" style={myStyle}>
                    It provides you a way to  analyze your text quickly and efficiently.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <strong>Free to Use</strong>
                  </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" style={myStyle} aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                  <div className="accordion-body" style={myStyle}>
                    It is free character counter tool that provides instant character count & word count statasticsfor a given text.It reports number of words and characters.Thus it is useful for writing text with word character limit
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <strong>Browser Compatible</strong>
                  </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" style={myStyle} aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                  <div className="accordion-body" style={myStyle}>
                    This word counter software works in any web browsersuch as chrome,Firefix,Edge,Safari,Opera.It suits to count characters and words in book,excel,document,pdf,essay etc.
                  </div>
                </div>
              </div>
            </div>
        </div>
    )
}