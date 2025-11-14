import { useCartStore } from '@/stores/cart'
import { storeToRefs } from 'pinia'

export const useCart = () => {
  const store = useCartStore()
  const { items, totalItems, totalPrice, discountPrice } = storeToRefs(store)

  const { addItem, removeItem, updateQuantity, clearCart } = store

  const safeAddItem = (product) => {
    if (!product?.id || !product?.name || product?.price <= 0) {
      alert('Bad good, please try again')
      return
    }
    addItem(product)
  }

  return {
    items,
    totalItems,
    totalPrice,
    discountPrice,
    addItem: safeAddItem,
    removeItem,
    updateQuantity,
    clearCart,
  }
}
