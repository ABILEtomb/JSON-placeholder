import './App.css';
import React from 'react';
import Navbar from './Navbar';
import Content from './Content';
import { Routes,Route } from 'react-router-dom';
//import  Typography  from '@mui/material/Typography';
import {AlbumsPage} from './albums/albumsPage';
import {AlbumsProvider} from "./albums/AlbumContext";
import { CommentProvider } from './comments/CommentContext';
import { CommentPage } from './comments/CommentPage';
import { PostsProvider } from './posts/PostsContext';
import {PhotosPage} from './photos/PhotosPage';
import {TodosPage} from "./Todos/TodosPage";
import  {UsersPage} from "./Users/UsersPage"
import { PhotosProvider } from './photos/PhotosContext';
import {PostsPage} from   "./posts/PostsPage";
import { TodosProvider } from './Todos/TodosContext';
import { UsersProvider } from './Users/UsersContext';



 

function App() {

    return (
    <AlbumsProvider>  
    <CommentProvider>
    <PhotosProvider>
    <PostsProvider>
    <TodosProvider>
    <UsersProvider>
   <div className='App'>
   <Navbar/>
<Routes> 
    <Route path='/' element={<Content/>}/>   
    <Route path='/Albums' element={<AlbumsPage/>}/> 
    <Route path='/Comment' element={<CommentPage/>}/> 
    <Route path='/Posts' element={<PostsPage/>}/> 
    <Route path='/Photos' element={<PhotosPage/>}/>
    <Route path='/Todos' element={<TodosPage/>}/> 
    <Route path="/Users" element={<UsersPage/>}/>
</Routes>  
   </div>
   </UsersProvider>
   </TodosProvider>
   </PostsProvider>
   </PhotosProvider>
   </CommentProvider>
   </AlbumsProvider> 

    );
}

export default App;