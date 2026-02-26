import { Homepage, CreatePost, PostPage} from "./pages/index";
import { Route, Routes, useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  return (
    <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/posts/new" element={<CreatePost/>} />
      <Route path="/posts/:id" element={<PostPage/>} />
      <Route path="*" element={<><div>Not found: 404</div> <button onClick={() => navigate('/')}>Назад</button></>} />
    </Routes>
  );
}

export default App;
