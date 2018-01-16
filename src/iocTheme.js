'use strict';

import { createMuiTheme } from 'material-ui/styles';

const defaultTheme = createMuiTheme();
const theme = createMuiTheme({
    palette: {

    },
});
// exports.default = {
//   spacing: _spacing2.default,
//   fontFamily: '"Carrois Gothic SC", sans-serif',
//   borderRadius: 2,
//   palette: {
//     primary1Color: '#252525',
//     primary2Color: '#770003',
//     primary3Color: '#424242',
//     accent1Color: '#c62828',
//     accent2Color: 'rgb(254, 0, 6)',
//     accent3Color: '#dc0006',
//     textColor: _colors.fullWhite,
//     secondaryTextColor: (0, _colorManipulator.fade)(_colors.fullWhite, 0.7),
//     alternateTextColor: _colors.fullWhite,
//     canvasColor: '#303030',
//     borderColor: (0, _colorManipulator.fade)(_colors.fullWhite, 0.3),
//     disabledColor: (0, _colorManipulator.fade)(_colors.fullWhite, 0.3),
//     pickerHeaderColor: (0, _colorManipulator.fade)(_colors.fullWhite, 0.12),
//     clockCircleColor: (0, _colorManipulator.fade)(_colors.fullWhite, 0.12)
//   }
// };