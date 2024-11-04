import React from 'react';
interface ServiceWorkerProviderProps {
    children: React.ReactNode;
    serviceWorkerPath?: string;
}
declare const ServiceWorkerProvider: React.FC<ServiceWorkerProviderProps>;
export default ServiceWorkerProvider;
