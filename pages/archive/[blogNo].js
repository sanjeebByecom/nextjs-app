import { useRouter } from 'next/router'

const BlogNo = () => {
  const router = useRouter()
  const blogNumber = router.query.blogNo;
  return <>
    <h1>Blog No: {blogNumber} </h1>
  </>;
};

export default BlogNo;
