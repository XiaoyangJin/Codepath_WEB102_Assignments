import React from "react";
import '../css/DirecBtn.css';

const DirectBtn = () => {
    return (
        <div className="direction__buttons">
            <button class="icon-button">
                <i class="gg-arrow-left"></i>
            </button>
            <button class="icon-button">
                <i class="gg-arrow-right"></i>
            </button>
        </div>
    )
}
export default DirectBtn;