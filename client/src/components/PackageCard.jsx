import '../styles/package-card.css'; // Import the CSS file for margins and paddings

export const PackageCard = ({pkg}) => {
    return (
        <li className="-z-10 package-card bg-gradient-to-r from-teal-700/80 to-green-600/80 shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
            <img
                src="https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Package Thumbnail"
                className="thumbnail-image"
            />
            <div className="card-content">
                <h2 className="package-name truncate">{pkg.Title}</h2>
                <p className="destination">{pkg.Destination}</p>
                <p className="price">₹{Math.round(pkg.Price)} per person</p>
                <div className="rating flex items-center gap-1">
                    <div>
                        <span className="text-yellow-400">{'★'.repeat(Math.floor(pkg.TotalRating))}</span>
                        <span className="text-gray-300">{'★'.repeat(5-Math.floor(pkg.TotalRating))}</span>
                    </div>

                    <span className="ml-2 text-gray-200">{Math.round(pkg.TotalRating * 100) / 100}</span>
                </div>
            </div>
        </li>
    );
};
