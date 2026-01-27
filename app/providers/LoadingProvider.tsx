"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { usePathname, useSearchParams } from "next/navigation";

interface LoadingContextType {
  isLoading: boolean;
  startLoading: () => void;
  stopLoading: () => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error("useLoading must be used within LoadingProvider");
  }
  return context;
};

interface LoadingProviderProps {
  children: ReactNode;
}

export const LoadingProvider = ({ children }: LoadingProviderProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [loadingStartTime, setLoadingStartTime] = useState<number | null>(null);
  const [pageLoadComplete, setPageLoadComplete] = useState(false);
  
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Start loading on route change
  useEffect(() => {
    const handleStart = () => {
      setIsLoading(true);
      setLoadingStartTime(Date.now());
      setPageLoadComplete(false);
    };

    handleStart();
  }, [pathname, searchParams]);

  // Mark page load as complete after component mounts
  useEffect(() => {
    if (isLoading) {
      // Small delay to ensure page has started rendering
      const timer = setTimeout(() => {
        setPageLoadComplete(true);
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  // Handle loader visibility based on both conditions
  useEffect(() => {
    if (!pageLoadComplete || !loadingStartTime) return;

    const MINIMUM_DISPLAY_TIME = 1000;
    const elapsedTime = Date.now() - loadingStartTime;
    const remainingTime = Math.max(0, MINIMUM_DISPLAY_TIME - elapsedTime);

    const timer = setTimeout(() => {
      setIsLoading(false);
      setLoadingStartTime(null);
      setPageLoadComplete(false);
    }, remainingTime);

    return () => clearTimeout(timer);
  }, [pageLoadComplete, loadingStartTime]);

  const startLoading = () => {
    setIsLoading(true);
    setLoadingStartTime(Date.now());
    setPageLoadComplete(false);
  };

  const stopLoading = () => {
    setPageLoadComplete(true);
  };

  return (
    <LoadingContext.Provider value={{ isLoading, startLoading, stopLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};