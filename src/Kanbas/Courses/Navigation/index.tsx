import { Link, useLocation } from "react-router-dom";
import "./index.css";
function CourseNavigation() {
    const links = [
        "Home", "Modules", "Piazza",
        "Zoom", "Grades", "Assignments",
        "Quizzes", "People", " Panopto", "Discussions",
        "Announcements", "Pages", "Files", "Rubrics", "Outcomes",
        "Collaborations", "Syllabus", "Settings"];
    const { pathname } = useLocation();
    return (
        <div >
            <ul className="wd-navigation">
                {links.map((link, index) => (
                    <li key={index} className={pathname.includes(link) ? "wd-active" : ""}>
                        <Link to={link}>{link}</Link>
                    </li>
                ))}
            </ul>
        </div>

    );
}
export default CourseNavigation;