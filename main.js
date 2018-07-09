var app = new Vue({
  el: '#app',
  data:{
    brand: 'Apple',
    product: 'MacBooks',
    image: 'https://images.unsplash.com/photo-1494698853255-d0fa521abc6c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=56bc69d4b73ae8a09b6232213900eebe&auto=format&fit=crop&w=800&q=80',
    inStock: false,
    details: ["16gb Ram", "15 inch screen", "GTx 1080Ti"],
    variants:[
      {
        variantId: 2234,
        variantColor: "Black",
        variantImage: 'https://images.unsplash.com/photo-1494698853255-d0fa521abc6c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=56bc69d4b73ae8a09b6232213900eebe&auto=format&fit=crop&w=800&q=80'
      },
      {
        variantId: 2235,
        variantColor: "Silver",
        variantImage: "https://images.unsplash.com/photo-1517179465283-0221aea1d382?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=faeedfc8042fa24be161474dbcb5b065&auto=format&fit=crop&w=666&q=80"
      }
    ],
    cart:0
  },
  methods: {
    addtocart: function(){
      this.cart += 1
    },
    updateProduct: function(variantImage){
      this.image= variantImage
    }
  },
  computed: {
    title() {
      return this.brand + ' ' + this.product
    }
  }
})