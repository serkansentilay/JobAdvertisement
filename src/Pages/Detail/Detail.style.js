import { StyleSheet } from 'react-native'
export default StyleSheet.create({
    container: {
        paddingHorizontal: 5
    },
    name: {
        fontWeight: "bold",
        fontSize: 25,
        color: 'slategray'
    },
    subContainer: {
        flexDirection: 'row',
        paddingVertical: 5
    },
    subTitle: {
        color: "#EF5350",
        fontWeight: "bold",
    },
    subDesc: {
        color: "black",
        fontWeight: "bold",
    },
    detailTitle: {
        color: "slategray",
        fontWeight: "bold",
        fontSize: 22,
        paddingVertical: 5,
        textAlign: "center"
    },
    detailDesc: {
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: "gray",
        paddingHorizontal: 5,

    },
    footer: {
        flexDirection: "row",
        marginTop: 10,
        marginBottom: 50

    }

})