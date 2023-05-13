import React from 'react'

export default function Alert(props) {
  return (
    props.alert &&<div>
      <div class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>{props.alert.msg}</strong>:{props.alert.alert1}
 
</div>
    </div>
  )
}
