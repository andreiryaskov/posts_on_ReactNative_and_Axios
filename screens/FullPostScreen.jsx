import React from 'react';
import {ActivityIndicator, Alert, Text, View} from "react-native";
import styled from "styled-components/native/dist/styled-components.native.esm";
import axios from "axios";
import Loading from "../components/Loading";

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

const FullPostScreen = ({route, navigation}) => {

    const [data, setData] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(false)
    const {id, title} = route.params

    React.useEffect(() => {
        navigation.setOptions({
            title
        })
        setIsLoading(true)
        axios.get(`https://62ea83f3ad295463258e8129.mockapi.io/article/${id}`)
            .then(({data}) => {
                setData(data)
            })
            .catch(err => {
                console.log(err)
                Alert.alert('Error', 'Failed get posts')
            })
            .finally(() => {
                setIsLoading(false)
            })

    }, [])

    if (isLoading) {
        return (
            <Loading/>
        )
    }

    return (
        <View style={{marginTop: 20}}>
            <PostImage
                source={{uri: data.imageUrl}}/>

            <PostText>
                {data.text}
            </PostText>
        </View>
    );
};

export default FullPostScreen;