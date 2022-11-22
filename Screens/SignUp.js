import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ImageBackground, TouchableOpacity, Alert } from 'react-native';
import { useRef, useState } from 'react';
import { TextInput } from 'react-native';
import initFireBase from '../Config';
const image = { uri: "https://images.rawpixel.com/image_600/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcm0yODMtbnVubnktMjI3LWYuanBn.jpg" };

export default function SignUP(props) {
    const auth = initFireBase.auth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <View style={styles.container}>
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                <View style={styles.view2style}>
                    <Text style={{
                        fontSize: 26,
                        fontWeight: "bold",
                        color: "#5E2001",
                    }}>
                        Authentification
                    </Text>
                    <TextInput placeholder="Entrer le mail"
                        keyboardType="email-address"
                        style={styles.textinputstyle}
                        onChangeText={email => setEmail(email)}>
                    </TextInput>
                    <TextInput placeholder="Entrer le password" 
                    style={styles.textinputstyle} 
                    onChangeText={password => setPassword(password)}>
                    </TextInput>
                    <TextInput placeholder="Confirmer le password" style={styles.textinputstyle} >
                    </TextInput>
                    <Button
                        title="Sign Up"
                        color="#F99D78"
                        textcolor="#fff"
                        accessibilityLabel="Sign Up"
                        onPress={() => {
                            if (email.includes("@")) {
                                if (password.length > 5) {
                                    // Appeler service auth du firebase
                                    auth.createUserWithEmailAndPassword(email, password)
                                        //Success
                                        .then(() => { props.navigation.replace("acc"); })
                                        //Fail
                                        .catch((err) => { alert(err) });

                                }
                            }
                        }
                        }
                    />


                </View>
                <StatusBar style="auto" />
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // flex hya 9aadh bsh yekhou par rapport lel ecran
        flex: 1,

        backgroundColor: '#ddf0e4',
        //alignement des items
        alignItems: 'center',
        justifyContent: 'center',
    },
    textstyle: {
        backgroundColor: "red",
    },
    view2style: {
        height: "100%",
        width: "100%",

        alignItems: "center",
        borderRadius: 10,
        //alignemeent des items dans la vue fl west
        justifyContent: "center",
    },

    image: {
        width: "100%",
        height: "100%",
        flex: 1
    },
    textinputstyle: {
        backgroundColor: "#0001",
        height: 50,
        width: 220,
        margin: 7,
        padding: 7,
        borderRadius: 5,
    }
});
