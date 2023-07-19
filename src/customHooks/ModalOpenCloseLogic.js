"use client";

import { useState } from "react";

const useModalOpenCloseLogic = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const handleOpenModal = (value) => {
    setIsModalOpen(true);
    setSelected(value);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelected(null);
  };

  return {
    isModalOpen,

    handleOpenModal,
    handleCloseModal,
    selected,
  };
};

export default useModalOpenCloseLogic;
