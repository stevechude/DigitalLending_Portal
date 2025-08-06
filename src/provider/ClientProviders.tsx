"use client"; // This ensures it runs on the client
import { ReactNode } from "react";
// import ReduxProvider from "@/provider/Reduxprovider";
import QueryProvider from "@/provider/QueryProvider";

interface ClientProvidersProps {
  children: ReactNode;
}

export default function ClientProviders({ children }: ClientProvidersProps) {
  return (
    // <ReduxProvider>
    <QueryProvider>{children}</QueryProvider>
    // </ReduxProvider>
  );
}
