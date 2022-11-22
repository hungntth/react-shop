/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { CButton, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle } from '@coreui/react';
import React from 'react';

const ModalLockAccount = ({ openModalLockAccount, setOpenModalLockAccount, index }) => {
    return (
        <>
            <CModal alignment="center" backdrop="static" visible={openModalLockAccount} onClose={() => setOpenModalLockAccount(false)}>
                <CModalHeader>
                    <CModalTitle>Modal title</CModalTitle>
                </CModalHeader>
                <CModalBody>
                    I will not close if you click {index} outside me. Don't even try to press escape key.
                </CModalBody>
                <CModalFooter>
                    <CButton color="secondary" onClick={() => setOpenModalLockAccount(false)}>
                        Close
                    </CButton>
                    <CButton color="primary">Save changes</CButton>
                </CModalFooter>
            </CModal>
        </>
    );
};

export default ModalLockAccount;