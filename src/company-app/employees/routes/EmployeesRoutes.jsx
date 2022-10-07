import { Route, Routes } from "react-router-dom"
import { EmployeesPage, CreateEmployeePage, EditEmployeePage } from "../pages";

export const EmployeesRoutes = () => {
  return (
    <Routes>
        <Route path="/:id" element={<EmployeesPage />} />
        <Route path="/create-employee" element={<CreateEmployeePage />} />
        <Route path="/edit-employee/:id" element={<EditEmployeePage />} />
    </Routes>
  )
}
