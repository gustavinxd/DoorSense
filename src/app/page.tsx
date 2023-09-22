'use client';

import IconUser from 'components/Icons/icon-user';
import IconLock from 'components/Icons/icon-lock';
import IconOpenPassword from './../components/Icons/icon-password-open';
import IconClosePassword from './../components/Icons/icon-password-close';
import { ThemeButton } from 'components/Buttons/ThemeButton/theme-button';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { InputLogin } from './../components/Inputs/Input-login/input-login';
import { Button } from './../components/Buttons/Button/button';
import { useState } from 'react';
import { XCircleIcon } from '@heroicons/react/24/outline';
import { ButtonIcon } from './../components/Buttons/Button-icon/button-icon';
import Link from 'next/link';
import Image from 'next/image';
import { Modal } from 'components/Modal';

// Esquema de validação para o formulário do Login - Utilizado a lib Zod
const schema = z.object({
  user: z
    .string({
      required_error: 'Este campo é obrigatório'
    })
    .min(3, 'Por favor insira um usuário válido'),
  password: z
    .string({
      required_error: 'Este campo é obrigatório'
    })
    .min(5, 'Por favor insira uma senha válida')
});

// Declarar o tipo dos dados do formulário sendo o mesmo que o do schema, evitar problemas de tipagem
type FormProps = z.infer<typeof schema>;

export default function LoginPage() {
  // Chamada do hook useForm para a criação do formulário do login
  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors }
  } = useForm<FormProps>({
    mode: 'all',
    reValidateMode: 'onBlur',
    resolver: zodResolver(schema)
  });

  //Função acionada ao dar submit do formulário
  const handleForm = async (data: FormProps) => {

    // console.log(data);
    const body = data
    const res = await fetch('https:/localhost:3000/api/login',{
      method: 'POST',
      body: body
    });
    
    resetField('user');
    resetField('password');
  };

  // STATES
  //para mudar a visibilidade da senha
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  //para mudar a visibilidade da modal
  const [open, setOpen] = useState(false);

  //Ref ao botao de cancelar ação na modal
  // const cancelButtonRef = useRef(null)
  // console.log(cancelButtonRef)

  // Função visibilidade da senha
  function togglePasswordVisibility() {
    setIsPasswordVisible((prevState) => !prevState);
  }
  // Função visibilidade da modal
  function toggleModalVisibility() {
    setOpen((prevState) => !prevState);
  }

  // Front da página
  return (
    <main className={`w-screen h-screen flex`}>
      {/* Right Column Image */}
      <picture
        className={`relative w-1/2 h-full hidden md:block lg:block xl:block `}
      >
        <Image
          src="/images/Login.png"
          alt="login image"
          fill
          quality={100}
          className={``}
          priority
          sizes="(max-width: 768px) 100vw"
        />
      </picture>

      {/* Left Column Form */}
      <section
        className={`p-6 flex flex-col items-center justify-center w-1/2 h-full gap-12`}
      >
        <ThemeButton/>
        <img src="/images/Logo.png" alt="" className={`lg:w-24`} />

        <h1 className={`text-primary-100 font-extrabold text-5xl lg:text-3x1`}>
          Login
        </h1>
        <p className={`font-regular text-lg md:text-sm`}>
          Conecte-se usando o usuário de administrador
        </p>

        <form
          onSubmit={handleSubmit(handleForm)}
          className={`flex flex-col items-center gap-10 w-full lg:w-1/2 xl:1/2`}
        >
          {/* Campo Usuário */}
          <InputLogin
            //Registrando campo na hook
            {...register('user', { required: true })}
            //Pros
            placeholder="Digite sua senha ..."
            icon={
              <IconUser
                size={30}
                color={
                  errors.user?.message
                    ? `var(--color-error)`
                    : `var(--color-primary)`
                }
              />
            }
            label="Usuário:"
            helperText={errors.user?.message}
          />

          {/* Campo password */}
          <InputLogin
            // Registrando campo na hook
            {...register('password', { required: true })}
            //Props
            placeholder="Digite sua senha ..."
            type={isPasswordVisible ? 'text' : 'password'}
            icon={
              <IconLock
                size={30}
                color={
                  errors.password?.message
                    ? `var(--color-error)`
                    : `var(--color-primary)`
                }
              />
            }
            label="Senha:"
            helperText={errors.password?.message}
            //Botao icone de esconder a senha
            actionIcon={
              <ButtonIcon
                className={`absolute right-3 ${
                  errors.password?.message ? `bottom-9` : `bottom-2`
                }`}
                icon={
                  isPasswordVisible ? (
                    <IconOpenPassword
                      size={30}
                      color={
                        errors.password?.message
                          ? `var(--color-error)`
                          : `var(--color-primary)`
                      }
                    />
                  ) : (
                    <IconClosePassword
                      size={30}
                      color={
                        errors.password?.message
                          ? `var(--color-error)`
                          : `var(--color-primary)`
                      }
                    />
                  )
                }
                onClick={togglePasswordVisibility}
              />
            }
          />

          <Button btnName="ENTRAR" className={`botao-primary`} />
        </form>
        {/* Link */}
        <Button
          btnName="Esqueceu a senha?"
          type="button"
          onClick={toggleModalVisibility}
        />
        <Link href="/Dashboard">Dashboard</Link>
      </section>

      {/*Esqueleto da modal*/}
      <Modal.Root open={open} onClose={setOpen}>
        {/*Parte de cima da modal - Action de fechar a modal*/}
        <Modal.CloseTop>
          <ButtonIcon
            onClick={toggleModalVisibility}
            icon={<XCircleIcon width={25} height={25} className={``} />}
          />
        </Modal.CloseTop>

        {/*Corpo da modal*/}
        <Modal.MainSection>
          {/*Icone da modal*/}
          <Modal.Icon
            icon={<IconUser size={50} color={`var(--color-primary)`} />}
          />

          {/*Titulo da modal*/}
          <Modal.Title title={`Teste`} />

          {/*Conteudo da modal*/}
          <Modal.Content>
            <InputLogin
              icon={<IconUser size={30} color={`var(--color-primary)`} />}
              placeholder="testeeeeee"
              label="Testee"
            />
          </Modal.Content>
        </Modal.MainSection>

        {/*Parte de baixo da modal - seção de botões*/}
        <Modal.Actions>
          {/*Botões da modal*/}
          <Modal.Action btnName="Clica ae" onClick={toggleModalVisibility} />
          <Modal.Action
            btnName="Clica ae"
            className="botao-cancel"
            onClick={toggleModalVisibility}
          />
        </Modal.Actions>
      </Modal.Root>
    </main>
  );
}
