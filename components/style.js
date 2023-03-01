import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    mainCard: {
        flex: 1,
        flexDirection: 'row',
        margin: 25,
        borderRadius: 8,
        paddingTop: 5,
        elevation: 5,
        shadowColor: '#52006A',
    },

    primaryText: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center'
    },

    addNewButton: {
        layout: {
            padding: 5,
            borderRadius: 10,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            margin: 5
        },

        container: {
            flexDirection: 'row',
            alignItems: 'center',
            flexWrap: 'wrap'
        },

        text: {
            fontSize: 16,
            opacity: 0.8
        },

        addMenu: {
            width: 120,
            height: 100,
            borderRadius: 8,
            padding: 5,
            marginStart: 10,
            flexDirection: 'column',
            backgroundColor: '#fff5ee'
        },

        input: {
            paddingVertical: 1,
            paddingHorizontal: 4,
            backgroundColor: '#FFF',
            borderRadius: 6,
            borderColor: '#C0C0C0',
            borderWidth: 1,
        },

        addButton: {
            height: 20,
            borderRadius: 5,
            backgroundColor: 'green',
            alignItems: 'center',
            alignSelf: 'center'

        },

        cancelButton: {
            height: 20,
            borderRadius: 5,
            alignItems: 'center',
            backgroundColor: 'red'
        }
    },

    sideBar: {
        container: {
            flex: 1.5,
            borderRadius: 2,
        },

        titleLayout: {
            padding: 5,
            borderRadius: 10,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            margin: 5,
            color: '#7b6385'
        },

        allTaskItem: {
            padding: 5,
            borderRadius: 5,
            alignItems: 'center',
            margin: 10,
            backgroundColor: '#55BCF6',
        },

        titleContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            flexWrap: 'wrap'
        },

        square: {
            width: 18,
            height: 18,
            opacity: 0.4,
            borderRadius: 5,
            marginRight: 10,
        },

        titleText: {
            maxWidth: '80%',
            fontSize: 18
        },
    },

    tasks: {
        container: {
            flex: 2,
            paddingTop: 10,
            borderRadiur: 2,
        },

        title: {
            color: '#fff',
            fontSize: 16,
            textAlign: 'center'
        },

        square: {
            width: 12,
            height: 12,
            backgroundColor: 'blue',
            opacity: 1
        },

        taskLayout: {
            padding: 5,
            borderRadius: 10,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            margin: 5,
        },

        taskContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            flexWrap: 'wrap'
        },

        taskText: {
            maxWidth: '80%',
            padding: 3,
            fontSize: 16
        },

        circle: {
            width: 18,
            height: 18,
            margin: 5,
            borderColor: '#dbefff',
            borderWidth: 2,
            borderRadius: 5,
        },
    }
})
