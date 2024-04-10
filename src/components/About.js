import React from 'react'

export default function About(props) {
   // const[mystyle, setMyStyle]= useState({
   //     color :'black',
   //     backgroundColor: 'white'
   // })
   let myStyle = {
    color : props.mode === 'dark'?'white':'#042743',
    backgroundColor : props.mode === 'dark'?'rgb(36 74 104)':'white',
   }
    
 
  return (
            <div className="containers" style={mystyle}>
                <h1 className="my-3" style={{color : props.mode === 'dark'?'white':'#042743',}}>About Us</h1>
            <div className="accordion" id="accordionExample" style={mystyle} >
        <div  ame="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              <strong> Analyze your text</strong>  
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={mystyle} >
                Textutils gives a way to analyze your text quickly and efficiently. Be it word count or character count.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              <strong> Free to use</strong>  
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={mystyle}>
            <div className="accordion-body" style={mystyle}>
                Textutils provide instant word or character count hence making it suitable for writing text with word/character limit.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              <strong>Browser compatible</strong>  
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={mystyle}>
            <div className="accordion-body" style={mystyle}>
                This word counter software works smoothly in all browsers.
            </div>
            </div>
        </div>
        </div>
           
     </div>
  )
}
