import { Route, Routes, Navigate } from "react-router-dom"
import { CreateCompanyPage, SelectCompanyPage } from "../pages";

export const SelectCompanyRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<SelectCompanyPage /> } />
        <Route path="/create-company" element={<CreateCompanyPage /> } />

        <Route path="/*" element={<Navigate to="/select-company" /> } />
    </Routes>
  )
}
