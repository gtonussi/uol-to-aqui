import { BlitzPage } from "blitz"

import { Form } from "../core/components/Form"
import { LabeledTextField } from "../core/components/LabeledTextField"
import * as Schema from "../core/validations/business"

const NegocioPage: BlitzPage = () => {
  return (
    <Form
      submitText="Cadastrar"
      schema={Schema.Business}
      initialValues={{ name: "", category: "", phone: "", description: "", url: "" }}
      onSubmit={(values) => {
        console.log(values)
      }}
    >
      <LabeledTextField name="name" label="Nome:" placeholder="ex: PagSeguro" />
      <LabeledTextField name="category" label="Categoria:" placeholder="ex: Pagamentos" />
      <LabeledTextField name="phone" label="Fone:" placeholder="ex: (xx) xxxxx-xxxx" />
      <LabeledTextField
        name="description"
        label="Descrição:"
        placeholder="ex: Transações seguras"
      />
      <LabeledTextField name="url" label="Website:" placeholder="ex: pagseguro.uol.com.br" />
    </Form>
  )
}

export default NegocioPage
