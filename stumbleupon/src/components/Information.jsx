import '../css/Information.css';
import ImageInfo from "./ImageInfo";

const Information = () => {
    return (
        <div className="information">
            <h1 className="title">Welcome to Harvard Gallery!</h1>
            <div className="subtitle">Discover some amazing master pieces here!</div>
            <div className="emoji">🎨 🖼️ 📷 🗿 🗺️ 🧑‍🎨 🌌 🧩</div>
            <ImageInfo />
            <button className="discover__btn">🔄 Discover</button>
        </div>
    )
}

export default Information;