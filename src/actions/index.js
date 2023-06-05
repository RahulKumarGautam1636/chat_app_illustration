
export const isMobileAction = (status) => {
    return {
        type: process.env.REACT_APP_IS_MOBILE,
        value: status
    }
}

export const modalAction = (modalName, status) => {
    return {
      type: 'MODAL',
      payload: {
        name: modalName,
        status: status
      }
    }
}