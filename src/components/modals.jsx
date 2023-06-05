import { modalAction } from "../actions";
import { ModalComponent } from "./utils/utilities";
import LoginModal from "./modals/loginModal";
import { connect } from "react-redux";

const Modals = ({ modals, modalAction }) => {

    return (
        <>
            <ModalComponent isActive={modals.LOGIN_MODAL} child={<LoginModal handleModal={modalAction}/>}/>
            {/* <ModalComponent isActive={modalActive} child={<TestComponent handleModal={setModalActive}/>}/> */}
        </>
    )
}

const mapStateToModals = (state) => {
    return { modals: state.modals };
}

export default connect(mapStateToModals, {modalAction})(Modals);

// -----------------------------------------------------------------------------------------------------------------------





