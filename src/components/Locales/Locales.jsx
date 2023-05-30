import React from 'react'
import CardLocales from '../CardLocales/CardLocales'

const Locales = () => {
    return (
        <div className='containerLocales'>
            <CardLocales sucursal={'Cabildo'} localidad={'CABA, Buenos Aires'} tel={'011 3869 5236'}/>
            <CardLocales sucursal={'Abasto'} localidad={'Shopping Abasto, Local 1014'} tel={'011 3806 4874'}/>
            <CardLocales sucursal={'Talcahuano'} localidad={'CABA, Av Santa Fe 1300'} tel={'011 5690 6587'}/>
            <CardLocales sucursal={'San Justo'} localidad={'Shopping San Justo, Local 18'} tel={'011 4512 5269'}/>
            <CardLocales sucursal={'Córdoba'} localidad={'Nuevo Centro Shopping, Duarte Quiroz 1400'} tel={'351 4875 963'}/>
            <CardLocales sucursal={'Soleil'} localidad={'Av Bernardo de Irigoyen 2647, San Isidro'} tel={'011 3800 2547'}/>
        </div>
    )
}

export default Locales
