import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';

const EditFecha = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const fechaRef = useRef();
    const descRef = useRef();

    const obtenerDatos = async () => {
        const res = await fetch('http://localhost:5000/proximasfechas/'+id);
        const data = await res.json();
        fechaRef.current.value = data.data[0].fecha;
        descRef.current.value = data.data[0].descripcion;
    }

    useEffect(() => {
      obtenerDatos();
    }, []);

    const handleSubmit = (event) => {
	event.preventDefault();
	const requestOptions = {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ "fecha":  fechaRef.current.value, "descripcion": descRef.current.value})
	};
	fetch('http://localhost:5000/edit/'+id, requestOptions)
            .then(response => response.json())
	    .then(navigate("/fechas"))
    };


    //Mostramos los productos
    return (
            <>
            <div style={{display:'flex', alignItems: 'center', flexDirection: 'column', width:'100%', flexWrap:'wrap'}}>
	    <h3>Edit Date</h3>
	    <form onSubmit={handleSubmit} style={{display: 'flex',  flexDirection: 'column', alignItems: 'end', margin: '20px' }}>
	    <label style={{ marginRight: '10px' }}>
	    Date:
	    <input type="date" ref={fechaRef} style={{ marginLeft: '5px' }} />
	    </label>
	    <label style={{ marginRight: '10px' }}>
	    Description:
	    <input type="text" ref={descRef} style={{ marginLeft: '5px' }} />
	    </label>
	    <div>
	    <button type="submit" style={{ display: 'block', marginTop: '10px' }}>
	    SUBMIT
	</button>
	    </div>
	    </form>
	    <button onClick={() => navigate("/")} >
            BACK
        </button>
	    </div>
            </>
    )
};

export default EditFecha;
