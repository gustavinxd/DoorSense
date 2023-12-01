'use client';

import { useState, useEffect, SetStateAction } from 'react';
import { BiFilter } from 'react-icons/bi'; // Importar o ícone BiFilter do react-icons/bi
import { AiOutlinePlus } from 'react-icons/ai';
import { ButtonIcon } from 'components/Buttons/Button-icon/button-icon';
import { Modal } from 'components/Modal';
import { MdOutlineClose } from 'react-icons/md';
import { TbHomeEdit } from 'react-icons/tb';
import { InputLogin } from 'components/Inputs/Input-login';
import ModalCreateClass from './../Dashboard/ClassModals/criar-sala';
import Mensagem from 'components/Mensagem';
import { ApiData } from 'types';
import  SelectFilter  from './filter';

type Datas = {
  data: ApiData,
  setList: React.Dispatch<SetStateAction<ApiData>>;
}

type sala = {
  id: string,
  nome: string,
  numero: string, 
  arduino: string, 
  status: string 
}

export default function Barra({data, setList}: Datas) {
  const [message, setMessage] = useState('');
  const [open, setOpen] = useState(false);

  const [search, setSearch] = useState('');

  // useEffect em que renderiza a lista de moedas novamente ao pesquisar na barra de busca
  useEffect(() => {
    if (search === '') {
      setList(data);
    } else {
      setList({...data, salas: data.salas.filter((item) => item.nome.toUpperCase().indexOf(search.toUpperCase()) > -1 ) }
      );
    }
  }, [search]);

  function toggleModalVisibility() {
    setOpen((prevState) => !prevState);
  }

  return (
    <>
    {message && <Mensagem message={message} duration={3} />}
      <div className="text-md flex flex-col sm:flex-row mb-4 sm:text-base ">
        <div className="relative w-full sm:mr-4 ">
          <div className="bg-thirdy p-2 sm:p-4 rounded-2xl flex dark:bg-dark-100 gap-5 ">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="search"
              placeholder="Buscar..."
              className="pl-10 pr-3 text-base w-full flex focus:shadow-outline rounded-lg bg-white dark:bg-dark-200 focus:outline-none"
            />
            <SelectFilter setList={setList} data={data}/>
          </div>
        </div>

        <div className="bg-thirdy p-2 sm:p-3 w-fit mt-2 sm:mt-0 sm:w-auto rounded-2xl flex sm:items-center dark:bg-dark-100">
          <button
            className="border-primary-100 bg-primary-100 text-white font-semibold py-2 px-2 rounded flex items-center transform hover:scale-95"
            style={{ whiteSpace: 'nowrap' }}
            onClick={toggleModalVisibility}
          >
            <AiOutlinePlus size={20} />
            Nova Sala
          </button>
        </div>
      </div>

      <ModalCreateClass open={open} setOpen={setOpen} setMessage={setMessage} />
    </>
  );
}
