import "../style/Achivements.css"
import "@fortawesome/fontawesome-free/css/all.min.css";
import jc from "../assets/images/Java_cert.png"
import sqlc from "../assets/images/SQLCert.jpg"
import ricc from "../assets/images/Rooman_Intern_Completion_Cert.png"

function Achivements(){
    return (
        <>
            <div>
                <div className="achivements theme" id="achivements">
                    <h1><div className="dot"></div>Achivements</h1>
                    <div>
                        <div className="top">
                            <div className="achiv">
                                <div className="left"><i className="fa-solid fa-award"></i></div>
                                <div className="center">
                                    <h2>100+ LeetCode Problems Solved</h2>
                                    <p>Consitent Practice across DSA, arrays, graphs and dynamic programming.</p>
                                </div>
                                <div className="right">
                                    <a href="https://leetcode.com/u/Ajith_T18/"><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                                </div>
                            </div>
                            <div className="achiv">
                                <div className="left"><i className="fa-solid fa-award"></i></div>
                                <div className="center">
                                    <h2>KSCST State Level Project Exhibition</h2>
                                    <p>Project "Smart Infrastructure for In-motion EV Charging" is selected for KSCST 49th Student Projects Programme</p>
                                </div>
                                <div className="right">
                                    <a href=""><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="bottom">
                            <h2>certificates</h2>
                            <a href={jc} target="_blank">
                                <p>Java Programming - Beginner to Master</p>
                                <div><i className="fa-solid fa-arrow-up-right-from-square"></i></div>
                            </a>
                            <a href={sqlc} target="_blank">
                                <p>Complete SQL Bootcamp</p>
                                <div><i className="fa-solid fa-arrow-up-right-from-square"></i></div>
                            </a>
                            <a href={ricc} target="_blank">
                                <p>Web Development with Gen AI - Intern</p>
                                <div><i className="fa-solid fa-arrow-up-right-from-square"></i></div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Achivements