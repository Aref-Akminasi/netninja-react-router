import { NavLink, Outlet } from 'react-router-dom';

const RootLayout = () => {
  return (
    <>
      <div className="root-layout">
        <header>
          <nav>
            <h1>Jobarouter</h1>
            <NavLink to="/">Home</NavLink>
            <NavLink to="about">About</NavLink>
          </nav>
        </header>
      </div>

      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;