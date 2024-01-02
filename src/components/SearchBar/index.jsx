import React, { useState, useEffect, useContext } from 'react';
import { Input } from '../UI';
import { furnits } from '../../data/small_const';
import $ from 'jquery';
import { FurnitContext } from '../../context';

const Index = () => {
  const {search,setSearch} = useContext(FurnitContext);
  const [inputSearch, setInputSearch] = useState(search);
  const [notif,setNotif] = useState(true)
  // Update searchTerm when inputSearch changes
  const handleChange = (e) => {
    const { value } = e.target;
    setInputSearch(value);
    setSearch(value);
  };
  const handleChangeWidth = () => {
    // Your logic for changing width and other styles
    // ...
    if ($('.search__input').width() === 0) {
      setNotif(false)
      $('.search__input').css({
        width: '100%',
        display: 'block',
        transform: 'translateX(0)',
      });
      $('.search__bar').css({
        'box-shadow': '0 0 10px rgba(0, 0, 0, 0.2)',
      });
      $('.cancel-btn').css({
        display: 'block',
      });
    } else {
      setSearch(inputSearch);
      setNotif(true)
    }
  };

  const cancelSearch = () => {
    $('.search__input').css({
      width: '0',
      transform: 'translateX(-336px)',
    });
    $('.search__bar').css({
      'box-shadow': 'none',
    });
    $('.cancel-btn').css({
      display: 'none',
    });
    setInputSearch('');
  };

  return (
    <div className={"search__bar"}>
      <button className="btn cancel-btn" onClick={cancelSearch}>
        <i className="fa fa-times"></i>
      </button>
      <Input
        placeholder="Search . . ."
        value={inputSearch}
        className="search__input"
        onInput={handleChange}
      />
      <button className={"btn "+(notif===true ? ' notification' : '')} onClick={handleChangeWidth}>
        <i className="fa fa-search"></i>
      </button>
    </div>
  );
};

export default Index;
