import { useRouteError } from "react-router";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h1>Oops something went wrong</h1>
    </div>
  );
};

export default Error;
