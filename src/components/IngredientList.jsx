const IngredientList = (props) => {
const handleAddToStack = (ingredient) => {
        props.addToStack(ingredient);
    };
    
  return (
    <ul>
      {props.availableIngredients.map((ingredient, idx) => {
        return (
          <li key={idx} style={{ backgroundColor: ingredient.color }}>
            {ingredient.name}  
            <button onClick={() => {handleAddToStack(ingredient)}}>+</button>      
          </li>
        );
      })}
    </ul>
  );
};

export default IngredientList;