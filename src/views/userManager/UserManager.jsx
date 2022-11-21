/* eslint-disable prettier/prettier */
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
import { CButton, CCard, CCardBody, CCol, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CPagination, CPaginationItem, CProgress, CRow, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from '@coreui/react';
import React, { useState } from 'react';
import WidgetsDropdown from '../widgets/WidgetsDropdown';
import avatar1 from 'src/assets/images/avatars/1.jpg'
import avatar2 from 'src/assets/images/avatars/2.jpg'
import avatar3 from 'src/assets/images/avatars/3.jpg'
import avatar4 from 'src/assets/images/avatars/4.jpg'
import avatar5 from 'src/assets/images/avatars/5.jpg'


const UserManager = () => {
    const [openModal, setOpenModal] = useState(false)
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
    return (
        <>
            <WidgetsDropdown />
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
                    <CTable align="middle" className="mt-4 border" hover responsive>
                        <CTableHead color="light">
                            <CTableRow>
                                {/* <CTableHeaderCell className="text-center">
                                    <CIcon icon={cilPeople} />
                                </CTableHeaderCell> */}
                                <CTableHeaderCell>User</CTableHeaderCell>
                                {/* <CTableHeaderCell className="text-center">Country</CTableHeaderCell> */}
                                <CTableHeaderCell>Usage</CTableHeaderCell>
                                <CTableHeaderCell className="text-center">Quantity Products</CTableHeaderCell>
                                <CTableHeaderCell>Activity</CTableHeaderCell>
                                <CTableHeaderCell>Action</CTableHeaderCell>
                            </CTableRow>
                        </CTableHead>
                        <CTableBody>
                            {tableExample.map((item, index) => (
                                <CTableRow v-for="item in tableItems" key={index}>
                                    {/* <CTableDataCell className="text-center">
                                        <CAvatar size="md" src={item.avatar.src} status={item.avatar.status} />
                                    </CTableDataCell> */}
                                    <CTableDataCell>
                                        <div>{item.user.name}</div>
                                        <div className="small text-medium-emphasis">
                                            Registered:{' '}
                                            {item.user.registered}
                                        </div>
                                    </CTableDataCell>
                                    {/* <CTableDataCell className="text-center">
                                        <CIcon size="xl" icon={item.country.flag} title={item.country.name} />
                                    </CTableDataCell> */}
                                    <CTableDataCell>
                                        <div className="clearfix">
                                            <div className="float-start">
                                                <strong>{item.usage.value} / 100</strong>
                                            </div>
                                            <div className="float-end">
                                                <small className="text-medium-emphasis">{item.usage.period}</small>
                                            </div>
                                        </div>
                                        <CProgress thin color={item.usage.color} value={item.usage.value} />
                                    </CTableDataCell>
                                    <CTableDataCell className="text-center">
                                        <strong>{item.usage.quantity}</strong>
                                    </CTableDataCell>
                                    <CTableDataCell>
                                        <div className="small text-medium-emphasis">Last login</div>
                                        <strong>{item.activity}</strong>
                                    </CTableDataCell>
                                    <CTableDataCell>
                                        <CCol >
                                            <CButton style={{ margin: "1 1 1 1" }} color="info">
                                                <CIcon icon={cilPlus} />
                                            </CButton>
                                            <CButton color="info">
                                                <CIcon icon={cilPlus} />
                                            </CButton>
                                            <CButton color="info">
                                                <CIcon icon={cilPlus} />
                                            </CButton>
                                        </CCol>
                                    </CTableDataCell>
                                </CTableRow>
                            ))}
                        </CTableBody>
                    </CTable>
                    <CPagination align="center" aria-label="Page navigation example">
                        <CPaginationItem disabled>Previous</CPaginationItem>
                        <CPaginationItem>1</CPaginationItem>
                        <CPaginationItem>2</CPaginationItem>
                        <CPaginationItem>3</CPaginationItem>
                        <CPaginationItem>Next</CPaginationItem>
                    </CPagination>
                </CCardBody>
            </CCard>
            <CModal className="mt-4" visible={openModal} onClose={() => setOpenModal(false)} alignment="center">
                <CModalHeader onClose={() => setOpenModal(false)}>
                    <CModalTitle>Modal title</CModalTitle>
                </CModalHeader>
                <CModalBody>Woohoo, youre reading this text in a modal!</CModalBody>
                <CModalFooter>
                    <CButton color="secondary" onClick={() => setOpenModal(false)}>
                        Close
                    </CButton>
                    <CButton color="primary">Save changes</CButton>
                </CModalFooter>
            </CModal>
        </>
    );
};

export default UserManager;