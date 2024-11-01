import React, { useEffect } from 'react';

interface ServiceWorkerProviderProps {
  children: React.ReactNode;
  serviceWorkerPath?: string;
}

const ServiceWorkerProvider: React.FC<ServiceWorkerProviderProps> = ({
  children,
  serviceWorkerPath = '/sw.js',
}) => {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register(serviceWorkerPath)
        .then((registration) => {
          console.log(
            'Service Worker registered with scope:',
            registration.scope,
          );
        })
        .catch((error) => {
          console.error('Service Worker registration failed:', error);
        });
    }
  }, [serviceWorkerPath]);

  return <>{children}</>;
};

export default ServiceWorkerProvider;
