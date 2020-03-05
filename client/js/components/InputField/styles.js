import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#1E6A62',
    backgroundColor: 'transparent',
    borderRadius: 20.5,
    fontSize: 16,
    paddingVertical: 10,
    minWidth: 255,
    width: 275,
    paddingLeft: 15,
  },

  inputBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#03dac4',
  },
  eyeIcon: {
    right: -30,
    top: -7,
    position: 'absolute',
  },
  PlaceholderStyle: {
    fontSize: 20,
    color: 'red',
  },
  searchInput: {
    backgroundColor: '#fff',
    borderRadius: 20.5,
    fontSize: 14,
    marginLeft: 15,
    paddingVertical: 10,
    minWidth: 255,
    width: 275,
    paddingLeft: 15,
  },
  searchInputIcon: {
    position: 'absolute',
    right: 40,
  },
})

export default styles
