import { useSelector } from 'react-redux';
import { getAllUsers } from '../users/usersSlice';

const PostAuthor = ({ userId }) => {
  const users = useSelector(getAllUsers);
  const author = users.find((user) => user.id === userId);
  console.log([userId, author]);
  return <span>by {author ? author.name : 'Unknown author'}</span>;
};

export default PostAuthor;
