import React, { Fragment, useEffect, useState } from 'react';
import Icon, { IconMusic, IconPulse, IconBolt, IconSimilarity, IconLive, IconSong, IconDisc } from '@douyinfe/semi-icons';
import './menu.less'
import { useHistory } from 'react-router-dom';
const Menu = (props) => {

  const history = useHistory()
  const [count, setCount] = useState(0)


  // 刷新时路径页面与导航栏高亮匹配
  useEffect(() => {
    menulist.forEach((item, index) => {
      if (item.path === window.location.pathname) {
        setCount(index)
      }
    })
  }, [])

  // 导航栏路由跳转
  const handlePush = (item, index) => {
    setCount(index)
    history.push(item.path)
  }

  // 导航栏数据
  let menulist = [
    {
      title: '发现音乐',
      id: 1,
      path: '/home',
      icon: <IconPulse size='small' />,
    },
    {
      title: '播客',
      id: 2,
      path: '/cc',
      icon: <IconSimilarity size='small' />,
    },
    {
      title: '视频',
      id: 3,
      path: '/cc/ttt',
      icon: <IconLive size='small' />,
    },
    {
      title: '关注',
      id: 4,
      path: '/home',
      icon: <IconSong size='small'/>,
    },
    {
      title: '直播',
      id: 5,
      path: '/home',
      icon: <IconDisc size='small' />,
    },
    {
      title: '私人FM',
      id: 6,
      path: '/home',
      icon: <IconBolt size='small' />,
    },
  ]


  return (
    <Fragment>
      <main>
        <ul className='main_ul'>
          {
            menulist.map((item, index) =>

              <li  key={item.id}
                onClick={() => handlePush(item, index)}
                className={count === index ? 'active' : ''}
              >
                {item.icon}
                {'  ' + item.title}
              </li>,
            )
          }
        </ul>
        <div style={{margin: 10, fontSize: 14}}>
          <IconMusic size='small' />
          {'  我的音乐'}
        </div>
      </main>
    </Fragment>
  )
}

export default Menu
