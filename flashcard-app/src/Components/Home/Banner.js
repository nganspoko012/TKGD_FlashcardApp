export default function Banner() {
    return (
    <div className="banner-container">
        <div className="img-container">
            <img className="banner-img" src="/images/banner2.jpg"></img>
            <a className="prev">&#10094;</a>
            <a className="next">&#10095;</a>

        </div>
        <div className="slider">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
        </div>
    </div>
    )
}