import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import PostsProvider from './store/PostsProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <PostsProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </PostsProvider>
);

