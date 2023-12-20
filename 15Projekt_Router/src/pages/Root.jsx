import { Outlet } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';

function RootLeyout() {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootLeyout;
