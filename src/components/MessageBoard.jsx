import { useState } from "react";

function MessageBoard() {
  const [message, setMessage] = useState("");
  const [allMessage, setAllMessage] = useState([]);

  function handleMessageChange(event) {
    event.preventDefault();
    const updatedMessage = [...allMessage];
    updatedMessage.push(message);
    setAllMessage(updatedMessage);
    setMessage("");
  }

  function handleDelatedMessage(index) {
    const updatedMessage = [...allMessage];
    updatedMessage.splice(index, 1);
    setAllMessage(updatedMessage);
  }
  return (
    <div className="app-wrapper">
      <h1 className="app-title">Message board</h1>
      <form className="message-input-container" onSubmit={handleMessageChange}>
        <label>
          <input
            id="message-text"
            name="message-text"
            type="text"
            placeholder="Enter message here"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          />
        </label>
        <button className="submit-message-button">Submit</button>
      </form>
      <div className="board">
        {allMessage.map((item, index) => {
          return (
            <div key={index} className="message">
              <h1>{item}</h1>
              <button
                className="delete-button"
                onClick={() => handleDelatedMessage(index)}
              >
                x
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MessageBoard;
