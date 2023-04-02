import React from "react";
import { BsTagsFill } from "react-icons/bs";
import { MdExpandMore } from "react-icons/md";
import { Link } from "react-router-dom";
import HomePageSlider, {
  HomePageSliderBottom, MultipleItems,
} from "../components/HomePageSlider";
import { ProductCard } from "../components/ProductCard";
import "../style.scss";
import Nav from '../components/adminComponents/Navbar';

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
  {
    url: `https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6cf6d3c9-a568-4a3c-8ec2-6476ddcebad1/4ea30d34-2092-4c11-9759-4f8c6fe09c6a/t1_hp_aff_m_simple-all_360_250323.jpg`,
    id: 1,
  },
  {
    url: `https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6cf6d3c9-a568-4a3c-8ec2-6476ddcebad1/4ea30d34-2092-4c11-9759-4f8c6fe09c6a/t1_hp_aff_m_mobikwik_360_250323.jpg`,
    id: 2,
  },
  {
    url: `https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6cf6d3c9-a568-4a3c-8ec2-6476ddcebad1/4ea30d34-2092-4c11-9759-4f8c6fe09c6a/t1_hp_aff_m_paytm_360_250323.jpg`,
    id: 3,
  },
  {
    url: `https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6cf6d3c9-a568-4a3c-8ec2-6476ddcebad1/4ea30d34-2092-4c11-9759-4f8c6fe09c6a/t1_hp_aff_m_freecharge_360_250323.jpg`,
    id: 4,
  },
];
// Most Popular Cards
const popular_cards = [
  {
    url: `https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6cf6d3c9-a568-4a3c-8ec2-6476ddcebad1/ee20c95c-230b-49a6-9386-63590af643b6/hp_fnv-mangoes_m_480_250323_01.jpg`,
    id: 1,
  },
  {
    url: `https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6cf6d3c9-a568-4a3c-8ec2-6476ddcebad1/ee20c95c-230b-49a6-9386-63590af643b6/hp_summer-bottles_m_480_250323_02.jpg`,
    id: 2,
  },
  {
    url: `https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6cf6d3c9-a568-4a3c-8ec2-6476ddcebad1/ee20c95c-230b-49a6-9386-63590af643b6/hp_sunscreens_m_480_250323_03.jpg`,
    id: 3,
  },
  {
    url: `https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6cf6d3c9-a568-4a3c-8ec2-6476ddcebad1/ee20c95c-230b-49a6-9386-63590af643b6/hp_summer-deos_m_480_250323_04_.jpg`,
    id: 4,
  },
];
// Top Offer Cards Section
const top_offer_cards = [
  {
    url: `https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6cf6d3c9-a568-4a3c-8ec2-6476ddcebad1/e8c51ca5-7a61-4b28-97a5-eacb8a8e3582/hp_dow-topoffersStorefront_m_480_250323_01.jpg`,
    id: 1,
  },
  {
    url: `https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6cf6d3c9-a568-4a3c-8ec2-6476ddcebad1/e8c51ca5-7a61-4b28-97a5-eacb8a8e3582/hp_big-packs-topoffersStorefront_m_480_250323_02.jpg`,
    id: 2,
  },
  {
    url: `https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6cf6d3c9-a568-4a3c-8ec2-6476ddcebad1/e8c51ca5-7a61-4b28-97a5-eacb8a8e3582/hp_combos-topoffersStorefront_m_480_250323_03.jpg`,
    id: 3,
  },
  {
    url: `https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6cf6d3c9-a568-4a3c-8ec2-6476ddcebad1/e8c51ca5-7a61-4b28-97a5-eacb8a8e3582/hp_30-corner-topoffersStorefront_m_480_250323_04.jpg`,
    id: 4,
  },
];
// Fruits and Vegetables
const fruits_and_vegs = [
  {
    url: `https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6cf6d3c9-a568-4a3c-8ec2-6476ddcebad1/eceafe85-3773-4a8b-b335-cb2bfbec01ce/hp_organic-fnc-fnv_Storefront_m_250323_01.jpg`,
    id: 1,
  },
  {
    url: `https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6cf6d3c9-a568-4a3c-8ec2-6476ddcebad1/eceafe85-3773-4a8b-b335-cb2bfbec01ce/hp_fresh-fruits-fnv_Storefront_m_250323_02.jpg`,
    id: 2,
  },
  {
    url: `https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6cf6d3c9-a568-4a3c-8ec2-6476ddcebad1/eceafe85-3773-4a8b-b335-cb2bfbec01ce/hp_fresh-vegetables-fnv_Storefront_m_250323_03.jpg`,
    id: 3,
  },
  {
    url: `https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6cf6d3c9-a568-4a3c-8ec2-6476ddcebad1/eceafe85-3773-4a8b-b335-cb2bfbec01ce/hp_cuts-sprouts-fnv_Storefront_m_250323_04.jpg`,
    id: 4,
  },
  {
    url: `https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6cf6d3c9-a568-4a3c-8ec2-6476ddcebad1/eceafe85-3773-4a8b-b335-cb2bfbec01ce/hp_exotic-fruits-fnv_Storefront_m_250323_05.jpg`,
    id: 5,
  },
  {
    url: `https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6cf6d3c9-a568-4a3c-8ec2-6476ddcebad1/eceafe85-3773-4a8b-b335-cb2bfbec01ce/hp_herbs-seasonings-fnv_Storefront_m_250323_06.jpg`,
    id: 6,
  },
];
// Daily Staples // ===>
const daily_staples = [
  {
    url: `https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6cf6d3c9-a568-4a3c-8ec2-6476ddcebad1/4070b03c-7096-446a-b583-fe54b5b9c5a7/hp_atta-flour-staplesStorefront_m_480_250323_01.jpg`,
    id: 1,
  },
  {
    url: `https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6cf6d3c9-a568-4a3c-8ec2-6476ddcebad1/4070b03c-7096-446a-b583-fe54b5b9c5a7/hp_rice-staplesStorefront_m_480_250323_02.jpg`,
    id: 2,
  },
  {
    url: `https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6cf6d3c9-a568-4a3c-8ec2-6476ddcebad1/4070b03c-7096-446a-b583-fe54b5b9c5a7/hp_dals-pulses-staplesStorefront_m_480_250323_03.jpg`,
    id: 3,
  },
  {
    url: `https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6cf6d3c9-a568-4a3c-8ec2-6476ddcebad1/4070b03c-7096-446a-b583-fe54b5b9c5a7/hp_cooking-oils-staplesStorefront_m_480_250323_04.jpg`,
    id: 4,
  },
  {
    url: `https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6cf6d3c9-a568-4a3c-8ec2-6476ddcebad1/4070b03c-7096-446a-b583-fe54b5b9c5a7/hp_dry-fruits-staplesStorefront_m_480_250323_05.jpg`,
    id: 5,
  },
  {
    url: `https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6cf6d3c9-a568-4a3c-8ec2-6476ddcebad1/4070b03c-7096-446a-b583-fe54b5b9c5a7/hp_salt-staplesStorefront_m_480_250323_06.jpg`,
    id: 6,
  },
];
// Beverages
const beverages = [
  {
    url: `https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6cf6d3c9-a568-4a3c-8ec2-6476ddcebad1/1e428997-2f8a-4e83-95e9-de3efbcafe50/hp_beve-health-drinks_m_250323_01.jpg`,
    id: 1,
  },
  {
    url: `https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6cf6d3c9-a568-4a3c-8ec2-6476ddcebad1/1e428997-2f8a-4e83-95e9-de3efbcafe50/hp_bev-tea-coff_m_250323_02.jpg`,
    id: 2,
  },
  {
    url: `https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6cf6d3c9-a568-4a3c-8ec2-6476ddcebad1/1e428997-2f8a-4e83-95e9-de3efbcafe50/hp_bev-flavoured-milk_m_250323_03.jpg`,
    id: 3,
  },
  {
    url: `https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6cf6d3c9-a568-4a3c-8ec2-6476ddcebad1/1e428997-2f8a-4e83-95e9-de3efbcafe50/hp_beve-juices_m_250323_04.jpg`,
    id: 4,
  },
  {
    url: `https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6cf6d3c9-a568-4a3c-8ec2-6476ddcebad1/1e428997-2f8a-4e83-95e9-de3efbcafe50/hp_bev-power-nooster_m_250323_05.jpg`,
    id: 5,
  },
  {
    url: `https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6cf6d3c9-a568-4a3c-8ec2-6476ddcebad1/1e428997-2f8a-4e83-95e9-de3efbcafe50/hp_bev-soft-drinks_m_250323_06.jpg`,
    id: 6,
  },
];
// Snacks Store
const snacks = [
  {
    url: `https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6cf6d3c9-a568-4a3c-8ec2-6476ddcebad1/3a91f013-48f4-4a48-822c-5253f7b475ce/hp_chai-time_m_480_250323_01.jpg`,
    id: 1,
  },
  {
    url: `https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6cf6d3c9-a568-4a3c-8ec2-6476ddcebad1/3a91f013-48f4-4a48-822c-5253f7b475ce/hp_morining-start_m_480_250323_02.jpg`,
    id: 2,
  },
  {
    url: `https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6cf6d3c9-a568-4a3c-8ec2-6476ddcebad1/3a91f013-48f4-4a48-822c-5253f7b475ce/hp_satisfy-hunger_m_480_250323_03.jpg`,
    id: 3,
  },
  {
    url: `https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6cf6d3c9-a568-4a3c-8ec2-6476ddcebad1/3a91f013-48f4-4a48-822c-5253f7b475ce/hp_sweet-craving_m_480_250323_04.jpg`,
    id: 4,
  },
];
// Cleaning Household
const household = [
  {
    url: `https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6cf6d3c9-a568-4a3c-8ec2-6476ddcebad1/041af9db-5f22-4e5a-8da6-f9d5b5c3ec73/hp_cleaners-disfec_cleaningStorefront_m_480_250123_01.jpg`,
    id: 1,
  },
  {
    url: `https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6cf6d3c9-a568-4a3c-8ec2-6476ddcebad1/041af9db-5f22-4e5a-8da6-f9d5b5c3ec73/hp_fresheners-repellem-cleaningStorefront_m_480_250123_02.jpg`,
    id: 2,
  },
  {
    url: `https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6cf6d3c9-a568-4a3c-8ec2-6476ddcebad1/041af9db-5f22-4e5a-8da6-f9d5b5c3ec73/hp_detergebts-favric-cleaningStorefront_m_480_250123_03.jpg`,
    id: 3,
  },
  {
    url: `https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6cf6d3c9-a568-4a3c-8ec2-6476ddcebad1/041af9db-5f22-4e5a-8da6-f9d5b5c3ec73/hp_disposable-cleaningStorefront_m_480_250123_4.jpg`,
    id: 4,
  },
];
// Beauty and Hygine
const beauty = [
  {
    url: `https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6cf6d3c9-a568-4a3c-8ec2-6476ddcebad1/0b6b3238-9b25-428d-bfbe-fa0a2e6defed/hp_beauty-makeup-carnival_m_250323_01.jpg`,
    id: 1,
  },
  {
    url: `https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6cf6d3c9-a568-4a3c-8ec2-6476ddcebad1/0b6b3238-9b25-428d-bfbe-fa0a2e6defed/hp_beauty-sunsreens_m_250323_02.jpg`,
    id: 2,
  },
  {
    url: `https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6cf6d3c9-a568-4a3c-8ec2-6476ddcebad1/0b6b3238-9b25-428d-bfbe-fa0a2e6defed/hp_beauty-scentful-deos_m_250323_03.jpg`,
    id: 3,
  },
  {
    url: `https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6cf6d3c9-a568-4a3c-8ec2-6476ddcebad1/0b6b3238-9b25-428d-bfbe-fa0a2e6defed/hp_beauty-shaving-saviouurs_m_250323_04.jpg`,
    id: 4,
  },
  {
    url: `https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6cf6d3c9-a568-4a3c-8ec2-6476ddcebad1/0b6b3238-9b25-428d-bfbe-fa0a2e6defed/hp_beauty-min35off_m_250323_05.jpg`,
    id: 5,
  },
  {
    url: `https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6cf6d3c9-a568-4a3c-8ec2-6476ddcebad1/0b6b3238-9b25-428d-bfbe-fa0a2e6defed/hp_beauty-under199_m_250323_06.jpg`,
    id: 6,
  },
];
// Home and Kitchen
const kitchen = [
  {
    url: `https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6cf6d3c9-a568-4a3c-8ec2-6476ddcebad1/7990aa10-e842-47d0-be2f-e10c37be9e2e/hp_GM-under-99_m_250323_01.jpg`,
    id: 1,
  },
  {
    url: `https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6cf6d3c9-a568-4a3c-8ec2-6476ddcebad1/7990aa10-e842-47d0-be2f-e10c37be9e2e/hp_GM-100-199_m_250323_02.jpg`,
    id: 2,
  },
  {
    url: `https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6cf6d3c9-a568-4a3c-8ec2-6476ddcebad1/7990aa10-e842-47d0-be2f-e10c37be9e2e/hp_GM-min30off_m_250323_03.jpg`,
    id: 3,
  },
  {
    url: `https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6cf6d3c9-a568-4a3c-8ec2-6476ddcebad1/7990aa10-e842-47d0-be2f-e10c37be9e2e/hp_GMmin-50off_m_250323_04.jpg`,
    id: 4,
  },
  {
    url: `https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6cf6d3c9-a568-4a3c-8ec2-6476ddcebad1/7990aa10-e842-47d0-be2f-e10c37be9e2e/hp_GM-pressiure-cooker_m_250323_05.jpg`,
    id: 5,
  },
  {
    url: `https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6cf6d3c9-a568-4a3c-8ec2-6476ddcebad1/7990aa10-e842-47d0-be2f-e10c37be9e2e/hp_GM-sstorage-containers_m_250323_06.jpg`,
    id: 6,
  },
];
// Brand Store
const brand_store = [
  {
    url: `https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6cf6d3c9-a568-4a3c-8ec2-6476ddcebad1/71368a71-c258-4cb9-a8aa-fdcfccae7e9b/amul-hp_brandStorefront_m_480_250323_01.jpg`,
    id: 1,
  },
  {
    url: `https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6cf6d3c9-a568-4a3c-8ec2-6476ddcebad1/71368a71-c258-4cb9-a8aa-fdcfccae7e9b/dettol-hp_brandStorefront_m_480_250323_02.jpg`,
    id: 2,
  },
  {
    url: `https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6cf6d3c9-a568-4a3c-8ec2-6476ddcebad1/71368a71-c258-4cb9-a8aa-fdcfccae7e9b/coca-cola-hp_brandStorefront_m_480_250323_03.jpg`,
    id: 3,
  },
  {
    url: `https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6cf6d3c9-a568-4a3c-8ec2-6476ddcebad1/71368a71-c258-4cb9-a8aa-fdcfccae7e9b/loreal-hp_brandStorefront_m_480_250323_04.jpg`,
    id: 4,
  },
  {
    url: `https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6cf6d3c9-a568-4a3c-8ec2-6476ddcebad1/71368a71-c258-4cb9-a8aa-fdcfccae7e9b/Baulli_hp_brandStorefront_m_480_250323_05.jpg`,
    id: 5,
  },
  {
    url: `https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/6cf6d3c9-a568-4a3c-8ec2-6476ddcebad1/71368a71-c258-4cb9-a8aa-fdcfccae7e9b/durex-hp_brandStorefront_m_480_250323_06.jpg`,
    id: 6,
  },
];

// Main Component (Home Page)
export const HomePage = () => {
  return (
    <div className="home-main">
      <div className="container">
        {/* Image slider */}
        {/* <div className="image-slider-top">
          <HomePageSlider />
        </div> */}

        <div>
          <img width={"100%"} src={"https://www.bigbasket.com/media/uploads/banner_images/YXHP144_hp_fom_m_bbpl-staples_460_270323_Bangalore.jpg"}/>
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
            {bank_cards.map((item, index) => {
              return (
                <div className="bank-cards-ch" key={item.id}>
                  <Link>
                    <img style={{ width: "100%" }} src={item.url} alt="" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
        {/* Best Seller ==> The carousal Part */}
        {/* <div className="best-seller">
          <h5>Best Seller</h5>
          <div className="best-seller-carousal">{<MultipleItems>
            
            </MultipleItems>}</div>
        </div> */}
        {/* Most Popular */}
        <div className="most-popular">
          <div className="popular-heading">
            <p>Most Popular</p>
          </div>
          <div className="popular-cards">
            {popular_cards.map((item, index) => {
              return (
                <div className="popular-cards-ch" key={item.id}>
                  <Link>
                    <img style={{ width: "100%" }} src={item.url} alt="" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
        {/* Top Offers Section */}
        <div className="top-offer">
          <div className="top-offer-heading">
            <p>Top Offers</p>
          </div>
          <div className="top-offer-cards">
            {top_offer_cards.map((item, index) => {
              return (
                <div className="top-offer-cards-ch" key={item.id}>
                  <Link>
                    <img style={{ width: "100%" }} src={item.url} alt="" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
        {/* Fruits and Vegs */}
        <div className="fruits">
          <div className="fruits-heading">
            <p>Fruits and Vegetables</p>
          </div>
          <div className="fruits-cards">
            {fruits_and_vegs.map((item, index) => {
              return (
                <div className="fruits-cards-ch" key={item.id}>
                  <Link>
                    <img style={{ width: "100%" }} src={item.url} alt="" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
        {/* Daily Staples */}
        <div className="daily-staples">
          <div className="daily-staples-heading">
            <p>Your Daily Staples</p>
          </div>
          <div className="daily-staples-cards">
            {daily_staples.map((item, index) => {
              return (
                <div className="daily-staples-cards-ch" key={item.id}>
                  <Link>
                    <img style={{ width: "100%" }} src={item.url} alt="" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
        {/* Bevarages */}
        <div className="beverages">
          <div className="beverages-heading">
            <p>Beverages</p>
          </div>
          <div className="beverages-cards">
            {beverages.map((item, index) => {
              return (
                <div className="beverages-cards-ch" key={item.id}>
                  <Link>
                    <img style={{ width: "100%" }} src={item.url} alt="" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
        {/* Snacks Store */}
        <div className="snacks">
          <div className="snacks-heading">
            <p>Snacks Store</p>
          </div>
          <div className="snacks-cards">
            {snacks.map((item, index) => {
              return (
                <div className="snacks-cards-ch" key={item.id}>
                  <Link>
                    <img style={{ width: "100%" }} src={item.url} alt="" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
        {/* Cleaning Household */}
        <div className="household">
          <div className="household-heading">
            <p>Cleaning & Household</p>
          </div>
          <div className="household-cards">
            {household.map((item, index) => {
              return (
                <div className="household-cards-ch" key={item.id}>
                  <Link>
                    <img style={{ width: "100%" }} src={item.url} alt="" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
        {/* Beauty and Hygine */}
        <div className="beauty">
          <div className="beauty-heading">
            <p>Beauty & Hygine</p>
          </div>
          <div className="beauty-cards">
            {beauty.map((item, index) => {
              return (
                <div className="beauty-cards-ch" key={item.id}>
                  <Link>
                    <img style={{ width: "100%" }} src={item.url} alt="" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
        {/* Home and Kitchen */}
        <div className="kitchen">
          <div className="kitchen-heading">
            <p>Home and Kitchen</p>
          </div>
          <div className="kitchen-cards">
            {kitchen.map((item, index) => {
              return (
                <div className="kitchen-cards-ch" key={item.id}>
                  <Link>
                    <img style={{ width: "100%" }} src={item.url} alt="" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
        {/* Image Slider Bottom */}
        <div className="image-slider-bottom">
          <HomePageSliderBottom />
        </div>
        {/* Brand Store */}
        <div className="brand-store">
          <div className="brand-store-heading">
            <p>Brand Store</p>
          </div>
          <div className="brand-store-cards">
            {brand_store.map((item, index) => {
              return (
                <div className="brand-store-cards-ch" key={item.id}>
                  <Link>
                    <img style={{ width: "100%" }} src={item.url} alt="" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
        {/* Bottom image */}
        <div className="bottom-img">
          <Link>
            <img
              src="https://www.bigbasket.com/media/uploads/banner_images/hp_bbw_c_400_web_wellness_banner_1_dec_w2_14012023.jpg"
              alt=""
            />
          </Link>
        </div>
        {/* Bottom disclaimer */}
        <div className="disclaimer-bottom">
          <div className="disclaimer-ch">
            <h2>bigbasket – online grocery store</h2>
            <p>
              Did you ever imagine that the freshest of{" "}
              <span>fruits and vegetables</span>, top quality pulses and food
              grains, <span>dairy products</span> and hundreds of branded items
              could be handpicked and delivered to your home, all at the click
              of a button? India’s first comprehensive online megastore,
              bigbasket.com, brings a whopping 20000+ products with more than
              1000 brands, to over 4 million happy customers. From household
              cleaning products to beauty and makeup, bigbasket has everything
              you need for your daily needs. bigbasket.com is convenience
              personified We’ve taken away all the stress associated with
              shopping for daily essentials, and you can now order all your
              household products and even buy groceries online without
              travelling long distances or standing in serpentine queues. <br />
              <br />
              Add to this the convenience of finding all your requirements at
              one single source, along with great savings, and you will realize
              that bigbasket- India’s largest online supermarket, has
              revolutionized the way India shops for groceries. Online grocery
              shopping has never been easier. Need things fresh? Whether it’s
              fruits and vegetables or dairy and meat, we have this covered as
              well! Get fresh eggs, meat, fish and more online at your
              convenience. Hassle-free Home Delivery options
              <br />
              <br />
              We deliver to 25 cities across India and maintain excellent
              delivery times, ensuring that all your products from groceries to
              snacks branded foods reach you in time. Slotted Delivery: Pick the
              most convenient delivery slot to have your grocery delivered. From
              early morning delivery for early birds, to late-night delivery for
              people who work the late shift, bigbasket caters to every
              schedule. Express Delivery: This super useful service can be
              availed by customers in cities like Bangalore, Mumbai, Pune,
              Chennai, Kolkata, Hyderabad and Delhi-NCR in which we deliver your
              orders to your doorstep in 90 Minutes. BB Specialty stores: Missed
              out on buying that essential item from your favorite neighborhood
              store for tonight’s party? We’ll deliver it for you! From bakery,
              sweets and meat to flowers and chocolates, we deliver your order
              in 90 minutes, through a special arrangement with a nearby
              specialty store, verified by us.
            </p>
            <button>Read More...</button>
          </div>
        </div>
        {/* Ends Here */}
      </div>
    </div>
  );
};
