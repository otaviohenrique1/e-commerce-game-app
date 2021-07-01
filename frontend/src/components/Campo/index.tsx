import { FormGroup, InputGroup, InputGroupAddon, InputGroupText, Label } from "reactstrap";
import { Field } from "formik";
import { InputHTMLAttributes } from "react";

interface CampoProps extends InputHTMLAttributes<HTMLInputElement> {
  htmlFor?: string;
  label?: string;
  renderMask?: any;
  erro?: any;
}

interface CampoSelectProps extends InputHTMLAttributes<HTMLInputElement> {
  htmlFor?: string;
  label?: string;
  erro?: any;
  lista: any[];
}

export function Campo(props: CampoProps) {
  return (
    <FormGroup>
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>
            <Label htmlFor={props.htmlFor}>{props.label}</Label>
          </InputGroupText>
        </InputGroupAddon>
        <Field
          className="form-control"
          render={props.renderMask}
          {...props}
        />
        <span>{props.erro}</span>
      </InputGroup>
    </FormGroup>
  );
}

export function CampoSelect(props: CampoSelectProps) {
  return (
    <FormGroup>
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>
            <Label htmlFor={props.htmlFor}>{props.label}</Label>
          </InputGroupText>
        </InputGroupAddon>
        <Field
          className="form-control"
          component="select"
          {...props}
        >
          <option value="">Selecione</option>
          {props.lista.map((item, index) => (
            <option key={index} value={item}>{item}</option>
          ))}
        </Field>
        <span>{props.erro}</span>
      </InputGroup>
    </FormGroup>
  );
}