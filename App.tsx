import React from 'react';
import {View, Button} from 'react-native';

import {Camera} from 'lucide-react-native';
import {ToastProvider, useToast} from 'react-native-animated-toast-alerts';

const ToastExample = () => {
  const {showToast} = useToast();

  const handleShowToast = (type: string) => {
    switch (type) {
      case 'success':
        showToast({
          type: 'success',
          message: 'Operation completed successfully!',
          duration: 3000,
          position: 'bottom',
        });
        break;
      case 'error':
        showToast({
          type: 'error',
          message: 'Something went wrong!',
          duration: 3000,
          position: 'bottom',
        });
        break;
      case 'custom':
        showToast({
          type: 'success',
          message: 'Photo captured!',
          duration: 2000,
          icon: {
            icon: Camera,
            props: {
              size: 24,
              color: '#15803D',
              strokeWidth: 2,
            },
          },
        });
        break;
    }
  };

  return (
    <View style={{flex: 1}}>
      <Button
        title="Show Success Toast"
        onPress={() => handleShowToast('success')}
      />
      <Button
        title="Show Error Toast"
        onPress={() => handleShowToast('error')}
      />
      <Button
        title="Show Custom Toast"
        onPress={() => handleShowToast('custom')}
      />
    </View>
  );
};

const App = () => {
  return (
    <ToastProvider>
      <ToastExample />
    </ToastProvider>
  );
};

export default App;
