import { Header } from "../components/Header";
import "./NotFoundPage.css";
export function NotFoundPage({ cart }) {
  return (
    <>
      <title>Not Found</title>

      <Header cart={cart} />
      <div className="not-found-container">
        <h1 className="not-found">404 | Not Found</h1>
      </div>
    </>
  );
}
