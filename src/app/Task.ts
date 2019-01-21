export class Task {
  constructor(
      public title: String,
      public desc: String,
      public startDate: String,
      public endDate: String
  ) {}
  static getAllProductSQL(): String {
      let sql=`select * from tasks`;
      return sql;
  }
}
