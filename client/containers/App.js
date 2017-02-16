import React from 'react';

const App = ({ children }) => (
  <div className='row'>

    <div className="col s12 m6 offset-m3" style={{height: '500px'}}>
      <div style={{
          backgroundImage: `url('http://res.cloudinary.com/dk2bj79p0/image/upload/v1487205269/FullSizeRender_oyhivj.jpg')`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          width: '100%',
          height: '100%',
          maxWidth: '500px',
          display: 'block',
          borderRadius: '10px',
          margin: '0px auto',
          position: 'relative',
          opacity: '0.65',
          zIndex: '2',
          cursor: 'pointer',
        }}>
      </div>
    </div>
    <div className='col s12 center' style={{marginLeft: '12px'}}>
      <h1>Coming Soon!</h1>
    </div>
    { children }
  </div>
)

export default App;
