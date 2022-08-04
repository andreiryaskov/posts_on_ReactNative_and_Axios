import styled from "styled-components/native/dist/styled-components.native.esm";

const PostView = styled.View`
  flex-direction: row;
  align-items: center;
`;

const PostWrapper = styled.View`
  flex-direction: column;
  overflow: hidden;
  margin-top: 20px;
  border-color: black;
  border-width: 1px;
  border-radius: 10px;
  padding: 5px;
`;

const PostImage = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 12px;
  margin-right: 12px;
`;

const PostTitle = styled.Text`
  font-size: 17px;
  font-weight: 500;
`;

const PostDate = styled.Text`
  font-size: 12px;
  font-weight: 700;
  margin-top: 6px;
  color: rgba(0, 0, 0, 0.4)
`;

const PostText = styled.Text`
  font-size: 14px;
`;

const PostDetails = styled.View`
  flex: 1;
`;

const Post = ({title, imageUrl, createdAt, text}) => {
    return (
        <PostWrapper>
            <PostView>
                <PostImage source={{uri: imageUrl}}/>
                <PostDetails>
                    <PostTitle>{title}</PostTitle>
                    <PostDate>{createdAt}</PostDate>
                </PostDetails>
            </PostView>
            <PostText>{text}</PostText>
        </PostWrapper>
    )
};

export default Post;

