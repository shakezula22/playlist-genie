import Genres from './Genres';

export default function Form() {
  return (
    <form className="card neon-pink">
      <div className="progressbar"></div>
      <div className="form-container">
        <div className="form-header">
          <h1>Form Title</h1>
        </div>
        <div className="form-body">
          <Genres />
        </div>
        <div className="form-footer">
          <button className="button">Prev</button>
          <button className="button">Next</button>
        </div>
      </div>
    </form>
  );
}
