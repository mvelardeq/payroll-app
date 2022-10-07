import { Route, Routes, Navigate } from "react-router-dom"
import { EmployeesRoutes } from "../employees/routes/EmployeesRoutes"
import { HomePage } from "../home"

export const CompanyAppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/employee/*" element={<EmployeesRoutes />} />

      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  )
}
