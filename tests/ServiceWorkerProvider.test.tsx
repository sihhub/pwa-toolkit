import React from 'react';
import { render } from '@testing-library/react';
import ServiceWorkerProvider from '../src/components/ServiceWorkerProvider';

describe('ServiceWorkerProvider', () => {
  it('renders children correctly', () => {
    const { getByText } = render(
      <ServiceWorkerProvider>
        <h1>Hello, PWA Toolkit!</h1>
      </ServiceWorkerProvider>,
    );
    expect(getByText('Hello, PWA Toolkit!')).toBeInTheDocument();
  });

  it('registers the service worker', () => {
    const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation();
    render(
      <ServiceWorkerProvider>
        <></>
      </ServiceWorkerProvider>,
    );
    expect(consoleLogSpy).toHaveBeenCalledWith(
      expect.stringContaining('Service Worker registered'),
    );
    consoleLogSpy.mockRestore();
  });
});
