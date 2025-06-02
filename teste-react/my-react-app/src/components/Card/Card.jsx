function Card(props) {
 return (
 <div className="card">
 <img
 src="https://picsum.photos/id/237/390/240"
 className="card-img-top"
 alt=" "
 />
 <div className="card-body">
 <h5 className="card-title">{props.title}</h5>
 <p className="card-text">
 {props.text}
 </p>
 <a href="#go" className="btn btn-primary">
 {props.buttonLabel}
 </a>
 </div>
 </div>
 );
}

export default Card