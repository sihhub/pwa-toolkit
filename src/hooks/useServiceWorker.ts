import { useState, useEffect } from 'react';

const useServiceWorker = (serviceWorkerPath = '/sw.js') => {
  const [isRegistered, setIsRegistered] = useState(false);

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register(serviceWorkerPath)
        .then(() => setIsRegistered(true))
        .catch(() => setIsRegistered(false));
    }
  }, [serviceWorkerPath]);

  return { isRegistered };
};

export default useServiceWorker;
