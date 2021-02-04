const TextInput = (props) => {
  return (
    <div className="left tile">
      <textarea
        value={props.value}
        name=""
        id=""
        onInput={(event) => props.setText(event.target.value)}
      ></textarea>
    </div>
  );
};

export default TextInput;
