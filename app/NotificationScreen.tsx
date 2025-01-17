import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import NotificationItem from '@/app/components/notifications/NotificationItem';

const notifications = [
  { id: '1', icon: 'notifications', content: 'New message from John' },
  { id: '2', icon: 'mail', content: 'Your order has been shipped' },
  { id: '3', icon: 'calendar', content: 'Meeting at 3 PM' },
];

export default function NotificationScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <NotificationItem icon={item.icon} content={item.content} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
}); 