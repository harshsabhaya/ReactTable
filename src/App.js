import { Component } from 'react';
import './App.css';
// import Basictable from './components/basictable';
import Sortingtable from './components/sortingTable';
import  ColumnOrder from './components/ColumnOrder';
import Basictable from './components/basictable';
import RowSelection from './components/RowSelection';
import ColumnHiding from './components/ColumnHiding';
import StickyTable from './components/StickyColumn';

function App() {
  return (
    <div >
      {/* <Sortingtable /> */}
      {/* <ColumnOrder /> */}
      {/* <RowSelection /> */}
      {/* <ColumnHiding /> */}
      {/* <StickyTable /> */}
      <Basictable />

    </div>
  );
}

export default App; 
