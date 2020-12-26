import React from 'react';
/*
These buttons are added manually. There are only
four categories here. 
What happen when there will be more than 4 categories ?
How will you handle that case ?

  <button className='filter-btn' onClick={()=>
      filterItems('all')}> All
      </button>

    <button className='filter-btn' onClick={()=>
      filterItems('breakfast')}> breakfast 
      </button>

      <button className='filter-btn' onClick={()=>
      filterItems('shakes')}> Shakes
      </button>

      <button className='filter-btn' onClick={()=>
      filterItems('lunch')}> Lunch 
      </button>

      The code written in <div className='btn-container'></div>
      handles the case. Hence, no need to add the button
      manually unlike earlier case.
*/
const Categories = ({categories, filterItems}) => {
  return (
    <div className='btn-container'> 
      { categories.map((category,index) =>{
        return <button type='button' className='filter-btn'
        key={index} onClick={()=> filterItems(category)}
      >{category}</button>
      })}
    
    </div>
  )
};

export default Categories;
