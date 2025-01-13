import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import PlanSection from "./components/PlanSection.jsx";
import { BrowserRouter } from "react-router-dom";
import Manage from "./components/Manage.jsx";
import RequestRefund from "./components/RequestRefund.jsx";
import MealCaraousel from "./components/MealCaraousel.jsx";
import FeatureCaraousel from "./components/FeatureCaraousel.jsx";
import CancelFeedback from "./components/CancelFeedback.jsx";
import PostPayment from "./components/PostPayment.jsx";
import CancelPaymentModal from "./components/CancelPaymentModal.jsx";
import SuccessfulCancellation from "./components/SuccessfulCancellation.jsx";
import CancelSubscriptionModal from "./components/CancelSubscriptionModal.jsx";
import { useAuth } from "./hooks/useAuth.jsx";
import HeaderContent from "./components/HeaderContent.jsx";
import menu_icon from "./assets/menu_icon.svg";
import right_arrow_icon from "./assets/right_arrow_icon.svg";
import DoctorCard from "./components/DoctorCard.jsx";
import male_doctor from "./assets/male_doctor.png";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./router/ProtectedRoute.jsx";
import { AuthProvider } from "./hooks/useAuth.jsx";
import NotFound from "./pages/NotFound.jsx";
import Profile from "./components/Profile.jsx";
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <AuthProvider>
        <Routes>
          <Route path="/*" element={<App />} />
          <Route path="/*" element={<NotFound />} />
          <Route path="/login" element={<App open={true} />} />
          <Route
            path={`/plans/:id/*`}
            element={
              <ProtectedRoute>
                <PlanSection />
              </ProtectedRoute>
            }
          />
          <Route
            path="/plans/:id/payment/success"
            element={
              <ProtectedRoute>
                <PostPayment />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthProvider>
      {/* <App /> */}
      {/* <div className="px-7 bg-white w-[100vw]">
      <DoctorCard
        imageURL={male_doctor}
        doctorName={"Dr. Sneh P Pandey"}
        experience={"10+ years"}
        aboutDr={
          "Dr. Sneh P Pandey is an American Board certified Internal Medicine Specialist and graduate of University of Pittsburgh. With over 10 years of experience in interdisciplinary patient care and chronic disease management, Dr. Sneh integrates traditional care models with new AI-powered tech to improve ealth outcomes."
        }
        expertiseArea={"Internal Medicine Specialist"}
        linkedInURL={""}
      />
      </div> */}
      {/* <PlanSection /> */}
      {/* <Manage /> */}
      {/* <RequestRefund /> */}
      {/* <FeatureCaraousel /> */}
      {/* <RequestRefund /> */}
      {/* <CancelFeedback /> */}
      {/* <PostPayment /> */}
      {/* <CancelPaymentModal /> */}
      {/* <SuccessfulCancellation /> */}
      {/* <CancelSubscriptionModal /> */}
      {/* <Profile /> */}
    </StrictMode>
  </BrowserRouter>
);
