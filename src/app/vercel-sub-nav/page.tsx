"use client";

import VercelNavLink from "@/components/VercelNavLink";

const VercelSubNavPage = () => {
  return (
    <div className="bg-[#0a0a0a] min-h-screen grid place-items-center">
      <nav className="border-b-[0.5px] border-white/20 pb-1.5 flex items-center">
        <VercelNavLink text="Project" />
        <VercelNavLink text="Deployments" isActive={true} />
        <VercelNavLink text="Analytics" />
        <VercelNavLink text="Speed Insights" />
        <VercelNavLink text="Logs" />
        <VercelNavLink text="Firewall" />
        <VercelNavLink text="Storage" />
        <VercelNavLink text="Settings" />
      </nav>
    </div>
  );
};

export default VercelSubNavPage;
