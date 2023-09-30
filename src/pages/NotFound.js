import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <h2>Page not found!</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec nibh
        eget eros ultrices ullamcorper nec eget leo.
      </p>

      <p>
        Go to the <Link to="/">Homepage</Link>.
      </p>
    </div>
  );
};

export default NotFound;
