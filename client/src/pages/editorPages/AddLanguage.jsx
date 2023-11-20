import React, { useState } from "react";
import TopicCard from "../../components/TopicCard";

function AddLanguage() {
  const [langName, setLangName] = useState("");
  const [langImage, setLangImage] = useState("");
  const [topics, setTopics] = useState(["topic 1", "topic 2"]);

  // const topicsList = document.querySelector('.topics-list');
  // const addNewTopic = ()=>{
  //     const newTopic = document.createElement('input');
  //     topicsList.appendChild(newTopic , 'beforeend');
  // }

  const addTopic = () => {
    setTopics([...topics, "new Topic"]);
  };

  const removeTopic = (target) => {
    console.log(`removing ${target}`);
    const updatedTopics = topics.filter((topic) => topic !== target);
    setTopics(updatedTopics);
  };
  return (
    <form action="" onSubmit={(e) => e.preventDefault()}>
      <div className="input-container">
        <label htmlFor="language-name">Enter the language Name</label>
        <input
          type="text"
          name="language-name"
          id="language-name"
          value={langName}
          onChange={(e) => setLangName(e.target.value)}
        />
      </div>
      <div className="input-container">
        <label htmlFor="language-image">Enter the image link</label>
        <input
          type="text"
          name="language-image"
          id="language-image"
          value={langImage}
          onChange={(e) => setLangImage(e.target.value)}
        />
      </div>
      //topics for the language.
      <div className="topics-section">
        <h5>Add Topics For the language:</h5>
        <div className="topics-list">
          {topics.map((topic) => {
            return <TopicCard value={topic} removeTopic={removeTopic} />;
          })}
        </div>
        <button onClick={() => addTopic()}> Add Topic+</button>
      </div>
    </form>
  );
}

export default AddLanguage;
