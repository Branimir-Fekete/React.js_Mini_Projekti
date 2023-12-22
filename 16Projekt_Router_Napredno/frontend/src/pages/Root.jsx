import { Outlet, useNavigate } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';

function RootLayout() {
  // const navigation = useNavigate();

  return (
    <>
      <MainNavigation />

      <main>
        {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
