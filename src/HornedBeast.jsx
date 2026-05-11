

function HornedBeast(props) {

  return (
    <div>
      <h2>{props.title}</h2>

      <img
      src="{props.imageUrl}"
      alt="{props.tittle}"
      title="{props.tittle}"
      width="300"
      />

      <p>{props.description}</p>
    </div>
  );
}
    
export default HornedBeast;
