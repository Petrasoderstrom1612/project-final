/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import GetThoughts from './GetThoughts';
import UserInput from './UserInput';
import Counter from 'components/Counter';
import MapLocation from 'components/MapLocation';

const Main = () => {
  const [getThoughts, setGetThoughts] = useState([]);
  const [newThought, setNewThought] = useState('');
  const [newUserName, setNewUserName] = useState('');
  /* const [loading, setLoading] = useState(false); */

  const APIurl = 'https://project-happy-thoughts-api-dxrcv2y6yq-lz.a.run.app/thoughts'

  const fetchAPI = () => {
    /* setLoading(true) */
    fetch(APIurl)
      .then((res) => res.json())
      .then((data) => setGetThoughts(data.response))
      .catch((error) => console.error(error))
      .finally(() => console.log('no errors')/* setLoading(false) */)
  }

  useEffect(() => {
    fetchAPI()
    /*   const interval = setInterval(() => {
        fetchAPI()
      }, 60000)
      // This line is clearing the interval when user f.ex. changes window or exit app
      return () => clearInterval(interval) */
  }, []);

  const handleNewThoughtChange = (event) => {
    setNewThought(event.target.value)
  }

  const handleCleanUp = () => {
    setNewThought('')
    fetchAPI()
    /* setLoading(false) */
  }

  const handleOnChangeSubmit = (event) => {
    setNewUserName(event.target.value)
  }

  const handleOnFormSubmit = (event) => {
    event.preventDefault();

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: newThought,
        userName: (newUserName.toUpperCase() || 'ANONYMOUS')
      })
    }
    /* setLoading(true) */
    fetch(APIurl, options)
      .then((res) => res.json())
      .then((updatedThought) => {
        setNewThought((previousThoughts) => [updatedThought, ...previousThoughts])
      })
      .finally(() => handleCleanUp())
  }

  const handleLikeButtonOnClick = (_id) => {
    fetch(`https://project-happy-thoughts-api-dxrcv2y6yq-lz.a.run.app/thoughts/${_id}/like`, {
      method: 'PATCH'
    })
      .then((res) => res.json())
      .then(() => {
        fetchAPI()
      })
  }

  /*   if (loading) {
      return (
        // eslint-disable-next-line react/self-closing-comp
        <div className="loader"><div></div></div>
      )
    } */

  return (
    <>
    <MapLocation/>
    <Counter/>
      <UserInput
        handleNewThoughtChange={handleNewThoughtChange}
        handleOnFormSubmit={handleOnFormSubmit}
        newThought={newThought}
        handleOnChangeSubmit={handleOnChangeSubmit} />
      <GetThoughts
        getThoughts={getThoughts}
        handleLikeButtonOnClick={handleLikeButtonOnClick} />
    </>
  )
};
export default Main;

