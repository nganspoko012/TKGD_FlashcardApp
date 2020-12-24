import Avatar from '../UserInfo/Avatar';
import './Home.css';

export default function Home() {
    return (
        <div className="content-container">
            <div className="home-container">
                <div className="banner-container">
                    <div className="img-container">
                        <img className="banner-img" src="/images/banner1.jpg"></img>
                        <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
                        <a class="next" onclick="plusSlides(1)">&#10095;</a>

                    </div>
                    <div className="slider">
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </div>
                </div>
                <div className="course-container">
                    <div className="course-card">
                        <div className="course-card-info">
                            <span className="course-card-name">600 Essential words.</span>
                            <i className="material-icons md-36">lock</i>
                            <i className="material-icons md-36">more_vert</i>
                        </div>
                        <div className="course-card-user">
                            <Avatar letter="N" color="#9E54FC"/>
                            <span>Ngân Võ</span>
                            <div className="due-info">
                                <span className="due">100</span>
                                <span>/200</span>
                                </div>
                        </div>
                    </div>

                    <div className="course-card">
                        <div className="course-card-info">
                            <span className="course-card-name">600 Essential words.</span>
                            <i className="material-icons md-36">lock</i>
                            <i className="material-icons md-36">more_vert</i>
                        </div>
                        <div className="course-card-user">
                            <Avatar letter="N" color="#9E54FC"/>
                            <span>Ngân Võ</span>
                            <div className="due-info">
                                <span className="due">100</span>
                                <span>/200</span>
                                </div>
                        </div>
                    </div>

                    <div className="course-card">
                        <div className="course-card-info">
                            <span className="course-card-name">600 Essential words.</span>
                            <i className="material-icons md-36">lock</i>
                            <i className="material-icons md-36">more_vert</i>
                        </div>
                        <div className="course-card-user">
                            <Avatar letter="N" color="#9E54FC"/>
                            <span>Ngân Võ</span>
                            <div className="due-info">
                                <span className="due">100</span>
                                <span>/200</span>
                                </div>
                        </div>
                    </div>

                    <div className="course-card">
                        <div className="course-card-info">
                            <span className="course-card-name">600 Essential words.</span>
                            <i className="material-icons md-36">lock</i>
                            <i className="material-icons md-36">more_vert</i>
                        </div>
                        <div className="course-card-user">
                            <Avatar letter="N" color="#9E54FC"/>
                            <span>Ngân Võ</span>
                            <div className="due-info">
                                <span className="due">100</span>
                                <span>/200</span>
                                </div>
                        </div>
                    </div>
                </div>
                <div className="course-container">
                    course
                </div>
            </div>
        </div>
    )
}