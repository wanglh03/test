import React, { Fragment, useCallback, useEffect, useState, useRef } from 'react';
import renderRoutes from '../../router/routes';
import './index.less'
import { useHistory } from 'react-router-dom';
const Home = (props) => {

  const history = useHistory()
  const [count, setCount] = useState(0)
  let perdom = useRef()

  const ulList = [
    {
      title: '个性音乐',
      id: 1,
      path: '/home/personality',
    },
    {
      title: '歌单',
      id: 2,
      path: '/home/songsheet',
    },
    {
      title: '排行榜',
      id: 3,
      path: '/home/rankinglist',
    },
    {
      title: '最新音乐',
      id: 4,
      path: '/home/latestmusic',
    },
  ]

  useEffect(() => {
    if (props.location.pathname === '/home') {
      history.push('/home/personality')
    }
    // console.log(perdom.current.clientHeight);
  }, [])

  const handlePush = (index, item) => {
    setCount(index)
    console.log(item);
    if (item.path) {
      history.push(item.path)
    }
  }

  return (
    <Fragment>
      <div className='perbox'>
        <header className='header_box'>
          <ul className='ul_list'>
            {
              ulList.map((item, index) => (
                <li
                  key={item.id}
                  className={count === index ? 'activeed' : ' '}
                  onClick={() => handlePush(index, item)}
                >{item.title}</li>
              ))
            }
          </ul>
        </header>
        <div className='perbox_content'>
          <div style={{position: 'relative'}}>{renderRoutes(props.route.children)}</div>
        </div>
      </div>
    </Fragment>
  )
}

export default Home
