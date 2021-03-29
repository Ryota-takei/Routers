import { Link } from "react-router-dom";

export const Page404 = () => {
  return (
    <div>
      <h1>pageが存在しません。</h1>
      <Link to="/">Homeへ戻る</Link>
    </div>
  );
};
