DROP TABLE IF EXISTS appointments;
DROP TABLE IF EXISTS available_times;
DROP TABLE IF EXISTS favorites;
DROP TABLE IF EXISTS lectures;
DROP TABLE IF EXISTS patients;
DROP TABLE IF EXISTS doctors;
DROP TABLE IF EXISTS authorities;
DROP TABLE IF EXISTS users;


CREATE TABLE users
(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL,
    role VARCHAR(50),
    enabled TINYINT NOT NULL DEFAULT 1
);

CREATE TABLE authorities
(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    username  VARCHAR(50) NOT NULL,
    authority VARCHAR(50) NOT NULL,
    FOREIGN KEY (username) REFERENCES users(username) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE patients
(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    patient_ID INT NOT NULL,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    gender VARCHAR(10) NOT NULL,
    date_of_birth VARCHAR(8) NOT NULL,
    insurance BOOLEAN DEFAULT FALSE,
    email VARCHAR(50) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    mail_address VARCHAR(50) NOT NULL,
    payment VARCHAR(50),
    FOREIGN KEY (patient_ID) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE doctors
(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    doctor_ID INT NOT NULL,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    gender VARCHAR(10) NOT NULL,
    date_of_birth VARCHAR(8) NOT NULL,
    email VARCHAR(50) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    spec VARCHAR(20) NOT NULL,
    mail_address VARCHAR(50) NOT NULL,
    license VARCHAR(50) NOT NULL,
    FOREIGN KEY (doctor_ID) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE lectures
(
    lecture_ID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    doctor_ID INT NOT NULL,
    patient_ID INT NOT NULL,
    title VARCHAR(100) NOT NULL,
    body VARCHAR(500) NOT NULL,
    FOREIGN KEY (patient_ID) REFERENCES patients(patient_ID) ON DELETE CASCADE,
    FOREIGN KEY (doctor_ID) REFERENCES doctors(doctor_ID) ON DELETE CASCADE
);

 CREATE TABLE available_times
 (
    available_time_ID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    doctor_ID INT NOT NULL,
    available_Time VARCHAR(100) NOT NULL,
    is_Occupied BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (doctor_ID) REFERENCES doctors(doctor_ID) ON DELETE CASCADE
 );

CREATE TABLE appointments
(
    appointment_ID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    patient_ID INT NOT NULL,
    doctor_ID INT NOT NULL,
    appointment_date VARCHAR(50) NOT NULL,
    description VARCHAR(500) NOT NULL,
    is_ongoing BOOLEAN DEFAULT TRUE,
    FOREIGN KEY (patient_ID) REFERENCES patients(patient_ID) ON DELETE CASCADE,
    FOREIGN KEY (doctor_ID) REFERENCES doctors(doctor_ID) ON DELETE CASCADE
);


CREATE TABLE favorites
(
    patient_ID INT NOT NULL,
    lecture_ID INT NOT NULL,
    FOREIGN KEY (patient_ID) REFERENCES patients(patient_ID) ON DELETE CASCADE,
    FOREIGN KEY (lecture_ID) REFERENCES lectures(lecture_ID) ON DELETE CASCADE
);