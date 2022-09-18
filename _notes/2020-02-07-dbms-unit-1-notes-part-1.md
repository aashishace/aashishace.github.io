---
layout: page
title: DBMS UNIT 1 NOTES PART 1
categories: DBMS
author: Sharad Raj
date: 2020-02-07
---

I've divided the Unit 1 in 3 parts and I'll be covering them every other day.

Also I'll only cover those topics which are mentioned in the syllabus, so if you need something then you can reach me through email or contact page on this website.

Good luck ! :)

---

# Unit 1: Introduction to Database

---

## Chapter 1: Introduction to Database System

**What will be covered in this chapter ?**

Basic definitions, advantage of DB systems, DB systems vs File systems, View of Data.

### 1.0 Basic Definitions

#### 1.0.1 File

A file is a collection or set (ordered or unordered) of data elements stored on storage media. 
A file can be described as a logical collection of records.

#### 1.0.2 Record

A record is a set of logically related fields. Typically a file has a number of records in it.

A record may consists of more than one **Field**.

#### 1.0.3 Data

Data are Known facts that can be recorded and that have implicit meaning.

#### 1.0.4 Database

Database is a collection of related data with some inherent meaning.

#### 1.0.5 Schema

Complete definition and description of the database is known as database schema.

OR

The logical structure of the database (e.g., set of customers and accounts and the relationship between them)

*Second definition has been taken from Silberschatz, Korth and Sudarshanc © 1997*

#### 1.0.6 DBMS

It is a collection of programs that enables to create and maintain database. It is an application Software system that facilitates the process of defining, constructing and manipulating data bases for various applications.

There were many problems in the traditional file system and to overcome them **DBMS** came into existence.

* **Problems of traditional file system:**
  1. Data redundancy and inconsistency
  2. Concurrent access by multiple users
  3. Difficulty in accessing data
  4. Data isolation – multiple files and formats
  5. Integrity problems
  6. Atomicity of updates
  7. Security problems

* **Types of DBMS**:
  1. Hierarchical
  2. Network DBMS
  3. Object-oriented
  4. Relational DBMS or RDBMS

#### 1.0.7 RDBMS

**Definition:** A database system made up of files with data elements in two-dimensional array (rows and columns). This database system has the capability to recombine data elements to form different relations resulting in a great flexibility of data usage.

* **The Relational DB Concept was proposed by Dr. Codd in 1970**
* *The relational model contains the following components:*
  1. Collection of objects or relations
  2. Set of operations to act on the relations
  3. Data integrity for accuracy and consistency

* *Relational Database Management System (RDBMS) consists of:*
  1. A set of tables
  2. A schema:
     * is a description of data in terms of data model
     * defines tables and their attributes (field or column)

* **Examples of RDBMS**
  * Client/Server Databases
    * MySQL (open-source)
    * Oracle
    * SQLServer (Microsoft)
  * Personal Databases
    * MS Access
    * MS Excel
  * Embedded Databases
    * SQlite

##### 1.0.7.1 RDBMS vs Traditional File System

Wait for 12 pm....

---

**What will be covered in the next chapter ?**

* Database System Concepts and Architecture
  1. Data Models
  2. Schemas and Instances
  3. Three schema architecture
  4. Data independencies

---

>Thank you !!