import React from "react";
import Card from "./Card";

const CardBoard = () => {
    return (
        <div className="CardBoard">
            <body>
                <main class="main">
                    <h2 class="main__title">Cats in the News</h2>
                    <div class="cards">
                        <Card img_source="src/images/RhodeIsland.jpg" title='NEU' desc='Northeastern University' link="/" />
                        <Card img_source="http://placekitten.com/g/200/100" title='Harvard' desc='Northeastern University' link="/" />
                        <Card img_source="http://placekitten.com/g/200/100" title='MIT' desc='Northeastern University' link="/" />
                        <Card img_source="http://placekitten.com/g/200/100" title='Manchester By The Sea' desc='Northeastern University' link="/" />
                        <Card img_source="http://placekitten.com/g/200/100" title='Deer Island' desc='Northeastern University' link="/" />
                        <Card img_source="http://placekitten.com/g/200/100" title='White Mountain' desc='Northeastern University' link="/" />
                        <Card img_source="http://placekitten.com/g/200/100" title='Revere Beach' desc='Northeastern University' link="/" />
                        <Card img_source="http://placekitten.com/g/200/100" title='Walden Pond' desc='Northeastern University' link="/" />
                        <Card img_source="http://placekitten.com/g/200/100" title='Capcode' desc='Northeastern University' link="/" />
                        <Card img_source="http://placekitten.com/g/200/100" title='Rhode Island' desc='Northeastern University' link="/" />
                        <Card img_source="http://placekitten.com/g/200/100" title='Salem' desc='Northeastern University' link="/" />
                        <Card img_source="http://placekitten.com/g/200/100" title='Gateway' desc='Northeastern University' link="/" />

                    </div>
                </main>
            </body>
        </div>
    )
}

export default CardBoard;