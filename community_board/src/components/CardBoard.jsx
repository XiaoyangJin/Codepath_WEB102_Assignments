import React from "react";
import Card from "./Card";

const CardBoard = () => {
    return (
        <div className="CardBoard">
            <body>
                <main class="main">
                    <h2 class="main__title">Great Places in or near Boston</h2>
                    <div class="cards">
                        <Card img_source="src/images/MFA.jpg" title='MFA' desc='The Museum of Fine Arts in Boston is one of the largest museums in the United States, renowned for its comprehensive collection that spans thousands of years, featuring everything from ancient Egyptian artifacts to contemporary art.' link="https://www.mfa.org/" alt_content="a glass contains of a black flower" />
                        <Card img_source="src/images/DeerIsland.jpg" title='Deer Island' desc='Deer Island, part of the Boston Harbor Islands, is notable for its significant wastewater treatment facility, public recreation areas, and panoramic views of the Boston skyline, blending environmental management with public enjoyment.' link="https://www.bostonharborislands.org/deer-island/" alt_content="sunset over the sea" />
                        <Card img_source="src/images/WhiteMount.jpg" title='White Mountain' desc='The White Mountains, located in New Hampshire, are a popular outdoor recreation destination, famous for their rugged peaks, scenic vistas, and extensive network of hiking trails, including parts of the Appalachian Trail.' link="https://www.visitwhitemountains.com/" alt_content="overview of the mountain with lots of red leaves" />
                        <Card img_source="src/images/RevereBeach.jpg" title='Revere Beach' desc='Revere Beach, located just north of Boston, Massachusetts, is the oldest public beach in the United States, known for its wide sandy expanse, scenic views, and cultural events like the annual International Sand Sculpting Festival.' link="https://reverebeach.com/" alt_content="a representative stand clock" />
                        <Card img_source="src/images/WaldenPond.jpg" title='Walden Pond' desc='Walden Pond, situated in Concord, Massachusetts, is a historic site famous for its association with the writer Henry David Thoreau, who lived there from 1845 to 1847, and its serene natural setting that continues to attract visitors seeking reflection and outdoor activities.' link="https://www.nps.gov/places/walden-pond-in-the-walden-pond-state-reservation.htm" alt_content="" />
                        <Card img_source="src/images/Capcode.jpg" title='Cape Cod' desc='Cape Cod, often referred to colloquially as "Capcode," is a hook-shaped peninsula in Massachusetts, USA, known for its quaint villages, seafood shacks, lighthouses, pristine beaches, and maritime character, making it a beloved summer destination.' link="https://www.capecodchamber.org/" alt_content="a very big overview of the sea and sky with some pinkish clouds" />
                        <Card img_source="src/images/RhodeIsland.jpg" title='Rhode Island' desc='Rhode Island, the smallest state in the United States, is known for its sandy shores, colonial towns, and as a maritime hub, with a rich history, vibrant cultural scene, and the prestigious Ivy League institution, Brown University, located in its capital, Providence.' link="https://www.visitrhodeisland.com/" alt_content="left hald is big stones and some cabins, right side is the sea" />
                        <Card img_source="src/images/Salem.jpg" title='Salem' desc='Salem, located in Massachusetts, is historically renowned for its 1692 witch trials and today attracts visitors with its museums dedicated to witchcraft, colonial architecture, and a vibrant waterfront area, blending historical intrigue with modern tourism.' link="https://www.salem.org/" alt_content="some people dressed like Frozen characters" />
                        <Card img_source="src/images/Gateway.jpg" title='Gateway' desc='Getaway offers secluded tiny cabins nestled in nature, providing a tranquil escape from daily life with minimalist designs that encourage guests to unwind and reconnect with the outdoors.' link="https://getaway.house/?adults=1&kids=0&beds=1&dog=false&location=2&checkIn=2024-03-14" alt_content="inside look of a cabin with a big window facing the forest and a big white bed with quilt on it" />
                        <Card img_source="src/images/Manchester.JPG" title='Manchester By The Sea' desc='Manchester-by-the-Sea is a picturesque coastal town in Massachusetts, known for its charming New England scenery, historic homes, beautiful beaches, and the backdrop for the acclaimed film of the same name.' link="https://www.manchester.ma.us/" alt_content="a overlook of the sea in a sunny day" />
                        <Card img_source="src/images/NiagraFall.JPG" title='Niagara Fall' desc='Niagara Falls is a majestic natural wonder straddling the border between the United States and Canada, known for its powerful waterfalls and scenic beauty, attracting millions of visitors each year.' link="https://www.niagaraparks.com/visit-niagara-parks/plan-your-visit/deals-packages/?gad_source=1&gclid=Cj0KCQiA84CvBhCaARIsAMkAvkJ0IY_P3u0fej87fVyRyQqpgsu6eHzEpNtbGK-JNlBiwyjD9gxXYWUaAt4GEALw_wcB" alt_content="a picture of the biggest fall with some frog on it" />
                        <Card img_source="src/images/Acadia.JPG" title='Acadia' desc='Acadia National Park, located on the coast of Maine, is a stunning natural reserve known for its rugged Atlantic shoreline, forested landscapes, and the tallest mountain on the U.S. Atlantic coast, Cadillac Mountain.' link="https://www.nps.gov/acad/index.htm" alt_content="a red wood house covered with some snow" />


                    </div>
                </main>
            </body>
        </div>
    )
}

export default CardBoard;