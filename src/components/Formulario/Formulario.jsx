

const Formulario = ({finishClick,changeHandler, form}) => {
    return(
        <section className="sectionFormulario">
            <h2 className="h2Formulario">Completa el formulario para finalizar</h2>
            <form className='container-form' onSubmit={finishClick}>
                    <div className="divCamposForm">
                        <div className='label'>
                            <label htmlFor='nombre'><span className="spanForm">*</span> Nombre</label>
                        </div>
                        <input className='input-form' type='text' id='nombre' name='name' onChange={changeHandler} value={form.name}/>
                    </div>
                    <div className="divCamposForm">
                        <div className='label'>
                            <label htmlFor='email'><span className="spanForm">*</span> Email</label>
                        </div>
                        <input className='input-form' type='email' id='email' name='email' onChange={changeHandler} value={form.email}/>
                    </div>
                    <div className="divCamposForm">
                        <div className='label'>
                            <label htmlFor='mensaje'><span className="spanForm">*</span> Telefono</label>
                        </div>
                        <input className='input-form' type='text' id='phone' name='phone' onChange={changeHandler} value={form.phone}/>
                    </div>
                    <div className="divCamposForm">
                        <div className='label'>
                            <label htmlFor='mensaje'>Mensaje alternativo</label>
                        </div>
                        <textarea className='message-form' cols='30' rows='7' type='text' id='message' name='message' onChange={changeHandler} value={form.message}/>
                    </div>
                    <div className='divBtnFrom'>
                        <button type='submit' className='btnFinalizar'> Finalizar compra </button>
                    </div>
                </form>
            <h4 className="h4Formulario">* Campos obligatorios</h4>
        </section>

    )
}

export default Formulario;