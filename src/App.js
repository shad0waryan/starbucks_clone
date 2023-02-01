import "./App.css";
import Navbar from "./Components/Navbar";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import star1 from "./assets/star.png";
import star2 from "./assets/star (1).png";
import Category from "./Components/category";
import Card from "./Components/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Footer from "./Components/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      {/* Welcome bar */}
      <div className="welcome__bar text-[#ffffff] bg-darkgreen h-[80px] hover:cursor-pointer">
        <p className="font-bold text-s4">Welcome Tier Rewards Program</p>
        <span className="flex items-center">
          <img src={star1} alt="" width={"24px"} height={"24px"} />
          <p className="text-s6 ml-2">2</p>
          <p className="text-s4 ml-1 ">/5</p>
          <p className="text-s4 ml-1 ">stars</p>
        </span>
        <span className="flex items-center">
          <img src={star2} alt="" width={"24px"} height={"24px"} />
          <p className="text-s6 ml-2">3</p>
          <p className="text-s4 ml-1 ">Rewards</p>
        </span>
        <span className="flex items-center gap-1">
          <p className="text-s2 ">You are </p>
          <p className="text-s2 font-bold">2 stars</p>
          <p className="text-s2 ">away from another reward.</p>
        </span>
        <ArrowCircleRightIcon
          className="right__arrow"
          style={{ color: "white" }}
        />
      </div>
      {/* Balance */}
      <div className="balance__bar h-[32px] bg-darkcream p-2">
        <p className="text-center text-s2 ">Total card Balance: Rs. 1730.58</p>
      </div>

      {/* Categories */}
      <div className="categories flex-col m-[10px] pt-16 pb-16 ">
        <p className="text-s6 font-extrabold text-darkgreen pl-28">
          Handcrafted Curations
        </p>
        <div className="categories__list flex  justify-evenly mt-5">
          <Category
            photoUrl={
              "https://hips.hearstapps.com/del.h-cdn.co/assets/17/51/1513892402-starbucks-black-and-white-mocha-2.jpg"
            }
            name={"Bestseller"}
          />
          <Category
            photoUrl={
              "https://res.cloudinary.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/182191ab163770437b62861a6f987709"
            }
            name={"Drinks"}
          />
          <Category
            photoUrl={
              "https://www.foodbusinessnews.net/-/media/8C28927BD2844918A2CBC7810086146A.ashx?h=300&w=432"
            }
            name={"Food"}
          />
          <Category
            photoUrl={
              "https://cdn.shopify.com/s/files/1/0256/8024/8929/products/76df240c-ec5c-4636-81cc-9a8a32c26f9d1649064010201BarandDrinkware1.webp?v=1656499764&width=1445"
            }
            name={"Merchandise"}
          />
          <Category
            photoUrl={
              "https://starbucks-cdn-01.s3.ap-south-1.amazonaws.com/Category/Small/CoffeeAtHome.jpg"
            }
            name={"Coffee At Home"}
          />
          <Category
            photoUrl={
              "https://starbucks-cdn-01.s3.ap-south-1.amazonaws.com/Category/Small/ReadyToEat.jpg"
            }
            name={"Ready to Eat"}
          />
        </div>
      </div>

      {/* Recommendations */}

      <div className="categories flex-col p-[25px] bg-darkcream pl-28 pr-28">
        <p className="text-s6 font-bold text-darkgreen mb-8">
          Barista Recommends
        </p>
        <p className="text-s3 font-bold text-lightgreen self-center text-center">
          <ArrowBackIcon />
          Scroll
          <ArrowForwardIcon />
        </p>
        <Swiper
          spaceBetween={40}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          className="mt-4 mb-11"
        >
          {/* <div className="cards__div flex overflow-x-scroll gap-10 p-10 overscroll-contain no-scrollbar"> */}
          <SwiperSlide>
            <Card
              photoUrl={
                "https://b.zmtcdn.com/data/pictures/chains/8/18630948/149f4d2fc28da147452d5db105d17905.png"
              }
              vg={"a"}
              name={"Java Chip Frappuccino"}
              price={"364.50"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              photoUrl={
                "https://thewoodenskillet.com/wp-content/uploads/2021/07/vanilla-sweet-cream-cold-brew-1.jpg"
              }
              vg={"a"}
              name={"Vanilla Sweet Cream Cold Brew"}
              price={"338.25"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              photoUrl={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAHc-rVOpr-908_Et4HyS835uWPdVwXExqZ-qzhKOTfclcqYQFZQiVC3Bh8JKfZGNyGkA&usqp=CAU"
              }
              vg={"a"}
              name={"Signature Hot Chocolate"}
              price={"237.00"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              photoUrl={
                "https://media-cdn.tripadvisor.com/media/photo-s/07/83/a3/d4/latte.jpg"
              }
              vg={"a"}
              name={"Caffe Latte"}
              price={"275.25"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              photoUrl={
                "https://static01.nyt.com/images/2016/02/24/dining/24FASTMUFFIN/24FASTMUFFIN-square640.jpg"
              }
              nvg={"a"}
              name={"Blueberry Muffin"}
              price={"394.40"}
            />
          </SwiperSlide>

          {/* </div> */}
        </Swiper>
      </div>
      <Footer />
    </div>
  );
}

export default App;
