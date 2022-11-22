/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { CButton, CFormInput, CInputGroup, CInputGroupText, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle } from '@coreui/react';
import React, { useEffect, useState } from 'react';

const ModalPayment = ({ openModalPayment, setOpenModalPayment, index, user }) => {
    const [money, setMoney] = useState(0);
    const [modalSubmit, setModalSubmit] = useState(false);
    const currentMoney = 100000;
    const handleSubmit = () => {
        setOpenModalPayment(false)
        setModalSubmit(true)
    }
    const handleClose = () => {
        setOpenModalPayment(false)
    }
    const handleAddMoney = () => {
        console.log(user,money);
        setModalSubmit(false)
    }
    useEffect(() => {
        if(openModalPayment) {
            setMoney(0)
        }
    }, [openModalPayment])
    return (
        <>
            <CModal alignment="center" backdrop="static" visible={openModalPayment} onClose={() => handleClose()}>
                <CModalHeader>
                    <CModalTitle>Modal title</CModalTitle>
                </CModalHeader>
                <CModalBody>
                    <CInputGroup className="mb-3">
                        <CInputGroupText>$</CInputGroupText>
                        <CFormInput value={money} onChange={e => { setMoney(parseInt(e.target.value)) }} aria-label="Dollar amount (with dot and two decimal places)" />
                        <CInputGroupText>{new Intl.NumberFormat('vn-IN', { maximumSignificantDigits: 3 }).format(money)}đ</CInputGroupText>
                    </CInputGroup>
                </CModalBody>
                <CModalFooter>
                    <CButton color="primary" onClick={handleSubmit}>Add</CButton>
                    <CButton color="secondary" onClick={() => handleClose()}>
                        Close
                    </CButton>
                </CModalFooter>
            </CModal>

            <CModal visible={modalSubmit} backdrop="static" alignment="center" onClose={() => setModalSubmit(false)}>
                <CModalHeader onClose={() => setModalSubmit(false)}>
                    <CModalTitle>Modal title</CModalTitle>
                </CModalHeader>
                <CModalBody>Tài khoản: {user}</CModalBody>
                <CModalBody><strong>Nạp</strong> <strong style={{'color':'red'}}>{new Intl.NumberFormat('vn-IN', { maximumSignificantDigits: 3 }).format(money)}đ</strong> </CModalBody>
                <CModalBody><strong>Tổng tiền</strong> <strong style={{'color':'red'}}>{new Intl.NumberFormat('vn-IN', { maximumSignificantDigits: 3 }).format(money+currentMoney)}đ</strong> </CModalBody>
                <CModalFooter>
                    <CButton color="primary" onClick={handleAddMoney}>Ok</CButton>
                    <CButton color="secondary" onClick={() => setModalSubmit(false)}>
                        Close
                    </CButton>
                </CModalFooter>
            </CModal>
        </>
    );
};

export default ModalPayment;