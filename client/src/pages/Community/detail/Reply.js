/* eslint-disable no-sequences */
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import CommuData from '../../../dummytest/commuData';
import { Link } from "react-router-dom";

const Wrapper = styled.div`
// 댓글 작성란
.replyTerritory{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #F9F9F9;
}
.rbackground{
  width: 95vw;
  height: 20vh;
  padding: 20px;
  border-radius: 10px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: space-around;

  background-color: #EEF1FF;
}
.replyText{
width: 70vw;
margin: 0px 5px ;
}
.replyButton{
  width: 10vw;
  margin: 0px 5px ;
  border-radius: 10px;

  font-size: 18px;
  font-weight: bold;
  text-align: center;

  border-style: none;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  background-color: #B1B2FF;
  color: #F9F9F9;
  
  &:hover{
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    background-color: #EEF1FF;
    color: #9263FF;
  }
}

// 작성된 댓글 목록
.replyListTerritory{
  padding: 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  background-color: #F9F9F9;
}
.questions{
  padding: 0px 40px;
  margin: 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  font-weight: 400;
}
.article{
padding:  15px;
}
// 돌아가는 버튼
/* .backbutton{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
} */
.backtocbutton{
  width: 10vw;
  height: 5vh;
  margin: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3);

  border-style: none;
  background-color: #F9F9F9;
  color: #000000;
  font-weight: 400;
  &:hover{
   background-color: #F1F1F1;
  }
}
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    padding: 5px 0px 5px 0px;
    /* margin: 20px 0px 20px 0px; */
    width: 90vw;
    /* border: 1px solid lightgray; */
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    color: black;
`;
// 1. 각 게시물마다 달린 댓글들이 다 다를것이다.
// 2. 각 게시물마다 고유의 아이디(key값)이 필요할 것이다.
// 2-1. 해당 아이디에 속하는 댓글들을 불러와야 하기 때문이다.
// 3. 댓글들을 저장해둔 더미데이터를 불러와서 사용해야 한다.

export default function Reply() {

  const [input, setInput] = useState("");
  const [reply, setReply] = useState([]);
  useEffect(() => {
    // fetch(`url`) GET 요청 받아와야하는 곳
    // .then((res) => {
      setReply(CommuData)
    // })
  }, [])

  const textInput = (e) => {
    setInput(e.target.value)
  };

  // const clear = () => {
  //   setInput("");
  // }

  const postReply = () => {
    // console.log(input) POST 요청 보내져야하는 곳
    setReply((prev) => {
      const data = [...prev]
      data.push(
        {
        username: "유저네임",
        content: input
        }
      )
      // console.log(data)
      return data
    })
  };

  return (
    <Wrapper>
      <div>

        {/* 댓글 작성란 */}
        <div className='replyTerritory'>
          <div className='rbackground'>
           <input className='replyText' type="text" onChange={textInput}></input>
            <button className='replyButton' onClick={postReply}>등록</button>
          </div>
        </div>

        {/* 작성된 댓글 목록 */}
        <div className='replyListTerritory'>
          
          {/* {reply.map(reply => {
            return <p>{reply}</p>
          })
          } */}
          {reply.map(
            (el, index) => (
            <div className="questions" key={index}>
                <span className="article">{el.username}</span>
                <span className="article">{el.content}</span>
            </div>
            ))}
        </div>
        {/* 돌아가는 버튼 */}
        <div className='backbutton'>
          <StyledLink to="/community"><button className='backtocbutton'>뒤로가기</button></StyledLink>
        </div>
      </div>
    </Wrapper>
  )
}
