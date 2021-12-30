import React from 'react';

//Styles
import { Wrapper, Content, Text} from './HeroImage.styles';

//this is fine, but you can also use EC6 script to not call "props" object each time
// const HeroImage = (props) => (
//     <Wrapper image={props.image}>
//         <Content>
//             <Text>
//                 <h1>{props.title}</h1>
//                 <p>{props.text}</p>
//             </Text>
//         </Content>
//     </Wrapper>
// );

//EC6 version is easier to read...kinda. And I dont know what happens if a property does not exist
const HeroImage = ({image, title, text}) => (
    <Wrapper image={image}>
        <Content>
            <Text>
                <h1>{title}</h1>
                <p>{text}</p>
            </Text>
        </Content>
    </Wrapper>
);

export default HeroImage;