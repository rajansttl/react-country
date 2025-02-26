import { useRouteError } from 'react-router-dom';
 
 const  ErrorPage = () => {
  const error = useRouteError(); 
  console.log(error); 


  return (
    <>
    <h1>Oops! An error occured.</h1>
    {error && <p>{error.message}</p>}
    </>
  );


};

export default ErrorPage;
