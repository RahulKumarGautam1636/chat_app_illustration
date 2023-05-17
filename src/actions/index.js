
export const isMobileAction = (status) => {
    return {
        type: process.env.REACT_APP_IS_MOBILE,
        value: status
    }
}