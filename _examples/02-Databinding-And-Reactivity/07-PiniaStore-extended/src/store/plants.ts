import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export interface Plant {
  id: number;
  name: string;
  type: string;
  icon: string;
}

export const usePlantStore = defineStore('plants', () => {
  const plants = ref<Plant[]>(getPlants()); // e.g. fetched
  const selectedType = ref<string>('all');

  const filteredPlants = computed<Plant[]>(() => {
    if (selectedType.value === 'all') {
      return plants.value;
    }
    return plants.value.filter(plant => plant.type === selectedType.value);
  });

  const allPlantTypes = computed<string[]>(() => {
    const types = new Set(plants.value.map(plant => plant.type));
    return Array.from(types);
  });

  const setSelectedType = (type: string) => {
    selectedType.value = type;
  };

  return {
    plants,
    selectedType,
    filteredPlants,
    allPlantTypes,
    setSelectedType,
  };
});

// mock data source (could be an API call)
const getPlants = () => {
  return [
    { id: 1, name: 'Coconut Palm', type: 'Palm', icon: '🌴' },
    { id: 2, name: 'Saguaro', type: 'Cactus', icon: '🌵' },
    { id: 3, name: 'Fan Palm', type: 'Palm', icon: '🌴' },
    { id: 4, name: 'Rose', type: 'Flower', icon: '🌺' },
    { id: 5, name: 'Tulip', type: 'Flower', icon: '🌺' },
    { id: 6, name: 'Oak', type: 'Tree', icon: '🌳' },
    { id: 7, name: 'Maple', type: 'Tree', icon: '🌳' },
    { id: 8, name: 'Date Palm', type: 'Palm', icon: '🌴' },
  ];
};
