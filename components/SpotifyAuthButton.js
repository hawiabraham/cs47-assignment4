import { StyleSheet, View, Image, Text, TouchableOpacity} from "react-native";
import images from "../assets/Images/images";
import { Themes } from "../assets/Themes";
import { colors } from "../assets/Themes/colors";

export default function SpotifyAuthButton({auth}) {
console.log(auth)

return (
    <View style={styles.container}>
        <TouchableOpacity style = {styles.button}
            onPress={auth}
            color="green"
        >
            <View style={styles.imageContainer}>
                <Image source={images.spotify} style={styles.logo}></Image> 
            </View>
            <Text style = {styles.text}> 
                CONNECT WITH SPOTIFY
            </Text>
        </TouchableOpacity>
    </View>
);
};

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        backgroundColor: colors.background,
        width: '100%',
        height: '100%',
        justifyContent: "center",
        alignItems: "center"
    },
    button: {
      flexDirection: "row",
      justifyContent: 'space-evenly',
      alignItems: "center",
      backgroundColor: colors.spotify,
      padding: 10,
      borderRadius: 99999,
      width: '60%'
    },
    logo: {
        height: 20,
        width: 20,
    },
    text: {
        color: "white",
        fontWeight: "bold" 
    }
});