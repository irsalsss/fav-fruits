import React, { useEffect, useMemo, useState } from 'react';
import shallow from 'zustand/shallow';
import { DragDropContext } from "react-beautiful-dnd";
import AvatarProfile from '../components/AvatarProfile';
import useStoreFavorite from '../store/favorite';
import DraggableElement from '../components/DraggableElement';
import { getAvailableFruits } from '../services/fruits';

const Favorite = () => {
  const {
    favorite,
    addFavorite,
    setFavorite,
    activeUser,
  } = useStoreFavorite(
    (state) => ({
      favorite: state.favorite,
      addFavorite: state.addFavorite,
      setFavorite: state.setFavorite,
      activeUser: state.activeUser,
    }),
    shallow
  );

  const [availableFruits, setAvailableFruits] = useState([]);
  const username = activeUser.username;
  const favoriteFruits = favorite[username].favorite;

  const moveToFav = (sourceIndex) => {
    const result = Array.from(availableFruits)
    const [removed] = result.splice(sourceIndex, 1)

    result.sort()

    addFavorite(removed)
    setAvailableFruits(result)
  }

  const moveToGeneral = (sourceIndex) => {
    const result = Array.from(favoriteFruits)
    const [removed] = result.splice(sourceIndex, 1)
    const newAvailableFruits = [...availableFruits, removed]

    result.sort()
    newAvailableFruits.sort()

    setFavorite(result)
    setAvailableFruits(newAvailableFruits)
  }


  const onDragEnd = (result) => {
    const {
      destination = {},
      source = {}
    } = result

    if (!destination || destination.droppableId === source.droppableId) {
      return;
    }

    if (destination.droppableId === "favorite") {
      moveToFav(source.index)
    }

    if (destination.droppableId === "general") {
      moveToGeneral(source.index)
    }
  }

  const fetchAvailableFruits = async () => {
    const data = await getAvailableFruits(favoriteFruits);
    setAvailableFruits(data.sort())
  }

  const sortedFavFruits = useMemo(() => {
    return favoriteFruits.sort()
  }, [favorite])

  useEffect(() => {
    fetchAvailableFruits()
  }, [])

  return (
    <div id="container-favorite" className="w-full">
      <div className='fixed top-[16px] right-[16px]'>
        <AvatarProfile />
      </div>
      <div className="flex flex-row mt-[56px] w-full gap-10 p-[24px] justify-around">
        <DragDropContext onDragEnd={onDragEnd}>
          <DraggableElement
            label="general"
            items={availableFruits}
            emptyState="All the fruits has been selected"
          />
          <DraggableElement
            label="favorite"
            items={sortedFavFruits}
            emptyState="Drag the fruit from general tab to here"
          />
        </DragDropContext>
      </div>
    </div>
  )
}

export default Favorite