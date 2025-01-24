
import Input from '../../../../Components/Input'
import { AddressFormContainer } from './styles'

function AddressForm() {
  return (
    <AddressFormContainer>
      <Input  placeholder='CEP' className='cep' type='number'/>
      <Input  placeholder='Rua' className='Street' />
      <Input  placeholder='Número' type='number'/>
      <Input  placeholder='Complemento' className='complement' />
      <Input  placeholder='Bairro' />
      <Input  placeholder='Cidade' />
      <Input  placeholder='UF'  />
    </AddressFormContainer>
  )
}

export default AddressForm
