import React from 'react';
import {View} from "react-native";
import styled from "styled-components/native/dist/styled-components.native.esm";

const PostImage = styled.Image`
  width: 100%;
  height: 250px;
  margin-bottom: 20px;
  border-radius: 10px;
`;
const PostText = styled.Text`
  font-size: 18px;
  line-height: 24px;
`;

const FullPostScreen = () => {
    return (
        <View style={{marginTop: 20}}>
            <PostImage
                source={{uri: 'https://www.buro247.ua/thumb/670x830_0/images/2017/09/800-insta-of-the-week-sad-cat-luhu.jpg'}}/>
            <PostText>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad consequuntur cumque deleniti deserunt dolor
                eligendi, eos labore laboriosam molestiae necessitatibus, neque nihil numquam quam quia quis sapiente
                similique vero voluptates.
            </PostText>
        </View>
    );
};

export default FullPostScreen;