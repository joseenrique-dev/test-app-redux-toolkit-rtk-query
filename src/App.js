import { PostsList } from './features/posts/PostList';
import './App.css';
import AddPostForm from './features/posts/AddPostForm';
import { Route, Routes } from 'react-router-dom';
import NoMatch from './components/NoMatch';
import SinglePostPage from './features/posts/SinglePostPage';
import Layout from './components/Layout';

function App() {
  /**
   * INDEX in route:
   * Determines if the route is an index route.
   * Index routes render into their parent's Outlet at their parent's URL (like a default child route).
   *
   * */
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<PostsList />} />
        <Route path='post'>
          <Route index element={<AddPostForm />} />
          <Route path=':postId' element={<SinglePostPage />} />
          <Route path='*' element={<NoMatch />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
