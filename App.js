import axios from 'axios';
import React from "react";
import {StatusBar} from 'expo-status-bar';
import {
    ActivityIndicator,
    Alert,
    FlatList,
    RefreshControl,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import Post from './components/Post';

export default function App() {

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
        <View style={styles.container}>
            <FlatList data={items}
                      refreshControl={<RefreshControl refreshing={isLoading} onRefresh={fetchPosts}/>}
                      renderItem={({item}) => (
                          <TouchableOpacity
                              // onPress={() => alert('Touch')}
                          >
                              <Post createdAt={item.createdAt}
                                    title={item.title}
                                    imageUrl={item.imageUrl}
                                    text={item.text}
                              />
                          </TouchableOpacity>
                      )}

            />
            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 10
    },
});
