import { User } from "./user.model";
import { Request, Response } from "express";

let users: User[] = [];
let currentId = 1;

// GET - afficher tous les utilisateurs
export const getUsers = (req: Request, res: Response) => {
  res.json(users);
};

// POST - ajouter un utilisateur
export const createUser = (req: Request, res: Response) => {
  const { nom, prenom, tel, adresse } = req.body;

  const newUser: User = {
    id: currentId++,
    nom,
    prenom,
    tel,
    adresse,
  };

  users.push(newUser);
  res.status(201).json(newUser);
};

// DELETE - supprimer un utilisateur
export const deleteUser = (req: Request, res: Response) => {
  const id = parseInt(req.params.id as string);

  users = users.filter((user) => user.id !== id);

  res.json({ message: "Utilisateur supprimé" });
};