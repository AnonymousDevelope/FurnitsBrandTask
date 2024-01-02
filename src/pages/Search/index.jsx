import React, { useContext, useEffect, useState } from 'react';
import { ProductCard, SearchBar } from '../../components';
import { furnits } from '../../data/small_const';
import { FurnitContext } from '../../context';

const Index = () => {
  const { search } = useContext(FurnitContext);
  const [furnits_, setFurnits] = useState(furnits);

  useEffect(() => {
    filterFurnit();
  }, [search]);

  const filterFurnit = () => {
    const newFurnits = search ? furnits.filter((furnit) => {
      return furnit.name.toLowerCase().includes(search.toLowerCase());
    }) : [];
    setFurnits(newFurnits);
  };

  return (
    <div className="search__page">
      <div className="search__page_header">
        <button className='back btn' onClick={() => window.history.back()}>
          &larr;
        </button>
        <div className="column">
          <h1>
            Search
          </h1>
          <span>
            Showing Results for " {search} "
          </span>
        </div>
        <div className="search__">
          <SearchBar/>
        </div>
      </div>
      <div className="products">
       {
        furnits_ && furnits_.length>0 ? furnits_.map((furnit) => (
          <ProductCard key={furnit.id} name={furnit.name} img={furnit.img} price={furnit.price} oldPrice={furnit.oldPrice} id={furnit.id}/>
        )) : (
          <>
           <h1 className='text-center m-auto'>No Products</h1>
          </>
        )
       }
      </div>
    </div>
  );
};

export default Index;
