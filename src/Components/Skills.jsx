import "../style/Skills.css"
import "@fortawesome/fontawesome-free/css/all.min.css";


function Skills(){
    return(
        <>
            <div className="skills theme" id="skills">
                <h1><div className="dot"></div>Skills</h1>
                <div className="boxes">
                    <div className="box">
                        <div className="title">
                            <i className="fa-solid fa-code"></i>
                            <p>Languages</p>
                        </div>
                        <div className="langs">
                            <div className="lang">Java</div>
                            <div className="lang">SQL</div>
                            <div className="lang">HTML</div>
                            <div className="lang">CSS</div>
                            <div className="lang">JavaSript</div>
                        </div>
                    </div>
                    <div className="box">
                        <div className="title">
                            <i className="fa-solid fa-code"></i>
                            <p>Frameworks</p>
                        </div>
                        <div className="langs">
                            <div className="lang">React.js</div>
                            <div className="lang">SpringBoot</div>
                        </div>
                    </div>
                    <div className="box">
                        <div className="title">
                            <i className="fa-solid fa-code"></i>
                            <p>Databases</p>
                        </div>
                        <div className="langs">
                            <div className="lang">MySQL</div>
                            <div className="lang">OracleSQL</div>
                            <div className="lang">PostgreSQL</div>
                        </div>
                    </div>
                    <div className="box">
                        <div className="title">
                            <i className="fa-solid fa-code"></i>
                            <p>Tools & Platforms</p>
                        </div>
                        <div className="langs">
                            <div className="lang">Git</div>
                            <div className="lang">GitHub</div>
                            <div className="lang">VSCode</div>
                            <div className="lang">Eclipse</div>
                        </div>
                    </div>
                </div>
            </div> 
        </>
    )
}

export default Skills