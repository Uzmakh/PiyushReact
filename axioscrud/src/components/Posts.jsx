import { useEffect, useState } from "react";
import { deletePost, getPosts } from "../api/PostApi";
import { Form } from "./Form";

const Posts = () => {
  const [postsData, setPostsData] = useState([]);
  const [updateDataApi, setUpdateDataApi] = useState({});
  // console.log("Data we want to update:",updateDataAPI)

  // function to get posts from API
  const getPostsData = async () => {
    const response = await getPosts();
    console.log(response);
    console.log(response.data);
    setPostsData(response.data);
  };
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getPostsData();
  }, []);

  // function to delete post
  const handleDelete = async (id) => {
    try {
      const response = await deletePost(id);
      // console.log(response);
      if (response.status === 200) {
        const newUpdatedPosts = postsData.filter((curPost) => {
          return curPost.id !== id;
        });
        setPostsData(newUpdatedPosts);
      } else {
        console.log("Failed to delete the post:", response.status);
      }
    } catch (error) {
      console.log(error);
    }
  };
// function to update post
  const handleUpdatePost = (curElem) => setUpdateDataApi(curElem);

  return (
    <>
      <section className="section-form">
        <Form
          postsData={postsData}
          setPostsData={setPostsData}
          updateDataApi={updateDataApi}
          setUpdateDataApi={setUpdateDataApi}
        />
      </section>

      <section className="section-post">
        <ol>
          {postsData.map((curElem) => {
            const { id, body, title } = curElem;
            return (
              <li key={id}>
                <p>{id}</p>
                <p>Title:{title}</p>
                <p>Body:{body}</p>
                <button
                  className="edit-btn button"
                  onClick={() => handleUpdatePost(curElem)}
                >
                  Edit
                </button>
                <button
                  className="delete-btn button"
                  onClick={() => {
                    handleDelete(id);
                  }}
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ol>
      </section>
    </>
  );
};
export default Posts;
