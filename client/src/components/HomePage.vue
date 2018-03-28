<template>
<div>
  <slider/>

  <section>
    <div class="container">
      <div class="row">
        <div class="col-sm-3">
          <div class="left-sidebar">
            <h2>Category</h2>
            <div class="panel-group category-products" id="accordian"><!--category-productsr-->
              <div class="panel panel-default">
                <div class="panel-heading">
                  <h4 class="panel-title">
                    <a data-toggle="collapse" data-parent="#accordian" href="#mens">
                      <span class="badge pull-right"><i class="fa fa-plus"></i></span>
                      Mens
                    </a>
                  </h4>
                </div>
                <div id="mens" class="panel-collapse collapse">
                  <div class="panel-body">
                    <ul>
                      <li><a href="#">Baju Koko</a></li>
                      <li><a href="#">Sarung</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="panel panel-default">
                <div class="panel-heading">
                  <h4 class="panel-title">
                    <a data-toggle="collapse" data-parent="#accordian" href="#womens">
                      <span class="badge pull-right"><i class="fa fa-plus"></i></span>
                      Womens
                    </a>
                  </h4>
                </div>
                <div id="womens" class="panel-collapse collapse">
                  <div class="panel-body">
                    <ul>
                      <li><a href="#">Hijab</a></li>
                      <li><a href="#">Gamis</a></li>
                      <li><a href="#">Pamis</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="panel panel-default">
                <div class="panel-heading">
                  <h4 class="panel-title"><a href="#">Kids</a></h4>
                </div>
              </div>
            </div>
            <div class="shipping text-center"><!--shipping-->
              <img src="@/assets/images/home/shipping.jpg" alt="" />
            </div><!--/shipping-->
          </div>
        </div>
        <div class="col-sm-9 padding-right">
          <div class="features_items"><!--features_items-->
            <h2 class="title text-center">Features Items</h2>
            <div class="col-sm-4">
              <div class="product-image-wrapper">
                <div class="single-products">
                    <div class="productinfo text-center">
                      <img src="@/assets/images/home/product-1.png" alt="" />
                      <h2>$56</h2>
                      <p>Easy Polo Black Edition</p>
                      <a href="#" class="btn btn-default add-to-cart"><i class="fa fa-crosshairs"></i>Detail</a>
                      <a href="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Add cart</a>
                    </div>
                    <div class="product-overlay">
                      <div class="overlay-content">
                        <h2>$56</h2>
                        <p>Easy Polo Black Edition</p>
                        <a href="#" class="btn btn-default add-to-cart"><i class="fa fa-crosshairs"></i>Detail</a>
                        <a href="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Add cart</a>
                      </div>
                    </div>
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="product-image-wrapper">
                <div class="single-products">
                    <div class="productinfo text-center">
                      <img src="@/assets/images/home/product-2.png" alt="" />
                      <h2>$56</h2>
                      <p>Easy Polo Black Edition</p>
                      <a href="#" class="btn btn-default add-to-cart"><i class="fa fa-crosshairs"></i>Detail</a>
                      <a href="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Add cart</a>
                    </div>
                    <div class="product-overlay">
                      <div class="overlay-content">
                        <h2>$56</h2>
                        <p>Easy Polo Black Edition</p>
                        <a href="#" class="btn btn-default add-to-cart"><i class="fa fa-crosshairs"></i>Detail</a>
                        <a href="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Add cart</a>
                      </div>
                    </div>
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="product-image-wrapper">
                <div class="single-products">
                    <div class="productinfo text-center">
                      <img src="@/assets/images/home/product1.jpg" alt="" />
                      <h2>$56</h2>
                      <p>Easy Polo Black Edition</p>
                      <a href="#" class="btn btn-default add-to-cart"><i class="fa fa-crosshairs"></i>Detail</a>
                      <a href="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Add cart</a>
                    </div>
                    <div class="product-overlay">
                      <div class="overlay-content">
                        <h2>$56</h2>
                        <p>Easy Polo Black Edition</p>
                        <a href="#" class="btn btn-default add-to-cart"><i class="fa fa-crosshairs"></i>Detail</a>
                        <a href="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Add cart</a>
                      </div>
                    </div>
                </div>
              </div>
            </div>
          </div><!--features_items-->

          <div class="recommended_items"><!--recommended_items-->
            <h2 class="title text-center">recommended items</h2>
            <div id="recommended-item-carousel" class="carousel slide" data-ride="carousel">
              <div class="carousel-inner">
                <div class="item active">
                  <div class="col-sm-4">
                    <div class="product-image-wrapper">
                      <div class="single-products">
                        <div class="productrecomended text-center">
                          <img src="@/assets/images/home/recommend-1.png" alt="" />
                          <h2>$56</h2>
                          <p>Modern Style Hijab</p>
                          <!-- <a href="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Add cart</a> -->
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="product-image-wrapper">
                      <div class="single-products">
                        <div class="productrecomended text-center">
                          <img src="@/assets/images/home/recommend-2.png" alt="" />
                          <h2>$56</h2>
                          <p>Modern Style Hijab</p>
                          <!-- <a href="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Add cart</a> -->
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="product-image-wrapper">
                      <div class="single-products">
                        <div class="productrecomended text-center">
                          <img src="@/assets/images/home/recommend-3.png" alt="" />
                          <h2>$56</h2>
                          <p>Modern Style Hijab</p>
                          <!-- <a href="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Add cart</a> -->
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div class="col-sm-4">
                    <div class="product-image-wrapper">
                      <div class="single-products">
                        <div class="productrecomended text-center">
                          <img src="@/assets/images/home/recommend-4.png" alt="" />
                          <h2>$56</h2>
                          <p>Modern Kid Muslimah</p>
                          <!-- <a href="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Add cart</a> -->
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="product-image-wrapper">
                      <div class="single-products">
                        <div class="productrecomended text-center">
                          <img src="@/assets/images/home/recommend-5.png" alt="" />
                          <h2>$56</h2>
                          <p>Modern Kid Muslimah</p>
                          <!-- <a href="#" class="btn btn-default add-to-cart" disabled><i class="fa fa-shopping-cart"></i>Add cart</a> -->
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="product-image-wrapper">
                      <div class="single-products">
                        <div class="productrecomended text-center">
                          <img src="@/assets/images/home/recommend-6.png" alt="" />
                          <h2>$56</h2>
                          <p>Modern Kid Muslimah</p>
                          <!-- <a href="#" class="btn btn-default add-to-cart" disabled><i class="fa fa-shopping-cart"></i>Add cart</a> -->
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
                <a class="left recommended-item-control" href="#recommended-item-carousel" data-slide="prev">
                <i class="fa fa-angle-left"></i>
                </a>
                <a class="right recommended-item-control" href="#recommended-item-carousel" data-slide="next">
                <i class="fa fa-angle-right"></i>
                </a>
            </div>
          </div><!--/recommended_items-->
        </div>
      </div>
    </div>
  </section>
</div>
</template>

<script>
import slider from '@/components/Slider'

export default {
  components: {
    slider
  }
}
</script>
