

const CardLocales = ({sucursal,direccion,localidad,tel}) => {

    return(
        <section className="sectionLocales"> 
            <div className="divLocales1">
                <h2 className="h2Locales">La Parfumerie</h2>
                <h3 className="h3Locales">Sucursal: {sucursal}</h3>
            </div>
            <div>
                    <h4 className="h4Locales">{direccion}</h4>
                    <h4 className="h4Locales">{localidad}</h4>
            </div>
            <div className="divLocales3">
                <h4 className="h4Locales">Teléfono: {tel}</h4>
            </div>
        </section>
    )
}

export default CardLocales;