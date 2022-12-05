import React ,{useState}from 'react'


export default function TextForm(props) {
    const[text,setText] = useState("");
    let wordCount = text.split(' ').length;
    
    const handleUpClick = ()=>
    {
        //console.log("Uppercase has been pressed!");
        let newText = text.toUpperCase();
        setText(newText);
        props.handleAlert("Converted to uppercase.","Success");
    }
    const handleLoClick = ()=>
    {
        //console.log("Lowercase has been pressed!");
        let newText = text.toLowerCase();
        setText(newText);
        props.handleAlert("Converted to lowercase.","Success");
    }
    const handleClearText = ()=>
    {
        //console.log("Clear text has been pressed!");
        let newText = "";
        setText(newText);
        props.handleAlert("Text has been cleared.","Success");
    }
    const handleCopyText = ()=>
    {
        //console.log("Cpy text  has been pressed!");
        navigator.clipboard.writeText(text);
        //alert("The text is copied to clipboard");
        props.handleAlert("Text is copied to clipboard.","Success");
    }

    const handleExtraSpaces = ()=>
    {
        //console.log("Remove extra spaces has been pressed!")
        let newText = text.split(/[ ]+/);
        newText = newText.join(" ");
        setText(newText);
        props.handleAlert("Extra spaces has been removed.","Success");
    }

    const handleTitleClick = ()=>
    {
        //console.log("Convert to title case has been pressed!")
        let newText = text.split(' ');
        for(let i = 0 ; i < newText.length ; i++)
        {
            newText[i] = newText[i].charAt(0).toUpperCase() + newText[i].substring(1).toLowerCase();
        }
        newText = newText.join(' ');
        setText(newText);
        props.handleAlert("Converted to titlecase.","Success");
    }

    const handleOnChange = (event)=>
    {
        //console.log("On change");
        setText(event.target.value);
    }
    return (
        <>
        <div className={`container my-3 text-${props.mode === 'dark'?'white':'black'}`}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea style = {{color : `${props.mode === 'dark'?'white':'black'}` ,backgroundColor :`${props.mode === 'dark'?'#3a2f2f75':'white'}`}} value = {text} onChange = {handleOnChange} className="form-control" id="myBox" rows="8"></textarea>
            </div>
            <button className = "btn btn-primary mx-2 my-2" onClick = {handleUpClick}>Convert to uppercase</button>
            <button className = "btn btn-primary mx-2 my-2" onClick = {handleLoClick}>Convert to lowercase</button>
            <button className = "btn btn-primary mx-2 my-2" onClick = {handleTitleClick}>Convert to titlecase</button>
            <button className = "btn btn-primary mx-2 my-2" onClick = {handleExtraSpaces}>Remove extra spaces</button>
            <button className = "btn btn-primary mx-2 my-2" onClick = {handleCopyText}>Copy text</button>
            <button className = "btn btn-primary mx-2 my-2" onClick = {handleClearText}>Clear text</button>
        
        </div>
        <div className={`container my-3 text-${props.mode === 'dark'?'white':'black'}`}>
            <h3>The Text Summary</h3>
            <p>Words :<b>{(text.length === 0 && wordCount === 1)?0:wordCount}</b> and Characters :<b>{text.split(' ').join('').length}</b></p>
            <p>Time required to read the text : <b>{(text.length === 0 && wordCount === 1)?0:0.008*text.length} min</b></p>
            <h3>Text Preview</h3>
            <p><i>{text === ""?"Enter the text to preview it here":text}</i></p>
        </div>
        </>
    )
}
