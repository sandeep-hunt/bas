import React, { useEffect, useState } from 'react'
import './FloatingIcon.css'
import FloatIcon from '../../../assets/images/msic/floaticon.svg'
import axios from 'axios'

const FloatingIcon = () => {
    const [settings, setsettings] = useState('');
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          // Fetch the settings
          const fetchSettings = await axios.get(import.meta.env.VITE_BACKEND_API + 'fetch/settings');
          setsettings(fetchSettings.data[0]);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    },[])

    return (
        <div>
            <a href={settings.call_to_action} className="float">
                <img src={FloatIcon} className='img-fluid' alt="whatsapp" />
            </a>
        </div>
    )
}

export default FloatingIcon