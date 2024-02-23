import { Link, useLocation } from "react-router-dom";
import "./index.css";
import {
    FaTachometerAlt, FaRegUserCircle, FaBook, FaRegCalendarAlt, FaCalendar, FaInbox, FaClock, FaNetworkWired,
    FaArrowCircleRight, FaQuestion, FaHome, FaBars, FaGlasses, FaChevronCircleDown, FaChevronUp
} from "react-icons/fa";

function KanbasNavigation() {
    const links = [
        { id: "northeastern", label: "  ", icon: <FaHome className="fs-2" /> },
        { id: "account", label: "Account", icon: <FaRegUserCircle className="fs-2" /> },
        { id: "dashboard", label: "Dashboard", icon: <FaTachometerAlt className="fs-2" /> },
        { id: "courses", label: "Courses", icon: <FaBook className="fs-2" /> },
        { id: "calendar", label: "Calendar", icon: <FaCalendar className="fs-2" /> },
        { id: "inbox", label: "Inbox", icon: <FaInbox className="fs-2" /> },
        { id: "history", label: "History", icon: <FaClock className="fs-2" /> },
        { id: "studio", label: "Studio", icon: <FaNetworkWired className="fs-2" /> },
        { id: "commons", label: "Commons", icon: < FaArrowCircleRight className="fs-2" /> },
        { id: "help", label: "Help", icon: <FaQuestion className="fs-2" /> },
    ];
    const { pathname } = useLocation();
    console.log(pathname);
    return (
        <ul className="wd-kanbas-navigation">
            {links.map((link) => (
                <li key={link.id} className={pathname.includes(link.id) ? "wd-active" : ""}>
                    <Link to={`/Kanbas/${link.id}`}> {link.icon} {link.label} </Link>
                </li>
            ))}
        </ul>
    );
}



function KanbasNavigationHorizantal() {
    const links = [
        { id: "northeastern", label: "  ", icon: <FaHome className="fs-2" /> },
        { id: "account", label: "Account", icon: <FaRegUserCircle className="fs-2" /> },
        { id: "dashboard", label: "Dashboard", icon: <FaTachometerAlt className="fs-2" /> },
        { id: "courses", label: "Courses", icon: <FaBook className="fs-2" /> },
        { id: "calendar", label: "Calendar", icon: <FaCalendar className="fs-2" /> },
        { id: "inbox", label: "Inbox", icon: <FaInbox className="fs-2" /> },
        { id: "history", label: "History", icon: <FaClock className="fs-2" /> },
        { id: "studio", label: "Studio", icon: <FaNetworkWired className="fs-2" /> },
        { id: "commons", label: "Commons", icon: < FaArrowCircleRight className="fs-2" /> },
        { id: "help", label: "Help", icon: <FaQuestion className="fs-2" /> },
    ];
    const { pathname } = useLocation();
    const temp = pathname.split('/').pop() || ' ';;
    const routeName = temp.charAt(0).toUpperCase() + temp.slice(1).toLowerCase();
    const showCoursesButton = pathname.includes("courses");
    console.log(pathname);
    return (
        <div className="d-flex justify-content-between">
            <div className="d-flex">
                <div className="p-2 mt-2">
                    <button className="btn btn-primary wd-nav-button-white " type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseWidthExample" aria-expanded="false"
                        aria-controls="collapseWidthExample">
                        <FaBars />
                    </button>
                </div>

            </div>
            <div className="wd-text mt-4">

                {routeName}

            </div>

            <div>
                <button className="btn btn-primary wd-nav-button-white mt-3"> <FaGlasses /></button>
            </div>



            <div className="collapse collapse-horizontal" id="collapseWidthExample">
                <div className="card card-body wd-full-screen-list">

                    <button className="btn btn-primary wd-button-red position-absolute top-0 end-0 m-2" type="button"
                        data-bs-toggle="collapse" data-bs-target="#collapseWidthExample">
                        <FaChevronUp />
                    </button>

                    <ul className="wd-kanbas-navigation-horizantal-collapse">
                        {links.map((link) => (
                            <li key={link.id} className={pathname.includes(link.id) ? "wd-active" : ""}>
                                <Link to={`/Kanbas/${link.id}`}> {link.icon} {link.label} </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>


        </div>
    );
}

export { KanbasNavigation, KanbasNavigationHorizantal };

