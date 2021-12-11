import { Sequelize, DataTypes, Model, Optional } from 'sequelize';

enum Gender {
  Male = 'Male',
  Female = 'Female',
  Other = 'Other',
}

interface lessonAttributes {
  id: number;
  title: string | null;
  price: number | null;
  gender: Gender | null;
  location: string | null;
  age: number | null;
  minute_per_lesson: number | null;
  content: string | null;
}

type lessonCreationAttributes = Optional<
  lessonAttributes,
  | 'id'
  | 'price'
  | 'gender'
  | 'location'
  | 'age'
  | 'minute_per_lesson'
  | 'content'
>;

export class Lesson
  extends Model<lessonAttributes, lessonCreationAttributes>
  implements lessonAttributes
{
  public id!: number;
  public title!: string;
  public price!: number | null;
  public gender!: Gender | null;
  public location!: string | null;
  public age!: number | null;
  public minute_per_lesson!: number | null;
  public content!: string | null;

  static initModel(sequelize: Sequelize): typeof Lesson {
    return Lesson.init(
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          type: DataTypes.INTEGER,
          primaryKey: true,
        },
        title: {
          allowNull: false,
          type: DataTypes.STRING(128),
        },
        price: {
          allowNull: true,
          type: DataTypes.INTEGER,
        },
        gender: {
          allowNull: true,
          type: DataTypes.ENUM('Male', 'Female', 'Other'),
        },
        location: {
          allowNull: true,
          type: DataTypes.STRING(128),
        },
        age: {
          allowNull: true,
          type: DataTypes.INTEGER,
        },
        minute_per_lesson: {
          allowNull: true,
          type: DataTypes.INTEGER,
        },
        content: {
          allowNull: true,
          type: DataTypes.STRING(8192),
        },
      },
      { tableName: 'Lesson', sequelize },
    );
  }
}