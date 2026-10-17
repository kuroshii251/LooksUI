import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";
import ListBlog from "../../components/blog/card";

export default function Blog() {
    return (
        <>
            <Navbar />
            <div className="col h-screen pt-10">
                <h1 className="text-white text-center text-6xl font-bold">
                    Blogs
                </h1>
                <ListBlog />
            </div>

            <Footer />
        </>
    );
}
