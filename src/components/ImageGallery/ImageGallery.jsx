import React from 'react';

const ImageGallery = () => {
    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
                <div className="bg-gray-200 col-span-2">
                    <img src="https://i.ibb.co/z4ZpPbH/image4.jpg" alt="Image 1" className="w-full h-full object-cover" />
                </div>
                <div className="bg-gray-200">
                    <img src="https://i.ibb.co/t2kRDcN/image5.jpg" alt="Image 2" className="w-full h-full object-cover" />
                </div>
                <div className="bg-gray-200">
                    <img src="https://i.ibb.co/55RQ5kW/image6.jpg" alt="Image 3" className="w-full h-full object-cover" />
                </div>
                <div className="bg-gray-200">
                    <img src="https://i.ibb.co/yBMrwJX/image7.jpg" alt="Image 3" className="w-full h-full object-cover" />
                </div>
                <div className="bg-gray-200">
                    <img src="https://i.ibb.co/QmhhKQZ/image8.jpg" alt="Image 3" className="w-full h-full object-cover" />
                </div>
                <div className="bg-gray-200 col-span-2">
                    <img src="https://i.ibb.co/j8SjgmY/image9.jpg" alt="Image 3" className="w-full h-full object-cover" />
                </div>
                {/* <div className="bg-gray-200">
                    <img src="https://i.ibb.co/pypPtpy/image10.jpg" alt="Image 3" className="w-full h-full object-cover" />
                </div>
                <div className="bg-gray-200">
                    <img src="https://i.ibb.co/KFnhZww/image11.jpg" alt="Image 3" className="w-full h-full object-cover" />
                </div>
                <div className="bg-gray-200">
                    <img src="https://i.ibb.co/89Ft8T8/image12.jpg" alt="Image 3" className="w-full h-full object-cover" />
                </div> */}
                <div className="bg-gray-200 col-span-2">
                    <img src="https://i.ibb.co/rQywqTR/image2.jpg" alt="Image 3" className="w-full h-full object-cover" />
                </div>
                <div className="bg-gray-200">
                    <img src="https://i.ibb.co/D5h9WMk/imag3.jpg" alt="Image 3" className="w-full h-full object-cover" />
                </div>
                <div className="bg-gray-200">
                    <img src="https://i.ibb.co/3M8D6M8/image1.webp" alt="Image 3" className="w-full h-full object-cover" />
                </div>

            </div>
        </div>

    );
};

export default ImageGallery;