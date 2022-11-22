/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-key */
import {
    cibCcApplePay,
    cibCcMastercard,
    cibCcPaypal,
    cibCcStripe,
    cibCcVisa,
    cifBr,
    cifEs,
    cifFr,
    cifIn,
    cifUs,
    cilPlus,
} from '@coreui/icons'
import CIcon from '@coreui/icons-react';
import { CButton, CCard, CCardBody, CCol, CPagination, CPaginationItem,  CRow } from '@coreui/react';
import React, { useState } from 'react';
import avatar1 from 'src/assets/images/avatars/1.jpg'
import avatar2 from 'src/assets/images/avatars/2.jpg'
import avatar3 from 'src/assets/images/avatars/3.jpg'
import avatar4 from 'src/assets/images/avatars/4.jpg'
import avatar5 from 'src/assets/images/avatars/5.jpg'
import Modal from './Modal/Modal';
import TableManager from './TableManager/TableManager';


const UserManager = () => {
    const [openModal, setOpenModal] = useState(false);
    const totalPage = 10
    const [currPage, setCurrPage] = useState(1);
    const tableExample = [
        {
            avatar: { src: avatar1, status: 'success' },
            user: {
                name: 'Yiorgos Avraamu',
                new: true,
                registered: 'Jan 1, 2021',
            },
            country: { name: 'USA', flag: cifUs },
            usage: {
                value: 50,
                period: 'Jun 11, 2021 - Jul 10, 2021',
                color: 'success',
                quantity: 12,
            },
            payment: { name: 'Mastercard', icon: cibCcMastercard },
            activity: '10 sec ago',
        },
        {
            avatar: { src: avatar2, status: 'danger' },
            user: {
                name: 'Avram Tarasios',
                new: false,
                registered: 'Jan 1, 2021',
            },
            country: { name: 'Brazil', flag: cifBr },
            usage: {
                value: 22,
                period: 'Jun 11, 2021 - Jul 10, 2021',
                color: 'info',
                quantity: 19,
            },
            payment: { name: 'Visa', icon: cibCcVisa },
            activity: '5 minutes ago',
        },
        {
            avatar: { src: avatar3, status: 'warning' },
            user: { name: 'Quintin Ed', new: true, registered: 'Jan 1, 2021' },
            country: { name: 'India', flag: cifIn },
            usage: {
                value: 74,
                period: 'Jun 11, 2021 - Jul 10, 2021',
                color: 'warning',
                quantity: 39,
            },
            payment: { name: 'Stripe', icon: cibCcStripe },
            activity: '1 hour ago',
        },
        {
            avatar: { src: avatar4, status: 'secondary' },
            user: { name: 'Enéas Kwadwo', new: true, registered: 'Jan 1, 2021' },
            country: { name: 'France', flag: cifFr },
            usage: {
                value: 98,
                period: 'Jun 11, 2021 - Jul 10, 2021',
                color: 'danger',
                quantity: 52,
            },
            payment: { name: 'PayPal', icon: cibCcPaypal },
            activity: 'Last month',
        },
        {
            avatar: { src: avatar5, status: 'success' },
            user: {
                name: 'Agapetus Tadeáš',
                new: true,
                registered: 'Jan 1, 2021',
            },
            country: { name: 'Spain', flag: cifEs },
            usage: {
                value: 22,
                period: 'Jun 11, 2021 - Jul 10, 2021',
                color: 'primary',
                quantity: 12,
            },
            payment: { name: 'Google Wallet', icon: cibCcApplePay },
            activity: 'Last week',
        },
    ]

    const handlePrevious = () => {
        setCurrPage(currPage - 1)
    }

    const handleNext = () => {
        setCurrPage(currPage + 1)
    }
    return (
        <>
            <CCard className="mb-4">
                <CCardBody>
                    <CRow>
                        <CCol sm={5}>
                            <h4 id="traffic" className="card-title mb-0">
                                Traffic
                            </h4>
                            <div className="small text-medium-emphasis">January - July 2021</div>
                        </CCol>
                        <CCol sm={7} className="d-none d-md-block">
                            <CButton color="info" onClick={() => setOpenModal(true)} className="float-end">
                                <CIcon icon={cilPlus} />
                            </CButton>
                        </CCol>
                    </CRow>
                    <TableManager tableExample = {tableExample}/>
                    <CPagination style = {{'cursor':'pointer'}}align="center" aria-label="Page navigation example">
                        <CPaginationItem disabled = {currPage === 0} onClick={handlePrevious} >Previous</CPaginationItem>
                        {
                            [...new Array(totalPage)].map((item, index)=> <CPaginationItem active={currPage === index} onClick={() => setCurrPage(index)}>{index+1}</CPaginationItem>)
                        }
                        <CPaginationItem disabled = {currPage === totalPage - 1} onClick={handleNext} >Next</CPaginationItem>
                    </CPagination>
                </CCardBody>
                <Modal openModal = {openModal} setOpenModal = {setOpenModal} />
            </CCard>
            
        </>
    );
};

export default UserManager;