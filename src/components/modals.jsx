import { modalAction } from "../actions";
import { OffcanvasComponent } from "./utils/utilities";
import LoginModal from "./modals/loginModal";
import { connect } from "react-redux";
import { SidePanel } from "./sidePanel";

const Modals = ({ modals, modalAction }) => {

    // using the term modal for both modals and offcanvas.

    return (
        <>
            {/* <ModalComponent isActive={modals.LOGIN_MODAL} child={<LoginModal handleModal={modalAction}/>}/> */}                             
            {/* <ModalComponent isActive={modalActive} child={<TestComponent handleModal={setModalActive}/>}/> */}                                      {/* Passing parameter to child in both ways working fine here. */}

            <OffcanvasComponent isActive={modals.SIDE_MENU} child={<SidePanel handleClose={modalAction} />}/>                                           {/* we'll handle closing from child hence passing close function to child instead of offcanvas */}                  
            {/* <OffcanvasComponent isActive={menuActive} child={sidePanel({handleClose: setMenuActive})} handleClose={setMenuActive}/>                 {/* original copied element (sidePanel) was in form of function but i'am using React component */}                   
            <OffcanvasComponent isActive={modals.LOGIN_MODAL} child={LoginModal({handleClose: modalAction})} placement='end' className="login-modal"/>  {/* in this case leaving this comment here to check again if there comes any errors in future */}
        </>
    )
}

const mapStateToModals = (state) => {
    return { modals: state.modals };
}

export default connect(mapStateToModals, {modalAction})(Modals);

// -----------------------------------------------------------------------------------------------------------------------





