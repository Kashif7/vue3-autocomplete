const validateFormAndType = (
  { receivedForm, receivedType },
  { expectedForm, expectedType }
) => {
  if (receivedForm !== expectedForm) {
    throw new Error(
      `Expected an '${expectedForm.name}', received '${receivedForm.name}'`
    );
  }

  if (receivedType !== expectedType) {
    throw new Error(
      `Expected '${expectedType.name}', received '${receivedType.name}'`
    );
  }
};

export const queryStringArray = (state) => (stateKey, searchQuery) => {
  try {
    const { values, form, type } = state[stateKey];

    validateFormAndType(
      {
        receivedForm: form,
        receivedType: type,
      },
      {
        expectedForm: Array,
        expectedType: String,
      }
    );

    //note - querying is case insensitive
    return values.filter((value) =>
      value.toLowerCase().includes(searchQuery.toLowerCase())
    );
  } catch (e) {
    console.error("queryStringDataArray failing", e);

    throw e;
  }
};

export const queryObjectArray = (state) => (stateKey, dataKey, searchQuery) => {
  try {
    const { values, form, type } = state[stateKey];

    validateFormAndType(
      {
        receivedForm: form,
        receivedType: type,
      },
      {
        expectedForm: Array,
        expectedType: Object,
      }
    );

    //note - querying is case insensitive
    return values.filter((value) =>
      value[dataKey].toLowerCase().includes(searchQuery.toLowerCase())
    );
  } catch (e) {
    console.error("queryObjectDataArray failing", e);

    throw e;
  }
};

export const storeGetters = {
  queryStringArray,
  queryObjectArray,
};
