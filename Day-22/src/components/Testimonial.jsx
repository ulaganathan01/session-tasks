

export default function Testimonial(props){
    return(
        <div className="testimonial">
            <img src={props.data.image} alt="Testimonial Image" />
            <h3>{props.data.name}</h3>
            <p>{props.data.message}</p>
        </div>
    )
}