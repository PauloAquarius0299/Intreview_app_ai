import React from 'react'
import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from './ui/input'
import { Controller, FieldValues, Path, Control } from 'react-hook-form'

interface FormFieldProps<T extends FieldValues> {
    control: Control<T>;
    nome: Path<T>;
    label: string;
    placeholder?: string;
    type?: 'text' | 'email' | 'password' | 'file';
}

const FormField = <T extends FieldValues>({control, nome, label, placeholder, type = "text"}: FormFieldProps<T>) => {
  return (
    <Controller name={nome}
    control={control}
    render={({ field }) => (
            <FormItem>
              <FormLabel className='label'>{label}</FormLabel>
              <FormControl>
                <Input className='' placeholder={placeholder} type={type} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
    )
}

export default FormField