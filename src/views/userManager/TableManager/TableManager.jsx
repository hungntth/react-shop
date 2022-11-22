/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
import CIcon from '@coreui/icons-react';
import { CButton, CCol, CProgress, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from '@coreui/react';
import React, { useState } from 'react';
import {
    cilChevronDoubleUp,
    cilLockLocked, cilReload,
} from '@coreui/icons'
import ModalPayment from '../Modal/ModalPayment';
import ModalLockAccount from '../Modal/ModalLockAccount';
import ModalResetPassword from '../Modal/ModalResetPassword';

const TableManager = ({ tableExample }) => {
    const [openModalPayment, setOpenModalPayment] = useState(false);
    const [openModalLockAccount, setOpenModalLockAccount] = useState(false);
    const [openModalResetPassword, setOpenModalResetPassword] = useState(false);
    const [index, setIndex] = useState('');
    const [user, setUser] = useState('');
    const handlePayment = (index, name) => {
        setUser(name);
        setIndex(index);
        setOpenModalPayment(true)
    }
    const handleLockAccount = (index) => {
        setIndex(index);
        setOpenModalLockAccount(true)
    }
    const handleResetPassword = (index) => {
        setIndex(index);
        setOpenModalResetPassword(true)
    }
    return (
        <>
            <CTable align="middle" className="mt-4 border" hover responsive>
                <CTableHead color="light">
                    <CTableRow>
                        <CTableHeaderCell>User</CTableHeaderCell>
                        <CTableHeaderCell>Usage</CTableHeaderCell>
                        <CTableHeaderCell className="text-center">Quantity Products</CTableHeaderCell>
                        <CTableHeaderCell>Activity</CTableHeaderCell>
                        <CTableHeaderCell>Action</CTableHeaderCell>
                    </CTableRow>
                </CTableHead>
                <CTableBody>
                    {tableExample.map((item, index) => (
                        <CTableRow v-for="item in tableItems" key={index}>
                            <CTableDataCell>
                                <div>{item.user.name}</div>
                                <div className="small text-medium-emphasis">
                                    Registered:{' '}
                                    {item.user.registered}
                                </div>
                            </CTableDataCell>
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
                            <CTableDataCell style={{}}>
                                <CCol className='g-3'>
                                    <CButton style={{ margin: '0 5px' }} onClick={() => handlePayment(index, item.user.name)} color="warning">
                                        <CIcon icon={cilChevronDoubleUp} />
                                    </CButton>
                                    <CButton style={{ margin: '0 5px' }}  onClick={() => handleLockAccount(index)} color="danger">
                                        <CIcon icon={cilLockLocked} />
                                    </CButton>
                                    <CButton style={{ margin: '0 5px' }}  onClick={() => handleResetPassword(index)} color="dark">
                                        <CIcon icon={cilReload} />
                                    </CButton>
                                </CCol>
                            </CTableDataCell>
                        </CTableRow>
                    ))}
                </CTableBody>
            </CTable>
            <ModalPayment openModalPayment={openModalPayment} setOpenModalPayment={setOpenModalPayment} index={index} user = {user}/>
            <ModalLockAccount openModalLockAccount={openModalLockAccount} setOpenModalLockAccount={setOpenModalLockAccount} index={index}/>
            <ModalResetPassword openModalResetPassword={openModalResetPassword} setOpenModalResetPassword={setOpenModalResetPassword} index={index}/>
        </>
    );
};

export default TableManager;