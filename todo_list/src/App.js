import "./style.css/App.css";
import React, { useState } from "react";

import ToDoList from "./components/ToDoList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/MySelect/MySelect";
import PageTitle from "./pageDesign/title/PageTitle";
import SearchInput from "./components/UI/Input/SearchInput";
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/MyButton/MyButton";
import SortButton from "./components/UI/SortButton/SortButton";

function App() {
  const [pageTitle] = useState({ firstEl: "To", secondEl: "Do" });
  const [modal, setModal] = useState(false);
  const [posts, setPosts] = useState([
    { id: 1, title: "bb", body: "aa", isCompleted: false },
    { id: 2, title: "aa", body: "bb", isCompleted: false },
  ]);
  const [selectSort, setSelectSort] = useState("");
  const [search, setSearch] = useState("");

  function checkSorted(selectSort, posts) {
    return !selectSort
      ? posts
      : [...posts].sort((a, b) => a[selectSort].localeCompare(b[selectSort]));
  }

  function createPost(newPost) {
    setPosts([...posts, newPost]);
  }

  function sortPosts(filter) {
    setSelectSort(filter);
  }

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const handleSortArray = (value, arr) => {
    if (!value || !arr) return;

    return () => {
      setPosts(checkSorted(value, posts));
    };
  };

  function sortedAndSearched(posts) {
    return posts.filter((post) =>
      post.title.toLowerCase().includes(search.toLowerCase())
    );
  }
  const handleSearch = (e) => setSearch(e.target.value);

  return (
    <div className="App">
      <div className="header">
        <div className="container">
          <PageTitle
            firstPart={pageTitle.firstEl}
            secondPart={pageTitle.secondEl}
          />
          <div>icon</div>
        </div>
      </div>
      <div className="content">
        <div className="container">
          <div className="displayFlex">
            <SearchInput value={search} onChange={handleSearch} />
            <MyButton style={{ marginLeft: 5 }} onClick={() => setModal(true)}>
              Create +
            </MyButton>
          </div>
          <MyButton onClick={handleSortArray(selectSort, posts)}>
            Sort1
          </MyButton>
          <MySelect
            value={selectSort}
            onChange={sortPosts}
            options={
              posts.length
                ? Object.keys(posts[0])
                    .filter((el) => el !== "id" && el !== "isCompleted")
                    .map((el) => ({ value: el, name: el }))
                : []
            }
            defaultValue="Cортировать по"
          />
          <MyModal visible={modal} setVisible={setModal}>
            <PostForm create={createPost} />
          </MyModal>
          <ToDoList remove={removePost} posts={sortedAndSearched(posts)} />
        </div>
      </div>
    </div>
  );
}

export default App;
