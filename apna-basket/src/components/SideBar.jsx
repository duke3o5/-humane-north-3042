import React, { useEffect, useState } from 'react'
import { FiSearch } from 'react-fi'
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components'

export const SideBar = ({category,setCategory,price,setPrice}) => {
  const [searchParams,setSearchParams]=useSearchParams();
  const [search,setSearch]=useState('')
  function filterFn(e){
    let filteredCatg;
    if(category.includes(e.target.value)){
      filteredCatg=category.filter(el=>el!==e.target.value)
    }else{
      filteredCatg=[...category,e.target.value]
    }

    setCategory(filteredCatg)
  }

  function filterFnByPrice(e){
    let filteredCatg;
    if(price.includes(e.target.value)){
      filteredCatg=price.filter(el=>el!==e.target.value)
    }else{
      filteredCatg=[...price,e.target.value]
    }

    setPrice(filteredCatg)
  }

  function searchFn(){
    setSearchParams({q:search||'Organic'})
    setSearch('')
  }


  return (
    <DIV>
      <div className='bar'>
        <p>Brand</p>
        <hr />
        <div id='search'>
          <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} placeholder='Search by Brand' />
          <div onClick={searchFn}>
            <FiSearch width={'13px'}/>
          </div>
        </div>
        <label className='container'><h1>Organic</h1>
          <input type="checkbox" value='Organic' onChange={filterFn} checked={category.includes('Organic')}/>
          <span className='checkmark'></span>
        </label>
        <label className='container'><h1>Fresho</h1>
          <input type="checkbox" value='Fresho' onChange={filterFn} checked={category.includes('Fresho')}/>
          <span className='checkmark'></span>
        </label>
        <label className='container'><h1>USA</h1>
          <input type="checkbox" value='USA' onChange={filterFn} checked={category.includes('USA')}/>
          <span className='checkmark'></span>
        </label>
        <label className='container'><h1>Hoovu Fresh</h1>
          <input type="checkbox" value='Hoovu Fresh' onChange={filterFn} checked={category.includes('Hoovu Fresh')}/>
          <span className='checkmark'></span>
        </label>
        <label className='container'><h1>Gopalan Organic</h1>
          <input type="checkbox" value='Gopalan Organic' onChange={filterFn} checked={category.includes('Gopalan Organic')}/>
          <span className='checkmark'></span>
        </label>
      </div>

      <div className='bar'>
        <p>Price</p>
        <hr />
        <label className='container'><h1>Less than Rs 20</h1>
          <input type="checkbox" value='Price_gte=1&Price_lte=20' onChange={filterFnByPrice} checked={price.includes('Price_gte=1&Price_lte=20')}/>
          <span className='checkmark'></span>
        </label>
        <label className='container'><h1>Rs 21 to Rs 50</h1>
          <input type="checkbox" value='Price_gte=21&Price_lte=50' onChange={filterFnByPrice} checked={price.includes('Price_gte=21&Price_lte=50')}/>
          <span className='checkmark'></span>
        </label>
        <label className='container'><h1>Rs 51 to Rs 100</h1>
          <input type="checkbox" value='Price_gte=51&Price_lte=100' onChange={filterFnByPrice} checked={price.includes('Price_gte=51&Price_lte=100')}/>
          <span className='checkmark'></span>
        </label>
        <label className='container'><h1>Rs 101 to Rs 200</h1>
          <input type="checkbox" value='Price_gte=101&Price_lte=200' onChange={filterFnByPrice} checked={price.includes('Price_gte=101&Price_lte=200')}/>
          <span className='checkmark'></span>
        </label>
        <label className='container'><h1>More than Rs 201</h1>
          <input type="checkbox" value='Price_gte=201&Price_lte=1000000' onChange={filterFnByPrice} checked={price.includes('Price_gte=201&Price_lte=1000000')}/>
          <span className='checkmark'></span>
        </label>
      </div>

      <div className='bar'>
        <p>Seasonal</p>
        <hr />
        <label className='container'><h1>Summer Fruits</h1>
          <input type="checkbox"/>
          <span className='checkmark'></span>
        </label>
        <label className='container'><h1>Summer Veggies</h1>
          <input type="checkbox"/>
          <span className='checkmark'></span>
        </label>
        <label className='container'><h1>Winter Fruits</h1>
          <input type="checkbox"/>
          <span className='checkmark'></span>
        </label>
        <label className='container'><h1>Winter Veggies</h1>
          <input type="checkbox"/>
          <span className='checkmark'></span>
        </label>
      </div>
      
      <div className='bar'>
        <p>Country of Origin</p>
        <hr />
        <label className='container'><h1>Australia</h1>
          <input type="checkbox"/>
          <span className='checkmark'></span>
        </label>
        <label className='container'><h1>Greece</h1>
          <input type="checkbox"/>
          <span className='checkmark'></span>
        </label>
        <label className='container'><h1>India</h1>
          <input type="checkbox"/>
          <span className='checkmark'></span>
        </label>
        <label className='container'><h1>Italy</h1>
          <input type="checkbox"/>
          <span className='checkmark'></span>
        </label>
        <label className='container'><h1>South Africa</h1>
          <input type="checkbox"/>
          <span className='checkmark'></span>
        </label>
        <label className='container'><h1>Thailand</h1>
          <input type="checkbox"/>
          <span className='checkmark'></span>
        </label>
        <label className='container'><h1>Iran</h1>
          <input type="checkbox"/>
          <span className='checkmark'></span>
        </label>
        <label className='container'><h1>USA</h1>
          <input type="checkbox"/>
          <span className='checkmark'></span>
        </label>
        <label className='container'><h1>Egypt</h1>
          <input type="checkbox"/>
          <span className='checkmark'></span>
        </label>
        <label className='container'><h1>Peru</h1>
          <input type="checkbox"/>
          <span className='checkmark'></span>
        </label>
        <label className='container'><h1>New Zealand</h1>
          <input type="checkbox"/>
          <span className='checkmark'></span>
        </label>
        <label className='container'><h1>Turkey</h1>
          <input type="checkbox"/>
          <span className='checkmark'></span>
        </label>
        <label className='container'><h1>Chile</h1>
          <input type="checkbox"/>
          <span className='checkmark'></span>
        </label>
        
      </div>
    </DIV>
  )
}

//styling

const DIV=styled.div`
width: 22%;
padding: 15px;
display:'block';

@media all and (max-width:1160px){
  display:none
  
}

  .bar{
    margin-bottom: 40px;
  }
  div{
    p{font-size:18px;border-bottom:3px solid #84c225;width:fit-content}
  
      #search{
        display: flex;
        margin: 15px 0;
        border: 1px solid #BDBDBD;
        input{
          width: 92%;
          padding:0 10px;
          font-size: small;
        }
        input:focus{
          outline: none;
        }
      }

    #search~div{
      display:flex;
      align-items:center
    }
  }

  .container {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 15px;
  width: 15px;
  background-color: white;
  border:1px solid gray
}

.container input:checked ~ .checkmark {
  color: green;
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.container input:checked ~ .checkmark:after {
  display: block;
}

.container .checkmark:after {
  left: 5.5px;
  top: 1px;
  width: 2px;
  height: 8px;
  border: solid green;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

label h1{
  color: gray;
  font-size: 14px;
  margin-bottom: -10px;
}

hr~label{
  margin-top: 15px;
}
`
