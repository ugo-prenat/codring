import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Trash from '../../assets/svg/Trash'
import Edit from '../../assets/svg/Edit'

import Shield from '../../assets/svg/Shield'
import Announcement from '../../assets/svg/Announcement'
import User from '../../assets/svg/User'


export default function AccountCard(props) {
  const account = props.account
  const accountId = props.account._id
  
  const [editMode, setEditMode] = useState(false)
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false)
  
  const deleteAccount = id => {
    // Delete account by id
    console.log('delete', id);
  }
  
  return (
    <div className='account-card'>
      <Link className='profile-link' to={`/profile/${account.username}`} target="_blank" rel="noopener noreferrer">
        <div className='data'>
          <p className='username'>
            { account.role === 'admin' ? <Shield /> : account.role === 'moderator' ? <Announcement /> : <User /> }
            { account.username }
          </p>
          <p className='points'>{ account.userPoints } point{ account.userPoints > 1 ? 's' : '' }</p>
        </div>
        
        <div className='dates'>
          <p>Membre depuis le { getDate(account.createdAt) }</p>
          <p>Dernière connexion le { getDate(account.lastConnection) }</p>
        </div>
      </Link>
      
      <div className='btns'>
        <button onClick={() => setEditMode(true)}>
          <Edit />
        </button>
        <button onClick={() => setShowDeleteConfirmation(true)}>
          <Trash />
        </button>
        
        { showDeleteConfirmation &&
          <div className='confirmation-btn'>
            <p onClick={() => deleteAccount(accountId)}>Supprimer</p>
            <p onClick={() => setShowDeleteConfirmation(false)}>Annuler</p>
          </div>
        }
      </div>
    </div>
  )
}

function getDate(d) {
  // Return a good formated date
  const months = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre']
  const date = new Date(d)
  const month = months[date.getMonth()]
  
  return `${date.getDate()} ${month} ${date.getFullYear()}`
}
