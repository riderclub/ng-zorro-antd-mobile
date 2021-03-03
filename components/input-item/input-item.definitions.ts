// Options type of input in HTML4.0
type InputType =
  | 'button'
  | 'checkbox'
  | 'color'
  | 'date'
  | 'datetime-local'
  | 'email'
  | 'file'
  | 'hidden'
  | 'image'
  | 'month'
  | 'password'
  | 'radio'
  | 'range'
  | 'reset'
  | 'submit'
  | 'text'
  | 'time'
  | 'url'
  | 'week';

export type NzmInputType = InputType | 'bankCard' | 'phone' | 'number' | 'digit' | 'money ' | 'tel' | 'money';
