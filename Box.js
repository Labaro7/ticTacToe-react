import { useState } from 'react'

function Box(props) {
    const [value, setValue] = useState(props.value);

    function handleClick(){
        if(value === "item"){
            setValue("cross");
        }
        else if(value === "cross"){
            setValue("circle");
        }
        else{
            setValue("item");
        }
        console.log("Hey");
    }

    if(value === "cross"){
        return (
            <div className='box'>
                <div className='cross' onClick={handleClick}></div>
            </div> 
        );
    }

    else if(value === "circle" ){
        return (
            <div className='box'>
                <div className='circle' onClick={handleClick}></div>
            </div>
        );
    }
    
    else{
        return (
            <div className='box'>
                <div className='item' onClick={handleClick}></div>
            </div>
        );   
    }
}

export default Box;