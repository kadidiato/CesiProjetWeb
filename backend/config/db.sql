drop table if EXISTS Disponibilite;
drop table if EXISTS  Cour;
drop table if EXISTS  Eleve;
drop table if EXISTS  Prof;

CREATE TABLE Cour(idCour integer PRIMARY KEY AUTOINCREMENT,
                  idEleve integer,
                  idProf integer,
                  dateCour date,
                  heureCour time,
                  CONSTRAINT fk_idprofcour foreign key (idProf) references Prof(idProf)
                  CONSTRAINT fk_idelevecour foreign key (idEleve) references Eleve(idEleve)

                  );
CREATE TABLE Disponibilite(idDisponibilite integer PRIMARY KEY AUTOINCREMENT,
                           idProf integer,
                           dateDispo date,
                           heureDispoDebu time,
                           heureDispoFin time
                          );
CREATE TABLE Eleve(idEleve integer PRIMARY KEY AUTOINCREMENT,
                  nomEleve VARCHAR(20),
                  prenomEleve varchar(20),
                  mailEleve varchar(50),
                  niveauEleve VARchar(50),
                  rueEleve varchar(50),
                  villeEleve varchar(50),
                  zipEleve char(5),
                  paysEleve varchar(50)
                  );
CREATE TABLE Prof(idProf integer PRIMARY KEY AUTOINCREMENT,
                  nomProf VARCHAR(20),
                  prenomProf varchar(20),
                  mailProf varchar(50),
                  matiereProf varchar(50),
                  nbAvisPos integer,
                  nbAvisNeg integer,
                  niveauProf VARchar(50),
                  rueProf varchar(50),
                  villeProf varchar(50),
                  zipProf char(5),
                  paysProf varchar(50)
                  );