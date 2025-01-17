import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

interface NotificationItemProps {
  icon: string;
  content: string;
}

const NotificationItem: React.FC<NotificationItemProps> = ({ icon, content }) => {
  return (
    <View style={styles.itemContainer}>
      <MaterialIcons name={icon as any} size={24} color="black" />
      <Text style={styles.content}>{content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  content: {
    marginLeft: 10,
    fontSize: 16,
  },
});

export default NotificationItem; 