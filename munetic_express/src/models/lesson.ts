import { Sequelize, DataTypes, Model, Optional } from 'sequelize';

export interface lessonAttributes {
  id: number;
  tutor_id: number;
  category_id: number;
  title: string | null;
  price: number | null;
  location: string | null;
  minute_per_lesson: number | null;
  content: string | null;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}

export type lessonCreationAttributes = Optional<
  lessonAttributes,
  'title' | 'price' | 'location' | 'minute_per_lesson' | 'content'
>;

export class Lesson
  extends Model<lessonAttributes, lessonCreationAttributes>
  implements lessonAttributes
{
  public id!: number;
  public tutor_id!: number;
  public category_id!: number;
  public title!: string;
  public price!: number | null;
  public location!: string | null;
  public minute_per_lesson!: number | null;
  public content!: string | null;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date;

  static initModel(sequelize: Sequelize): typeof Lesson {
    return Lesson.init(
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          type: DataTypes.INTEGER,
          primaryKey: true,
        },
        tutor_id: {
          allowNull: false,
          type: DataTypes.INTEGER,
          // references: {
          //   model: 'user',
          //   key: 'id',
          // },
        },
        category_id: {
          allowNull: false,
          type: DataTypes.INTEGER,
          // references: {
          //   model: 'category',
          //   key: 'id',
          // },
        },
        title: {
          allowNull: false,
          type: DataTypes.STRING(128),
        },
        price: {
          allowNull: true,
          type: DataTypes.INTEGER,
        },
        location: {
          allowNull: true,
          type: DataTypes.STRING(128),
        },
        minute_per_lesson: {
          allowNull: true,
          type: DataTypes.INTEGER,
        },
        content: {
          allowNull: true,
          type: DataTypes.STRING(8192),
        },
        createdAt: {
          field: 'createdAt',
          type: DataTypes.DATE,
        },
        updatedAt: {
          field: 'updatedAt',
          type: DataTypes.DATE,
        },
        deletedAt: {
          field: 'deletedAt',
          type: DataTypes.DATE,
        },
      },
      { tableName: 'Lesson', sequelize },
    );
  }
}
