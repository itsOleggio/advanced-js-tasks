import "./App.css";

function App() {
  return (
    <div className="photo-manager">
      <div className="upload-area">
        <div className="upload-text">Click to select</div>
        <input
          type="file"
          className="file-input"
          multiple
          accept="image/*"
          id="fileInput"
        />
      </div>

      <div className="preview-grid" id="previewGrid">
        {/* <!-- Placeholder items для демонстрации --> */}
        <div className="preview-item placeholder-preview">
          <div className="placeholder-x">✕</div>
          <div className="remove-btn">✕</div>
        </div>
        <div className="preview-item placeholder-preview">
          <div className="placeholder-x">✕</div>
          <div className="remove-btn">✕</div>
        </div>
      </div>
    </div>
  );
}

export default App;
