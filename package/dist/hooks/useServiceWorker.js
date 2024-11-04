"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const useServiceWorker = (serviceWorkerPath = '/sw.js') => {
    const [isRegistered, setIsRegistered] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker
                .register(serviceWorkerPath)
                .then(() => setIsRegistered(true))
                .catch(() => setIsRegistered(false));
        }
    }, [serviceWorkerPath]);
    return { isRegistered };
};
exports.default = useServiceWorker;
//# sourceMappingURL=useServiceWorker.js.map