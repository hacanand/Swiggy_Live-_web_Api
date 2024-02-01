import { useState, useEffect } from "react";
const useOnline = () => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const handleOnline = (e) => setIsOnline(true);
    const handleOffline = (e) => setIsOnline(false);
   
    windows.addEventListener("online", handleOnline);
    windows.addEventListener("offline", handleOffline);
    
      return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return isOnline;
};
export default useOnline;
