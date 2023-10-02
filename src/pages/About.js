import { useState } from 'react';
import { Navigate } from 'react-router-dom';

const About = () => {
  const [user, setUser] = useState('Aloy');

  if (!user) {
    return <Navigate to="/" replace={true} />;
  }
  return (
    <div className="about">
      <h2>About us</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec nibh
        eget eros ultrices ullamcorper nec eget leo. Proin sollicitudin velit
        faucibus lectus egestas, at auctor eros aliquet. Cras vitae turpis
        ornare, commodo augue in, ultrices ligula. Donec in ex at erat maximus
        congue. Etiam at dapibus lacus.
      </p>
      <p>
        Nulla ac diam venenatis, elementum elit in, pharetra eros. Vivamus
        congue erat non nibh sollicitudin ultrices. Morbi et leo ut dolor
        consequat rhoncus scelerisque id augue. Aenean quis dignissim ex. In eu
        feugiat urna. Nunc efficitur vel ex non vehicula.
      </p>
      <p>
        Donec finibus nunc id erat eleifend auctor. Suspendisse hendrerit
        eleifend turpis, at ultrices nulla vehicula in. Vestibulum ante ipsum
        primis in faucibus orci luctus et ultrices posuere cubilia curae;
        Curabitur vel rutrum purus. In hendrerit velit lorem, eu scelerisque
        ipsum lobortis vel.
      </p>
      <button onClick={() => setUser(null)}>Logout</button>
    </div>
  );
};

export default About;
