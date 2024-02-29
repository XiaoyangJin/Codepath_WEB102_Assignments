import React from "react";
import Card from "./Card";

const CardBoard = () => {
    return (
        <div className="CardBoard">
            <body>
                <main class="main">
                    <h2 class="main__title">Great Places in or near Boston</h2>
                    <div class="cards">
                        <Card img_source="src/images/MFA.jpg" title='MFA' desc='Northeastern University' link="/" />
                        <Card img_source="src/images/NiagraFall.JPG" title='Niagra Fall' desc='Northeastern University' link="/" />
                        <Card img_source="src/images/Acadia.JPG" title='Acadia' desc='Northeastern University' link="/" />
                        <Card img_source="src/images/Manchester.JPG" title='Manchester By The Sea' desc='Northeastern University' link="/" />
                        <Card img_source="src/images/DeerIsland.jpg" title='Deer Island' desc='Northeastern University' link="/" />
                        <Card img_source="src/images/WhiteMount.jpg" title='White Mountain' desc='Northeastern University' link="/" />
                        <Card img_source="src/images/RevereBeach.jpg" title='Revere Beach' desc='Northeastern University' link="/" />
                        <Card img_source="src/images/WaldenPond.jpg" title='Walden Pond' desc='Northeastern University' link="/" />
                        <Card img_source="src/images/Capcode.jpg" title='Capcode' desc='Northeastern University' link="/" />
                        <Card img_source="src/images/RhodeIsland.jpg" title='Rhode Island' desc='Northeastern University' link="/" />
                        <Card img_source="src/images/Salem.jpg" title='Salem' desc='Northeastern University' link="/" />
                        <Card img_source="src/images/Gateway.jpg" title='Gateway' desc='Northeastern University' link="/" />

                    </div>
                </main>
            </body>
        </div>
    )
}

export default CardBoard;