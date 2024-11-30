import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    //Definición del estado
    const [pFecha, setFecha] = useState({});
    const [countdown, setCountdown] = useState(null);

    useEffect(() => {
      const obtenerDatos = async () => {
	  const requestOptions = {
              method: 'GET',
              headers: { 'Content-Type': 'application/json' },
	  };
	  fetch('http://localhost:5000/?limit=1', requestOptions)
              .then(response => response.json())
              .then(data => {
                  setFecha(data.data[0])
                  const pd = new Date(data.data[0].fecha)
		  setCountdown(pd - Date.now())
              });
      }
        obtenerDatos();
    }, []);
    
    useEffect(() => {
        setTimeout( () =>  {
	    if (countdown != null)
		setCountdown(countdown - 1)
	}, 1)
    });

    //Mostramos los productos
    return (
        <>
            <div style={{display:'flex', alignItems: 'center', flexDirection: 'column', width:'100%', flexWrap:'wrap'}}>
	    <h4>
            {pFecha.descripcion}
        </h4>
	    <div>
	    {pFecha.fecha}
        </div>
	    <div style={{fontSize: '24px', marginTop: '25px'}}>
            { countdown != null ? drawCountdown(countdown) : ''}
	</div>
            <button onClick={() => navigate("/fechas")} >
	    MAS FECHAS
        </button>
            </div>
            </>
    )

    function drawCountdown(millis)
    {
        const days = millis / 24 / 60 / 60 / 1000;
        const dayMillis = millis % (24 * 60 *  60 * 1000);

        const hrs = (dayMillis) / 60 / 60 / 1000 ;
        let decimal = (hrs - Math.floor(hrs)) * 60 * 1000

        const mins = decimal / 1000 ;
        decimal = (mins - Math.floor(mins)) 
        
        const secs = decimal * 60;

        return Math.floor(days) +" Days  "+ Math.floor(hrs) +" Hours  "
            + Math.floor(mins) +" Minutes  "+ Math.floor(secs) + " Seconds"
    }
};

export default Home;


