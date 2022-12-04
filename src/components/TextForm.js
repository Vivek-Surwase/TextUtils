import React ,{useState}from 'react'


export default function TextForm(props) {
    const[text,setText] = useState("Enter the sample text here");
    
    const handleUpClick = ()=>
    {
        //console.log("Uppercase has been pressed!");
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoClick = ()=>
    {
        //console.log("Lowercase has been pressed!");
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleClearText = ()=>
    {
        //console.log("Clear text has been pressed!");
        let newText = "";
        setText(newText);
    }
    const handleCopyText = ()=>
    {
        //console.log("Cpy text  has been pressed!");
        navigator.clipboard.writeText(text);
        alert("The text is copied to clipboard");
    }

    const handleExtraSpaces = ()=>
    {
        //console.log("Remove extra spaces has been pressed!")
        let newText = text.split(/[ ]+/);
        newText = newText.join(" ");
        setText(newText);
    }

    const handleOnChange = (event)=>
    {
        //console.log("On change");
        setText(event.target.value);
    }
    return (
        <>
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea value = {text} onChange = {handleOnChange} className="form-control" id="myBox" rows="8"></textarea>
            </div>
            <button className = "btn btn-primary mx-2" onClick = {handleUpClick}>Convert to uppercase</button>
            <button className = "btn btn-primary mx-2" onClick = {handleLoClick}>Convert to lowercase</button>
            <button className = "btn btn-primary mx-2" onClick = {handleExtraSpaces}>Remove extra spaces</button>
            <button className = "btn btn-primary mx-2" onClick = {handleCopyText}>Copy text</button>
            <button className = "btn btn-primary mx-2" onClick = {handleClearText}>Clear text</button>
        
        </div>
        <div className='container my-3'>
            <h3>The Text Summary</h3>
            <p>Words :<b>{text.split(" ").length}</b> and Characters :<b>{text.length}</b></p>
            <p>Time required to read the text : <b>{0.008*text.split(" ").length} min</b></p>
            <h3>Text Preview</h3>
            <p><i>{text}</i></p>
        </div>
        </>
    )
}
