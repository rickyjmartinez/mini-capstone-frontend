export function ProductsIndex(props) {
  return (
    <div>
      <h1>all products</h1>
      {props.products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.price}</p>
          <p>{product.description}</p>
          {product.images.map((image) => (
            <div key={image.id}>
              <img src={image.url} style={{height:100, width:100}}></img>
            </div>
          ))}
          </div>
      ))}

    </div>
  );
}