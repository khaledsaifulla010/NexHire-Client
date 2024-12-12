import { useLoaderData } from "react-router-dom";

const ViewApplication = () => {
  const applicants = useLoaderData();
  console.log(applicants);

  return (
    <div className="mt-24 mb-72">
      <h1 className="text-center font-bold text-5xl">
        Total Application : {applicants.length}
      </h1>
    </div>
  );
};

export default ViewApplication;
