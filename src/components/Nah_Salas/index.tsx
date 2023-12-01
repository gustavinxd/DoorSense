import React from 'react';
import { FaFaceSadTear } from "react-icons/fa6";
import { RiEmotionSadFill } from "react-icons/ri";

const NahSalas: React.FC = () => {
  return (
    <div className="flex flex-col items-center mt-8">
      <RiEmotionSadFill color="#858585" size={50}/>
      <p className="mt-2 text-gray-500 dark:text-gray-400">Não há salas cadastradas.</p>
    </div>
  );
};

export default NahSalas;
