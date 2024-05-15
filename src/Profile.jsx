export default function Profile(props) {
    return (
        <div className="Profile">
            <h1>{props.name}</h1>
            <h2>{props.position}</h2>
            <img src={props.picture} alt={props.name} />
            /* test */
        </div>
    );
}