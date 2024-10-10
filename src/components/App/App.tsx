// import css from './App.module.css';

import SearchBar from '../SearchBar/SearchBar.jsx';
import ImageGallery from '../ImageGallery/ImageGallery.js';
import Loader from '../Loader/Loader.js';
import ErrorMessage from '../ErrorMessage/ErrorMessage.js';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn.js';
import ImageModal from '../ImageModal/ImageModal.js';

import { useState, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import {Image} from '../types';

import axios from 'axios';

const API_KEY = "E-OIWc4PYrwrdKWkop-IGYVhoH2yXdooi0m7fDqxxto";
const BASE_URL = "https://api.unsplash.com/search/photos";

export default function App() {

  const [query, setQuery] = useState<string>("");
  const [images, setImages] = useState<Image[]>([]);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [showModal, setShowModal] =useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  useEffect(() => {
    if(!query) return;

    const fetchImages = () => {
      setLoading(true);
      setError(null);

      axios.get(BASE_URL, {
          params: {
            query,
            page,
            client_id: API_KEY,
          },
        })
      .then(response => { 
        setImages(prevImages => [...prevImages, ...response.data.results as Image[]]);
      })
      .catch (() => {
        setError("Error fetching images. Please try again.");
      })
      .finally(() => {
        setLoading(false);
      });
    };
    fetchImages();
  }, [query, page]);

  const handleSearchSubmit = (searchQuery: string) => {
    if (searchQuery !== query) {
      setQuery(searchQuery);
      setImages([]);
      setPage(1);
    }
  };

  const handleLoadMore = () => setPage(prevPage => prevPage + 1);

  const openModal = (image: Image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedImage(null);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSearchSubmit} />
      <Toaster />
      {error && <ErrorMessage message={error} />}
      <ImageGallery images={images} onImageClick={openModal} />
      {loading && <Loader />}
      {images.length > 0 && !loading && <LoadMoreBtn onClick={handleLoadMore} />}
      {showModal && <ImageModal image={selectedImage} onClose={closeModal} />}
    </div>
  );
}