const ProductsContainer = ({ products, addToCart }) => (
    <ProductsList title="Products">
      {products.map(product =>
        <ProductItem
          key={product.id}
          product={product}
          onAddToCartClicked={() => addToCart(product.id)}
          onIncreaseQuantityClicked={() => increaseQuantity(product.id)} 
          onDecreaseQuantityClicked={() => decreaseQuantity(product.id)} />
      )}
    </ProductsList>
  )
  
  ProductsContainer.propTypes = {
    products: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      inventory: PropTypes.number.isRequired
    })).isRequired,
    addToCart: PropTypes.func.isRequired,
    increaseQuantity: PropTypes.func.isRequired
  }
  
  const mapStateToProps = state => ({
    products: getVisibleProducts(state.products)
  })
  
  export default connect(
    mapStateToProps,
    { addToCart, increaseQuantity, decreaseQuantity }
  )(ProductsContainer)