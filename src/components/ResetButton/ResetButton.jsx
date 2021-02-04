const ResetButton = (props) => {
  return (
    <button
      className="resetBtn"
      type="button"
      onClick={(event) => props.setText("")}
    >
      Reset
    </button>
  );
};

export default ResetButton;
