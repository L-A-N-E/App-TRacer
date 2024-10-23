// Importando logo dos times
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
      team: 'TAG HEUER PORSCHE',
      imageSource: TAGHEUERPorscheImage,
      drivers: [
        { name: 'Pascal Wehrlein', points_last_season: 198, final_ranking: 1, imagePilot: require('../assets/images/teams/pilots/Pascal_Wehrlein.png'), cust_tr: 15.32, lastRacePoints: 10, racesPoints_average: 15, races: 6, current_racesPoints: 0 },
        { name: 'António Félix da Costa', points_last_season: 134, final_ranking: 6, imagePilot: require('../assets/images/teams/pilots/Antonio_Felix_Da_Costa.png'), cust_tr: 15.32, lastRacePoints: 10, racesPoints_average: 15, races: 6, current_racesPoints: 0 }
      ],
      total_points: 332,
      red_color: '#ac0017',
      red_color2: '#d5001c',
      fill_color2: '#ac0017ad'
    },
    {
      id: '2',
      team: 'Jaguar TCS Racing',
      imageSource: JaguarTCSImage,
      drivers: [
        { name: 'Mitch Evans', points_last_season: 192, final_ranking: 2, imagePilot: require('../assets/images/teams/pilots/Mitch_Evans.png'), cust_tr: 15.32, lastRacePoints: 10, racesPoints_average: 15, races: 6, current_racesPoints: 0 },
        { name: 'Nick Cassidy', points_last_season: 176, final_ranking: 3, imagePilot: require('../assets/images/teams/pilots/Nick_Cassidy.png'), cust_tr: 15.32, lastRacePoints: 10, racesPoints_average: 15, races: 6, current_racesPoints: 0 }
      ],
      total_points: 368,
      red_color: '#000000',
      red_color2: '#808080',
      fill_color2: '#000000ad'
    },
    {
      id: '3',
      team: 'NISSAN',
      imageSource: NissanImage,
      drivers: [
        { name: 'Oliver Rowland', points_last_season: 156, final_ranking: 4, imagePilot: require('../assets/images/teams/pilots/Oliver_Rowland.png'), cust_tr: 15.32, lastRacePoints: 10, racesPoints_average: 15, races: 6, current_racesPoints: 0 },
        { name: 'Sacha Fenestraz', points_last_season: 26, final_ranking: 17, imagePilot: require('../assets/images/teams/pilots/Sacha_Fenestraz.png'), cust_tr: 15.32, lastRacePoints: 10, racesPoints_average: 15, races: 6, current_racesPoints: 0 },
        { name: 'Caio Collet', points_last_season: 0, final_ranking: 28, imagePilot: require('../assets/images/teams/pilots/Caio_Collet.png'), cust_tr: 15.32, lastRacePoints: 10, racesPoints_average: 15, races: 6, current_racesPoints: 0 }
      ],
      total_points: 182,
      red_color: '#c3002f',
      red_color2: '#ee0041',
      fill_color2: '#c3002fad'
    },
    {
      id: '4',
      team: 'DS PENSKE',
      imageSource: DSPenskeImage,
      drivers: [
        { name: 'Jean-Éric Vergne', points_last_season: 139, final_ranking: 5, imagePilot: require('../assets/images/teams/pilots/Jean_Eric_Vergne.png'), cust_tr: 15.32, lastRacePoints: 10, racesPoints_average: 15, races: 6, current_racesPoints: 0 },
        { name: 'Stoffel Vandoorne', points_last_season: 61, final_ranking: 10, imagePilot: require('../assets/images/teams/pilots/Stoffel_Vandoorne.png'), cust_tr: 15.32, lastRacePoints: 10, racesPoints_average: 15, races: 6, current_racesPoints: 0 }
      ],
      total_points: 200,
      red_color: '#a98b50',
      red_color2: '#c39f5c',
      fill_color2: '#a98b50ad'
    },
    {
      id: '5',
      team: 'ANDRETTI',
      imageSource: AndrettiImage,
      drivers: [
        { name: 'Jake Dennis', points_last_season: 122, final_ranking: 7, imagePilot: require('../assets/images/teams/pilots/Jake_Dennis.png'), cust_tr: 15.32, lastRacePoints: 10, racesPoints_average: 15, races: 6, current_racesPoints: 0 },
        { name: 'Norman Nato', points_last_season: 47, final_ranking: 15, imagePilot: require('../assets/images/teams/pilots/Norman_Nato.png'), cust_tr: 15.32, lastRacePoints: 10, racesPoints_average: 15, races: 6, current_racesPoints: 0 }
      ],
      total_points: 169,
      red_color: '#c02a1f',
      red_color2: '#ed3124',
      fill_color2: '#ed3124ad'
    },
    {
      id: '6',
      team: 'MASERATI MSG RACING',
      imageSource: MaseratiImage,
      drivers: [
        { name: 'Maximilian Günther', points_last_season: 73, final_ranking: 8, imagePilot: require('../assets/images/teams/pilots/Maximilian_Gunther.png'), cust_tr: 15.32, lastRacePoints: 10, racesPoints_average: 15, races: 6, current_racesPoints: 0 },
        { name: 'Jehan Daruvala', points_last_season: 8, final_ranking: 21, imagePilot: require('../assets/images/teams/pilots/Jehan_Daruvala.png'), cust_tr: 15.32, lastRacePoints: 10, racesPoints_average: 15, races: 6, current_racesPoints: 0 }
      ],
      total_points: 81,
      red_color: '#001489',
      red_color2: '#00408a',
      fill_color2: '#001489ad'
    },
    {
      id: '7',
      team: 'ENVISION RACING',
      imageSource: EnvisionImage,
      drivers: [
        { name: 'Robin Frijns', points_last_season: 66, final_ranking: 9, imagePilot: require('../assets/images/teams/pilots/Robin_Frijns.png'), cust_tr: 15.32, lastRacePoints: 10, racesPoints_average: 15, races: 6, current_racesPoints: 0 },
        { name: 'Sébastien Buemi', points_last_season: 53, final_ranking: 11, imagePilot: require('../assets/images/teams/pilots/Sebastien_Buemi.png'), cust_tr: 15.32, lastRacePoints: 10, racesPoints_average: 15, races: 6, current_racesPoints: 0 },
        { name: 'Joel Eriksson', points_last_season: 2, final_ranking: 24, imagePilot: require('../assets/images/teams/pilots/Joel_Eriksson.png'), cust_tr: 15.32, lastRacePoints: 10, racesPoints_average: 15, races: 6, current_racesPoints: 0 }
      ],
      total_points: 121,
      red_color: '#236a32',
      red_color2: '#00be26',
      fill_color2: '#236a32ad'
    },
    {
      id: '8',
      team: 'ABT CUPRA',
      imageSource: ABTCupraImage,
      drivers: [
        { name: 'Nico Müller', points_last_season: 52, final_ranking: 12, imagePilot: require('../assets/images/teams/pilots/Nico_Muller.png'), cust_tr: 15.32, lastRacePoints: 10, racesPoints_average: 15, races: 6, current_racesPoints: 0 },
        { name: 'Lucas Di Grassi', points_last_season: 4, final_ranking: 23, imagePilot: require('../assets/images/teams/pilots/Lucas_Di_Grassi.png'), cust_tr: 15.32, lastRacePoints: 10, racesPoints_average: 15, races: 6, current_racesPoints: 0 },
        { name: 'Kelvin van der Linde', points_last_season: 0, final_ranking: 25, imagePilot: require('../assets/images/teams/pilots/Kelvin_Van_Der_Linde.png'), cust_tr: 15.32, lastRacePoints: 10, racesPoints_average: 15, races: 6, current_racesPoints: 0 }
      ],
      total_points: 56,
      red_color: '#004280',
      red_color2: '#0057aa',
      fill_color2: '#004280ad'
    },
    {
      id: '9',
      team: 'NEOM McLAREN',
      imageSource: NEOMMcLarenImage,
      drivers: [
        { name: 'Jake Hughes', points_last_season: 9, final_ranking: 20, imagePilot: require('../assets/images/teams/pilots/Jake_Hughes.png'), cust_tr: 15.32, lastRacePoints: 10, racesPoints_average: 15, races: 6, current_racesPoints: 0 },
        { name: 'Taylor Barnard', points_last_season: 0, final_ranking: 29, imagePilot: require('../assets/images/teams/pilots/Taylor_Barnard.png'), cust_tr: 15.32, lastRacePoints: 10, racesPoints_average: 15, races: 6, current_racesPoints: 0 }
      ],
      total_points: 9,
      red_color: '#b55b00',
      red_color2: '#ff8000',
      fill_color2: '#b55b00ad'
    },
    {
      id: '10',
      team: 'MAHINDRA RACING',
      imageSource: MahindraImage,
      drivers: [
        { name: 'Edoardo Mortara', points_last_season: 19, final_ranking: 18, imagePilot: require('../assets/images/teams/pilots/Edoardo_Mortara.png'), cust_tr: 15.32, lastRacePoints: 10, racesPoints_average: 15, races: 6, current_racesPoints: 0 },
        { name: 'Nyck de Vries', points_last_season: 22, final_ranking: 19, imagePilot: require('../assets/images/teams/pilots/Nyck_De_Vries.png'), cust_tr: 15.32, lastRacePoints: 10, racesPoints_average: 15, races: 6, current_racesPoints: 0 }
      ],
      total_points: 41,
      red_color: '#d5042b',
      red_color2: '#ff0533',
      fill_color2: '#d5042bad'
    },
    {
      id: '11',
      team: 'ERT',
      imageSource: ERTImage,
      drivers: [
        { name: 'Jordan King', points_last_season: 0, final_ranking: 30, imagePilot: require('../assets/images/teams/pilots/Jordan_King.png'), cust_tr: 15.32, lastRacePoints: 10, racesPoints_average: 15, races: 6, current_racesPoints: 0 },
        { name: 'Dan Ticktum', points_last_season: 0, final_ranking: 31, imagePilot: require('../assets/images/teams/pilots/Dan_Ticktum.png'), cust_tr: 15.32, lastRacePoints: 10, racesPoints_average: 15, races: 6, current_racesPoints: 0 },
        { name: 'Sérgio Sette Câmara', points_last_season: 0, final_ranking: 32, imagePilot: require('../assets/images/teams/pilots/Sergio_Sette_Camara.png'), cust_tr: 15.32, lastRacePoints: 10, racesPoints_average: 15, races: 6, current_racesPoints: 0 }
      ],
      total_points: 0,
      red_color: '#003c63',
      red_color2: '#5199c9',
      fill_color2: '#003c63ad'
    }
  ]
};

export default sampleFormulaETeamsData