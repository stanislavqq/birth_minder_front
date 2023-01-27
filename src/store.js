import {writable, derived} from "svelte/store";

export const persons = writable([
    {id: 1, firstname: "Имя1", lastname: "Фамилия1", day: 12, month: 2, year: 2000, comment: "Комментарий"},
    {id: 2, firstname: "Имя2", lastname: "Фамилия2", day: 13, month: 3, year: 2000, comment: "Комментарий"},
    {id: 3, firstname: "Имя3", lastname: "Фамилия3", day: 14, month: 4, year: 2000, comment: "Комментарий"},
    {id: 4, firstname: "Имя4", lastname: "Фамилия4", day: 15, month: 5, year: 2000, comment: "Комментарий"},
    {id: 5, firstname: "Имя5", lastname: "Фамилия5", day: 16, month: 6, year: 2000, comment: "Комментарий"},
    {id: 6, firstname: "Имя6", lastname: "Фамилия6", day: 17, month: 7, year: 2000, comment: "Комментарий"},
])
