import React, { Fragment, useEffect, useState, useRef } from 'react';
import { Button, Layout } from '@douyinfe/semi-ui';
import './index.less'
import renderRoutes from '../router/routes'
import { Redirect, useHistory } from 'react-router-dom';
import Menu from '../components/menu';
const LayoutH = (props) => {

  const history = useHistory()
  const { Content, Sider, Header, Footer } = Layout;
  let babyref = useRef()
  let [babystate, setBabystate] = useState(false)

  // 此组件为根组件 初始化时 跳转到子路由
  // 此处也可以用 Redirect 重新定向
  useEffect(() =>   {
    if (props.location.pathname === '/') {
      history.push('/home')
    }
    // console.log('content ', perdomRef.current.scrollHeight)
  }, [])

  const handleBaby = () => {
    console.log(babyref.current.style.top)
    if (babyref.current.style.top !== '0px') {
      babyref.current.style.top =  0
    } else {
      babyref.current.style.top =  babyref.current.style.top !== '0px'

    }
    // if (babystate) {
    //   setBabystate(false)
    // } else {
    //   setBabystate(true)
    // }
  }

  return (
    <Fragment>
      <Layout className="components-layout-demo">
        <Header className='header'>Header</Header>
        <Layout style={{height: '80vh', overflow: 'auto'}}>
          <Sider className='sider'>
            <Menu />
          </Sider>
          <Content>
            {/* <div ref={perdomRef}> */}
            {renderRoutes(props.route.children)}
            {/* </div> */}
          </Content>
        </Layout>
        <div ref={babyref} className={'mcdate'}></div>
        <Footer className='footer'>
          <Button onClick={handleBaby}>111</Button>
        </Footer>
      </Layout>
    </Fragment>
  )
}

export default LayoutH
