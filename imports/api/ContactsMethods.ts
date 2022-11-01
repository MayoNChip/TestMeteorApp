import { Meteor } from "meteor/meteor";
import { contactsCollection } from "./ContactsCollection";

Meteor.methods({
  "contacts.insert"({ name, email, imageURL }) {
    return contactsCollection.insert({
      name,
      email,
      imageURL,
      createdAt: new Date(),
    });
  },
});
