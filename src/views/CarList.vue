<template>
<ion-page>
    <ion-header>
        <ion-toolbar>
            <ion-buttons slot="start">
                <ion-menu-button color="primary"></ion-menu-button>
            </ion-buttons>
            <ion-title>Lista samochodów</ion-title>
        </ion-toolbar>
    </ion-header>
    <ion-content>
        <div class="car-list">
            <div class="car-item" v-for="(car, index) in cars" :key="index">
                <div class="car-thumbnail">
                    <img :src="car.image" alt="Obrazek samochodu" />
                </div>
                <div class="car-info">
                    <h2>{{ car.name }}</h2>
                    <p class="description">Rok: {{ car.year }}</p>
                </div>
                <div class="car-actions">
                    <button class="details-button" @click="viewDetails(car)">Szczegóły</button>
                    <button class="favorite-button" @click="toggleFavorite(car)">
                        <img class="fav-image" :src="isFavorite(car) ? '/images/favorite.png' : '/images/not-favorite.png'" alt="favorite status" />
                    </button>
                </div>
            </div>
        </div>
    </ion-content>
</ion-page>
</template>

<script>
import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonMenuButton,
    IonIcon
} from '@ionic/vue';
import {
    heart,
    heartOutline
} from 'ionicons/icons';

export default {
    components: {
        IonPage,
        IonHeader,
        IonToolbar,
        IonTitle,
        IonButtons,
        IonMenuButton,
        IonIcon,
    },
    data() {
        return {
            cars: [{
                    name: 'Ford Mustang',
                    year: 2020,
                    horsepower: 450,
                    bodyType: 'Coupe',
                    image: '/images/ford-mustang.jpg',
                    description: 'Ford Mustang to ikona amerykańskiego stylu, znana ze swojego potężnego silnika i dynamicznych osiągów.',
                },
                {
                    name: 'Tesla Model S',
                    year: 2021,
                    horsepower: 670,
                    bodyType: 'Sedan',
                    image: '/images/tesla-model-s.jpg',
                    description: 'Tesla Model S to luksusowy elektryczny sedan, który łączy nowoczesny design z niezwykłą wydajnością.',
                },
                {
                    name: 'BMW M3',
                    year: 2019,
                    horsepower: 473,
                    bodyType: 'Sedan',
                    image: '/images/bmw-m3.jpg',
                    description: 'BMW M3 to sportowy samochód klasy premium, oferujący doskonałe osiągi, precyzyjne prowadzenie i elegancki wygląd.',
                },
                {
                    name: 'Audi A4',
                    year: 2020,
                    horsepower: 248,
                    bodyType: 'Sedan',
                    image: '/images/audi-a4.jpg',
                    description: 'Audi A4 to stylowy sedan, który zapewnia wygodę i nowoczesne technologie, idealny do codziennych dojazdów oraz dłuższych podróży.',
                },
                {
                    name: 'Toyota Corolla',
                    year: 2022,
                    horsepower: 169,
                    bodyType: 'Sedan',
                    image: '/images/toyota-corolla.jpg',
                    description: 'Toyota Corolla to jeden z najlepiej sprzedających się samochodów na świecie, znana z niezawodności i oszczędności paliwa.',
                },
                {
                    name: 'Chevrolet Camaro',
                    year: 2021,
                    horsepower: 275,
                    bodyType: 'Coupe',
                    image: '/images/chevrolet-camaro.jpg',
                    description: 'Chevrolet Camaro to sportowy samochód, który łączy moc z nowoczesnym stylem. Idealny dla tych, którzy pragną przygód.',
                },
                {
                    name: 'Honda Civic',
                    year: 2020,
                    horsepower: 158,
                    bodyType: 'Sedan',
                    image: '/images/honda-civic.jpg',
                    description: 'Honda Civic to wszechstronny samochód kompaktowy, który oferuje komfort, oszczędność paliwa i niezawodność.',
                },
                {
                    name: 'Mercedes-Benz C-Class',
                    year: 2021,
                    horsepower: 255,
                    bodyType: 'Sedan',
                    image: '/images/mercedes-c-class.jpg',
                    description: 'Mercedes-Benz C-Class to luksusowy samochód klasy średniej, znany z doskonałych osiągów i wyjątkowego komfortu.',
                },
                {
                    name: 'Subaru Outback',
                    year: 2022,
                    horsepower: 182,
                    bodyType: 'Wagon',
                    image: '/images/subaru-outback.jpg',
                    description: 'Subaru Outback to idealny samochód dla miłośników przygód, łączący cechy SUV z praktycznością samochodu osobowego.',
                },
                {
                    name: 'Lexus RX',
                    year: 2021,
                    horsepower: 308,
                    bodyType: 'SUV',
                    image: '/images/lexus-rx.jpg',
                    description: 'Lexus RX to luksusowy SUV, oferujący wysoki poziom komfortu oraz najnowsze technologie w zakresie bezpieczeństwa i rozrywki.',
                },
                {
                    name: 'Ford Model T',
                    year: 1927,
                    horsepower: 20,
                    bodyType: 'Sedan',
                    image: '/images/ford-model-t.jpg',
                    description: 'Ford Model T to ikona motoryzacji, uznawana za pierwszy masowo produkowany samochód.',
                },
                {
                    name: 'Volkswagen Beetle',
                    year: 1970,
                    horsepower: 50,
                    bodyType: 'Coupe',
                    image: '/images/volkswagen-beetle.jpg',
                    description: 'Volkswagen Beetle to klasyczny samochód, który stał się symbolem lat 60. i 70.',
                },
                {
                    name: 'Chevrolet Corvette',
                    year: 1967,
                    horsepower: 350,
                    bodyType: 'Coupe',
                    image: '/images/chevrolet-corvette.jpg',
                    description: 'Chevrolet Corvette to klasyczny amerykański samochód sportowy, znany ze swojego wyjątkowego stylu i osiągów.',
                },
                {
                    name: 'Datsun 240Z',
                    year: 1970,
                    horsepower: 150,
                    bodyType: 'Coupe',
                    image: '/images/datsun-240z.jpg',
                    description: 'Datsun 240Z to kultowy sportowy samochód z lat 70., który zdobył uznanie za swoje osiągi.',
                },
            ],
            favorites: [],
        };
    },
    methods: {
        viewDetails(car) {
            this.$router.push({
                name: 'CarDetails',
                params: {
                    name: car.name
                },
                query: {
                    car: JSON.stringify(car)
                }
            });
        },
        toggleFavorite(car) {
            const index = this.favorites.findIndex(fav => fav.name === car.name);
            if (index > -1) {
                this.favorites.splice(index, 1);
            } else {
                this.favorites.push(car);
            }
            localStorage.setItem('favorites', JSON.stringify(this.favorites));
        },
        isFavorite(car) {
            return this.favorites.some(fav => fav.name === car.name);
        },
        loadFavorites() {
            const storedFavorites = localStorage.getItem('favorites');
            if (storedFavorites) {
                this.favorites = JSON.parse(storedFavorites);
            }
        }
    },
    created() {
        this.loadFavorites();
    },
};
</script>

<style scoped>
.car-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 20px;
}

.car-item {
    display: flex;
    align-items: center;
    border-radius: 15px;
    padding: 10px;
    margin: 0 10px;
    background: rgb(41, 39, 39);
    background: linear-gradient(90deg, rgba(41, 39, 39, 1) 0%, rgba(41, 39, 39, 1) 100%);
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease-in-out;
}

.car-item:hover {
    background: rgb(41, 39, 39);
    background: linear-gradient(90deg, rgba(20, 20, 20, 0.199) 30%, rgba(172, 172, 172, 0.192) 70%);
}

.car-item:hover .car-thumbnail {
    width: 400px;
    height: 300px;
    box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.473);
}

.car-thumbnail {
    width: 60px;
    height: 60px;
    border-radius: 12px;
    overflow: hidden;
    margin-right: 10px;
    transition: all 0.7s ease-in-out;
}

.car-thumbnail img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.car-info h2 {
    font-size: 18px;
    font-weight: bold;
    margin: 0;
    color: #a1a1a1;
    transition: all 0.3s ease-in-out;
}

.car-item:hover .car-info h2 {
    color: rgb(255, 255, 255);
    font-size: 24px;
    margin-left: 20px;
}

.description {
    margin-left: 5px;
    margin-top: 5px;
    color: #666;
    font-size: 14px;
    transition: all 0.3s ease-in-out;
}

.car-item:hover .description {
    color: rgb(180, 180, 180);
    margin-left: 20px;
}

.car-actions {
    margin-left: auto;
    display: flex;
    gap: 8px;
}

.details-button,
.favorite-button {
    padding: 5px 10px;
    font-size: 18px;
    color: white;
    background-color: transparent;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
}

.details-button:hover,
.favorite-button:hover {
    transform: scale(1.5);
}

.favorite-button {
    display: flex;
    align-items: center;
    justify-content: center;
}

.details-button:hover,
.favorite-button:hover {
    transform: scale(1.1);
}

@media only screen and (max-width: 700px) {
    .car-item {
        display: flex;
        flex-direction: column;
        position: relative;
    }

    .car-item:hover {
        background: linear-gradient(120deg, rgba(20, 20, 20, 0.199) 30%, rgba(172, 172, 172, 0.192) 70%);
    }

    .car-thumbnail {
        margin-bottom: 20px;
        z-index: 2;
    }

    .car-item:hover .car-thumbnail {
        width: 100%;
        height: 200px;
        margin-bottom: 20px;
    }

    .car-thumbnail {
        width: 200px;
        height: 200px;
    }
    .description {
        position: absolute;
        top: 20px;
        opacity: 0;
        transition: all 0.3s ease-in-out;
    }

    .car-item:hover .description {
        top: 0;
        position: relative;
        opacity: 1;
    }
    
    .car-actions {
        position: absolute;
        width: 100%;
        display: flex;
        opacity: 0;
        top: 40px;
        transition: all 0.3s ease-in-out;
    }

    .car-item:hover .car-actions {
        z-index: 1;
        opacity: 1;
        top: 0;
        position: relative;
    }

    .details-button, .favorite-button {
        flex-basis: 50%;
    }

    .fav-image {
        min-height: 50px;
        min-width: 50px;
    }

    .car-item:hover .car-info h2 {
        text-align: center;
        margin-left: 0px;
    }

    .description {
        text-align: center;
        margin: 0;
        margin-left: -20px;
    }

    .car-info:hover .description {
        text-align: center;
        margin-left: 0px;
    }

    .car-item:hover .description {
        margin-left: 0px;
    }
}
</style>
