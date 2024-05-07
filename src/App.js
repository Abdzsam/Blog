import React from 'react';
import './App.css';

function App() {
 
  return (
    <div>
      <header>               
        <div className='rounded-full p-2 bg-gradient-to-t from-purple-500 to-purple-900'>
          <span className='flex justify-left '>
             <span className="group fixed bg-inherit p-0 border-1 rounded-full pt-0" >
            <img className="invert" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Hamburger_icon_white.svg/1024px-Hamburger_icon_white.svg.png" width="37" height="37" alt="menu"/>
            <span className='flex items-center'>
        <ul className='backdrop-blur-sm bg-purple-500 p-2 rounded-xl group-hover:block hidden'>
            <li className='hover:bg-purple-800 rounded-xl'>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAQRJREFUSEvt1ctJxFAUgOFvsAnRhQqKoFiBjBW4tByXgs24sQXFDlQQhdGFYhfKhXslk8njJEN2Zpeb5P/Pk8xMfM0m5hsi2MQtNnCO70hwUUGC32M/Q98wj0giggS/wwE+smAHrzjrk/QJqpF/4jQLHrCN3ky6BE3wagYhSZugC156m8rUK2kSROBhSV0wBB6S1AVPOMJXbuh7ZNaxm8u1hUeclO/qgp/8YA9ReGElySLf/HHbBH3j25ZYCXCQ4AJXOKxRX3CJm8r5KEHpS1PUzzheV7ASVQY2nY/K4F+w1LtQXdfpQdfEBJfa0mTVFyrN/HXlzxWFlvdWdmPsxobFkwt+AdoyUhlak5QPAAAAAElFTkSuQmCC" alt='Home icon'/>
              <a href='#'>Home</a>
            </li>
            <li className='hover:bg-purple-800 rounded-xl'>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAd5JREFUSEu11cvLTWEUx/HPGxnIpSiXiZAwcIuSAQpFL2XqUgxIURhQBv4AMiEhDCgk5Q+Q0VsImSAlopTIgFwi9+uz6nl1HO/e5xnssya7zn7O+j5rrd9v7R5djp4u51cHmIB1WInZ+SJ3cAkX8LzkcgMBRuAcVtck+I2L2IRPdaB2wFDcwgx8xUkcxpOcZDJ2YQuG5LOL8L0K0g44iw14hhV4UPHHWbicLjAeB7G7BDAT9/Aj9Xk+ot91sRhX8A2T8GKgw60VHMF2HMWOkgHiPNYnyF7s7wR4jCm5//cLAUvQh2vpGRX9F60VfEQMeRB+FQJGpWpf4w1GdwK8x3AMQ8BKIs5+wCuM6QS4mw01L3ngdkn2pKQFSW03c5uWdQIcSKbZgxPYVgg4kzyyMbUnBLKzE2AqHuJnoUzDYFdz0sqq2412Ktv/KZYnCT6qqGRONtrY7PatJUaLM62r4guO41B2dryPKmNVbMbgnDRmEK6PYdfKtP/lyGygVTVzeJd20b7U0rWYm12/FPH7P1G3ridml/Yids/nrK4bOIa3CB+E0WKdhwpDSeGJv9HEBycg1zEdsQ0W4mU/oQlA5AqThaKm5fmcbhoQ+cal9b4mfz8abVGtJ5tqUSWk64A/OxFWGSrrSC8AAAAASUVORK5CYII=" alt='Explore icon'/>
              <a href='#'>Explore</a>
            </li>
            <li className='hover:bg-purple-800 rounded-xl'>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAW9JREFUSEvN1T9IVlEcxvGPtCkOStCg5h9ICBrcdRBKHFyUJHRudTPRLR0kSHCUZhcJCVexUDBwdzBoKBICRRAKAgdBfa/c+w7X97z3vMqL/cbDc57vc37nd89tUOdqqLO/WgCvsJoGmsRGTLgYQCNeYxHNqelfLOADzqqBigAvsIaHAZMTjONrCFINMIZ1PMAnrGA7NXqOKYziHCP4XAkSAjzCDzRhGsuBhG9L6/M4xhP8y+tCgKWS+A0+YqLgMjcxHAoSAhziMfqwXwAYwhb2Sm3qjz3BZSpM+n9RAGjFKf6gpVZA0ZRlflmgG/qQQXBD4DT/F6ATv9KktbaoC8mAlCtv0I5ddOMAz2LeG3wrjfRT/MQAjrJ9ecB39FYSFoDa0mA9+WB5QHZZHfgdmT6TVWxtCFCj9w152TcP2MHgHd2/IPm6ryt2Sm7NjAXM4V2OMov3ReRYQKJLXtiXqWHyf5hBNhRBTiygKOj9Aa4A96M+GSiaUHcAAAAASUVORK5CYII=" alt='Notification icon'/>
              <a href='#'>Notifications</a>
            </li>
            <li className='hover:bg-purple-800 rounded-xl'>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAQZJREFUSEvt1T1KBEEQhuFnQ6+gILiCP8cwNDLdIxgYiiCCsQaaiGCw5/AIHkAFI0XB0FAwEXVHbOkd7V566TFy0u6qt/qrqm96Ov56HeeXA2zgACuFRdxgG+dNXA7wiLnC5OH6HRYnAUpzr+II61+Bn8XX7kEftylAFc3xngJU0TwHGCMXNKAdl3zBPyBM5J9IdI+F9h7U6sE1dn6zilqAsQGMN7lzwAPmW/MfCljDGZYS+/Gtefs8fkFjFYdYji7N4hiDzOJdYjdongPEZ0GulxF0ZuTvz9jHCV4LtjzppgHwhiH28FSSONxN2XUDuMAmrqZJPAmwhdPIGadm1P7h/Cikc8AHqrk7GaSdRPsAAAAASUVORK5CYII=" alt='Messages icon'/>
              <a href='#'>Messages</a>
            </li>
          </ul> 
      </span>
          </span>
          </span>
          <span className='flex justify-center'>
            <span className= "p-1 w-56 border-1 rounded-full font-semibold bg-inherit border-black">
            <h1>Blog Bites</h1>
          </span>
          </span>
        </div>
      </header>
      <body></body>
    </div>
  );
}

export default App;
