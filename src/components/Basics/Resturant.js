import React,{useState} from 'react'
import "./style.css"
import Menu from '../menuAPi';
import MenuCard from './MenuCard';
import NavBar from './NavBar';

const uniqueList= [...new Set(Menu.map((curElem)=>{
  return curElem.category;

})),"All"];// spredoperator
console.log(uniqueList);

const Resturant = () => {
  const [menuData,setMenuData]=useState(Menu);
  const [menuList,setMenuList]=useState(uniqueList);
  const filterItem=(category)=>{
    if(category==="All"){
      setMenuData(Menu);
    }
    else{
      const updatedList=Menu.filter((curElem)=>{
        return curElem.category===category;
      });
      setMenuData(updatedList);

    }
  
  }
  return (
    <>
    <NavBar filterItem={filterItem} menuList={menuList}/>
    <MenuCard menuData={menuData}/>
      
    </>
  )
}

export default Resturant
