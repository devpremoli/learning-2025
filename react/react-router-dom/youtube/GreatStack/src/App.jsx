import NavBar from "./components/NavBar";
import {
  Routes,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import ContactInfo from "./components/ContactInfo";
import ContactForm from "./components/ContactForm";
import About from "./pages/About";
import RootLayout from "./layout/RootLayout";
import ContactLayout from "./layout/ContactLayout";
import NotFound from "./components/NotFound";
import JobsLayout from "./layout/JobsLayout";
import Jobs, { jobsLoader } from "./pages/Jobs";
import JobDetails, { JobDetailsLoader } from "./components/JobDetails";
import Error from "./components/Error";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<ContactLayout />}>
          <Route path="info" element={<ContactInfo />} />
          <Route path="form" element={<ContactForm />} />
        </Route>
        <Route path="jobs" element={<JobsLayout />}>
        <Route index element={<Jobs />} loader={jobsLoader} />
        <Route path=":jobId" element={<JobDetails />} loader={JobDetailsLoader} errorElement={<Error />}/>
        </Route>
        <Route path="*" element={<NotFound />}/>
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>

    // <div>
    //   <NavBar />
    //   <div className="container">
    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/products" element={<Products />} />
    //       <Route path="/about" element={<About />} />
    //       <Route path="/contact" element={<Contact />} />
    //     </Routes>
    //   </div>
    // </div>
  );
}

export default App;
