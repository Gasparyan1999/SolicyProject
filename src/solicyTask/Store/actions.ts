import { createAction } from "@reduxjs/toolkit";


export const add = createAction("Add")
export const sort = createAction("Sort")
export const del = createAction('Del', function prepare(text: string) {
    return {
      payload: {
        text,
      },
    }
  })