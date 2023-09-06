export function ProductsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateProduct(params, () => event.target.reset()); 
  }

  return (
    <div>
      <h1>New Product</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input name="name" type="text" placeholder="name of product" />
        </div>
        <div>
          Price: <input name="price" type="decimal precision: 6, scale: 2" placeholder="price of product" />
        </div>
        <div>
          Description: <input name="description" type="text" placeholder="description of product" />
        </div>
        <div>
          Supplier ID: <input name="supplier_id" type="integer" placeholder="supplier ID"/> 
        </div>
        <button type="submit">Create product</button>
      </form>
    </div>
  );
}