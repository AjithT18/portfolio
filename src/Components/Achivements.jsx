import "../style/Achivements.css"
import "@fortawesome/fontawesome-free/css/all.min.css";

function Achivements(){
    return (
        <>
            <div>
                <div className="achivements">
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
                                    <a href=""><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                                </div>
                            </div>
                            <div className="achiv">
                                <div className="left"><i className="fa-solid fa-award"></i></div>
                                <div className="center">
                                    <h2>100+ LeetCode Problems Solved</h2>
                                    <p>Consitent Practice across DSA, arrays, graphs and dynamic programming.</p>
                                </div>
                            </div>
                        </div>
                        <div className="bottom">
                            <h2>certificates</h2>
                            <div>
                                <p>Java Programming - Beginner to Master</p>
                                <a href=""><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                            </div>
                            <div>
                                <p>Java Programming - Beginner to Master</p>
                                <a href=""><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Achivements