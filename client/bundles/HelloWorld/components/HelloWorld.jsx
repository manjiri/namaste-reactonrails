import PropTypes from 'prop-types';
import React from 'react';

const HelloWorld = ({ name, updateName }) => (
  <div>
    <h3>
      Namaste, {name}!
    </h3>
    <hr />
    <form >
      <label htmlFor="name">
        Say namaste to:
      </label>
      <input
        id="name"
        type="text"
        value={name}
        onChange={(e) => updateName(e.target.value)}
      />
    </form>
  </div>
);

HelloWorld.propTypes = {
  name: PropTypes.string.isRequired,
  updateName: PropTypes.func.isRequired,
};

export default HelloWorld;
