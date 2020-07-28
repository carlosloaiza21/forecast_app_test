import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Search from './components/Search';
import Title from './components/Title';
import History from './components/History';
import './App.css';
import Results from './components/Results';
import { searchActionA, deleteSearch } from './actions/searchAction';


const App= () => {
  const state = useSelector(state=>state.searchReducer);
  const [ active, setActive ] = useState({});
  const [value, setValue] = useState('');
  const [ redux, setRedux ] = useState({});
  
  const dispatch = useDispatch();  

  useEffect(()=>{
    setRedux(state)
    if(state.active){
      setActive(state.active)
    }
  },[state])  

  const getValue = (x) =>{
    setValue(x)
  }

  const doSearch = () => {
    dispatch(searchActionA(value));
  }

  const onDelete = (x) =>{
    dispatch(deleteSearch(x))
  }

  const onSelect = (x) =>{
    setActive(redux.history[x])
  }
  

  return (
    <div className="App">
      <header className="App-header">
        <Search
          labelButton="Search"
          placeholder="City"
          getValue={getValue}
          onSearch={doSearch}
        />
        
        <Title subTitle={true} title="History Search"/>
        <History onDelete={onDelete} onSelect={onSelect} data={redux} />
        
        <Title subTitle={false} title="Result"/>
        <Results item={active}/>
      </header>
    </div>
  );
}

export default App;
