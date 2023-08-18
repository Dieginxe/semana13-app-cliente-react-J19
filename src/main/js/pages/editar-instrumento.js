const React = require('react');

const EditarInstrumentoPage = ()=>{

    return(
        <>
            <h1>Editar Instrumento</h1>
            <form onSubmit={handleSubmit}>
                <label>Nombre</label> <br />
                <input type="text" id='nombre' name='nombre' /> <br />
                <label>Categoría</label> <br />
                <input type="text" id='categoria' name='categoria' /> <br />
                <label>Descripción</label> <br />
                <input type="text" id='descripcion' name='descripcion'/> <br />
                <input type="submit" value="Nuevo Instrumento" />
            </form>
        </>
    )
}