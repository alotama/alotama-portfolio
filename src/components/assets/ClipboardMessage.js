import React from 'react'

const ClipboardMessage = () => {
  return (
    <div className="clipboard__container">
      <div className="master-container">
        <div className="master-container-padding">
          <div className="card__container">
            <div className="clipboard__card">
              <p>
                Acabas de <span className="color-red">copiar mí email</span> en tu portapapeles
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ClipboardMessage
