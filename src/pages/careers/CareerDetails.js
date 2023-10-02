import { useLoaderData, useParams } from 'react-router-dom';

const CareerDetail = () => {
  const { id } = useParams();
  const career = useLoaderData();
  return (
    <div className="career-details">
      <h2>Career Details for {career.title}</h2>
      <p>Starting salary: {career.salary}</p>
      <p>Location: {career.location}</p>
      <div className="details">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin gravida
          metus in facilisis consectetur. In molestie porttitor rutrum. Duis
          maximus risus non felis egestas convallis. Vestibulum et accumsan
          urna. Vivamus quam turpis, posuere vitae massa vel, blandit iaculis
          arcu. Proin bibendum sem turpis
        </p>
      </div>
    </div>
  );
};

export default CareerDetail;

// loader function
export const careerDetailsLoader = async ({ params }) => {
  const { id } = params;
  const res = await fetch('http://localhost:4000/careers/' + id);
  if (!res.ok) {
    throw Error('could not find that career');
  }
  return res.json();
};
