/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tb_team_comments', {
    seq: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    postseq: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'tb_team_posts',
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
    tableName: 'tb_team_comments'
  });
};
