"use server";

import { ConnectDb } from "../db/ConnectDb";
import { Code } from "../model/code";

export const codeSave = async ({code, title, description, category , owner}) => {
 try {
   ConnectDb();
   const newCode = await Code.create({
     title,
     description,
     code,
     category,
     owner
   });
   return JSON.parse(JSON.stringify(newCode));
 } catch (error) {
  console.log(" error in save code route",error);
  
 }
};

export const getAllTitles = async () => {
  try {
    ConnectDb()
    const allTitle = await Code.find();
    const titles = allTitle.map((title) => title.title);
    return JSON.parse(JSON.stringify(titles));
  } catch (error) {
    
  }
}

export const getCode = async (data) => {
 try {
   ConnectDb();
 
   const { title } = data;
   const newCode = await Code.findOne({ title });
 
   return JSON.parse(JSON.stringify(newCode));
 } catch (error) {
  console.log(" error in get code route",error);
  
 }
}

export const updateCode = async ({code, title, description, category , owner}) => {
 try {
   ConnectDb();
 
  const codeData = await Code.findOne({ title, owner });
    
  if (!codeData) {
    throw new Error('Code snippet not found.');
  }
  const updatedCode = await Code.findOneAndUpdate(
    { title, owner },  
    { code, description, category , title },  
    { new: true } // Options to return the updated document
  );


  return JSON.parse(JSON.stringify(updatedCode));


 } catch (error) {
  console.log(" error in update code route",error);
  
 }
}; 

export const createdByUser = async ({owner}) => {
  try {
    ConnectDb();
    const codeSnippets = await Code.find({ owner });
    
    const titles =codeSnippets.map((title) => title.title); 
    
    return JSON.parse(JSON.stringify(titles));
  } catch (error) {
   console.log(" error in get code route",error);
   
  }
 }
export const deleteCodeByUser = async ({owner , title}) => {
  try {
    ConnectDb();
    const codeSnippets = await Code.find({ owner , title });
    
      await Code.findOneAndDelete({ owner , title });
      
  } catch (error) {
   console.log(" error in get code route",error);
   
  }
 }