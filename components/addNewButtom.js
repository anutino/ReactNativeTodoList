
import { View, Text } from 'react-native';
import styles from './style'
export const AddNewButtom = ({ text }) => {
    return (<View style={styles.addNewButton.layout}>
        <View style={styles.addNewButton.container}>
            <Text style={styles.addNewButton.text} >{text}</Text>
        </View>
    </View>
    )
}