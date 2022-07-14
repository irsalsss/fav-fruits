import clsx from 'clsx';
import React from 'react';
import { Droppable, Draggable } from "react-beautiful-dnd";
import { isEmpty } from '../utils/general';
import EmptyData from './EmptyData';
import Text from './Text';

const DraggableElement = ({ items = [], label, emptyState }) => {
  const getListStyle = isDraggingOver => ({
    background: isDraggingOver ? "lightblue" : "pink",
    padding: "8px 16px",
    minHeight: 500,
    maxHeight: 500,
    overflowY: 'auto',
    position: 'relative',
  });

  const getItemStyle = (isDragging, draggableStyle) => ({
    userSelect: "none",
    padding: 8,
    background: isDragging ? "#0764a2" : "#4ab2f7",
    justifyContent: 'space-between',
    alignItems: 'center',
    display: 'flex',
  
    ...draggableStyle
  });

  return (
    <div className='w-[480px] min-h-500px'>
      <Text className="uppercase" value={label} level={3} />
      <Droppable droppableId={label}>
        {(provided, snapshot) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            style={getListStyle(snapshot.isDraggingOver)}
          >
            {!isEmpty(items) ? 
              items.map((item, index) => (
                <Draggable key={item} draggableId={item} index={index}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}
                      className={clsx(index !== items.length - 1 && "mb-[8px]")}
                    >
                      <Text value={item} isTitle={false} />
                    </div>
                  )}
                </Draggable>
            )) : (
              <div className='absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]'>
                <EmptyData desc={emptyState} />
              </div>
            )}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  )
}

export default DraggableElement