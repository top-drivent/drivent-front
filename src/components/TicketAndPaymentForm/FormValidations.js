const today = new Date();

const validations = {
  name: {
    custom: {
      isValid: (value) => isValidString(value),
      message: 'Digite um nome válido',
    },
  },

  cardNumber: {
    custom: {
      isValid: (value) => value?.replaceAll(' ', '').length === 16,
      message: 'Digite um número de cartão válido',
    },
  },

  expireDate: {

    custom: {
      isValid: (value) => value.split('/')[0]<=12 && value.split('/')[1]>=today.getFullYear(),
      message: 'Utilize um cartão com validade acima de um ano',
    },
  },

  cvc: {

    custom: {
      isValid: (value) => value.length === 3,
      message: 'Digite um número de segurança valido',
    },
  },

};

export default validations;

function isValidString(value) {
  return value || value?.trim();
}
