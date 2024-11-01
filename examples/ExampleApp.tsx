import React from 'react';
import ServiceWorkerProvider from '../src/components/ServiceWorkerProvider';

const ExamplApp: React.FC = () => {
  return (
    <ServiceWorkerProvider serviceWorkerPath="/sw.js">
      <h1>Example App</h1>
    </ServiceWorkerProvider>
  );
};

export default ExamplApp;
