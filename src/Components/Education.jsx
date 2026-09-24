import "../style/Education.css"
import "@fortawesome/fontawesome-free/css/all.min.css";

function Education(){
    return (
        <>
            <div>
                <div className="education theme">
                    <h1><div className="dot"></div>Education</h1>
                    <h2>Where I studied.</h2>
                    <div className="cards">
                        <div className="card">
                            <div className="left">
                                <i className="fa-solid fa-graduation-cap"></i>
                            </div>
                            <div className="right">
                                <h2>B.E. Computer Science & Engineering</h2>
                                <p className="colname">The Oxford College of Engineering, Bengaluru</p>
                                <p>2022 – 2026 · CGPA : 8.71 / 10</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="left">
                                <i className="fa-solid fa-graduation-cap"></i>
                            </div>
                            <div className="right">
                                <h2>PUC Science</h2>
                                <p className="colname">Nalanda PU college, Jagalur, Davanagere, Karnataka</p>
                                <p>2020 – 2022 · Percentage : 90.5 %</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Education