
// components - student
import Content from "../components/dashboard/student/support/Content";
import SideBar from "../components/dashboard/student/support/SideBar";

const StSupport = () => {
    return (
        <div className="flex">
            {/* Sidebar */}
            <section className="shadow-md sidebar">
                <SideBar />
            </section>
            <main className="flex-1 p-8">
                <Content />
            </main>
        </div>
    );
};

export default StSupport;