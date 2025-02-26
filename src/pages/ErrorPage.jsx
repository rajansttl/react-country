import { NavLink, useRouteError } from 'react-router-dom';


 export const  ErrorPage = () => {
  const error = useRouteError(); 
  console.log(error); 


  return (
    <>
    <h1>Oops! An error occured.</h1>
    {error && <p>{error.data}</p>}
    <NavLink to="/">
    <button>GO Home</button>
    </NavLink>
    </>
  );


};

export default ErrorPage;
