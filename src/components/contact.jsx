import React from 'react';
import PropTypes from 'prop-types';

const Contact = ({ testProp }) => (
  <section>
    <h3>This is the Contact page.</h3>
    <p>Contact someone else! {testProp}</p>
  </section>
);
Contact.propTypes = {
  testProp: PropTypes.string.isRequired,
};
export default Contact;
