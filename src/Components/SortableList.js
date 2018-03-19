import React, { Component } from 'react';
import { SortableContainer, SortableHandle, SortableElement, arrayMove } from 'react-sortable-hoc';
import '../App.css';
import '../Css/Imag.css';
import SortableItem from './SortableItem';
let mass=[];
let id =0;
const SortableList = SortableContainer(({mas, size}) => {
    function Cool(){
      mas.map((value, index)=>{
        if(value===index){
          id++;
        }
        else id=0;
        if(id ===Math.pow(size,2)){
          setTimeout(()=>{alert("дааааааааааааааааааа")},300)
        }
      })
    }
    id = 0;
    return (
      <div className = 'block3'>
        {mas.map((value, index) => (
          Cool(),
          <SortableItem key={index} index={index} value={value} size = {size} />
        ))}
      </div>
    );
  });
export default SortableList;