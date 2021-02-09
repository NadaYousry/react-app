import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ModalComponent from "./../Modal";
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import "./style.css";
const ImageCard = ({ image, index }) => {
  const [openModal, setOpenModal] = useState(false);
  const handleCloseModal = () => setOpenModal(false);
  const handleOpenModal = () => setOpenModal(true);
  useEffect(() => {
    console.log(setOpenModal);
  }, [setOpenModal]);
  return (
    <>
      <div
        key={index}
        className="image-card-container"
        onClick={() => {
          handleOpenModal();
        }}
      >
        <Card>
          <Card.Img variant="top" src={image} className="w-100" />
        </Card>
        <div className="image-filter">
          <div className="image-filter-icon hidden">
            <FontAwesomeIcon icon={faSearchPlus} />
          </div>
        </div>
      </div>
      <ModalComponent handleClose={handleCloseModal} openModal={openModal} image={image}/>
    </>
  );
};

export default ImageCard;
