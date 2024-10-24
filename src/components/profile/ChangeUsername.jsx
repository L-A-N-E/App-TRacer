// Importando estilos
import { ProfileChangeButton, ProfileChangeText, ProfileContainerButton, ProfileInput, ProfileUsernameContainer, ProfileUsernameText } from '../../styles/ProfileStyles'

const ChangeUsername = ({ newUsername, setNewUsername, handleChangeUsername, closeUsernameModal }) => {
  return (
    <ProfileUsernameContainer>
          <ProfileUsernameText>Username</ProfileUsernameText>
          <ProfileInput
            placeholder="Username"
            value={newUsername}
            onChangeText={setNewUsername}
            placeholderTextColor='#fff'
          />
          <ProfileContainerButton>
              <ProfileChangeButton onPress={handleChangeUsername} input="save">
                <ProfileChangeText>Save</ProfileChangeText>
              </ProfileChangeButton>
              <ProfileChangeButton onPress={closeUsernameModal} input="cancel">
                <ProfileChangeText>Cancel</ProfileChangeText>
              </ProfileChangeButton>
          </ProfileContainerButton>
    </ProfileUsernameContainer>
  )
}

export default ChangeUsername
