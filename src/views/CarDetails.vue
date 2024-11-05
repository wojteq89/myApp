<template>
<ion-page>
    <ion-header>
        <ion-toolbar>
            <ion-buttons slot="start">
                <ion-menu-button color="primary"></ion-menu-button>
            </ion-buttons>
            <ion-title>{{ car.name }}</ion-title>
        </ion-toolbar>
    </ion-header>
    <ion-content>
        <div class="car-details">
            <h2>{{ car.name }}</h2>
            <div class="car-image">
                <img :src="car.image" alt="Samochód" />
            </div>
            <div class="car-info">
                <p><strong>Rok: </strong>{{ car.model }}</p>
                <p><strong>Typ nadwozia: </strong>{{ car.bodyType }}</p>
                <p><strong>Moc silnika: </strong>{{ car.horsepower }} KM</p>
                <p><strong>Opis: </strong>{{ car.description }}</p>
            </div>
            <button class="back-button" @click="goBack">Wróć</button>
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
    IonButton
} from '@ionic/vue';

export default {
    components: {
        IonPage,
        IonHeader,
        IonToolbar,
        IonTitle,
        IonButtons,
        IonMenuButton,
        IonButton,
    },
    props: {
        model: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            car: {}
        };
    },
    created() {
        const carData = this.$route.query.car;
        if (carData) {
            this.car = JSON.parse(carData);
        }
    },
    methods: {
        goBack() {
            this.$router.push({
                name: 'CarLists'
            });
        },
    },
};
</script>

  
<style scoped>
.car-details {
    padding: 20px;
    text-align: center;
}

.car-image img {
    width: 300px;
    height: auto;
    border-radius: 20px;
}

.car-info h2 {
    font-size: 18px;
    font-weight: bold;
    color: #666;
}

.car-info p {
    color: #666;
    font-size: 16px;
    padding: 0px 20px;
}

.back-button {
    padding: 10px 20px;
    font-size: 18px;
    background-color: #353131;
    color: white;
    border-radius: 12px;
    transition: transform 0.3s ease;
}

.back-button:hover {
    transform: scale(1.1);
}
</style>
