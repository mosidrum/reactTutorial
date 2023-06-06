import React, { useRef } from 'react'

const Uncontrolled = () => {
  const ref = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(ref.current.value);
  }
  return (
    <>
      <b>Uncontrolled forms</b>
      <form onSubmit={handleSubmit}>
        <label>
          First Name : <input type='text' ref={ref}/>
        </label>
        <input type="submit" />
      </form>
    </>
  )
}

export default Uncontrolled