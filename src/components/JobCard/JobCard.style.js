import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        padding: 10,
        borderWidth: 1,
        borderColor: 'gray',
        backgroundColor: 'white',
        borderRadius: 10,
        margin: 10,

    },
    name: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'black'
    },
    company: {
        color: 'black',
        fontSize: 20
    },
    locations: {
        backgroundColor: "#EF5350",
        color: "white",
        fontWeight: "bold",
        alignSelf: 'flex-start',
        borderRadius: 10,
        padding: 5
    },
    levels: {
        color: "#EF5350",
        fontWeight: "bold",
        textAlign: "right",
        fontSize: 18,
        marginRight: 10,
        marginBottom: 10
    },
    button: {
        marginVertical: 30
    },

}
)