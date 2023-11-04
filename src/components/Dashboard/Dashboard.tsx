import React, { useState } from 'react';
import styles from './Dashboard.module.css';

export function Dashboard() {
  const [text, setText] = useState('');

  const handleInputChange = (e: any) => {
    setText(e.target.value);
    autoExpand(e.target);
  };

  const autoExpand = (textarea: any) => {
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
  };

  return (
    <>
      <div className="container">
        <div className="p-3 bg-light">
          <div className="col-md-6">
            <textarea
              className={`${styles.textoArea}`}
              placeholder="No que você está pensando?"
              rows={2}
              maxLength = {300}
              value={text}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-6 mt-4">
            <a href="#">
                <button className={styles.buttonPurple}>Postar</button>
            </a>
          </div>
        </div>

        <div style={{ margin: '1rem' }}>
          <div className='d-flex mt-2'>
            <a href="#" className="nav-link d-flex flex-row mt-4">
              <img
                src="https://avatars.githubusercontent.com/u/74025683?v=4"
                alt="Imagem do perfil"
                className="img-fluid rounded-circle align-self-start"
                style={{ maxWidth: "40px"}}
              />
              <div className="mt-2" style={{marginLeft: '1rem'}}>
                <div>
                  <span>Alex Sander Meneses Santos</span>
                  <span> . </span>
                  <span style={{ color: '#5b6b77' }}>15h</span>
                </div>
              </div>
            </a>
          </div>

          <div style={{ padding: '0 3rem' }}>
            <span className='text-justify' style={{ fontSize: '0.85rem' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet semper felis, 
              at dapibus augue efficitur ut. Cras tempor id lacus in interdum. 
              Mauris quis nunc vestibulum purus rutrum tempor vitae a metus. 
              Cras eleifend vehicula justo ac mollis. Mauris eros elit, posuere ut odio ut, cursus da
            </span>
            <img 
              src="https://i.pinimg.com/564x/2b/54/f5/2b54f5b75ca5b428bf6ffc98443f9086.jpg"
              alt="Imagem do perfil"
              className="img-fluid align-self-start mt-3"
              style={{ width: "600px", height: '300px', borderRadius: '10px', objectFit: 'cover'}}
            />
            <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px', color: '#5b6b77' }}>
              <span className="material-symbols-outlined">favorite</span>
              <span style={{ marginLeft: '0.25rem' }}>12</span>

              <span className="material-symbols-outlined" style={{ marginLeft: '2rem' }}>forum</span>
              <span style={{ marginLeft: '0.25rem' }}>20</span>
            </div>
          </div>
        </div>

        <hr style={{ borderTop: '1px solid gray', marginTop: '2rem' }} />

        <div style={{ margin: '1rem' }}>
          <div className='d-flex'>
            <a href="#" className="nav-link d-flex flex-row mt-4">
              <img
                src="https://avatars.githubusercontent.com/u/22156239?v=4"
                alt="Imagem do perfil"
                className="img-fluid rounded-circle align-self-start"
                style={{ maxWidth: "40px"}}
              />
              <div className="mt-2" style={{marginLeft: '1rem'}}>
                <div>
                  <span>Kauã Duarte</span>
                  <span> . </span>
                  <span style={{ color: '#5b6b77' }}>15h</span>
                </div>
              </div>
            </a>
          </div>

          <div style={{ padding: '0 3rem' }}>
            <span className='text-justify' style={{ fontSize: '0.85rem' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet semper felis, 
              at dapibus augue efficitur ut. Cras tempor id lacus in interdum. 
              Mauris quis nunc vestibulum purus rutrum tempor vitae a metus. 
              Cras eleifend vehicula justo ac mollis. Mauris eros elit, posuere ut odio ut, cursus da
            </span>
            <img 
              src="https://i.pinimg.com/564x/43/3e/50/433e5043dd3d1c114266ab696610e01e.jpg"
              alt="Imagem do perfil"
              className="img-fluid align-self-start mt-3"
              style={{ width: "600px", height: '300px', borderRadius: '10px', objectFit: 'cover'}}
            />
            <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px', color: '#5b6b77' }}>
              <span className="material-symbols-outlined">favorite</span>
              <span style={{ marginLeft: '0.25rem' }}>12</span>

              <span className="material-symbols-outlined" style={{ marginLeft: '2rem' }}>forum</span>
              <span style={{ marginLeft: '0.25rem' }}>20</span>
            </div>
          </div>
        </div>

        <hr style={{ borderTop: '1px solid gray', marginTop: '2rem' }} />

        <div style={{ margin: '1rem' }}>
          <div className='d-flex'>
            <a href="#" className="nav-link d-flex flex-row mt-4">
              <img
                src="https://avatars.githubusercontent.com/u/22156239?v=4"
                alt="Imagem do perfil"
                className="img-fluid rounded-circle align-self-start"
                style={{ maxWidth: "40px"}}
              />
              <div className="mt-2" style={{marginLeft: '1rem'}}>
                <div>
                  <span>Kauã Duarte</span>
                  <span> . </span>
                  <span style={{ color: '#5b6b77' }}>15h</span>
                </div>
              </div>
            </a>
          </div>

          <div style={{ padding: '0 3rem' }}>
            <span className='text-justify' style={{ fontSize: '0.85rem' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet semper felis, 
              at dapibus augue efficitur ut. Cras tempor id lacus in interdum. 
              Mauris quis nunc vestibulum purus rutrum tempor vitae a metus. 
              Cras eleifend vehicula justo ac mollis. Mauris eros elit, posuere ut odio ut, cursus da
            </span>
            <img 
              src="https://i.pinimg.com/564x/2c/7d/76/2c7d76d43608bdd0d246d896e9bc6891.jpg"
              alt="Imagem do perfil"
              className="img-fluid align-self-start mt-3"
              style={{ width: "600px", height: '300px', borderRadius: '10px', objectFit: 'cover'}}
            />
            <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px', color: '#5b6b77' }}>
              <span className="material-symbols-outlined">favorite</span>
              <span style={{ marginLeft: '0.25rem' }}>12</span>

              <span className="material-symbols-outlined" style={{ marginLeft: '2rem' }}>forum</span>
              <span style={{ marginLeft: '0.25rem' }}>20</span>
            </div>
          </div>
        </div>
  
      </div>
    </>
  );
}
