import { Link, Navigate, Route, Routes } from "react-router-dom";
import Nav from "../Nav";
import { KanbasNavigation, KanbasNavigationHorizantal } from "./Navigation";
import "./index.css";
import Dashboard from "./Dashboard";
import Courses from "./Courses";

function Kanbas() {
    return (
        <div>
            <div className="wd-kanbas-nav">
                <Nav />
            </div>

            <div className="row" style={{ paddingTop: '50px' }}>
                <div className="col-12 d-sm-block d-md-none wd-kanbas-navigation-horizantal">
                    <KanbasNavigationHorizantal />
                </div>

                <div className="col-md-1 d-none d-md-block">
                    <div className="wd-pos-fixed-nav">
                        <KanbasNavigation />
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-10">
                    <Routes>
                        <Route path="/" element={<Navigate to="Dashboard" />} />
                        <Route path="Account" element={<h1>Account</h1>} />
                        <Route path="Dashboard" element={<Dashboard />} />
                        <Route path="Courses/:courseId/*" element={<Courses />} />
                        <Route path="Calendar" element={<h1>Calendar</h1>} />
                        <Route path="Inbox" element={<h1>Inbox</h1>} />
                        <Route path="History" element={<h1>History</h1>} />
                        <Route path="Studio" element={<h1>Studio</h1>} />
                        <Route path="Commons" element={<h1>Commons</h1>} />
                    </Routes>

                </div>
            </div>
        </div>



    );
}
export default Kanbas

