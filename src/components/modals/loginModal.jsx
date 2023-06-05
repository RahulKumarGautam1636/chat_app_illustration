// import { HashLink } from "react-router-hash-link";
// import { connect } from "react-redux";

const LoginModal = ({ handleModal }) => {

    console.log(handleModal);
    
    return (
        <h1 onClick={() => handleModal('LOGIN_MODAL', false)}>
            LOGIN MODAL
        </h1>
    )
}

export default LoginModal;

// const mapStateToLoginModal = (state) => {
//     return {};
// }

// export default connect(mapStateToLoginModal, {})(LoginModal);