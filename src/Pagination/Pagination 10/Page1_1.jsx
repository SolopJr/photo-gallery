import '../../App.css'
import '../../PhotoPosition.css'
import Paginator10 from './Paginator10'
import Photos from  '../../Photos.jsx'

const Page1_1 = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Galery
        </h1>
        <h2>Page1</h2>
        <h2>Choose num of pictures in the screen</h2>
        <ul>
          <li><a href="/Gallery/10/Page1">10</a></li>
          <li><a href="/Gallery/20/Page1">20</a></li>
          <li><a href="/Gallery/30/Page1">30</a></li>
        </ul>
        <p className='Photo-line'>
        
        <Photos Id='0' />
        <Photos Id='10' />
        <Photos Id='20' />
        <Photos Id='30' />
        <Photos Id='40' />
        <Photos Id='50' />
        <Photos Id='60' />
        <Photos Id='70' />
        <Photos Id='80' />
        <Photos Id='90' />

        </p>
        <Paginator10/>
      </header>
    </div>
    
  );
}

export default Page1_1;
