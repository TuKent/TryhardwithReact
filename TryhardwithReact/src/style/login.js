import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#e52326",
        // alignItems: "center",
        // justifyContent: "center",

    },
    image: {
        resizeMode: "contain",
        marginTop: 50,
        marginBottom: 50,
        marginHorizontal: 20,
        width: undefined
    },
    headerWrapper: {
        borderBottomColor: "#f5f5f5",
        borderBottomWidth: 2,
        marginBottom: 30,
    },
    header: {
        fontSize: 18,
        alignSelf: 'flex-start',
        color: '#f5f5f5',
    },
    button: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    },
    textFooter: {
        color: "#f5f5f5",
        textAlignVertical: "center",
        textAlign: "center",
        marginVertical: 30,
        paddingHorizontal: 30
    },
    textFooterChild: {
        color: "#f5f5f5",
        textAlignVertical: "center",
        textAlign: "center",
        paddingHorizontal: 30
    }

});
export default styles;