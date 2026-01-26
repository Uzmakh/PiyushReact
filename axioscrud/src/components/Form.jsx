import { useEffect, useState } from "react";
import { createPost, updateData } from "../api/PostApi";

export const Form = ({
  postsData,
  setPostsData,
  updateDataApi,
  setUpdateDataApi,
}) => {
  const [addData, setAddData] = useState({
    title: "",
    body: "",
  });

  let isEmpty = Object.keys(updateDataApi).length === 0;
  console.log("Object-keys are empty:", isEmpty);

  // get the updated data and add into input field
  useEffect(() => {
    updateDataApi &&
      setAddData({
        title: updateDataApi.title || "",
        body: updateDataApi.body || "",
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [updateDataApi]);

  function handleInputChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    setAddData((prev) => {
      // console.log(prev);
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  const addPostsData = async () => {
    const response = await createPost(addData); //it will add data in real API
    console.log("Response:", response);
    if (response.status === 201) {
      // Find the maximum ID in existing posts
      const maxId =
        postsData.length > 0
          ? Math.max(...postsData.map((post) => post.id))
          : 100;

      const newPost = {
        ...response.data,
        id: maxId + 1,
      };
      setPostsData((prev) => [...prev, newPost]);
      setAddData({ title: "", body: "" });
    }
  };

  // to update post data
  const updatePostData = async () => {
    try {
      const response = await updateData(updateDataApi.id, addData);
      console.log(response);

      if (response.status === 200) {
        setPostsData((prev) => {
          console.log(prev);
          return prev.map((curElem) => {
            return curElem.id === response.data.id ? response.data : curElem;
          });
        });
        setAddData({ title: "", body: "" });
        setUpdateDataApi({});
      }
    } catch (error) {
      console.log(error);
    }
  };

  // form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const action = e.nativeEvent.submitter.value;
    if (action === "Add") {
      addPostsData();
    } else if (action === "Edit") {
      updatePostData();
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <label htmlFor="title"></label>
        <input
          type="text"
          autoComplete="off"
          id="title"
          name="title"
          placeholder="Add Title"
          value={addData.title}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="body"></label>
        <input
          type="text"
          autoComplete="off"
          id="body"
          name="body"
          placeholder="Add body"
          value={addData.body}
          onChange={handleInputChange}
        />
      </div>
      <button
        type="submit"
        className="add-btn"
        value={isEmpty ? "Add" : "Edit"}
      >
        {isEmpty ? "Add" : "Edit"}
      </button>
    </form>
  );
};
