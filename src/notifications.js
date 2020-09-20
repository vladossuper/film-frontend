import { NotificationManager } from 'react-notifications';

export const createNotification = type => {
    switch (type) {
      case 'info':
        NotificationManager.info('Info', 'Title info');
        break;
      case 'success':
        NotificationManager.success('Success message', 'Title here');
        break;
      case 'warning':
        NotificationManager.warning('Warning message', 'Title warning');
        break;
      case 'error':
        NotificationManager.error('Error message', 'Title error');
        break;
    }
}