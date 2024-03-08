"use client";

import Head from "next/head";
import Header from "../Header";
import { useState } from "react";
import Sidebar from "../Sidebar";

export default function Layout() {
  const [sidebarOpened, setSidebarOpened] = useState<boolean>(false);
  return (
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
      </div>
    </div>
  );
}
