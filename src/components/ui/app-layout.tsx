import { Outlet } from 'react-router-dom';
import Header from '@/components/header';
function AppLayout() {
  return (
    <div>
      <Header />
      <main className="  ">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
