import React from 'react';

export const Vimeo = (props) => {
    return (<div>
        <div style={{padding:"56.25% 0 0 0", position: "center"}}>
            <iframe style={{position:"center",top:0,left:0,width:"100%",height:"100%"}} src={props.video} width="50%" height="50%" frameborder="0" allow="autoplay; fullscreen"></iframe> 
        </div>
    </div>);
}