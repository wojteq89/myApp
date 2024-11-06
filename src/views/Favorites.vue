<template>
<ion-page>
    <ion-header>
        <ion-toolbar>
            <ion-buttons slot="start">
                <ion-menu-button color="primary"></ion-menu-button>
            </ion-buttons>
            <ion-title>Ulubione Samochody</ion-title>
        </ion-toolbar>
    </ion-header>
    <ion-content>
        <div class="favorites-container">
            <h2>Ulubione Samochody:</h2>
            <div class="car-list">
                <div class="car-item" v-for="(car, index) in favorites" :key="index">
                    <div class="car-thumbnail">
                        <img :src="car.image" alt="Obrazek samochodu" />
                    </div>
                    <div class="car-info">
                        <h2>{{ car.name }}</h2>
                        <p>Rok: {{ car.year }}</p>
                        <p>Konie mechaniczne: {{ car.horsepower }}</p>
                        <p>Typ nadwozia: {{ car.bodyType }}</p>
                    </div>
                    <div class="car-actions">
                        <button class="details-button" @click="viewDetails(car)">
                            Szczegóły
                        </button>
                        <button class="remove-button" @click="removeFavorite(index)">Usuń</button>
                    </div>
                </div>
                <div v-if="favorites.length === 0" class="no-favorites">Brak ulubionych samochodów.</div>
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
    IonMenuButton
} from '@ionic/vue';

export default {
    components: {
        IonPage,
        IonHeader,
        IonToolbar,
        IonTitle,
        IonButtons,
        IonMenuButton,
    },
    data() {
        return {
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
        fetchFavorites() {
            const storedFavorites = localStorage.getItem('favorites');
            this.favorites = storedFavorites ? JSON.parse(storedFavorites) : [];
        },
        removeFavorite(index) {
            this.favorites.splice(index, 1);
            localStorage.setItem('favorites', JSON.stringify(this.favorites));
        },
    },
    created() {
        this.fetchFavorites();
    },
};
</script>

<style scoped>
.favorites-container {
    text-align: center;
    color: #ffffff;
}

.car-list {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 40px;
    margin-bottom: 100px;
    margin-left: 50px;
    margin-right: 50px;
}

.car-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    padding: 20px;
    background-color: #292727;
    transition: all 0.3s ease-in-out;
    height: 500px;
    width: 400px;
}

.car-item:hover {
    z-index: 5;
    box-shadow: 0px 0px 20px rgba(255, 255, 255, 0.384);
}

.car-thumbnail {
    width: 300px;
    height: 200px;
    border-radius: 12px;
    overflow: hidden;
    margin-right: 10px;
    transition: all 0.3s ease-in-out;
}

.car-thumbnail:hover {
    width: 500px;
    height: 300px;
    box-shadow: 0px 40px 40px 10px rgba(0, 0, 0, 0.637);
}

.car-thumbnail img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.car-info h2 {
    font-size: 18px;
    font-weight: bold;
    margin-top: 20px;
    color: #ff0000;
}

.car-info p {
    margin: 4px 0 0;
    color: #ffffff;
    font-size: 14px;
}

.car-actions {
    margin-top: 20px;
    display: flex;
    text-align: center;
}

.details-button,
.remove-button {
    display: flex;
    font-size: 18px;
    color: white;
    background-color: transparent;
    border: none;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
    margin-left: 20px;
    margin-right: 20px;
}

.details-button:hover,
.remove-button:hover {
    transform: scale(1.3);
}

.remove-button {
    color: red;
}

.no-favorites {
    margin-top: 20px;
    font-size: 16px;
    color: #888;
}
</style>
