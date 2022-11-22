/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { CButton, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle } from '@coreui/react';
import React from 'react';

const ModalResetPassword = ({ openModalResetPassword, setOpenModalResetPassword, index }) => {
    return (
        <>
            <CModal alignment="center" backdrop="static" visible={openModalResetPassword} onClose={() => setOpenModalResetPassword(false)}>
                <CModalHeader>
                    <CModalTitle>Modal title</CModalTitle>
                </CModalHeader>
                <CModalBody>
                    I will not close if you click {index} outside me. Don't even try to press escape key.
                </CModalBody>
                <CModalFooter>
                    <CButton color="secondary" onClick={() => setOpenModalResetPassword(false)}>
                        Close
                    </CButton>
                    <CButton color="primary" >Save changes</CButton>
                </CModalFooter>
            </CModal>
        </>
    );
};

export default ModalResetPassword;