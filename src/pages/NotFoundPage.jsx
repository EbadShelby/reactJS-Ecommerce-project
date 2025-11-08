import { Header } from "../components/Header";
import './NotFoundPage.css';
export function NotFoundPage() {
  return (
    <>
      <Header/>
      <div className="not-found-container">
        <h1 className="not-found">404 | Not Found</h1>
      </div>
    </>
  );
}