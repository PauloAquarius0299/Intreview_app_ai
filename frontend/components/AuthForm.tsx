'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import {z} from 'zod'
import { Button } from "@/components/ui/button"
import {Form} from "@/components/ui/form"
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import {toast} from 'sonner'
import FormField from '../components/FormField'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { signUp, signIn } from '@/lib/actions/auth..action'
import { auth } from '@/firebase/client'

type FormType = 'sign-in' | 'sign-up';

const authFormSchema = (type: FormType) => {
  return z.object({
    nome: type === 'sign-up' ? z.string().min(3) : z.string().optional(),
    email: z.string().email(),
    senha: z.string().min(3),
  })
}

const AuthForm = ({type}: {type: FormType}) => {
  const router = useRouter()
  const formSchema = authFormSchema(type);
  const pathname = usePathname();
  const isSignIn = pathname.includes("sign-in");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nome: "",
      email: "",
      senha: "",
    },
  })
 
  // 2. Define a submit handler.
 async function onSubmit(values: z.infer<typeof formSchema>) {
    try{
      if (type === 'sign-up') {
        const {nome, email, senha} = values;

        const userCredentials = await createUserWithEmailAndPassword(auth, email, senha);

        const result = await signUp({
          uid: userCredentials.user.uid,
          name: nome!,
          email,
          password: senha,
        })

        if (!result || !result.success) {
          toast.error(result?.message || "Erro desconhecido ao criar conta.");
          return
        }

        toast.success("Conta criada com sucesso. Por favor acesse");
        router.push("/sign-in")
      } else {

        const {email, senha}= values;

        const userCredentials = await signInWithEmailAndPassword(auth, email, senha);

        const idToken = await userCredentials.user.getIdToken();

        if(!idToken){
          toast.error('sing in failed')
          return;
        }

        await signIn({
          email, idToken
        });

        toast.success("Acesso permitido");
        router.push('/')
      }
    } catch(error){
      console.log(error)
      toast.error(`There was an error: ${error}`)
    }
  }

  return (
    <div className="card-border lg:min-w-[566px] bg-gradient-to-br from-gray-700 to-gray-900">
  {/* Cabeçalho */}
  <div className="flex flex-col justify-center gap-6 card py-14 px-10">
    <div className="flex flex-col gap-2 text-center justify-center items-center">
      <Image src="/logo.png" alt="logo" height={120} width={120} />
      <h2 className="text-primary-100">TalkWise</h2>
      <h3 className="text-xl">Converse com a AI e pratique seu idioma</h3>
    </div>
  </div>


  <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6 mt-4 form">

      {!isSignIn && (
        <FormField 
        control={form.control}
        nome="nome"
        label="Nome"
        placeholder="Digite seu nome"
        />
      )}

       <FormField 
        control={form.control}
        nome="email"
        label="Email"
        placeholder="Digite seu email"
        type="email"
        />

       <FormField 
        control={form.control}
        nome="senha"
        label="Senha"
        placeholder="Digite sua senha"
        type="password"
        />

      <Button type="submit" className="btn flex flex-row justify-center w-full">
        {isSignIn ? "Acessar" : "Criar sua conta"}
      </Button>
    </form>
  </Form>
  <p className="text-center mt-4">
    {isSignIn ? "Não tem uma conta?" : "Já tem uma conta?"}
    <Link
      href={isSignIn ? "/sign-up" : "/sign-in"}
      className="font-bold text-user-primary ml-1"
    >
      {isSignIn ? "Cadastrar" : "Acessar"}
    </Link>
  </p>
  </div>

  )
}

export default AuthForm