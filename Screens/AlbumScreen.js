import * as React from "react";
import { Text } from "react-native-paper";
import {ScrollView, View} from "react-native";

{/*
https://reactnative.dev/docs/flexbox
https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction
https://callstack.github.io/react-native-paper/index.html
https://www.youtube.com/watch?v=Hf4MJH0jDb4
https://dev.to/sankhadeeproy007/using-react-hook-form-with-react-native-part-i-set-up-validation-31ca
https://dev.to/sankhadeeproy007/using-react-hook-form-with-react-native-part-i-set-up-validation-31ca
https://www.youtube.com/watch?v=O433Arp-l0E
https://www.reactnativetutorials.com/search/label/Logics
https://docs.nativebase.io/docs/GetStarted.html
https://reactnativeelements.com/docs/
https://necolas.github.io/react-native-web/docs/?path=/docs/overview-getting-started--page
https://reactnavigation.org/docs/getting-started

*/}
const AlbumRoute = () => {
    return(
        <React.Fragment>

            <View style={{ flex: 1, flexDirection: "row", backgroundColor: "green" }} >
                <View style={{ backgroundColor: "yellow", flex: 0.2 }} />
                <View style={{ backgroundColor: "blue", flex: 0.3 }} />
                <View style={{ backgroundColor: "red", flex: 0.5 }} />
            </View>
        </React.Fragment>
    )
}

export default AlbumRoute;
