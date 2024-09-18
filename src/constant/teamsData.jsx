import TAGHEUERPorscheImage from '../assets/images/teams/logo/TAGHEUERPORSCHE.png';
import JaguarTCSImage from '../assets/images/teams/logo/JaguarTCS.png';
import NissanImage from '../assets/images/teams/logo/Nissan.png';
import DSPenskeImage from '../assets/images/teams/logo/DSPenske.png';
import AndrettiImage from '../assets/images/teams/logo/Andretti.png';
import MaseratiImage from '../assets/images/teams/logo/Maserati.png';
import EnvisionImage from '../assets/images/teams/logo/Envision.png';
import ABTCupraImage from '../assets/images/teams/logo/ABTCupra.png';
import NEOMMcLarenImage from '../assets/images/teams/logo/NEOMMcLaren.png';
import MahindraImage from '../assets/images/teams/logo/Mahindra.png';
import ERTImage from '../assets/images/teams/logo/ERT.png';

const sampleFormulaETeamsData = {
  teams: [
    {
      id: '1',
      team: 'TAG HEUER PORSCHE FORMULA E TEAM',
      imageSource: TAGHEUERPorscheImage,
      drivers: [
        { name: 'Pascal Wehrlein', points_last_season: 198, final_ranking: 1, cust_tr: 15.32, last_TRPoints: 10, TRpoints_average: 15, races: 6 },
        { name: 'António Félix da Costa', points_last_season: 134, final_ranking: 6, cust_tr: 15.32, last_TRPoints: 10, TRpoints_average: 15, races: 6 }
      ],
      total_points: 332
    },
    {
      id: '2',
      team: 'Jaguar TCS Racing',
      imageSource: JaguarTCSImage,
      drivers: [
        { name: 'Mitch Evans', points_last_season: 192, final_ranking: 2, cust_tr: 15.32, last_TRPoints: 10, TRpoints_average: 15, races: 6 },
        { name: 'Nick Cassidy', points_last_season: 176, final_ranking: 3, cust_tr: 15.32, last_TRPoints: 10, TRpoints_average: 15, races: 6 }
      ],
      total_points: 368
    },
    {
      id: '3',
      team: 'NISSAN FORMULA E TEAM',
      imageSource: NissanImage,
      drivers: [
        { name: 'Oliver Rowland', points_last_season: 156, final_ranking: 4, cust_tr: 15.32, last_TRPoints: 10, TRpoints_average: 15, races: 6 },
        { name: 'Sacha Fenestraz', points_last_season: 26, final_ranking: 17, cust_tr: 15.32, last_TRPoints: 10, TRpoints_average: 15, races: 6 },
        { name: 'Caio Collet', points_last_season: 0, final_ranking: 28, cust_tr: 15.32, last_TRPoints: 10, TRpoints_average: 15, races: 6 }
      ],
      total_points: 182
    },
    {
      id: '4',
      team: 'DS PENSKE',
      imageSource: DSPenskeImage,
      drivers: [
        { name: 'Jean-Éric Vergne', points_last_season: 139, final_ranking: 5, cust_tr: 15.32, last_TRPoints: 10, TRpoints_average: 15, races: 6 },
        { name: 'Stoffel Vandoorne', points_last_season: 61, final_ranking: 10, cust_tr: 15.32, last_TRPoints: 10, TRpoints_average: 15, races: 6 }
      ],
      total_points: 200
    },
    {
      id: '5',
      team: 'ANDRETTI FORMULA E',
      imageSource: AndrettiImage,
      drivers: [
        { name: 'Jake Dennis', points_last_season: 122, final_ranking: 7, cust_tr: 15.32, last_TRPoints: 10, TRpoints_average: 15, races: 6 },
        { name: 'Norman Nato', points_last_season: 47, final_ranking: 15, cust_tr: 15.32, last_TRPoints: 10, TRpoints_average: 15, races: 6 }
      ],
      total_points: 169
    },
    {
      id: '6',
      team: 'MASERATI MSG RACING',
      imageSource: MaseratiImage,
      drivers: [
        { name: 'Maximilian Günther', points_last_season: 73, final_ranking: 8, cust_tr: 15.32, last_TRPoints: 10, TRpoints_average: 15, races: 6, current_TRPoints: 0 },
        { name: 'Jehan Daruvala', points_last_season: 8, final_ranking: 21, cust_tr: 15.32, last_TRPoints: 10, TRpoints_average: 15, races: 6, current_TRPoints: 0 }
      ],
      total_points: 81
    },
    {
      id: '7',
      team: 'ENVISION RACING',
      imageSource: EnvisionImage,
      drivers: [
        { name: 'Robin Frijns', points_last_season: 66, final_ranking: 9, cust_tr: 15.32, last_TRPoints: 10, TRpoints_average: 15, races: 6, current_TRPoints: 0 },
        { name: 'Sébastien Buemi', points_last_season: 53, final_ranking: 11, cust_tr: 15.32, last_TRPoints: 10, TRpoints_average: 15, races: 6, current_TRPoints: 0 },
        { name: 'Joel Eriksson', points_last_season: 2, final_ranking: 24, cust_tr: 15.32, last_TRPoints: 10, TRpoints_average: 15, races: 6, current_TRPoints: 0 }
      ],
      total_points: 121
    },
    {
      id: '8',
      team: 'ABT CUPRA FORMULA E TEAM',
      imageSource: ABTCupraImage,
      drivers: [
        { name: 'Nico Müller', points_last_season: 52, final_ranking: 12, cust_tr: 15.32, last_TRPoints: 10, TRpoints_average: 15, races: 6, current_TRPoints: 0 },
        { name: 'Lucas Di Grassi', points_last_season: 4, final_ranking: 23, cust_tr: 15.32, last_TRPoints: 10, TRpoints_average: 15, races: 6, current_TRPoints: 0 },
        { name: 'Kelvin van der Linde', points_last_season: 0, final_ranking: 25, cust_tr: 15.32, last_TRPoints: 10, TRpoints_average: 15, races: 6, current_TRPoints: 0 }
      ],
      total_points: 56
    },
    {
      id: '9',
      team: 'NEOM MCLAREN FORMULA E TEAM',
      imageSource: NEOMMcLarenImage,
      drivers: [
        { name: 'Sam Bird', points_last_season: 48, final_ranking: 13, cust_tr: 15.32, last_TRPoints: 10, TRpoints_average: 15, races: 6, current_TRPoints: 0 },
        { name: 'Jake Hughes', points_last_season: 48, final_ranking: 14, cust_tr: 15.32, last_TRPoints: 10, TRpoints_average: 15, races: 6, current_TRPoints: 0 },
        { name: 'Taylor Barnard', points_last_season: 5, final_ranking: 22, cust_tr: 15.32, last_TRPoints: 10, TRpoints_average: 15, races: 6 , current_TRPoints: 0}
      ],
      total_points: 101
    },
    {
      id: '10',
      team: 'MAHINDRA RACING',
      imageSource: MahindraImage,
      drivers: [
        { name: 'Edoardo Mortara', points_last_season: 29, final_ranking: 16, cust_tr: 15.32, last_TRPoints: 10, TRpoints_average: 15, races: 6, current_TRPoints: 0 },
        { name: 'Nyck de Vries', points_last_season: 18, final_ranking: 18, cust_tr: 15.32, last_TRPoints: 10, TRpoints_average: 15, races: 6, current_TRPoints: 0 },
        { name: 'Jordan King', points_last_season: 0, final_ranking: 26, cust_tr: 15.32, last_TRPoints: 10, TRpoints_average: 15, races: 6, current_TRPoints: 0 }
      ],
      total_points: 47
    },
    {
      id: '11',
      team: 'ERT FORMULA E TEAM',
      imageSource: ERTImage,
      drivers: [
        { name: 'Dan Ticktum', points_last_season: 12, final_ranking: 19, cust_tr: 15.32, last_TRPoints: 10, TRpoints_average: 15, races: 6, current_TRPoints: 0 },
        { name: 'Sérgio Sette Câmara', points_last_season: 11, final_ranking: 20, cust_tr: 15.32, last_TRPoints: 10, TRpoints_average: 15, races: 6, current_TRPoints: 0 }
      ],
      total_points: 23
    }
  ]
};

export default sampleFormulaETeamsData;
