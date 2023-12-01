'use client';

import { useState } from 'react';
import IconUser from 'components/Icons/icon-user';
import IconLock from 'components/Icons/icon-lock';
import IconOpenPassword from '../Icons/icon-password-open';
import IconClosePassword from '../Icons/icon-password-close';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { InputLogin } from '../Inputs/Input-login/input-login';
import { Button } from '../Buttons/Button/button';
import { ButtonIcon } from '../Buttons/Button-icon/button-icon';
import { usePathname, useRouter } from 'next/navigation';
import ModalSucessForm from './ModalSucess/index';
import { APP_ROUTES } from 'constants/app_routes';
import Loading from 'app/(authenticated)/loading';


const schema = z
  .object({
    username: z
      .string({
        required_error: 'Este campo é obrigatório'
      })
      .email('Por favor insira um e-mail válido.'),
    password: z
      .string({
        required_error: 'Este campo é obrigatório'
      })
      .min(5, 'Por favor insira uma senha válida'),
    confirmPassword: z
      .string({
        required_error: 'Este campo é obrigatório'
      })
      .min(5, 'Por favor insira uma senha válida')
  })
  .refine((fields) => fields.password === fields.confirmPassword, {
    path: ['confirmPassword'],
    message: 'As senhas precisam ser iguais.'
  });

// Declarar o tipo dos dados do formulário sendo o mesmo que o do schema, evitar problemas de tipagem
type FormProps = z.infer<typeof schema>;

export default function FirstAcessForm() {
  const {refresh, push} = useRouter();
  const pathname = usePathname();
  const [sucess, setSucess] = useState(false);
  const [loading, setLoading] = useState(false);

  // Chamada do hook useForm para a criação do formulário do login
  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors, isSubmitting }
  } = useForm<FormProps>({
    mode: 'all',
    reValidateMode: 'onBlur',
    resolver: zodResolver(schema)
  });

  //Função acionada ao dar submit do formulário
  const handleForm = async (data: FormProps) => {
    setLoading(true);

    try {
    
      console.log(data);
      const body = {
        username: data.username,
        password: data.password
      };
  
      const res = await fetch('/api/login/register-user', {
        method: 'PUT',
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      const json = await res.json();
      console.log(json)
  
      if(json.status === '401 Unauthorized' || '403 Forbidden'){
        refresh();
        push(APP_ROUTES.public.login);
      }
  
      if(json.status === '200 OK'){
        resetField('username');
        resetField('password');
        resetField('confirmPassword');
        setSucess((prevState) => !prevState);
      }
    } catch (error) {
      console.error('Erro ao processar o formulário:', error);
      // Trate o erro conforme necessário
    } finally {
      setLoading(false);
    }
  };

  // STATES
  //para mudar a visibilidade da senha
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);

  function togglePasswordVisibility() {
    setIsPasswordVisible((prevState) => !prevState);
  }
  function toggleConfirmPasswordVisibility() {
    setIsConfirmPasswordVisible((prevState) => !prevState);
  }

  return (
    <>
      <h1
        className={`text-primary-100 font-extrabold text-3xl lg:text-5xl xl:text-5xl`}
      >
        Bem-vindo
      </h1>
      <p
        className={`font-light text-sm text-center lg:text-lg xl:text-lg dark:text-white`}
      >
        Primeiro acesso? Redefina o usuário e senha!
      </p>

      <form
        onSubmit={handleSubmit(handleForm)}
        className={`flex flex-col items-center gap-8 w-full lg:w-1/2 xl:1/2`}
      >
        {/* Campo Usuário */}
        <InputLogin
          //Registrando campo na hook
          {...register('username', { required: true })}
          //Pros
          placeholder="Digite um e-mail ..."
          icon={
            <IconUser
              size={30}
              color={
                errors.username?.message
                  ? `var(--color-error)`
                  : `var(--color-primary)`
              }
            />
          }

          helperText={errors.username?.message}
          disabled={isSubmitting || loading} // Desativar o input durante o envio

        />

        {/* Campo password */}
        <InputLogin
          {...register('password', { required: true })}
          //Props
          placeholder="Digite uma senha ..."
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
          helperText={errors.password?.message}
          disabled={isSubmitting || loading}
          actionIcon={
            <ButtonIcon
              className={`absolute right-3 ${
                errors.password?.message ? `bottom-12` : `bottom-2`
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

        {/* Campo CONFIRM password */}
        <InputLogin
          {...register('confirmPassword', { required: true })}
          //Props
          placeholder="Confirme a nova senha ..."
          type={isConfirmPasswordVisible ? 'text' : 'password'}
          icon={
            <IconLock
              size={30}
              color={
                errors.confirmPassword?.message
                  ? `var(--color-error)`
                  : `var(--color-primary)`
              }
            />
          }
          helperText={errors.confirmPassword?.message}
          disabled={isSubmitting || loading}
          actionIcon={
            <ButtonIcon
              className={`absolute right-3 ${
                errors.confirmPassword?.message ? `bottom-12` : `bottom-2`
              }`}
              icon={
                isConfirmPasswordVisible ? (
                  <IconOpenPassword
                    size={30}
                    color={
                      errors.confirmPassword?.message
                        ? `var(--color-error)`
                        : `var(--color-primary)`
                    }
                  />
                ) : (
                  <IconClosePassword
                    size={30}
                    color={
                      errors.confirmPassword?.message
                        ? `var(--color-error)`
                        : `var(--color-primary)`
                    }
                  />
                )
              }
              onClick={toggleConfirmPasswordVisibility}
            />
          }
        />

        <Button
          btnName={loading ? <Loading /> : 'Enviar'}
          className={`botao-primary lg:px-10 xl:px-10 hover:scale-100 hover:bg-primary-60`}
          type="submit"
          disabled={isSubmitting || loading} // Desativar o botão durante o envio
        />
      </form>

      <ModalSucessForm open={sucess} setOpen={setSucess} pathname={pathname}/>
    </>
  );
}
