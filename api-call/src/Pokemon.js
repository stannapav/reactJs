function Pokemon(props) {
  return (
    <div>
      <h3>Інформація про вашого покемона:</h3>
      <p>Ім'я: {props.name}</p>
      <p>Висота: {props.height} feet</p>
      <p>Вага: {props.weight} lb</p>
      <p>Іконка:</p>
      <img src={props.sprites.front_default} alt="" />
    </div>
  );
}

export default Pokemon;
