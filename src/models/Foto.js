// eslint-disable-next-line import/no-extraneous-dependencies
import Sequelize, { Model } from 'sequelize';
import appConfig from '../config/appConfig';

export default class Foto extends Model {
  static init(sequelize) {
    super.init(
      {
        originalname: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            notEmpty: {
              msg: 'The field originalname cannot be empty',
            },
          },
        },
        filename: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            notEmpty: {
              msg: 'The field filename cannot be empty',
            },
          },
        },
        url: {
          type: Sequelize.VIRTUAL,
          get() {
            return `${process.env.APP_URL}/images/${this.getDataValue('filename')}`;
          },
        },
      },
      {
        sequelize,
        tableName: 'fotos',
      },
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Aluno, { foreignKey: 'aluno_id' });
  }
}
