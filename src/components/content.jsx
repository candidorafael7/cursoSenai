import './css/content.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from '../assets/img1.png'


function Content() {

  return (
    <>
      <section>
      
        <div className="text-area d-flex justify-content-center align-items-center flex-column">
          <div className='d-flex justify-content-center align-items-center flex-column'>
            <h3 className='mb-4'>Olá sejam bem-vindos! <br />
            <span className='text-primary'>Rafael Candido</span> 
            <br /> Dev front-end</h3>
            <a className='btn btn-primary align-self-start m-0'>saiba mais sobre mim</a>
          </div>
        </div>

        <div className="img-area">
          <img src={img1} alt="busines man" />
        </div>
      
      </section>
    </>
  )
}

export default Content
