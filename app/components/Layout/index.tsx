"use client";

import Head from "next/head";
import Header from "../Header";
import { useState } from "react";
import Sidebar from "../Sidebar";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import React from "react";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [sidebarOpened, setSidebarOpened] = useState<boolean>(false);
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <Head>
          <title>Brazilian News</title>
        </Head>
        <div>
          <Sidebar
            opened={sidebarOpened}
            setClose={() => setSidebarOpened(false)}
          />
          <Header openSidebar={() => setSidebarOpened(true)} />
          {children}
        </div>
      </div>
    <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
