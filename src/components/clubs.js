import React from "react";

const Clubs = () => {
     const TaylorMadeM2 = "TaylorMade M2";
     const PingG440 = "Ping G440";
     const Titleist = "Titleist"
     const clubs = [
            {"clubName": "Driver", "brand": TaylorMadeM2, "yardage": 240},
            {"clubName": "3 Wood", "brand": TaylorMadeM2, "yardage": 220},
            {"clubName": "4 Iron", "brand": PingG440, "yardage": 180},
            {"clubName": "5 Iron", "brand": PingG440, "yardage": 170},
            {"clubName": "6 Iron", "brand": PingG440, "yardage": 160},
            {"clubName": "7 Iron", "brand": PingG440, "yardage": 150},
            {"clubName": "8 Iron", "brand": PingG440, "yardage": 140},
            {"clubName": "9 Iron", "brand": PingG440, "yardage": 130},
            {"clubName": "Pitching Wedge", "brand": PingG440, "yardage": 115},
            {"clubName": "50 Wedge", "brand": Titleist, "yardage": 100},
            {"clubName": "54 Wedge", "brand": Titleist, "yardage": 100},
            {"clubName": "58 Wedge", "brand": Titleist, "yardage": 100},
            {"clubName": "Putter", "brand": Titleist, "yardage": 30},
        ];

    return (
        <>
        {clubs.map((club) => 
        <div>
            <span>{club.clubName} * {club.brand} * {club.yardage}</span>
        </div>)}
        </>
    );
}

export default Clubs;