export default function DigitalMarketing(){
    const data = [
        {
            courseName: "Digital Marketing course",
            languages: ["ENGLISH", "TAMIL"],
            image: "https://static.guvi.in/blog/zenThumbnailNew/digital-marketing.webp"
        }
    ]
    return(
        <div className="row m-2">
            <h4 className="border-bottom border-secondary pb-2">Digital Marketing Courses</h4>
        {
            data.map((course, index) => {
                return(
                    <div class="card col-4 p-0 m-1" style={{width: "18rem"}}>
                        <img src={course.image} class="card-img-top" alt="..."/>
                        <small className="position-absolute bg-warning px-2 fw-bold rounded-pill m-1">MOST POPULAR</small>
                        <div class="card-body">
                            <h5 class="card-title">{course.courseName}</h5>
                            <small className="text-secondary">Available in</small>
                            <p>
                                {
                                    course.languages.map((language, index) => <span className="m-2">{language}</span>)
                                }
                            </p>
                            <a href="#" class="btn btn-success fw-bold w-100">Know More &gt;&gt;</a>
                        </div>
                    </div>
                )
            })
        }
        </div>
    )
}