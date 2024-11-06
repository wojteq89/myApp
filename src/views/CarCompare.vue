<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Porównanie Samochodów</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div class="compare-container">
        <div class="car-selection">
          <h2>Wybierz samochody do porównania:</h2>
          <div class="car-list">
            <div class="car-item" v-for="(car, index) in cars" :key="index">
              <input type="checkbox" :value="car" v-model="selectedCars" />
              <label>{{ car.model }} ({{ car.year }})</label>
            </div>
          </div>
        </div>
        <div class="comparison-table" v-if="selectedCars.length">
          <h2>Porównanie:</h2>
          <table>
            <thead>
              <tr>
                <th>Model</th>
                <th>Rok</th>
                <th>Konie mechaniczne</th>
                <th>Typ nadwozia</th>
                <th>Opis</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="car in selectedCars" :key="car.model">
                <td>{{ car.model }}</td>
                <td>{{ car.year }}</td>
                <td>{{ car.horsepower }}</td>
                <td>{{ car.bodyType }}</td>
                <td>{{ car.description }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonButtons, IonMenuButton } from '@ionic/vue';

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
      cars: [
        {
          model: 'Tesla Model S',
          year: 2020,
          horsepower: 670,
          bodyType: 'Sedan',
          description: 'Luksusowy samochód elektryczny, który łączy wydajność i nowoczesny design.',
        },
        {
          model: 'Ford Mustang',
          year: 2021,
          horsepower: 450,
          bodyType: 'Coupe',
          description: 'Ikona amerykańskiego stylu z mocnym silnikiem i sportowym wyglądem.',
        },
        {
          model: 'BMW M3',
          year: 2022,
          horsepower: 473,
          bodyType: 'Sedan',
          description: 'Samochód sportowy o dynamicznym wyglądzie i doskonałych osiągach.',
        },
        {
          model: 'Audi A4',
          year: 2020,
          horsepower: 248,
          bodyType: 'Sedan',
          description: 'Stylowy sedan z wygodnym wnętrzem i nowoczesnymi technologiami.',
        },
        {
          model: 'Toyota Corolla',
          year: 2022,
          horsepower: 169,
          bodyType: 'Sedan',
          description: 'Jedno z najlepiej sprzedających się aut, znane z niezawodności.',
        },
        {
          model: 'Chevrolet Camaro',
          year: 2021,
          horsepower: 275,
          bodyType: 'Coupe',
          description: 'Sportowy samochód łączący moc z nowoczesnym stylem.',
        },
        {
          model: 'Honda Civic',
          year: 2020,
          horsepower: 158,
          bodyType: 'Sedan',
          description: 'Wszechstronny samochód kompaktowy z komfortowym wnętrzem.',
        },
        {
          model: 'Mercedes-Benz C-Class',
          year: 2021,
          horsepower: 255,
          bodyType: 'Sedan',
          description: 'Luksusowy sedan z doskonałym komfortem i osiągami.',
        },
        {
          model: 'Subaru Outback',
          year: 2022,
          horsepower: 182,
          bodyType: 'Wagon',
          description: 'Idealny samochód dla miłośników przygód z doskonałą przestronnością.',
        },
        {
          model: 'Lexus RX',
          year: 2021,
          horsepower: 308,
          bodyType: 'SUV',
          description: 'Luksusowy SUV z zaawansowanymi technologiami.',
        },
        {
          model: 'Ford Model T',
          year: 1927,
          horsepower: 20,
          bodyType: 'Sedan',
          description: 'Ikona motoryzacji, pierwszy masowo produkowany samochód.',
        },
        {
          model: 'Volkswagen Beetle',
          year: 1970,
          horsepower: 50,
          bodyType: 'Coupe',
          description: 'Klasyczny samochód, symbol lat 60. i 70.',
        },
        {
          model: 'Chevrolet Corvette',
          year: 1967,
          horsepower: 350,
          bodyType: 'Coupe',
          description: 'Amerykański samochód sportowy z wyjątkowym stylem.',
        },
        {
          model: 'Datsun 240Z',
          year: 1970,
          horsepower: 150,
          bodyType: 'Coupe',
          description: 'Kultowy sportowy samochód z lat 70.',
        },
      ],
      selectedCars: [],
    };
  },
};
</script>

<style scoped>
.compare-container {
  padding: 20px;
}

.car-selection {
  margin-bottom: 20px;
}

.car-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.car-item {
  display: flex;
  align-items: center;
  background-color: #292727;
  padding: 10px;
  border-radius: 10px;
}

.car-item input {
  margin-right: 10px;
}

.comparison-table {
  background-color: #292727;
  padding: 10px;
  border-radius: 10px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  padding: 10px;
  border: 1px solid #444;
  text-align: left;
  color: white;
}

.back-button {
  padding: 10px 20px;
  font-size: 18px;
  background-color: transparent;
  color: white;
  border-radius: 12px;
  transition: transform 0.3s ease;
}

.back-button:hover {
  transform: scale(1.1);
}
</style>
