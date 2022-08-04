import React from 'react';
import {ActivityIndicator, Alert, FlatList, RefreshControl, Text, TouchableOpacity, View} from "react-native";
import Post from "../components/Post";
import axios from "axios";

const HomeScreen = ({navigation}) => {

    const [items, setItems] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(false)

    const fetchPosts = () => {
        setIsLoading(true)
        axios.get('https://62ea83f3ad295463258e8129.mockapi.io/article')
            .then(({data}) => {
                setItems(data)
            })
            .catch(err => {
                console.log(err)
                Alert.alert('Error', 'Failed get posts')
            })
            .finally(() => {
                setIsLoading(false)
            })
    }


    React.useEffect(fetchPosts, [])

    if (isLoading) {
        return (
            <View style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
            }}>
                <ActivityIndicator size={'large'}/>
                <Text>Loading...</Text>
            </View>
        )
    }

    return (
        <FlatList data={items}
                  refreshControl={
                      <RefreshControl
                          refreshing={isLoading}
                          onRefresh={fetchPosts}/>
                  }
                  renderItem={({item}) => (
                      <TouchableOpacity
                          onPress={() => navigation.navigate("FullPosts", {id: item.id, title: item.title})}
                      >
                          <Post createdAt={item.createdAt}
                                title={item.title}
                                imageUrl={item.imageUrl}
                                text={item.text}
                          />
                      </TouchableOpacity>
                  )}
        />
    );
};

export default HomeScreen;