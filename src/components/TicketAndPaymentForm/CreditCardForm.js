import React from 'react';
import Input from '../Form/Input';
import { InputWrapper } from './InputWrapper';
import FormValidations from './FormValidations';
import { toast } from 'react-toastify';
import { useForm } from '../../hooks/useForm';
import { FormWrapper } from './FormWrapper';
import { ErrorMsg } from './ErrorMsg';
import styled from 'styled-components';
import CreditCardMockUp from './CreditCardMockUp';

export default function CreditCardForm() {
  const {
    handleChange,
    data,
    errors,
  } = useForm({
    validations: FormValidations,

    /*
    CASO PRECISE ENVIAR INFORMAÇÕES PARA O SERVIDOR SOBRE O CARTÃO, MODIFICAR FUNÇÃO ABAIXO:

    onSubmit: async(data) => {
      const newData = {
        cardNumber: data.cardNumber,
        name: data.name,
        expireDate: data.expireDate,
        cvc: data.cvc
      };
      try {
        console.log(newData);
        toast('Informações salvas com sucesso!');
      } catch (err) {
        toast('Não foi possível salvar suas informações!');
      }
    },
    */

    initialValues: {
      cardNumber: '',
      name: '',
      expireDate: '',
      cvc: ''
    },
  });

  return (
    <>
      <StyleLabel>Pagamento</StyleLabel>
      <ImageFormWrapper>
        <CreditCardMockUp 
          size={420} 
          height={180}
          cardNumber={data?.cardNumber || '•••• •••• •••• ••••'}
          name={data?.name || 'YOUR NAME HERE'}
          expireDate={data?.expireDate || '••/••'}
        />
        <FormWrapper>
          
          <InputWrapper>
            <Input
              name="cardNumber"
              label="Card Number"
              type="text"
              maxLength="16"
              mask="9999 9999 9999 9999"
              value={data?.cardNumber || ''}
              onChange={handleChange('cardNumber')}
            />
            {errors.cardNumber && <ErrorMsg>{errors.cardNumber}</ErrorMsg>}
          </InputWrapper>
          <EgStyled>E.g.:49...,51...,36...,37...</EgStyled>
          <InputWrapper>
            <Input
              name="name"
              label="Name"
              type="text"
              value={data?.name || ''}
              onChange={handleChange('name')}
            />
            {errors.name && <ErrorMsg>{errors.name}</ErrorMsg>}
          </InputWrapper>
          <Wrapper>
            <InputWrapper>
              <Input
                name="expireDate"
                label="Valid Thru"
                type="text"
                maxLength="14"
                mask="99/9999"
                value={data?.expireDate || ''}
                onChange={handleChange('expireDate')}
              />
              {errors.expireDate && <ErrorMsg>{errors.expireDate}</ErrorMsg>}
            </InputWrapper>
            <InputWrapper>
              <Input
                name="cvc"
                label="CVC"
                type="text"
                maxLength="3"
                mask="999"
                value={data?.cvc || ''}
                onChange={handleChange('cvc')}
              />
              {errors.cvc && <ErrorMsg>{errors.cvc}</ErrorMsg>}
            </InputWrapper>
          </Wrapper>
        </FormWrapper>
      </ImageFormWrapper>
    </>
  );
};

const StyleLabel = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  font-weight: 400;
  color: #8e8e8e;
`;

const ImageFormWrapper = styled.div`
width: 100%;
display: flex;
`;

const Wrapper = styled.div`
display: flex;
flex-wrap: nowrap;
flex-direction: row;
justify-content: space-between;
gap: 10px;

>div{
  width:50%;
  margin: 0 !important;
  >div{
  width:100%;
  
}
}
`;

const EgStyled = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  font-weight: 400;
  color: #8e8e8e;
`;

