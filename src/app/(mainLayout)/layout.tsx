import React from "react";
import SiteShell from "@/components/shared/SiteShell";

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <SiteShell>{children}</SiteShell>;
};

export default MainLayout;
