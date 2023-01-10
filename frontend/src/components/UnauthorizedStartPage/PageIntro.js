import React from "react";
import { TimeLineRowLeft, TimeLineRowRight, ContentText1, ContentText2, ContentText3 } from "./TimelineRow";
import flowers from "assets/images/timeline_flowers.jpg";
import cheers from "assets/images/timeline_cheers.jpg";
import flowersandring from "assets/images/timeline_flowersandring.jpg";
import { InnerWrapper } from "styles/GlobalStyles";
import { Headings } from "components/Headings/Headings";


const PageIntro = (image, contentText) => {
    return (
        <InnerWrapper>
            <Headings subheading="Beginning of true love" heading="Our concept" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam suscipit felis sapien, ac suscipit velit ornare id. Aliquam vulputate vel metus quis condimentum. Vivamus bibendum orci eget nisi pulvinar iaculis. Maecenas non eros ut erat dictum dapibus. Morbi quis elit libero. Fusce id quam vel orci rhoncus auctor. Suspendisse ac metus tortor. Sed scelerisque velit sed ultricies maximus. Morbi nisi elit, scelerisque sed leo vitae, rhoncus pellentesque elit. Quisque turpis nibh, pulvinar ac nisi vitae, fermentum finibus felis. Quisque id eros eu augue imperdiet imperdiet sed sit amet libero. In in luctus purus. Curabitur tincidunt, elit a porta blandit, orci.</p>
            <div>
                <TimeLineRowLeft image={flowers} contentText={<ContentText1 />} />
                <TimeLineRowRight image={cheers} contentText={<ContentText2 />} />
                <TimeLineRowLeft image={flowersandring} contentText={<ContentText3 />} />
            </div>
        </InnerWrapper>
    )
}

export default PageIntro;

