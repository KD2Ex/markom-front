import cart from "../store/cart";


export function getCartCount(productId: number) {
	const count = cart.cartItems.items.find(item => item.product.id === productId)?.count
	return count;
}