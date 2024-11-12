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
            <div class="car-image">
                <img :src="car.image" alt="Samochód" />
            </div>
            <div class="car-info">
                <h2>{{ car.name }}</h2>
                <p><strong>Rok: </strong>{{ car.year }}</p>
                <p><strong>Typ nadwozia: </strong>{{ car.bodyType }}</p>
                <p><strong>Moc silnika: </strong>{{ car.horsepower }} KM</p>
                <p><strong>Opis: </strong>{{ car.description }}</p>
            </div>
        </div>
    </ion-content>
    <button class="back-button" @click="goBack">Wróć</button>
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
    color: rgb(255, 255, 255);
    text-align: left;
}

.car-image img {
    width: 100%;
    max-height: 600px;
    object-fit: cover;
    box-shadow: 0px 50px 1000px 10px rgba(255, 255, 255, 0.349);
}

.car-info {
    margin-left: 50px;
    margin-right: 50px;
}

.car-info h2 {
    font-size: 24px;
    font-weight: bold;
    color: #ffffff;
}

.car-info p {
    color: #9e9e9e;
    font-size: 16px;
}

.car-info strong {
    color: rgb(218, 218, 218);
}

.back-button {
    position: fixed;
    top: 100px;
    right: 50px;
    padding: 10px 20px;
    font-size: 18px;
    background-color: #353131;
    color: white;
    border-radius: 12px;
    transition: transform 0.3s ease;
    text-align: center;
    margin-left: 50px;
}

.back-button:hover {
    transform: scale(1.1);
}

@media only screen and (max-width: 700px) {
    .back-button {
        top: 10px;
        right: 5px;
        z-index: 100;
    }

}
</style>
