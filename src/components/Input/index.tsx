import React from "react";
import {
  Label,
  Input,
  InputStyleSubmit
} from "../styles";

interface propsConfig {
  type:string;
  name: string;
  id: string;
  labelName: string;
  placeholder?: string;
  value: string;
  onChange:any;
}

interface propsSubmitConfig {
  name: string;
  value: string;
}

export const InputText = (props: propsConfig) => {
  return (
    <div>
      <Label htmlFor={props.id}>{props.labelName}</Label>
      <Input
        type={props.type}
        name={props.name}
        id={props.id}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
};

export const InputSubmit = (props: propsSubmitConfig) => {
  return (
    <InputStyleSubmit
      type="submit"
      name={props.name}
      value={props.value}
    />
  );
};