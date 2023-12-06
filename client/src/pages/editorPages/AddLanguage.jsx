import React, { useState } from "react";
import FaqCard from "../../components/FaqCard";
import ResourceCard from "../../components/ResourceCard";
import TopicCard from "../../components/TopicCard";

import axios from "axios";

import "../../css/AddLanguage.css";

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

  const handleSubmit = () => {
    const newLanguage = {
      name: langName,
      image: langImage,
      topics: topics.map((topic) => topic.value),
      resources: topics.map((topic) => {
        return { name: topic.value, link: topic.link };
      }),
      faq: faq.map((f) => {
        return { question: f.question, answer: f.answer };
      }),
    };

    console.log(newLanguage);

    //adding the new language in the database.

    axios
      .post("http://localhost:3500/api/languages", newLanguage)
      .then((res) => {
        if (res.status === 201) {
          alert("New Language added to the database");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <form action="" onSubmit={(e) => e.preventDefault()}>
      <div className="language-input-header">
        <div className=" input-image-container">
          <div className="image-placeholder">
            <img src={langImage} />
          </div>
        </div>

        <div className=" input-name-container">
          <label htmlFor="language-name">Language Name: </label>
          <input
            type="text"
            name="language-name"
            id="language-name"
            value={langName}
            onChange={(e) => setLangName(e.target.value)}
            placeholder="Eg: javascript"
          />
          <label htmlFor="language-image">Image Link: </label>
          <input
            type="text"
            name="language-image"
            id="language-image"
            value={langImage}
            placeholder="Eg: https://nodejs.org/static/images/logo.svg"
            onChange={(e) => setLangImage(e.target.value)}
          />
        </div>
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
        <button onClick={() => addTopic()} className="btn btn-primary">
          {" "}
          Add Topic+
        </button>
      </div>

      <div className="topics-section">
        <h5>Add Resources for the topic</h5>
        <div className="topics-list">
          {topics.map((topic) => {
            return <ResourceCard topic={topic} key={topic.id} />;
          })}
        </div>
      </div>

      <div className="faq-section">
        <h5>Frequenlty Asked Questions:</h5>
        <div className="faq-list">
          {faq.map((f) => {
            return <FaqCard faq={f} key={f.id} removeFaq={removeFaq} />;
          })}
        </div>
        <button onClick={() => addFaq()}> + Add FAQ</button>
      </div>
      <div className="cta-container">
        <button className="btn btn-primary" onClick={() => handleSubmit()}>
          Add Language
        </button>
      </div>
    </form>
  );
}

export default AddLanguage;
