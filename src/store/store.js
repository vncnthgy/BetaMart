import Vuex from 'vuex'

export const store = new Vuex.Store({
  name: 'store',
  state: {
    products: [
      { id: 1, name: 'Sample Product 1', description: 'Sample Description 1', price: 199, },
      { id: 2, name: 'Sample Product 2', description: 'Sample Description 2', price: 299, },
      { id: 3, name: 'Sample Product 3', description: 'Sample Description 3', price: 399, },
      { id: 4, name: 'Sample Product 4', description: 'Sample Description 4', price: 499, },
      { id: 5, name: 'Sample Product 5', description: 'Sample Description 5', price: 599, },
      { id: 6, name: 'Sample Product 6', description: 'Sample Description 6', price: 699, },
      { id: 7, name: 'Sample Product 7', description: 'Sample Description 7', price: 799, },
      { id: 8, name: 'Sample Product 8', description: 'Sample Description 8', price: 899, },
    ],
    nextProductId: 9
  },
  mutations: {
    addProduct(state, productToAdd) {
      state.products.push({
        id: state.nextProductId,
        ...productToAdd
      });
      state.nextProductId++;
    },
    editProduct(state, productToEdit) {
      const index = state.products.findIndex(product => product.id === productToEdit.id);
      if (index !== -1) {
        state.products.splice(index, 1, productToEdit);
      }
    },
    deleteProduct(state, productToDelete) {
      state.products = state.products.filter(product => product.id !== productToDelete);
    }
  },
  actions: {
    addProduct({ commit }, productToAdd) {
      commit('addProduct', productToAdd);
    },
    editProduct({ commit }, productToEdit) {
      commit('editProduct', productToEdit);
    },
    deleteProduct({ commit }, productToDelete) {
      commit('deleteProduct', productToDelete);
    }
  }
});
