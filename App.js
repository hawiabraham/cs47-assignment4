import { StyleSheet, View, Image, SafeAreaView, Text, FlatList } from "react-native";
import { useSpotifyAuth } from "./utils";
import { Themes } from "./assets/Themes";
import SpotifyAuthButton from "./components/SpotifyAuthButton"
import Song from "./components/Song";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { WebView } from "react-native-webview"
import { ScreenStack } from "react-native-screens";
import { colors } from "./assets/Themes/colors";
import images from "./assets/Images/images";

const HomeScreen = () => {
   // Pass in true to useSpotifyAuth to use the album ID (in env.js) instead of top tracks
   const { token, tracks, getSpotifyAuth } = useSpotifyAuth();

   let contentDisplayed = null;
   
   const renderSongItem = ({ item, index }) => (
     <Song
       title = {item.name}
       duration = {item.duration_ms}
       album = {item.album}
       artist = {item.artists}
       index = {index + 1}
       preview_url = {item.preview_url}
       external_urls = {item.external_urls.spotify}

     />
   );
   
   if (token) {
    contentDisplayed = ( <>
    <View style={styles.headerContainer}>
      <View style={styles.imageContainer}>
        <Image source={images.spotify} style={styles.logo}></Image> 
      </View>
      <Text style={styles.header}>My Top Tracks</Text>
    </View>
       <FlatList
         data = {tracks}
         renderItem = {item => renderSongItem(item)}
         keyExtractor={(item) => item.id}
       />
    </>
     )
   } else {
     contentDisplayed = <SpotifyAuthButton auth={getSpotifyAuth}/>
   }
     return (
       <SafeAreaView style={styles.container}>
         {contentDisplayed}
       </SafeAreaView>
     );
}

const SongDetails = ({route}) => {
  const { external_urls } = route.params
  return <WebView source={{ uri: external_urls}}/>
}

const SongPreview = ({route}) => {
  const { preview_url } = route.params
  return <WebView source={{ uri: preview_url }}/>
}


export default function App() {
  const Stack = createStackNavigator();

 return (
   <NavigationContainer>
     <Stack.Navigator>
       <Stack.Screen options={{headerShown: false}} name="Home" component={HomeScreen}/>
       <Stack.Screen name="SongDetails" component={SongDetails}/>
       <Stack.Screen name="SongPreview" component={SongPreview}/>
     </Stack.Navigator>
   </NavigationContainer>
 )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Themes.colors.background,
    flex: 1,
  },
  headerContainer: {
    flexDirection: "row", 
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    color: Themes.colors.white,
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    fontSize: 20
  },
  logo: {
    height: 20,
    width: 20,
    margin: 10
  }
});
