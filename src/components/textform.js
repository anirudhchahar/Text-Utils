import React, {useState, useEffect} from 'react'
import axios from 'axios';
const cors = require('cors');

export default function Textform(props) {

      const [text, setText] = useState('');
      const [wordCount, setWordCount] = useState(0);
      const [charCount, setCharCount] = useState(0);
    const handleUpclick =()=>{
       // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converrted to Upper Case", "success");
    }
    const handleLoclick =()=>{
        // console.log("Lowercase was clicked" + text);
         let newText = text.toLowerCase();
         setText(newText)
         props.showAlert("Converted to Lower Case", "success");
     }
     const handleCtclick =()=>{
        // console.log("Clear Text was clicked" + text);
         let newText = '';
         setText(newText)
         props.showAlert("Text has been cleared", "success");
     }
     const handleCopy = ()=>{
       // var text = document.getElementById("myBox");
        //text.select();
        navigator.clipboard.writeText(text);
        //document.getSelection().removeAllRanges();
        props.showAlert("Copied to clipboard", "success");

     }

     const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra soaces have been removed", "success")
     }

    const handleonChange=(event)=>{
       // console.log("on change");
        setText(event.target.value);
    };

    useEffect(() => {
      const fetchData = async () => {
        try {
          console.log("calling api")
          const response = await axios.get(`http://localhost:3000/crm-api/text?text=${text}`);
          console.log("api response ", response.data)
          const  words = response.data.word;
          const characters = response.data.char;
          setWordCount(words);
          setCharCount(characters);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      if (text.trim() !== '') {
        fetchData();
      }
    }, [text]);
   
    
      
  return (
    <>
    <div className ="container" style = {{color : props.mode === 'dark' ? 'white' : '#042743'}}>
           <h1 className='mb-4'>{props.heading}</h1>
           <div className="mb-3">
           <textarea className="form-control" value ={text} onChange={handleonChange} style = {{backgroundColor : props.mode === 'dark' ? '#13466e' : 'white', color : props.mode === 'dark' ? 'white' : '#042743'}}id="myBox" rows="8"></textarea>
           </div>
           <button disabled ={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpclick}>Convert to Uppercase</button>
           <button disabled ={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLoclick}>Convert to Lowercase</button>
           <button disabled ={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCtclick}>Clear Text</button>
           <button disabled ={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy Text</button> 
           <button disabled ={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style = {{color : props.mode === 'dark' ? 'white' : '#042743'}}>
        <h2>Your text Summary</h2>
       {/* <p>{text.split(/\s+/).filter((element)=>{return element.length}).length} words and {text.length} characters</p>*/}

        {/*<p>{text.split(" ").length} words and {text.length} characters</p>*/}

        <p>{wordCount} words and {charCount} characters</p>

        <p>{0.008*text.split(/\s+/).filter((element)=>{return element.length}).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview!"}</p>
    </div>
    </>
  )
}


