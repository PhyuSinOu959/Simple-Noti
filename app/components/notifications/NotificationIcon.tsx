import React from 'react';
import { Pressable, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNotifications } from './NotificationContext';

interface NotificationIconProps {
  onPress: () => void;
}

export const NotificationIcon: React.FC<NotificationIconProps> = ({ onPress }) => {
  const { unreadCount } = useNotifications();

  return (
    <Pressable onPress={onPress} style={{ padding: 8 }}>
      <Ionicons name="notifications-outline" size={24} color="black" />
      {unreadCount > 0 && (
        <View style={{
          position: 'absolute',
          top: 4,
          right: 4,
          backgroundColor: 'red',
          borderRadius: 8,
          minWidth: 16,
          height: 16,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <Text style={{ color: 'white', fontSize: 10 }}>
            {unreadCount > 99 ? '99+' : unreadCount}
          </Text>
        </View>
      )}
    </Pressable>
  );
}; 