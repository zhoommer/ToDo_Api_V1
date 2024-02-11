/*
  Warnings:

  - You are about to drop the column `value` on the `Labels` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Labels" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "label" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "toDoId" INTEGER,
    CONSTRAINT "Labels_toDoId_fkey" FOREIGN KEY ("toDoId") REFERENCES "ToDo" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Labels" ("color", "id", "label", "toDoId") SELECT "color", "id", "label", "toDoId" FROM "Labels";
DROP TABLE "Labels";
ALTER TABLE "new_Labels" RENAME TO "Labels";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
