<template>
  <div class="container">
    <div class="bg">
      <div class="row">
        <div class="col-sm-12">
          <div class="contact-form">
            <h2 class="title text-center">Add Product</h2>
            <div class="status alert alert-success" style="display: none"></div>
            <div class="form-group col-md-6">
              <input type="text" v-model="name" class="form-control" required="required" placeholder="Product Name">
            </div>
            <div class="form-group col-md-12">
              <input type="submit" @click="submit" name="submit" class="btn btn-primary pull-right" value="Submit">
            </div>
          </div>
        </div>
        <div class="col-sm-12"><br></div>
      </div>
    </div>

    <h2 class="title text-center">List Product</h2>
    <div class="cart_info table-responsive">
      <table class="table table-condensed">
        <thead>
          <tr>
            <td>No</td>
            <td>product Name</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(product, id) in products" :key="id">
            <td>{{id+1}}</td>
            <td>{{product.name}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import swal from 'sweetalert'
export default {
  data () {
    return {
      name: '',
      products: []
    }
  },
  created () {
    this.products = this.getAllProduct
    console.log('created', this.products)
  },
  computed: {
    getAllProduct: {
      get () {
        return this.$store.state.allProduct
      }
    }
  },
  methods: {
    getProducts () {
      this.products = this.getAllProduct
      console.log('products', this.getAllProduct)
    },
    submit () {
      this.$axios.post(`/products`, {
        name: this.name
      }, {
        headers: {
          apptoken: localStorage.getItem('token')
        }
      }).then(resp => {
        // console.log(resp)
        if (resp.status === 200) {
          this.getProducts()
          swal(`Nice, ${resp.data.message}`, { icon: 'success' })
        } else {
          swal(`Oops, ${resp.data.message}`, { icon: 'error' })
        }
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>
