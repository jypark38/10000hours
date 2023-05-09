import './Answer.css'

export default function Answer({domain,time,setModal}) {
  const openModal = ()=>{
    setModal(true)
  }
  return (
    <section className='answer-section'>
      <div className='answer-text'>
        <span>당신은<strong className='answer-strong'>{domain}</strong>전문가가 되기 위해서</span>
      </div>
      <div className='answer-text'>
        <span>대략<strong className='answer-strong'>{Number.isFinite(parseInt(time)) ? parseInt(time) : '10000' }</strong>일 이상 훈련하셔야 합니다! :)</span>
      </div>

      <div className='btn-wrap'>
        <button onClick={openModal} className='train-btn'>훈련하러 가기 GO!GO!</button>
        <button className='share-btn'>공유하기</button>
      </div>
    </section>
  )
}
