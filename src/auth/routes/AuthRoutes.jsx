import { Navigate, Route, Routes } from "react-router-dom"
import {
  LoginPage,
  RecoverPasswordPage,
  RegisterPage,
  NewPasswordPage,
  SendMailPage,
} from "../pages";

export const AuthRoutes = () => {
  return (
    <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/new-password" element={<NewPasswordPage />} />
        <Route path="/recover-password" element={<RecoverPasswordPage />} />
        <Route path="/send-mail" element={<SendMailPage />} />

        <Route path="/*" element={<Navigate to="login" />} />
    </Routes>
  )
}
