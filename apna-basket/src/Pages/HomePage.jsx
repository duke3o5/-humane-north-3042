import React from "react";
import { Link } from "react-router-dom";
import HomePageSlider from "../components/HomePageSlider";
import { ProductCard } from "../components/ProductCard";
import "../style.scss";

const items_offers_imgs = [
  {
    url: `https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_250323_01.png`,
    id: 1,
  },
  {
    url: `https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_250323_02.png`,
    id: 2,
  },
  {
    url: `https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_250323_03.png`,
    id: 3,
  },
  {
    url: `https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_250323_04.png`,
    id: 4,
  },
  {
    url: `https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_250323_05.png`,
    id: 5,
  },
  {
    url: `https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_250323_06.png`,
    id: 6,
  },
];
// Bank Cards
const bank_cards = [
  {url: `https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6cf6d3c9-a568-4a3c-8ec2-6476ddcebad1/4ea30d34-2092-4c11-9759-4f8c6fe09c6a/t1_hp_aff_m_simple-all_360_250323.jpg`, id: 1},
  {url: `https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6cf6d3c9-a568-4a3c-8ec2-6476ddcebad1/4ea30d34-2092-4c11-9759-4f8c6fe09c6a/t1_hp_aff_m_mobikwik_360_250323.jpg`, id: 2},
  {url: `https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6cf6d3c9-a568-4a3c-8ec2-6476ddcebad1/4ea30d34-2092-4c11-9759-4f8c6fe09c6a/t1_hp_aff_m_paytm_360_250323.jpg`, id: 3},
  {url: `https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6cf6d3c9-a568-4a3c-8ec2-6476ddcebad1/4ea30d34-2092-4c11-9759-4f8c6fe09c6a/t1_hp_aff_m_freecharge_360_250323.jpg`, id: 4},
]
export const HomePage = () => {
  return (
    <div className="home-main">
      <div className="container">
        {/* Image slider */}
        <div className="image-slider-top">
          <HomePageSlider />
        </div>
        {/* Item Offers */}
        <div className="item-offers">
          {items_offers_imgs.map((item) => {
            return (
              <div className="item-offers-ch" key={item.id}>
                <Link>
                  <img style={{ height: "50px" }} src={item.url} alt="" />
                </Link>
              </div>
            );
          })}
        </div>
        {/* Bank Offer */}
        <div className="bank-offers">
          <div className="bank-heading">
            <p>Bank Offers</p>
          </div>
          <div className="bank-cards">
            {
              bank_cards.map((item, index) => {
                return (
                  <div className="bank-cards-ch" key={item.id}>
                    <Link>
                      <img style={{width: '100%'}} src={item.url} alt="" />
                    </Link>
                  </div>
                )
              })
            }
          </div>
        </div>
        {/* Best Seller ==> The carousal Part */}
        <div className="best-seller">
          <h5>Best Seller</h5>
          <div className="best-seller-carousal">
            {<ProductCard />}
          </div>
        </div>
      </div>
    </div>
  );
};
