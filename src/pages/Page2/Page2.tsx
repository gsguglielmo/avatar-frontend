import { Link } from "react-router-dom";

export default function Page2() {
    return (
        <div>
            <h1>Page 2</h1>
            <p>Page 2 content</p>
            <Link to="/">Go to home</Link>
        </div>
    );
}