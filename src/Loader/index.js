import Spinner from 'react-bootstrap/Spinner';

function Loader() {
    return (
        <div className='container align-items-center text-center' style={{ height: "732px" }}>
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>
    );
}

export default Loader;