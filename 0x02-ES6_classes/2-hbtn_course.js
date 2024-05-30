class HolbertonCourse {
  constructor(name, length, students) {
    if (
      typeof name !== 'string' ||
      typeof length !== 'number' ||
      !Array.isArray(students)
    ) {
      throw new TypeError('Attribute has a wrong type');
    }

    this._name = name;
    this._length = length;
    this._students = students;
  }

  // Getters
  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  // Setters
  set name(theName) {
    if (typeof theName !== 'string') {
      throw new TypeError('Name must be a string');
    }

    this._name = theName;
  }

  set length(theLength) {
    if (typeof theLength !== 'number') {
      throw new TypeError('Length must be a number');
    }

    this._length = theLength;
  }

  set students(theStudents) {
    if (!Array.isArray(theStudents)) {
      throw new TypeError('Students must be an array');
    }

    this._students = theStudents;
  }
}
