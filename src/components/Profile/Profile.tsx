
export function Profile() {
    return(
        <>
            <div className="container">
                <img 
                src="https://i.pinimg.com/564x/7f/06/16/7f06166fd703e6549ae9baea4a5c7519.jpg"
                alt="Imagem"
                className="img-fluid mt-3"
                style={{ width: "800px", height: '300px', objectFit: 'cover'}}
                />

                <img
                src="https://avatars.githubusercontent.com/u/74025683?v=4"
                alt="Imagem do perfil"
                className="img-fluid rounded-circle align-self-start"
                style={{ maxWidth: "100px", marginTop: '-3.125rem', marginLeft: '2rem' }}
              />

                <span style={{ marginLeft: '1rem' }}>Sander Meneses</span>
                <span> . </span>
                <span style={{ color: '#5b6b77' }}>@sandermeneses</span>
           

            </div>
        </>
    )
}