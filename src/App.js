import { Component } from 'react';
import './App.css';
// import Basictable from './components/basictable';
import Sortingtable from './components/sortingTable';
import  ColumnOrder from './components/ColumnOrder';
import Basictable from './components/basictable';
import RowSelection from './components/RowSelection';
import ColumnHiding from './components/ColumnHiding';
import StickyTable from './components/StickyColumn';
import Pagination from './components/Pagination';

function App() {
  return (
    <div className='App'>
      {/* <Sortingtable /> */}
      {/* <ColumnOrder /> */}
      {/* <RowSelection /> */}
      {/* <ColumnHiding /> */}
      {/* <StickyTable /> */}
      {/* <Basictable /> */}
      <Pagination />

    </div>
  );
}

export default App; 
