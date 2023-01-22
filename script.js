const spaceShip = {
    fuel: 400,
    passengers: ['John', 'Steve', 'Sam', 'Danielle'],
    shields: true,
    speedometer: 0,
    listPassengers: function() {
        for (i = 0; i < this.passengers.length; i++) {
            console.log(`${i+1}. passenger is ${this.passengers[i]}`);
        }
    },
    addPassenger: function(newPassanger){
        this.passengers.push(newPassanger);
        console.log(newPassanger + ' was added to the spaceship');
    },
    travel: function(distance) {
        console.log(`Trying to travel: ${distance}`);
        if (this.fuel ===  0) {
            console.log(`Can't go further, tank is empty`);
        } else {
            this.fuel = this.fuel - distance/2;   
            if (this.fuel < 0) {
                distance = (distance - (this.fuel * -2));
                this.fuel = 0;
            };
            this.speedometer = this.speedometer + distance;
            if (this.fuel < 30) {
                this.shields = false;
                console.log('fuel is low, turning off shields...');
            }
            console.log('The Spaceship is at: ' + this.speedometer);
            console.log(`The spaceship has: ${this.fuel} fuel`);
        }  
    }   
};

spaceShip.listPassengers();
spaceShip.addPassenger('Lindsay');
spaceShip.listPassengers();
spaceShip.travel(750);
spaceShip.travel(200);
spaceShip.travel(100);
