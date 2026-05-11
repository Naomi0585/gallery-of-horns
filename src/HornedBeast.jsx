
// LAB 01 - FEATURE TASKS
// The HornedBeast component needs to contain an <h2> that displays the title of the animal, an <img> element with src, alt and title attributes, and a <p> that displays the description.

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
