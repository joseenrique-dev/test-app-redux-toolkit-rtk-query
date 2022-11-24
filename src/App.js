import { PostsList } from './features/posts/PostList';
import './App.css';
import AddPostForm from './features/posts/AddPostForm';
import { Route, Routes } from 'react-router-dom';
import NoMatch from './features/posts/NoMatch';
import SinglePostPage from './features/posts/SinglePostPage';

function App() {
  return (
    <main className='App'>
      <Routes>
        <Route path='/' element={<PostsList />} />
        <Route path='post/:postId' element={<SinglePostPage />} />
        <Route path='*' element={<NoMatch />} />
      </Routes>
    </main>
  );
}

export default App;
