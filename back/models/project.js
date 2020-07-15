module.exports = (sequelize, DataTypes) => {

    const Project = sequelize.define('Project', {
        title: {
            type:DataTypes.STRING(30),
            allowNull: false,
            unique: true,
        },
        content: {
            type:DataTypes.TEXT,
        },
        category: {
            type:DataTypes.STRING(20),
        },
        tag : {
            type: DataTypes.STRING(10),
        },
        kinds: {
            type: DataTypes.STRING(20),
        },
        created_at: {
            type: DataTypes.DATE,
            allowNULL: false,
            defaultValue: DataTypes.NOW,
        },
    },{
        charset: 'utf8mb4',
        collate: 'utf8mb4_general_ci',
        timestamps:true,
    });

    Project.associate = (db) => {
        db.Project.hasMany(db.Image);
        db.Project.belongsTo(db.User);
    };
    return Project;
}