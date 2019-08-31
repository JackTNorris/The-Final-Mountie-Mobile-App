const React = require('react-native');
const { StyleSheet } = React;
const constants = {
  actionColor: '#24CE84',
};

var styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f2f2',
    flex: 1,
  },

  announcementListOdd: {
    //backgroundColor: '#fff',
    borderBottomColor: '#eee',
    borderColor: 'transparent',
    borderWidth: 1,
    paddingLeft: 16,
	paddingRight: 10,
    paddingTop: 10, //changed from 14 to 10 fit with icons in the picture
    paddingBottom: 12, //was 16
    marginRight: 30,
    marginLeft: 30, 
    marginBottom: 20,
    borderRadius: 30,
    backgroundColor: '#142eef'//'rgba(19, 84, 236, 0.67)'
  },

    announcementListEven: {
    backgroundColor: 'rgba(255, 255, 255, 0.67)',
    borderBottomColor: '#eee',
    borderColor: 'transparent',
    borderWidth: 1,
    paddingLeft: 16,
	paddingRight: 10,
    paddingTop: 10, //changed from 14 to 10 fit with icons in the picture
    paddingBottom: 12, //was 16
    marginRight: 30,
    marginLeft: 30, 
    marginBottom: 20,
    borderRadius: 30,
    
  },

  listview: {
    flex: 1,
  },
  li: {
    backgroundColor: '#fff',
    borderBottomColor: '#eee',
    borderColor: 'transparent',
    borderWidth: 1,
    paddingLeft: 16,
    paddingTop: 10, //changed from 14 to 10 fit with icons in the picture
    paddingBottom: 12, //was 16
    flexDirection: 'row'
  },
  liContainer: {
    flex: 2,
  },
  liText: {
    color: '#333',
    fontSize: 16,
    fontWeight: 'bold', //written additionally
  },
  liText2: {
    //new style written
    color: '#333',
    fontSize: 18,
  },

  liText3: {
    //new style written
    color: 'white',
    fontSize: 18,
  },
  navbar: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottomColor: '#eee',
    borderColor: 'transparent',
    borderWidth: 1,
    justifyContent: 'center',
    height: 44,
    flexDirection: 'row',
  },
  navbarTitle: {
    color: '#444',
    fontSize: 16,
    fontWeight: '500',
  },
  statusbar: {
    backgroundColor: '#fff',
    height: 22,
  },
  center: {
    textAlign: 'center',
  },
  actionText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  action: {
    backgroundColor: constants.actionColor,
    borderColor: 'transparent',
    borderWidth: 1,
    paddingLeft: 16,
    paddingTop: 14,
    paddingBottom: 16,
  },
});

module.exports = styles;
module.exports.constants = constants;