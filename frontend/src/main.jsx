import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import PlanScreen from "./screens/PlanScreen.jsx";
import PostPayment from "./components/PostPayment.jsx";
import ProtectedRoute from "./router/ProtectedRoute.jsx";
import { AuthProvider } from "./hooks/useAuth.jsx";
import NotFound from "./components/NotFound.jsx";
import Manage from "./components/Manage.jsx";
import ManageResubscribe from "./components/ManageResubscribe.jsx";
import RequestRefundEndSubscription from "./components/RequestRefundSubscription.jsx";
import CancelFeedback from "./components/CancelFeedback.jsx";
import Refund from "./components/Refund.jsx";
import CancelSubscription from "./components/CancelSubscription.jsx";
import PartnershipScreen from "./screens/PartnershipScreen.jsx";
import PartnershipPayment from "./components/PartnershipPayment.jsx";
import FooterInfo from "./components/FooterInfo.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <AuthProvider>
        <Routes>
          <Route path="/plans" element={<PlanScreen />} />
          <Route
            path="/plans/payment/success"
            element={
              <ProtectedRoute>
                <PostPayment />
              </ProtectedRoute>
            }
          />
          <Route
            path="/manage-subscription"
            element={
              <ProtectedRoute>
                <Manage
                  leftDays="12 months left"
                  duesAmount="2388"
                  date="04 Jan 2025"
                />
              </ProtectedRoute>
            }
          />
          <Route
            path="/manage-subscription/request-refund"
            element={
              <ProtectedRoute>
                <RequestRefundEndSubscription
                  text="Request Refund"
                  buttonText="Request refund"
                />
              </ProtectedRoute>
            }
          />
          <Route
            path="/manage-subscription/re-subscribe"
            element={
              <ProtectedRoute>
                <ManageResubscribe renewCancelled="Renewal Cancelled" />
              </ProtectedRoute>
            }
          />
          <Route
            path="/manage-subscription/cancel-subscription"
            element={
              <ProtectedRoute>
                <RequestRefundEndSubscription
                  text="Cancel Subscription"
                  buttonText="Cancel subscription"
                />
              </ProtectedRoute>
            }
          />
          <Route
            path="/manage-subscription/cancel-subscription/cancel-feedback"
            element={
              <ProtectedRoute>
                <CancelFeedback
                  buttonText="Cancel subscription"
                  purpose="Cancel Subscription"
                />
              </ProtectedRoute>
            }
          />
          <Route
            path="/manage-subscription/request-refund/refund-feedback"
            element={
              <ProtectedRoute>
                <CancelFeedback
                  buttonText="Get refund"
                  purpose="Request Refund"
                />
              </ProtectedRoute>
            }
          />
          <Route
            path="/manage-subscription/request-refund/refund-feedback/refund-successful"
            element={
              <ProtectedRoute>
                <Refund />
              </ProtectedRoute>
            }
          />
          <Route
            path="/manage-subscription/cancel-subscription/cancel-feedback/cancelled"
            element={
              <ProtectedRoute>
                <CancelSubscription />
              </ProtectedRoute>
            }
          />
          <Route
            path="/beurer/success"
            element={
              <ProtectedRoute>
                <PartnershipPayment />
              </ProtectedRoute>
            }
          />
          <Route path="/beurer" element={<PartnershipScreen />} />
          <Route path="/*" element={<App />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
      {/* <FooterInfo /> */}
    </StrictMode>
  </BrowserRouter>
);
