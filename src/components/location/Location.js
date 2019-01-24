import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.424852458905!2d-0.1607497492136022!3d51.5237669795379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761acf33628211%3A0x445d7677a88322e1!2s221B+Baker+St%2C+Marylebone%2C+London+NW1+6XE%2C+Royaume-Uni!5e0!3m2!1sfr!2sfi!4v1547647940643" 
                width="100%" 
                height="500px" 
                frameBorder="0"  
                allowFullScreen>
            </iframe>

            <div className="location_tag">
                <div>
                    Lieu
                </div>
            </div>
        </div>
    );
};

export default Location;