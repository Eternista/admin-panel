import { ReactNode } from "react";

interface DashboardProps {
  children: ReactNode;
}

const Dashboard = ({ children }: DashboardProps) => {
  return (
    <main>
      {children}
    </main>
  );
}

export default Dashboard;
