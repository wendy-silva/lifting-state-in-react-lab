const BurgerStack = (props) => {
    const handleRemoveFromStack = (ingredient) => {
        props.removeFromStack(ingredient);
    };
  return (
    <ul>
      {props.ingredients.map((ingredient, idx) => {
        return (
          <li key={idx} style={{ backgroundColor: ingredient.color }}>
            {ingredient.name}
            <button onClick={() => {handleRemoveFromStack(idx)}}>X</button> 
          </li>
        );
      })}
    </ul>
  )
};
  
  export default BurgerStack;