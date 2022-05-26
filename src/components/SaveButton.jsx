import React from 'react';

const SaveButton = (props) => {
   return (
      <button
         className="save-btn"
         type="submit"
         onClick={(e) => props.saveEmployee(e)}
      >
         Save
      </button>
   );
};

export default SaveButton;
