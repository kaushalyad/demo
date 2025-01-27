import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import PlanScreen from "./screens/PlanScreen.jsx";
import PostPayment from "./components/PostPayment.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./router/ProtectedRoute.jsx";
import { AuthProvider } from "./hooks/useAuth.jsx";
import NotFound from "./components/NotFound.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path={`/plans`} element={<PlanScreen />} />
          <Route
            path="/plans/payment/success"
            element={
              <ProtectedRoute>
                <PostPayment />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </StrictMode>
  </BrowserRouter>
);
