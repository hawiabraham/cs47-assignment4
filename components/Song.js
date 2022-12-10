import { StyleSheet, Pressable, View, Image, Text} from "react-native";
import { Themes } from "../assets/Themes";
import millisToMinutesAndSeconds from '../utils/millisToMinutesAndSeconds';
import { useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { AntDesign } from '@expo/vector-icons'; 
import { colors } from "../assets/Themes/colors";



export default function Song({title, duration, album, artist, index, id, preview_url, external_urls}) {
    const navigation = useNavigation();
    return (
        <Pressable style={styles.track}
            onPress={() => navigation.navigate('SongDetails', {external_urls: external_urls})}>
            <View style={styles.track}>
                <View style={styles.trackContainer}>
                    <Pressable style={styles.playButton}
                        onPress={() => navigation.navigate('SongPreview', {preview_url:preview_url})}>
                        <AntDesign name="caretright" size={12} color="black" />
                    </Pressable>
                </View>

                <Image source={album.images[1]} style={styles.albumContainer}>
                </Image>

                <View style={styles.infoContainer}>
                    <Text style={styles.titleText} numberOfLines={1}>{title}</Text>
                    <Text style={styles.artistText} numberOfLines={1}>{artist[0].name}</Text>
                </View>

                <View style={styles.titleContainer}>
                    <Text style={styles.titleText} numberOfLines={1}>{album.name}</Text>
                </View>

                <View style={styles.minuteContainer}>
                    <Text style={styles.albumText} numberOfLines={1}>{millisToMinutesAndSeconds(duration)}</Text>
                </View>

            </View>
        </Pressable>
    )

};

const styles = StyleSheet.create({
    track: {
      backgroundColor: Themes.colors.background,
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'row',
      padding: 10,
      width: '100%'
    }, 
    trackContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 20,
        height: 20,
        backgroundColor: colors.spotify,
        borderRadius: 10,
        marginRight: 10
    },
    trackText: {
        color: Themes.colors.gray
    },
    titleContainer: {
        width: '30%',
    },
    titleText: {
        color: Themes.colors.white
    },
    artistText: {
        color: Themes.colors.gray
    },
    albumContainer: {
        width: 50,
        height: 50,
        marginRight: 8
    },
    minuteContainer: {
        width: '20%'
    },
    infoContainer: {
        width: '30%'
    },
    albumText: {
        color: Themes.colors.white,
    }
  });
  