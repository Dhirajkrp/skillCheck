import React, { useState } from "react";
import FaqCard from "../../components/FaqCard";
import ResourceCard from "../../components/ResourceCard";
import TopicCard from "../../components/TopicCard";

function AddLanguage() {
  const [tempId, setTempId] = useState(101);
  const [langName, setLangName] = useState("");
  const [langImage, setLangImage] = useState("");
  const [topics, setTopics] = useState([
    {
      placeholder: "Add new topic",
      value: "",
      id: 100,
      link: "",
      setValue(data) {
        this.value = data;
      },
      setResource(data) {
        this.link = data;
      },
    },
  ]);

  const [faq, setFaq] = useState([]);

  function addFaq() {
    setTempId((prev) => prev + 1);
    const newFaq = {
      question: "",
      answer: "",
      id: tempId,
      setQuestion(data) {
        this.question = data;
      },
      setAnswer(data) {
        this.answer = data;
      },
    };

    setFaq([...faq, newFaq]);
  }

  function removeFaq(faqId) {
    const filteredFaq = faq.filter((f) => f.id !== faqId);
    setFaq(filteredFaq);
  }

  const addTopic = () => {
    setTempId((prev) => prev + 1);
    const newTopic = {
      placeholder: "Add new topic",
      value: "",
      id: tempId + 1,
      link: "",
      setValue(data) {
        this.value = data;
      },
      setResource(data) {
        this.link = data;
      },
    };
    setTopics([...topics, newTopic]);
  };

  const removeTopic = (targetId) => {
    const updatedTopics = topics.filter((topic) => topic.id !== targetId);
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

      <div className="topics-section">
        <h5>Add Topics For the language:</h5>
        <div className="topics-list">
          {topics.map((topic) => {
            return (
              <TopicCard
                topic={topic}
                removeTopic={removeTopic}
                key={topic.id}
              />
            );
          })}
        </div>
        <button onClick={() => addTopic()}> Add Topic+</button>
      </div>

      <div className="topics-section">
        <h5>Add Resources for the topic</h5>
        <div className="topics-list">
          {topics.map((topic) => {
            return <ResourceCard topic={topic} key={topic.id} />;
          })}
        </div>
      </div>

      <div className="topics-section">
        <h5>Frequenlty Asked Questions:</h5>
        <div className="topics-list">
          {faq.map((f) => {
            return <FaqCard faq={f} key={f.id} removeFaq={removeFaq} />;
          })}
        </div>
        <button onClick={() => addFaq()}> + Add FAQ</button>
      </div>
    </form>
  );
}

export default AddLanguage;
