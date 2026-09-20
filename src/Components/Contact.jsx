import "../style/Contact.css"
import "@fortawesome/fontawesome-free/css/all.min.css";

function Contact(){
    return(
        <>
            <div>
                <div className="contact">
                    <h1><div className="dot"></div>Contact</h1>
                    <p className="sam">Let's build something.</p>
                    <div className="content">
                        <div className="left">
                            <p className="sam1">I'm open to full-time software development roles. The quickest way to reach me:</p>
                            <div className="boxes">
                                <a href =""><div className="box">
                                    <div className="leficon"><i class="fa-regular fa-envelope"></i></div>
                                    <div className="center">
                                        <p className="main">Email</p>
                                        <p className="content">ajithajju2814@gmail.com</p>
                                    </div>
                                    <div className="rightarraw"><i class="fa-solid fa-arrow-right"></i></div>
                                </div></a>
                                <a href =""><div className="box">
                                    <div className="leficon"><i class="fa-solid fa-phone"></i></div>
                                    <div className="center">
                                        <p className="main">Email</p>
                                        <p className="content">ajithajju2814@gmail.com</p>
                                    </div>
                                    <div className="rightarraw"><i class="fa-solid fa-arrow-right"></i></div>
                                </div></a>
                                <a href =""><div className="box">
                                    <div className="leficon"><i class="fa-brands fa-linkedin"></i></div>
                                    <div className="center">
                                        <p className="main">Email</p>
                                        <p className="content">ajithajju2814@gmail.com</p>
                                    </div>
                                    <div className="rightarraw"><i class="fa-solid fa-arrow-right"></i></div>
                                </div></a>
                                <a href =""><div className="box">
                                    <div className="leficon"><i class="fa-brands fa-github"></i></div>
                                    <div className="center">
                                        <p className="main">Email</p>
                                        <p className="content">ajithajju2814@gmail.com</p>
                                    </div>
                                    <div className="rightarraw"><i class="fa-solid fa-arrow-right"></i></div>
                                </div></a>
                                <a href =""><div className="box">
                                    <div className="leficon"><i class="fa-brands fa-leetcode"></i></div>
                                    <div className="center">
                                        <p className="main">Email</p>
                                        <p className="content">ajithajju2814@gmail.com</p>
                                    </div>
                                    <div className="rightarraw"><i class="fa-solid fa-arrow-right"></i></div>
                                </div></a>
                            </div>
                        </div>
                        <div className="right">
                            <form action="">
                                <div className="name ">
                                    <p>Name</p>
                                    <input type="text" id = "name" placeholder="jane Doe"/>
                                </div>
                                <div className="email">
                                    <p>Email</p>
                                    <input type="email" id = "email" placeholder="jane@company.com"/>
                                </div>
                                <div className="message">
                                    <p>Message</p>
                                    <textarea name="text" id="message1" rows={4} cols={55}></textarea>
                                </div>
                                <button type="submit"><i class="fa-regular fa-paper-plane"></i> Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="copyrights">
                    <div>© 2026 Ajith T. All rights reserved.</div>
                    <div className="icon">
                        <a href=""><i class="fa-brands fa-github"></i></a>                       
                        <a href=""><i class="fa-brands fa-linkedin"></i></a>
                        <a href=""><i class="fa-brands fa-leetcode"></i></a>
                        <a href=""><i class="fa-regular fa-envelope"></i></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact