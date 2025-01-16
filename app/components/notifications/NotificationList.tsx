import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Pressable,
  Modal,
} from 'react-native';
import { useNotifications } from './NotificationContext';

interface NotificationListProps {
  visible: boolean;
  onClose: () => void;
}

interface RenderItemProps {
  item: {
    id: string;
    title: string;
    message: string;
    timestamp: Date;
    read: boolean;
  };
}

export const NotificationList: React.FC<NotificationListProps> = ({
  visible,
  onClose,
}) => {
  const { notifications, markAsRead, markAllAsRead, clearNotifications } = useNotifications();

  const renderNotification = ({ item }: RenderItemProps) => (
    <Pressable
      onPress={() => markAsRead(item.id)}
      style={[styles.notificationItem, !item.read && styles.unread]}
    >
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.message}>{item.message}</Text>
      <Text style={styles.timestamp}>
        {new Date(item.timestamp).toLocaleString()}
      </Text>
    </Pressable>
  );

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Notifications</Text>
            <View style={styles.headerButtons}>
              <Pressable onPress={markAllAsRead} style={styles.headerButton}>
                <Text style={styles.headerButtonText}>Mark all as read</Text>
              </Pressable>
              <Pressable onPress={clearNotifications} style={styles.headerButton}>
                <Text style={styles.headerButtonText}>Clear all</Text>
              </Pressable>
            </View>
          </View>
          
          {notifications.length === 0 ? (
            <View style={styles.emptyState}>
              <Text style={styles.emptyStateText}>No notifications</Text>
            </View>
          ) : (
            <FlatList
              data={notifications}
              renderItem={renderNotification}
              keyExtractor={(item) => item.id}
              contentContainerStyle={styles.listContent}
            />
          )}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-start',
  },
  container: {
    backgroundColor: 'white',
    marginTop: 60,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerButtons: {
    flexDirection: 'row',
    gap: 8,
  },
  headerButton: {
    padding: 8,
  },
  headerButtonText: {
    color: '#007AFF',
    fontSize: 14,
  },
  listContent: {
    padding: 16,
  },
  notificationItem: {
    padding: 16,
    borderRadius: 8,
    marginBottom: 8,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#eee',
  },
  unread: {
    backgroundColor: '#f0f9ff',
    borderColor: '#bae6fd',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  message: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  timestamp: {
    fontSize: 12,
    color: '#999',
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  emptyStateText: {
    fontSize: 16,
    color: '#999',
  },
}); 