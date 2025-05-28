import React from "react"
import { success,error } from "./variants.js"
import "./Alert.css"

export function Alert({type = "success", show, close}){
    var variant;
    switch(type){
        case "success": 
            variant = success();
            break;
        case "error": 
            variant = error();
            break;
    }

    const handleClose = () => {
        close(false)
    }
    if(show){
        setTimeout(handleClose,8000) //close the alert automatically after 8 secondes
        return(
            <div className="alert-container" style={{background: variant.mainColor, border:"0.1rem solid"+variant.secondaryColor}}>
                <div className="symbol-container" style={{background: variant.secondaryColor}}>
                    <span class="material-symbols-outlined">
                        {variant.symbol}
                    </span>
                </div>
                <div className="description-container">
                    <span className="description-title">
                        {variant.title}
                    </span>
                    <span className="description-text">
                        {variant.text}
                    </span>
                </div>
                <a className="symbol-close-link" onClick={() => handleClose()}>
                    <span class="material-symbols-outlined">
                        close
                    </span>
                </a>
            </div>
        )
    }
}