"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }// eslint-disable-next-line import/no-extraneous-dependencies
var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class Aluno extends _sequelize.Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'The field nome must contain between 3 and 255 characters',
          },
        },
      },
      sobrenome: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'The field sobrenome must contain between 3 and 255 characters',
          },
        },
      },
      email: {
        type: _sequelize2.default.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: {
            msg: 'The field email must be a valid email address',
          },
        },
      },
      idade: {
        type: _sequelize2.default.INTEGER,
        defaultValue: '',
        validate: {
          isInt: {
            msg: 'The field idade must be an integer',
          },
          min: {
            args: [0],
            msg: 'The field idade must be a valid age',
          },
          max: {
            args: [150],
            msg: 'The field idade must be a valid age',
          },
        },
      },
      peso: {
        type: _sequelize2.default.FLOAT,
        defaultValue: '',
        validate: {
          isFloat: {
            msg: 'The field peso must be a valid number',
          },
          min: {
            args: [0],
            msg: 'The field peso must be a valid number',
          },
        },
      },
      altura: {
        type: _sequelize2.default.FLOAT,
        defaultValue: '',
        validate: {
          isFloat: {
            msg: 'The field altura must be a valid number',
          },
          min: {
            args: [0],
            msg: 'The field altura must be a valid number',
          },
        },
      },
    }, {
      sequelize,
    });

    return this;
  }

  static associate(models) {
    this.hasMany(models.Foto, { foreignKey: 'aluno_id' });
  }
} exports.default = Aluno;
