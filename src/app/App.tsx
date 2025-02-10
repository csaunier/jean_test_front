import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import InvoicesList from '@components/InvoicesList'
import InvoiceShow from '@components/InvoiceShow'
import { InvoiceEdit } from '@components/InvoiceEdit/InvoiceEdit'
import { InvoiceCreate } from '@components/InvoiceCreate/InvoiceCreate'

import { LandingPage } from '@components/LandingPage/LandingPage'
import { Layout } from '@components/Layout/Layout'

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/invoice/:id/edit" Component={InvoiceEdit} />
          <Route path="/invoice/:id" Component={InvoiceShow} />
          <Route path="/invoice/create" Component={InvoiceCreate} />
          <Route path="/invoices" Component={InvoicesList} />
        </Route>
        <Route path="/" Component={LandingPage} />
      </Routes>
    </Router>
  )
}

export default App
