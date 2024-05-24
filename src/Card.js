export default function Card({name, position, picture}) {
    return (
        <div className="card">
        <img className="card-image" src={picture} alt="profile picture" width="200"></img>
        <h2 className="card-title">{name}</h2>
        <p className="card-text">{position}</p>
    </div>
    )
}