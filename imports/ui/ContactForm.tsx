import { Meteor } from "meteor/meteor";
import React, { ChangeEvent, useState } from "react";
import { contactsCollection } from "../api/ContactsCollection";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [imageURL, setImageURL] = useState("");

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handleImageURLChange = (e: ChangeEvent<HTMLInputElement>) => {
    setImageURL(e.target.value);
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log({ name, email, imageURL });
    Meteor.call(
      "contacts.insert",
      { name, email, imageURL }
      // (error: Meteor.Error) => {
      //   console.log(error);
      // }
    );
  };

  return (
    <div>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input
            value={name}
            onChange={handleNameChange}
            className="border"
            type="text"
            id="name"
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            value={email}
            onChange={handleEmailChange}
            className="border"
            type="text"
            id="email"
          />
        </div>
        <div>
          <label htmlFor="image">Image URL</label>
          <input
            value={imageURL}
            onChange={handleImageURLChange}
            className="border"
            type="text"
            id="image"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 rounded hover:bg-blue-600"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
