import React,{Component} from 'react';

import AppHeader from '../App-header/App-header.jsx';
import SearchPanel from '../Search-panel/Search-panel.jsx';
import PostStatusFilter from '../Post-status-filter/Post-status-filter.jsx';
import PostList from '../Post-list/Post-list.jsx';
import PostAddForm from '../Post-add-form/Post-add-form.jsx';

import './App.scss';

export default class App extends Component {
constructor(props) {
  super(props);
  this.maxId = 4; 
}

state = {
  modalActivity: false,
  data: [
    {header: 'first post heading', contant: 'lorem', favorite: false, like: false, id:1},
    {header: 'third post heading', contant: 'fourth post contant', favorite: false, like: false, id:2},
    {header: 'fifth post heading', contant: 'sixth post contant', favorite: false, like: false, id:3}
  ],
  term: '',
  filter: 'all'
}

deleteItem = (id) => {
  this.setState(({data})=>{
    const index = data.findIndex(elem => elem.id === id);    
    const newData = [...data.slice(0,index), ...data.slice(index+1)];
    return{
      data: newData
    }
  })
}

addItem = (header,contant) => {
  // console.log(header, contant);
  const newItem = {
    contant,
    header, 
    favorite: false,
    like: false,
    id: this.maxId++    
  }
  this.setState(({data}) => {
    const newData = [...data, newItem ];
    return {
      data: newData
    }
  })
}
onTogglefavorite = (id) => {
  console.log('favorite id:', id);
  this.setState(({data}) => {
    const index = data.findIndex(elem => elem.id === id);
    const oldItem = data[index];
    const newItem = {...oldItem, favorite: !oldItem.favorite}
    const newData = [...data.slice(0,index), newItem, ...data.slice(index+1)]
    return{
      data: newData
    }  
  })
}

onToggleLiked = (id) => {
  console.log('like id:', id);
  this.setState(({data}) => {
    const index = data.findIndex(elem => elem.id === id);
    const oldItem = data[index];
    const newItem = {...oldItem, like: !oldItem.like}
    const newData = [...data.slice(0,index), newItem, ...data.slice(index+1)]
    return{
      data: newData
    }
  })
}

searchPost = (items, term) => {
  if (term.length === 0) {
    return items
  }

  return items.filter(({header, contant}) => {
    const summarySting = header + contant;
    return summarySting.indexOf(term) > -1      
  })
}

onUpdateSearch = (term) => {
  this.setState({term})
} 

filterPosts = (items, filter) => {
  if (filter === 'like') {
    return items.filter(item => item.like)
  } 
  if (filter === 'favorite') {
    return items.filter(item => item.favorite)
  }
    return items
  
}

onChangeFilterSelect = (filter) => {
  this.setState({filter})
}

onChangeModalActivity = () => {
  this.setState(({modalActivity})=> ({
    modalActivity: !modalActivity
  })) 
  console.log(this.state.modalActivity);   
}

render() {
  const {data, term, filter, modalActivity} = this.state;

  const numberOfLikedPosts = data.filter(item => item.like).length;
  const numberOfAllPosts = data.length;

  const visiblePosts = this.filterPosts(this.searchPost(data, term), filter) 
    
  return(
    <div className='app'>
      <AppHeader
      numberOfLikedPosts={numberOfLikedPosts}
      numberOfAllPosts={numberOfAllPosts}
      onChangeModalActivity={this.onChangeModalActivity}
      />
      <div className={data.length < 1 ? 'search-panel hide' : 'search-panel active'}>
      <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
      <PostStatusFilter filter={filter} onChangeFilterSelect={this.onChangeFilterSelect}/>  
      </div>     

      <PostList 
      posts={visiblePosts}
      onDelete={this.deleteItem}
      onTogglefavorite={this.onTogglefavorite}
      onToggleLiked={this.onToggleLiked}
      />
      <PostAddForm 
      modalActivity={modalActivity}
      onChangeModalActivity={this.onChangeModalActivity}
      onAdd={this.addItem}/>
    </div>
  )
}
}

