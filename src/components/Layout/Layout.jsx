import { Button, Col, Layout as LayoutAnt, Row, Space } from 'antd';
import axios from 'axios';
import React, { useState } from 'react';
import ModalLogin from '../ui/ModalLogin';
import './layout.css';


const { Header, Footer, Content } = LayoutAnt;

const Layout = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const handleOk = async(item) => {
        const test = await axios({
            method: 'post',
            url: 'http://localhost:5000/login',
            data: item
          });
          localStorage.setItem('AccessToken',JSON.stringify(test.data.data.token));
       setIsModalOpen(false)
    }
    const handleCancel = () => {
        localStorage.removeItem('AccessToken')
        setIsModalOpen(false)
    }
    return (
        <LayoutAnt>
            <Header className="header">
                <Row justify="space-between" align="middle">
                    <Col span={2}>
                        <div className="logo"><p>Hungnt</p></div>
                    </Col>
                    <Col span={5}>
                        <Space direction="vertical">
                            <Space wrap>
                                <Button type="primary" size='large'>
                                    Primary
                                </Button>
                                <Button type="info" size='large'>
                                    Dashed
                                </Button>
                                <Button onClick={() => setIsModalOpen(true)} type="danger" size='large'>
                                    Login
                                </Button>
                            </Space>
                        </Space>
                    </Col>
                </Row>
            </Header>
            <ModalLogin isModalOpen = {isModalOpen} handleOk = {handleOk} handleCancel = {handleCancel}/>
            <Content>Content</Content>
            <Footer>Footer</Footer>
        </LayoutAnt>
    );
};

export default Layout;