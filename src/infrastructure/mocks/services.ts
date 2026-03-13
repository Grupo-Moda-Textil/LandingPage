import type { Service } from '../../domain/types/Service';

export const mockServices: Service[] = [
  {
    id: '1',
    title: 'Consultoría Textil',
    description: 'Asesoramiento experto en la selección de materiales, procesos y diseño para lograr la máxima calidad e innovación.',
    icon: 'Shirt'
  },
  {
    id: '2',
    title: 'Fabricación a Medida',
    description: 'Producción de prendas y textiles personalizados a gran escala con los más altos estándares de calidad.',
    icon: 'Scissors'
  },
  {
    id: '3',
    title: 'Distribución Global',
    description: 'Logística y distribución eficiente para que tus productos lleguen al mercado internacional de manera segura.',
    icon: 'Globe'
  },
  {
    id: '4',
    title: 'Diseño Sostenible',
    description: 'Compromiso con el medio ambiente a través de procesos y materiales ecológicos en nuestra línea de producción.',
    icon: 'Leaf'
  }
];
