import { Provider } from "react-redux";
import BlogData from "../../data/blog/blog.json";
import PageHead from "../Head";
import Store from "@/redux/store";
import Context from "@/context/Context";
import MobileMenu from "@/components/Header/MobileMenu";
import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import Cart from "@/components/Header/Offcanvas/Cart";
import Separator from "@/components/Common/Separator";
import FooterOne from "@/components/Footer/Footer-One";
import Banner from "@/components/Common/Banner";
import BackToTop from "../backToTop";
import BlogSidebar from "@/components/Blogs/BlogSidebar";

const BlogSidebarLayout = () => {
  let getAllBlogs = JSON.parse(JSON.stringify(BlogData.blogList));
  return (
    <>
      <PageHead title="Blog With Sidebar" />
      <Provider store={Store}>
        <Context>
          <MobileMenu />
          <HeaderStyleTen headerSticky="rbt-sticky" headerType="" />
          <Cart />

          <Banner
            col="col-lg-10 offset-lg-1"
            text="All Blog"
            getBlog={getAllBlogs}
          />
          <div className="rbt-blog-area rbt-section-overlayping-top rbt-section-gapBottom">
            <div className="container">
              <BlogSidebar blogdata={getAllBlogs} isPagination={true} />
            </div>
          </div>

          <BackToTop />
          <Separator />
          <FooterOne />
        </Context>
      </Provider>
    </>
  );
};

export default BlogSidebarLayout;
