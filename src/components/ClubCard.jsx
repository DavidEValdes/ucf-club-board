const ClubCard = ({ name, imageUrl, website }) => (
    <div className="club-card">
      <img src={imageUrl} alt={name} className="club-image" />
      <h3>{name}</h3>
      <a href={website} className="button" target="_blank" rel="noopener noreferrer">Visit Website</a>
    </div>
  );
  
  export default ClubCard;