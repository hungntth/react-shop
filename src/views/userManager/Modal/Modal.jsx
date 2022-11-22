/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
import { CButton, CForm, CFormInput, CModal,  CModalFooter, CModalHeader, CModalTitle } from '@coreui/react';
import React, { useState } from 'react';

const Modal = ({ openModal, setOpenModal }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = () => {
        console.log(email, password);
        setOpenModal(false);
    }
    return (
        <>
            <CModal className="mt-4" backdrop="static" visible={openModal} onClose={() => setOpenModal(false)} alignment="center">
                <CModalHeader>
                    <CModalTitle>Thêm mới tài khoản</CModalTitle>
                </CModalHeader>
                <CForm style={{padding: '8px 16px'}}>
                    <CFormInput
                        type="text"
                        id="exampleFormControlInput1"
                        label="Email"
                        value={email}
                        onChange={e=>setEmail(e.target.value)}
                        aria-describedby="exampleFormControlInputHelpInline"
                    />
                    <CFormInput
                        type="password"
                        id="exampleFormControlInput1"
                        label="Mật khẩu"
                        value={password}
                        onChange={e=>setPassword(e.target.value)}
                        aria-describedby="exampleFormControlInputHelpInline"
                    />
                </CForm>
                <CModalFooter>
                    <CButton color="primary" onClick={handleSubmit}>Thêm mới</CButton>
                    <CButton color="secondary" onClick={() => setOpenModal(false)}>
                        Close
                    </CButton>
                </CModalFooter>
            </CModal>
        </>
    );
};

export default Modal;