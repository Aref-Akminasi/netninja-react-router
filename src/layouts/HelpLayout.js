import { NavLink, Outlet } from 'react-router-dom';

const HelpLayout = () => {
  return (
    <div className="help-layout">
      <h2>Website Help</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec nibh
        eget eros ultrices ullamcorper nec eget leo. Proin sollicitudin velit
        faucibus lectus egestas, at auctor eros aliquet. Cras vitae turpis
        ornare, commodo augue in, ultrices ligula. Donec in ex at erat maximus
        congue. Etiam at dapibus lacus.
      </p>

      <nav>
        <NavLink to="faq">View The FAQ</NavLink>
        <NavLink to="contact">Contact Us</NavLink>
      </nav>

      <Outlet />
    </div>
  );
};

export default HelpLayout;
