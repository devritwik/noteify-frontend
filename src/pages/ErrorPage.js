import { useRouteError } from "react-router-dom";

function ErrorPage(){

    let err = useRouteError();

    return(<h1>Ooos!! Something Went Bad - Error Details {err.statusText} | {err.message}</h1>);
}

export default ErrorPage;
