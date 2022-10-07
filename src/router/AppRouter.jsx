import {Routes,Route} from 'react-router-dom'
import { AuthRoutes } from '../auth'
import { CompanyAppRoutes } from '../company-app/routes'
import { SelectCompanyRoutes } from '../select-company'

export const AppRouter = () => {
  return (
    <Routes>
        <Route path='/auth/*' element={<AuthRoutes />} />
        <Route path='/select-company/*' element={<SelectCompanyRoutes />} />

        <Route path='/*' element={<CompanyAppRoutes />} />
    </Routes>
  )
}
