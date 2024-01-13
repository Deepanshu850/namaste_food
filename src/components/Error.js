import { useRouteError } from "react-router-dom"; //error hook give to us by react  router dom

const Error = () => {
    const err = useRouteError();
    console.log(err);
    return (
        <div>
            <h1>Oops !!!</h1>
            <h3>Something Went wrong</h3>
            <h3>{err.status}</h3>
        </div>
    )
}
export default Error;