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

// Importando imagem dos pilotos
import Pascal_Wehrlein from '../assets/images/teams/pilots/Pascal_Wehrlein.png';
import Antonio_Felix_da_Costa from '../assets/images/teams/pilots/Antonio_Felix_Da_Costa.png';
import Mitch_Evans from '../assets/images/teams/pilots/Mitch_Evans.png';
import Nick_Cassidy from '../assets/images/teams/pilots/Nick_Cassidy.png';
import Oliver_Rowland from '../assets/images/teams/pilots/Oliver_Rowland.png';
import Sacha_Fenestraz from '../assets/images/teams/pilots/Sacha_Fenestraz.png';
import Caio_Collet from '../assets/images/teams/pilots/Caio_Collet.png';
import Jean_Eric_Vergne from '../assets/images/teams/pilots/Jean_Eric_Vergne.png';
import Stoffel_Vandoorne from '../assets/images/teams/pilots/Stoffel_Vandoorne.png';
import Jake_Dennis from '../assets/images/teams/pilots/Jake_Dennis.png';
import Norman_Nato from '../assets/images/teams/pilots/Norman_Nato.png';
import Maximilian_Gunther from '../assets/images/teams/pilots/Maximilian_Gunther.png';
import Jehan_Daruvala from '../assets/images/teams/pilots/Jehan_Daruvala.png';
import Robin_Frijns from '../assets/images/teams/pilots/Robin_Frijns.png';
import Sebastian_Buemi from '../assets/images/teams/pilots/Sebastien_Buemi.png';
import Joel_Eriksson from '../assets/images/teams/pilots/Joel_Eriksson.png';
import Nico_Muller from '../assets/images/teams/pilots/Nico_Muller.png';
import Lucas_Di_Grassi from '../assets/images/teams/pilots/Lucas_Di_Grassi.png';
import Kelvin_van_der_Linde from '../assets/images/teams/pilots/Kelvin_Van_Der_Linde.png';
import Sam_Bird from '../assets/images/teams/pilots/Sam_Bird.png';
import Jake_Hughes from '../assets/images/teams/pilots/Jake_Hughes.png';
import Taylor_Barnard from '../assets/images/teams/pilots/Taylor_Barnard.png';
import Edoardo_Mortara from '../assets/images/teams/pilots/Edoardo_Mortara.png';
import Nyck_de_Vries from '../assets/images/teams/pilots/Nyck_De_Vries.png';
import Jordan_King from '../assets/images/teams/pilots/Jordan_King.png';
import Dan_Ticktum from '../assets/images/teams/pilots/Dan_Ticktum.png';
import Sergio_Sette_Camara from '../assets/images/teams/pilots/Sergio_Sette_Camara.png';

const sampleFormulaETeamsData = {
  teams: [
    {
      id: '1',
      team: 'TAG HEUER PORSCHE FORMULA E TEAM',
      imageSource: TAGHEUERPorscheImage,
      drivers: [
        { name: 'Pascal Wehrlein', points_last_season: 198, final_ranking: 1, imagePilot: Pascal_Wehrlein, cust_tr: 15.32, lastRacePoints: 10, racesPoints_average: 15, races: 6, current_racesPoints: 0 },
        { name: 'António Félix da Costa', points_last_season: 134, final_ranking: 6, imagePilot: Antonio_Felix_da_Costa, cust_tr: 15.32, lastRacePoints: 10, racesPoints_average: 15, races: 6, current_racesPoints: 0 }
      ],
      total_points: 332
    },
    {
      id: '2',
      team: 'Jaguar TCS Racing',
      imageSource: JaguarTCSImage,
      drivers: [
        { name: 'Mitch Evans', points_last_season: 192, final_ranking: 2, imagePilot: Mitch_Evans, cust_tr: 15.32, lastRacePoints: 10, racesPoints_average: 15, races: 6, current_racesPoints: 0 },
        { name: 'Nick Cassidy', points_last_season: 176, final_ranking: 3, imagePilot: Nick_Cassidy, cust_tr: 15.32, lastRacePoints: 10, racesPoints_average: 15, races: 6, current_racesPoints: 0 }
      ],
      total_points: 368
    },
    {
      id: '3',
      team: 'NISSAN FORMULA E TEAM',
      imageSource: NissanImage,
      drivers: [
        { name: 'Oliver Rowland', points_last_season: 156, final_ranking: 4, imagePilot: Oliver_Rowland, cust_tr: 15.32, lastRacePoints: 10, racesPoints_average: 15, races: 6, current_racesPoints: 0 },
        { name: 'Sacha Fenestraz', points_last_season: 26, final_ranking: 17, imagePilot: Sacha_Fenestraz, cust_tr: 15.32, lastRacePoints: 10, racesPoints_average: 15, races: 6, current_racesPoints: 0 },
        { name: 'Caio Collet', points_last_season: 0, final_ranking: 28, imagePilot: Caio_Collet, cust_tr: 15.32, lastRacePoints: 10, racesPoints_average: 15, races: 6, current_racesPoints: 0 }
      ],
      total_points: 182
    },
    {
      id: '4',
      team: 'DS PENSKE',
      imageSource: DSPenskeImage,
      drivers: [
        { name: 'Jean-Éric Vergne', points_last_season: 139, final_ranking: 5, imagePilot: Jean_Eric_Vergne, cust_tr: 15.32, lastRacePoints: 10, racesPoints_average: 15, races: 6, current_racesPoints: 0 },
        { name: 'Stoffel Vandoorne', points_last_season: 61, final_ranking: 10, imagePilot: Stoffel_Vandoorne, cust_tr: 15.32, lastRacePoints: 10, racesPoints_average: 15, races: 6, current_racesPoints: 0 }
      ],
      total_points: 200
    },
    {
      id: '5',
      team: 'ANDRETTI FORMULA E',
      imageSource: AndrettiImage,
      drivers: [
        { name: 'Jake Dennis', points_last_season: 122, final_ranking: 7, imagePilot: Jake_Dennis, cust_tr: 15.32, lastRacePoints: 10, racesPoints_average: 15, races: 6, current_racesPoints: 0 },
        { name: 'Norman Nato', points_last_season: 47, final_ranking: 15, imagePilot: Norman_Nato, cust_tr: 15.32, lastRacePoints: 10, racesPoints_average: 15, races: 6, current_racesPoints: 0 }
      ],
      total_points: 169
    },
    {
      id: '6',
      team: 'MASERATI MSG RACING',
      imageSource: MaseratiImage,
      drivers: [
        { name: 'Maximilian Günther', points_last_season: 73, final_ranking: 8, imagePilot: Maximilian_Gunther, cust_tr: 15.32, lastRacePoints: 10, racesPoints_average: 15, races: 6, current_racesPoints: 0 },
        { name: 'Jehan Daruvala', points_last_season: 8, final_ranking: 21, imagePilot: Jehan_Daruvala, cust_tr: 15.32, lastRacePoints: 10, racesPoints_average: 15, races: 6, current_racesPoints: 0 }
      ],
      total_points: 81
    },
    {
      id: '7',
      team: 'ENVISION RACING',
      imageSource: EnvisionImage,
      drivers: [
        { name: 'Robin Frijns', points_last_season: 66, final_ranking: 9, imagePilot: Robin_Frijns, cust_tr: 15.32, lastRacePoints: 10, racesPoints_average: 15, races: 6, current_racesPoints: 0 },
        { name: 'Sébastien Buemi', points_last_season: 53, final_ranking: 11, imagePilot: Sebastian_Buemi, cust_tr: 15.32, lastRacePoints: 10, racesPoints_average: 15, races: 6, current_racesPoints: 0 },
        { name: 'Joel Eriksson', points_last_season: 2, final_ranking: 24, imagePilot: Joel_Eriksson, cust_tr: 15.32, lastRacePoints: 10, racesPoints_average: 15, races: 6, current_racesPoints: 0 }
      ],
      total_points: 121
    },
    {
      id: '8',
      team: 'ABT CUPRA FORMULA E TEAM',
      imageSource: ABTCupraImage,
      drivers: [
        { name: 'Nico Müller', points_last_season: 52, final_ranking: 12, imagePilot: Nico_Muller, cust_tr: 15.32, lastRacePoints: 10, racesPoints_average: 15, races: 6, current_racesPoints: 0 },
        { name: 'Lucas Di Grassi', points_last_season: 4, final_ranking: 23, imagePilot: Lucas_Di_Grassi, cust_tr: 15.32, lastRacePoints: 10, racesPoints_average: 15, races: 6, current_racesPoints: 0 },
        { name: 'Kelvin van der Linde', points_last_season: 0, final_ranking: 25, imagePilot: Kelvin_van_der_Linde, cust_tr: 15.32, lastRacePoints: 10, racesPoints_average: 15, races: 6, current_racesPoints: 0 }
      ],
      total_points: 56
    },
    {
      id: '9',
      team: 'NEOM MCLAREN FORMULA E TEAM',
      imageSource: NEOMMcLarenImage,
      drivers: [
        { name: 'Sam Bird', points_last_season: 48, final_ranking: 13, imagePilot: Sam_Bird, cust_tr: 15.32, lastRacePoints: 10, racesPoints_average: 15, races: 6, current_racesPoints: 0 },
        { name: 'Jake Hughes', points_last_season: 48, final_ranking: 14, imagePilot: Jake_Hughes, cust_tr: 15.32, lastRacePoints: 10, racesPoints_average: 15, races: 6, current_racesPoints: 0 },
        { name: 'Taylor Barnard', points_last_season: 5, final_ranking: 22, imagePilot: Taylor_Barnard, cust_tr: 15.32, lastRacePoints: 10, racesPoints_average: 15, races: 6, current_racesPoints: 0 }
      ],
      total_points: 101
    },
    {
      id: '10',
      team: 'MAHINDRA RACING',
      imageSource: MahindraImage,
      drivers: [
        { name: 'Edoardo Mortara', points_last_season: 29, final_ranking: 16, imagePilot: Edoardo_Mortara, cust_tr: 15.32, lastRacePoints: 10, racesPoints_average: 15, races: 6, current_racesPoints: 0 },
        { name: 'Nyck de Vries', points_last_season: 18, final_ranking: 18, imagePilot: Nyck_de_Vries, cust_tr: 15.32, lastRacePoints: 10, racesPoints_average: 15, races: 6, current_racesPoints: 0 },
        { name: 'Jordan King', points_last_season: 0, final_ranking: 26, imagePilot: Jordan_King, cust_tr: 15.32, lastRacePoints: 10, racesPoints_average: 15, races: 6, current_racesPoints: 0 }
      ],
      total_points: 47
    },
    {
      id: '11',
      team: 'ERT FORMULA E TEAM',
      imageSource: ERTImage,
      drivers: [
        { name: 'Dan Ticktum', points_last_season: 12, final_ranking: 19, imagePilot: Dan_Ticktum, cust_tr: 15.32, lastRacePoints: 10, racesPoints_average: 15, races: 6, current_racesPoints: 0 },
        { name: 'Sérgio Sette Câmara', points_last_season: 11, final_ranking: 20, imagePilot: Sergio_Sette_Camara, cust_tr: 15.32, lastRacePoints: 10, racesPoints_average: 15, races: 6, current_racesPoints: 0 }
      ],
      total_points: 23
    }
  ]
};

export default sampleFormulaETeamsData;
