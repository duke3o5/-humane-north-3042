### <p style="font-size:50px">APNA BASKET</p>
<br/><br/>
# About Project: <br/>
BigBasket is India's biggest e-grocer. It offers tens of thousands of different products, including fruits and vegetables, meats, spices, toiletries, baby products and pet food.
<br/>
<br/>

# Contributors:<br/>
1. Deepak Kumar (Admin Panel, Address Page, Checkout Page)<br/>
2. Anubhav Dixit (Products Page, Single Product Page, Navbar, Cart Page)<br/>
3. Dibyendu (Home Page)<br/>
4. Ganesh Behra (Login)<br/>
<br/><br/>
# Folder Structure<br/>
src<br/>
├── >Components<br/>
│    └── adminComponents (All admin components here)<br/>
|           └── AdminAddData.jsx ("/adddata)<br/>
|           └── AdminCard.jsx ("/adddata)<br/>
|           └── AdminDataList.jsx ("/datalist)<br/>
|           └── AdminEditProduct.jsx ("/adddata)<br/>
|           └── AdminNavbar.jsx ("/navbar)<br/>
|           └── AdminSidebar.jsx ("/adddata)<br/>
|           └── AdminStats.jsx ("/adddata)<br/>
│    └── ProductCard.jsx<br/>
│    └── ProductList.jsx<br/>
│    └── MainRoutes.jsx<br/>
│    └── SideBar.jsx<br/>
├── >Pages<br/>
│    └── Admin.jsx (Route:- "/admin")<br/>
│    └── CartPage.jsx (Route:- "/cart")<br/>
│    └── FruitandVeg.jsx (Route:- "/products")<br/>
│    └── HomePage.jsx (Route:- "/")<br/>
│    └── Login.jsx (Route:- "/login")<br/>
│    └── SignUp.jsx (Route:- "/signup")<br/>
│    └── SingleProductPage.jsx (Private Route:- "/product/:id")<br/>
└── >Redux<br/>
│    └── >AdminReducer<br/>
│    │    └── action.js<br/>
│    │    └── actionTypes.js<br/>
│    │    └── reducer.js<br/>
│    └── >AuthReducer<br/>
│    │    └── action.js<br/>
│    │    └── actionTypes.js<br/>
│    │    └── reducer.js<br/>
|    └── >ProductReducer<br/>
│    │    └── action.js<br/>
│    │    └── actionTypes.js<br/>
│    │    └── reducer.js<br/>
│    └── store.js<br/>
└── App.js<br/>
<br/><br/><br/>


# Feautres: <br/>
<br/><br/>
## Home Page <br/>
<img src="https://lh3.googleusercontent.com/HIY1KRSzrhi0vSnsZA6VWiHJQGaHB6bdWeKZl5kiYq48NYwSsfoxXkzuaiqxZw55cTQJkIVw9YEND9LYtQ4AkqFDrWsqrWZnA5vBU_nzQKSzBDTz2IOCmLoV-MG8mLOm3nRvJADqnJ-HbZgExOL7SGxRnFnQsasrFasZ0Q9fWyWSj8Sj_qKI_A_6yGv45f3hyT_XlkAvwWYrOVYa4sKKXR50oe06G9jWouGxXQeJcy1sKlk6DeS041xC5u22hMN9Ag-cd-IRH069YD787hVs-un-daLX8_OTYzEn-mxoJDKzvyLwbsIiKFOU08lLPvuog15V-36mEWGaJ2t4AQrFwlWUPIuIImx7cTNiT33-idnwV8yZAb60nEk6KF7SHpH5n0Q6bZdhdbM6jPAcDBrSOAKCvImirpD-24jx_FGEV11rTDSM5_1M5CE7JAsvuja3z62DX_xELsl5pn8H01hfFOFDWKbgMPo86yn8gKr3DRWy1Oi2kx4mmNheVD_PzCd7DkbPQQdo41fGl-6nNQRakOkbEhb2EvfUMNc520cSA5uetxs9bJPVS03SUMWUVPa1jwomkW9B0KgRsp3lK1v05sqYoOUuzV9k1EyiGgDwPF6yMn6LkkmiHIhOTAJmpitUwpJvWkDQabhDcZcQD-nFnptHP5FsHjP0pxaXSKEzhArTYurVkeq6t5zZpB8gf6MTQucT3HwxauIFMLIGY9aZec12VOWF7q4U29YVR6AhSxCewt0TzorbucaNP5opwd5Mfeq8uUYBB3ejDmFgDYjiRTp9aCNolatN2gViakTibUeFwTegVzkKD4IimIExGxUJeNt_4FolL25ONMZAQSQK0qxZY2-Bb7omtqAANnC0-XVIF63qgdzK2pGd-lM4azRTlAHTvJ2Ez-QKP_p7bLWGVylkP8CcqKXVUi0G6aF2VQRd=w1280-h585-s-no?authuser=0"/><br/>
<br/>

## Product Page <br/>
<img src="https://lh3.googleusercontent.com/jKYg2xWSUOwDJgsGzsJRXzy6bwja0SmLHE7VTBmGik8cT2qVT3nT2FTZ76b8AQwFxkyZR_N7Fy8FY3b-ByRqYxkS_nKEIGCPByTlhs3yG4G2RlpWVaAw6rvMCVhtueX9mhQkdJZX7bf992ATfTw_40G-q6lo_tsxnXXMhK1_RT1uYANqHYeMYPDDcxNEbj2FkH2TCcn4QstV1iw8UHeKlvdO6SLLPtSuOHyVQijT9LBNyQf0oZ-YxXeQi_ipp-ygli9gNhQh8dv7tAkab2V-ilDAiHmZv0NhYJDClLUWmR7kPZZct1R-C8p80aSH1XZowWDIrp6BcgCP8uMiw-_TCwQ_XysYE_F5GSUbs-VSl3TF55S6TiptbAYdgaWXnyfHYtcJPPJb2iWUQnUKy2ewh1q2vHmF-u2V4CqEU5JC12d54sLdYH9GHwxj37HxdmlyVI5QKjlCCQlnS7GoYxUluhQLWpgOsIt4Vc2pj2uI5bZz_4TUbgkGAwWM5ahMwoQukx66sbqRWYP5nXmMWpcX2EnsQ8rwIppp_rPhknnjDnWlbNtH8kP2OQ7vYZtDwJaqFm3P1WMG84uZny6d2VzMWvbl-JAWrRS_uMZjre6fIxIz8jDjf7CuQWJNvYaZ3B5fIAlfcGlQDpvivsDMPej_gfP2GgV4-sB2ilfH8jnJepqnbvu68WYlfTqdT5L3U7tg_l9XMv1Dl4tYD4ZPC5Fa3jgBm-ATdsxACIZguTwQM1cYf2QF-CbRA6TVMYrinTggoMtYgZQhldTtuZJN4z-kbS7dbMog9feVJat2UNJSWXcO0ZjXc5Ij9Dn46N5YZx8MF-viVhTAgcBqD2UvUV8ot8fBKuQwF0ReXNeV67KDS2Nx1DgPvGo8ZxM-WTyHJzla8sLz1mmhlq9fmb5gCpIKuOXrrVX6qhHRULwizYwB5yie=w1280-h582-s-no?authuser=0"/>
<br/>

## Admin Panel <br/>
<img width=100% src="https://lh3.googleusercontent.com/zyz9bCeyL0tfaieybj8oki2Dr5UoiOLI4o1shlXmftlRW7ypuIsRWHGGSLEmI1uGEFzwMOtLYJkuijfKDgyoZzsePqPsR4uxxEaXCwereVGuWSvXr9J_EOYoxmKrqcD3nzA6pmJnLD3-jDEBRfamoJyxqoatZjllwkTSf9wAB9YEUscWbVArvW506gpcDCkndqN_sqeTi-hxemmXmK30fFQtvKpJxRX1SZ7S6N1V6mXzSQTASTKhrZAVMUS9xF_Txfm9aaqILFteKm7IqHpqExddiQwqKEM5MVnGPhGaQWaWUU9rxKYo61_QbOfyEfGYWQJ8Gcq7f-lnL2CnBhV1lbvCWY0aBGn3lKejOgZ74kn4JEboIZkSSBUK_KQThbmi_T_Y2Ryo44KZkj78euQqFU5qlgPj8NR3vyJ-nLz_-7knzozmwZpMKCWVa8bpA6DhtkuR45q8H5mTRCM40mxJZLVpBV-CkR0odHueboRI7_ZO8L-8u5W90QbOwhZJdnfS-qUYjLyfJXU5wd4-1sClCI-0S_ulBdDZEFUNDtJrdUsGRwzDSqfJfNH85BkWnYZLChesPd3NQraH_eU2uiK19IT0rtk8Se1Aigo3V9fbI_daAA6DelydhoNx56wbETUkUz3T1cq2n9L0e4oqqJ8_MNFhESAPyIZQLc9P9BfXH8FkTI_OnTX9ZTZcWxP6f7HpcZfacNuSj1dFMQMB4R7idsAAVUZQZEzfmFv-5yTjDq8AXSevAnAJpAtlp5iSi3tN7R54gjj9_mVceo7JyxlwACpoJ68LRilyjJyKY40pFfC2sv2PD2IWYiMnbGlHfKGMIwNf-T_IN7B8tmYlniCqvzRGQ6B4H6wOExx9VJqjx7KlJRbEBcdQBVxLUZPSiq-cg3RaKs6UpzG-uMrVhgvEiiBrMWLjxqnXH_QUTToal8MN=w455-h207-no?authuser=0"/>
<br/>

## Login Page <br/>
<img src="https://lh3.googleusercontent.com/mkom4DkVu4dQH5EocRK-1K2g1SQwSlBb_ePGghJq6zg94eIdYIFjCrNZowSw0nvuNYdPyZVHc7ZppGIGNwDNHUTr3RzLPKD3f8GtoMLG1o5DQipNXQN63CkSMjIbCtGI3XeQIPY1ySDykkaPCUqGcpbbHgivsA59nBqwT_169gn_lrEpp1Lc-0aI7Lfpqv1I3j9IhYDiSCy6c6tH7OiVAd8W5YbO1X76eo3QpRAEajjoCyMpB1AqMA4_iyxV6LC1MTlzA6Ngt49ACcBNRoyeDOjjvg1NNM42ZXcu8bc7iqzX1tUDAjxeYpn83-epwxe2NISQIZ0ZedrTIuWk0oeDiXCE8Myhh4eVaZQQw23uRwjfk8Glv1_7oaFmzJ4T3cK_sRrXZRQStGuF2ijn2Lr4cSPwKGLQCeImmWDKffuQuNagoA00vlZ-_BI1JwiMB9AhorOnF6JSw4M853D9r6aGFirje1TuufW3tOaobks3ktlk_zsIKADPdKMxHfbbq25cYLjWIMZAZ8HNOiulVuZIL6C6VqGkHMGvufxoRob5YlFAwS-0XxpWgCpLU8sEPkO2R8LAoSHbySC1QmZHhbyqXjEl0HdMKx6fSn9xQD_-zoxJt2svBoyrE_uZBeLtzlzvfXMsEkkNnaX1jHIBfD40XWQLLRPjohgj8MKcwa7lv37IbUYKqwSRif8ELonTDJ-8k5Omo9vEAP5scUEo-swPdubl0__ZSNHZLzKINqod5n4kFeBJboNRpZLxyXq6YU9EaaYbbdi3BFMWJJquaaP9TPKtbQPvXZ2Ge4as-X-cRkGXs1lays7SjGfS2Eqk-alKpaXOEdkCfJJemoGqvHlmqsQBfwFdD0z1OwhvJCCu4w6SIycTDfAJ3yAOv-RBCdQvi4XaF6thzFnqep0-Axq0m8BKduc1HKQy_mQZ0aYWqanx=w1280-h592-s-no?authuser=0"/>
<br/>


