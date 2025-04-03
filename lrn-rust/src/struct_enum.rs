// Different types of ride options
#[derive(Debug)]
enum RideType {
    Economy,
    Premium,
    Bike,
    Pool,
}

// Struct for a ride request
struct Ride {
    passenger: String,
    pickup_location: String,
    dropoff_location: String,
    distance_km: f64,
    ride_type: RideType,
}

// Implement ride behavior
impl Ride {
    fn calculate_fare(&self) -> f64 {
        match self.ride_type {
            RideType::Economy => self.distance_km * 0.5,   // $0.5 per km
            RideType::Premium => self.distance_km * 1.0,   // $1 per km
            RideType::Bike => self.distance_km * 0.3,      // $0.3 per km
            RideType::Pool => self.distance_km * 0.4,      // $0.4 per km
        }
    }

    fn print_details(&self) {
        println!(
            "🚗 Passenger: {} is taking a {:?} ride from '{}' to '{}'. Distance: {:.1}km, Fare: ${:.2}",
            self.passenger,
            self.ride_type,
            self.pickup_location,
            self.dropoff_location,
            self.distance_km,
            self.calculate_fare()
        );
    }
}
fn main() {
    let ride1 = Ride {
        passenger: String::from("Alice"),
        pickup_location: String::from("Downtown"),
        dropoff_location: String::from("Airport"),
        distance_km: 15.0,
        ride_type: RideType::Premium,
    };

    let ride2 = Ride {
        passenger: String::from("Bob"),
        pickup_location: String::from("Station"),
        dropoff_location: String::from("University"),
        distance_km: 8.5,
        ride_type: RideType::Bike,
    };

    let ride3 = Ride {
        passenger: String::from("Charlie"),
        pickup_location: String::from("Mall"),
        dropoff_location: String::from("Home"),
        distance_km: 5.2,
        ride_type: RideType::Economy,
    };

    let ride4 = Ride {
        passenger: String::from("Charlie"),
        pickup_location: String::from("Mall"),
        dropoff_location: String::from("Home"),
        distance_km: 5.2,
        ride_type: RideType::Pool
    };

    // Process rides
    ride1.print_details();
    ride2.print_details();
    ride3.print_details();
    ride4.print_details();
}
