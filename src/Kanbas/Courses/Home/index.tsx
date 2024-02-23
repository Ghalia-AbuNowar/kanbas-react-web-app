import ModuleList from "../Modules/List";
import Status from "../Status";


function Home() {
    return (
        <div className="container "> 
            <div className="row"> 
                <div className="col-sm-12 col-md-12 col-lg-10">
                    <ModuleList />
                </div>
                <div className="col-lg-2 d-lg-block d-none"> 
                    <Status />
                </div>
            </div>
        </div>
    );
}
export default Home;

