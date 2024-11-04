import { Route, Routes } from "react-router-dom";

import Header from "./components/Header/Header";

import UsersPage from "./pages/UsersPage";
import ProductsPage from "./pages/ProductsPage";
import PubPage from "./pages/PubPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import ProductReviewsPage from "./pages/ProductReviewsPage";
import NotFoundPage from "./pages/NotFoundPage";

/* Маршрутизація складається з двух основних етапів:
  1. Змінити ЮРЛ адресу (<Link to="/users">Users</Link> | <NavLink to="/users">Users</NavLink>)
  2. Підготовка маршруту до відображення сторінки за певним маршрутом (<Route path="/users" element={<UsersPage />}/>)
*/

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<PubPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/products" element={<ProductsPage />} />

        <Route path="/products/:productId" element={<ProductDetailsPage />}>
          <Route path="reviews" element={<ProductReviewsPage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;