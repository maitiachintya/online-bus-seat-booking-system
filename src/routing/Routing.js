import React, { Suspense, lazy } from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import Logout from '../component/users/Logout';
import { UserProvider } from '../component/users/UserContext'; // Adjust the path as needed

// Lazy load the components
const Home = lazy(() => import('../component/Home'));
const About = lazy(() => import('../component/About'));
const Contact = lazy(() => import('../component/Contact'));
const Service = lazy(() => import('../component/Service'));
const PageNotFound = lazy(() => import('../component/PageNotFound'));
const Login = lazy(() => import('../component/users/Login'));
const RegistrationPage = lazy(() => import('../component/users/Registration'));
const DashboardPage = lazy(() => import('../component/users/Dashboard'));
const ViewReservations = lazy(() => import('../component/buses/ViewReservation'));
const BookBus = lazy(() => import('../component/buses/BusBooking'));
const PaymentConfirmation = lazy(() => import('../component/payment/PaymentConfirmation'));
const UserProfile = lazy(() => import('../component/users/UserProfile'));

// Placeholder component for loading
const Loading = () => (
    <div style={{ textAlign: 'center', marginTop: '130px' }}>
        <img src="https://i.pinimg.com/originals/ec/7b/78/ec7b78ab3079ace000a7bb5ab3f7c583.gif" alt="Loading..." height="650px" />
    </div>
);

const Routing = () => {
    return (
        <UserProvider>
            <Router>
                <Header />
                <Suspense fallback={<Loading />}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about-page" element={<About />} />
                        <Route path="/contact-page" element={<Contact />} />
                        <Route path="/services" element={<Service />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<RegistrationPage />} />
                        <Route path="/dashboard" element={<DashboardPage />} />
                        <Route path="/view-reservations" element={<ViewReservations />} />
                        <Route path="/book-bus" element={<BookBus />} />
                        <Route path="/pay-processing" element={<PaymentConfirmation />} />
                        <Route path="/profile" element={<UserProfile />} />
                        <Route path="/logout" element={<Logout />} />
                        <Route path="*" element={<PageNotFound />} />
                    </Routes>
                </Suspense>
                <Footer />
            </Router>
        </UserProvider>
    );
};

export default Routing;
