import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Fechas = () => {
    const navigate = useNavigate();

    //Definición del estado
    const [listaFechas, setFechas] = useState([]);

    const obtenerDatos = async () => {
        const res = await fetch('http://localhost:5000/proximasfechas');
        const data = await res.json();
        setFechas([...data.data]);
    }

    useEffect(() => {
      obtenerDatos();
    }, []);

    //Mostramos los productos
    return (
            <>
            <div style={{display:'flex', alignItems: 'center', flexDirection: 'column', width:'100%', flexWrap:'wrap'}}>
	    <h3>Important Dates</h3>
            <ul>
	    {
                listaFechas.map((p) => {
                    return <li key={p.id}>{p.fecha} - {p.descripcion} <span onClick={
			() => navigate("/fechas/edit/"+p.id)
		    }> | Edit</span><span onClick={() => {
			fetch('http://localhost:5000/delete/'+p.id)
			obtenerDatos()
		    }}> | X</span></li>
                })
	    }
        </ul>
            <button onClick={() => navigate("/")} >
	    BACK
        </button>
            <button onClick={() => navigate("/fechas/crear")} >
	    NEW
        </button>
            </div>
            </>
    )
};

export default Fechas;
