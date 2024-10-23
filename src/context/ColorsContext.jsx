import { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc, onSnapshot } from 'firebase/firestore';
import { auth, db } from '../firebase/firebaseConfig';
import sampleFormulaETeamsData from '../constant/teamsData';

// Definindo o objeto de cores padrão
const DefaultColors = {
    ft_color: '#FFF',
    br_color: '#EDEDED',
    ft_color2: '#000',
    fill_color1: 'rgba(217, 217, 217, 0.05)',
    fill_color3: 'rgba(0, 0, 0, 0.28)',
};

// Criando o contexto de cores
const ColorsContext = createContext(DefaultColors);

// Provedor de cores
export const ColorsProvider = ({ children }) => {
    // Estado para as cores do time
    const [teamColors, setTeamColors] = useState({ ...DefaultColors, red_color: '#dd052b', red_color2: '#bb0323', fill_color2: 'rgba(217, 7, 45, 0.36)' });

    useEffect(() => {
        // Função para encontrar o time favorito nos dados de amostra
        const getFavoriteTeamColors = (favoriteTeam) => {
            const team = sampleFormulaETeamsData.teams.find(t => t.team === favoriteTeam);
            if (team) {
                // Combina as cores do time favorito com as cores padrão
                return { ...DefaultColors, red_color: team.red_color, red_color2: team.red_color2, fill_color2: team.fill_color2};
            }
            // Caso não encontre o time, retorna os valores padrão
            return { ...DefaultColors, red_color: '#dd052b', red_color2: '#bb0323', fill_color2: 'rgba(217, 7, 45, 0.36)' }; // Cores padrão
        };

        const unsubscribeAuth = onAuthStateChanged(auth, async (currentUser) => {
            if (currentUser) {
                const uid = currentUser.uid;
                const docRef = doc(db, "users", uid);

                // Criar um listener que escuta mudanças no documento do usuário
                const unsubscribeDoc = onSnapshot(docRef, (docSnap) => {
                    if (docSnap.exists()) {
                        const userData = docSnap.data();
                        const favoriteTeam = userData.favoriteTeam;
                        const colors = getFavoriteTeamColors(favoriteTeam);
                        setTeamColors(colors); // Atualiza o estado com as cores do time favorito
                    }
                });

                // Limpeza da assinatura do documento
                return () => unsubscribeDoc();
            } else {
                // Usuário não logado, volta para as cores padrão
                setTeamColors({ ...DefaultColors, red_color: '#dd052b', red_color2: '#bb0323', fill_color2: 'rgba(217, 7, 45, 0.36)' });
            }
        });

        // Cleanup da assinatura da autenticação
        return () => unsubscribeAuth();
    }, [auth, db]);

    return (
        <ColorsContext.Provider value={teamColors}>
            {children}
        </ColorsContext.Provider>
    );
};

// Hook para acessar as cores
export const useColors = () => {
    return useContext(ColorsContext);
};
