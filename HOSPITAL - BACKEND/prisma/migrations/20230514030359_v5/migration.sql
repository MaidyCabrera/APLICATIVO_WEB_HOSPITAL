-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Especialidad" (
    "idEspecialidad" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL
);
INSERT INTO "new_Especialidad" ("idEspecialidad", "nombre") SELECT "idEspecialidad", "nombre" FROM "Especialidad";
DROP TABLE "Especialidad";
ALTER TABLE "new_Especialidad" RENAME TO "Especialidad";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
