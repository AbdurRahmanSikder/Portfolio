import codingImage from '../../assets/coding.webp';
import './Home.css'
function Home() {
  return (
    <div className='Home'>
      <div className="details">
        <div className="full-name">Abdur Rahman</div>
        <div className="title">Software Developer</div>
        <div className="article">I design and develop scalable and high-performance digital solutions to meet the needs of modern businesses.</div>
      </div>
      <div className="codingimage">
        <img src={codingImage} alt="Coding" />
      </div>
    </div>
  );
}

export default Home;