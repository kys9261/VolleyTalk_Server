/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_cheerings', {
    seq: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    playerseq: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'tb_players',
        key: 'seq'
      }
    },
    comment: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    author: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    regdate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'tb_cheerings'
  });
};
