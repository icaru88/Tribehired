import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    mainContainer: {
        marginHorizontal: 15,
        paddingTop: 10,
    },
    cardContainer: {
        padding: 10,
    },
    loadingScreen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    Separator: {
        height: 1,
        backgroundColor: 'gray'
    },
    detailContainer: {
        flex:1,
        marginHorizontal: 15
    },
    postDetailsContainer: {
        paddingVertical: 15,
        borderBottomColor: 'gray',
        borderBottomWidth: 2
    },
    postDetailsTitle: {
        fontWeight: '800',
        fontSize: 18
    },
    postDetailsBody: {
        marginTop: 10,
    },
    searchBox: {
        marginTop: 10,
        padding: 5,
    },
    commentContainer: {
        paddingTop: 10
    },
    commentNameText: {
        fontWeight: '500',
        fontSize: 14
    },
    commentEmailText: {
        fontStyle: 'italic',
        fontSize: 12,
        alignSelf: 'flex-end'
    },
    commentBodyText: {
        marginVertical: 10,
    }
})