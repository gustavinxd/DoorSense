'use client';

import { SetStateAction } from 'react';
import { useRouter } from 'next/navigation';
import { MdOutlineClose } from 'react-icons/md';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';
import { ButtonIcon } from 'components/Buttons/Button-icon/button-icon';
import { Modal } from 'components/Modal';
import { APP_ROUTES } from '../../../constants/app_routes';

interface ModalSucessForm {
  open: boolean;
  pathname: string;
  setOpen: React.Dispatch<SetStateAction<boolean>>;
}

export default function ModalSucessForm({
  open,
  pathname,
  setOpen
}: ModalSucessForm) {
  const router = useRouter();

  const isFirstAcess = pathname === APP_ROUTES.private.reset_user;

  function toggleModalVisibility() {
    setOpen((prevState) => !prevState);
    router.refresh();
    router.push(APP_ROUTES.public.login);
  }

  return (
    <Modal.Root open={open} onClose={setOpen}>
      <Modal.CloseTop>
        <ButtonIcon
          onClick={toggleModalVisibility}
          icon={
            <MdOutlineClose
              size={30}
              className="text-gray-500  hover:text-red-500 hover:scale-110 focus:outline-none"
            />
          }
        />
      </Modal.CloseTop>
      <Modal.MainSection>
        <Modal.Icon
          icon={
            <IoIosCheckmarkCircleOutline
              size={45}
              color={`var(--color-primary)`}
            />
          }
        />
        <Modal.Title
          title={isFirstAcess ? 'Usuário redefinido' : 'Senha redefinida'}
          className="dark:text-white"
        />
        <Modal.Content>
          <p>
            {isFirstAcess
              ? 'O usuário foi redefinido com sucesso. Para continuar o acesso, vá para login.'
              : 'A senha foi redefinida com sucesso. Para continuar o acesso, vá para login.'}
          </p>
        </Modal.Content>
      </Modal.MainSection>
      <Modal.Actions>
        <Modal.Action
          btnName="Ir para login"
          className="botao-reset"
          onClick={toggleModalVisibility}
        />
      </Modal.Actions>
    </Modal.Root>
  );
}
