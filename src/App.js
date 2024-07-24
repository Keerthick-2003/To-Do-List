import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { useState, useEffect } from "react";
import { AddItem } from './AddItem';
import { Search } from './Search';
import apiRequest from './apiRequest';

function App() {
  
  const API_URL="http://localhost:3500/items"
  let [items, setItems]=useState([])
  let [search, setSearch]=useState('')
  let [NewItem, setNewItem]=useState('');
  let [fetchError, setFetchError]=useState(null)
  const [isLoading, setIsLoading]=useState(true)
  
  
  useEffect(()=>{
    const fetchItems=async ()=>{
      try{
        const response=await fetch(API_URL);
        if(!response.ok) throw Error("Data Not Received")
        const listItems=await response.json();
        setItems(listItems);
        setFetchError(null)
      } catch(err) {
        setFetchError(err.message)
      } finally{
        setIsLoading(false)
      }
    }
    setTimeout(() => {
      (async ()=>await fetchItems())()
    }, 2000);
  }, [])

          
          let addItem=async (item)=>{
          const id =items.length ? items[items.length-1].id + 1 : 1;
          let addNewItem={id, checked:false, item}
          let ListItems=[...items, addNewItem]
          setItems(ListItems)

          const postOptions={
            method:"POST",
            header:{
              'Content-Type':'application/json'
            },
            body:JSON.stringify(addNewItem)
          }

          const result=await apiRequest(API_URL, postOptions)
          if(result) setFetchError(result)
        }
          
          let handleCheck=async (id)=> {
            const listItems=items.map((item)=>
            item.id===id ? {...item, checked:!item.checked} : item)
            setItems(listItems)

            const myItem=listItems.filter((item)=> item.id===id)

            const updateOptions={
              method:"PATCH",
              header:{
                'Content-Type':'application/json'
              },
              body:JSON.stringify({checked:myItem[0].checked})
            }
            
            const reqURL=`${API_URL}/${id}`
            const result=await apiRequest(reqURL, updateOptions)
            if(result) setFetchError(result)
          }
          
          let handleDelete=async (id)=> {
            const listItems=items.filter((item)=>
              item.id!==id)
            setItems(listItems)

            const deleteOpstion={
              method:"DELETE"
            }

            const reqURL=`${API_URL}/${id}`
            const result=await apiRequest(reqURL, deleteOpstion)
            if(result) setFetchError(result)
          }

          let handleSubmit=(e)=> {
            e.preventDefault()
            console.log("submitted")
            if (!NewItem) return
            console.log(NewItem)
            addItem(NewItem)
            setNewItem('')
          }

  return (
    <div className="app">

      <Header title="Course List"/>
     
      <>
      {isLoading && <p>{`Loading Items...`}</p>}
      {fetchError && <p>{`Error : ${fetchError}`}</p>}
      {!isLoading && !fetchError && 
      <Content 
      items={items.filter(item=>((item.item).toLowerCase()).includes(search.toLowerCase()))}
      handleCheck={handleCheck}
      handleDelete={handleDelete}
      />}
      </>

      <AddItem 
      NewItem={NewItem}
      setNewItem={setNewItem}
      handleSubmit={handleSubmit}
      />

      <Search 
      search={search}
      setSearch={setSearch}
      />

      <Footer 
      let length={items.length}
      />

    </div>
  );
}

export default App