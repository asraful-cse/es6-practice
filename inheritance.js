// :22-8:Inheritance,extend class, super, class method...

class Parent {             // parent ke child er vetore inherit kora holow..
    constructor(){
        this.fatherName = "Ahammed"

    }
} 


class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }
    getFullName(){                                   // eita function but er age function dewa jabe na...
        return this.name +" "+ this.fatherName
    }
}

const baby = new Child("Rasel");
const baby2 = new Child("Sohel");
console.log(baby.getFullName());
console.log(baby2.getFullName());

// $ node inheritance.js
// Rasel Ahammed
// Sohelo Ahammed


//List of OOP Concepts in Java :: three main part:: important interview quetions... 

// Inheritance:::

// উত্তরাধিকার জাভাতে এটি অবজেক্ট ওরিয়েন্টেড প্রোগ্রামিংয়ের একটি বিশেষ বৈশিষ্ট্য
// এটি প্রোগ্রামারদেরকে নতুন ক্লাস তৈরি করতে দেয় যা বিদ্যমান শ্রেণীর কিছু বৈশিষ্ট্য ভাগ করে দেয়। 
// এটি আমাদের চাকা পুনরায় উদ্দীপনা ছাড়াই পূর্ববর্তী কাজগুলিতে গড়ে তুলতে দেয়।
// expample: opore dewa ase:
// class Mammal {

// }
// class Aardvark extends Mammal {

// }


// Encapsulation::
//  এটি ক্লাসটিকে ব্যক্তিগত শ্রেণীর মধ্যে রাখার অনুশীলন,
//  তারপরে সর্বজনীন পদ্ধতির মাধ্যমে তাদের অ্যাক্সেস সরবরাহ করে। 
//  এটি একটি প্রতিরক্ষামূলক বাধা যা ডেটা এবং কোডটিকে শ্রেণীর মধ্যেই সুরক্ষিত রাখে। 
//  এইভাবে, আমরা কোড সিস্টেম বা ভেরিয়েবলের মতো অবজেক্টগুলিকে ডেটা-ব্যাপী ,
//  ডেটা-তে খোলা অ্যাক্সেসের অনুমতি না দিয়ে পুনরায় ব্যবহার করতে পারি।
// example:::
//save as Student.java
// package com.javatpoint;
// public class Student {
//  private String name;
//  public String getName() {
//   return name;
//  }
//  public void setName(String name) {
//   this.name = name
//  }
// }
// //save as Test.java
// package com.javatpoint;
// class Test {
//  public static void main(String[] args) {
//   Student s = new Student();
//   s.setName(“vijay”);
//   System.out.println(s.getName());
//  }
// }

 
//  Polymorphism::
//  এই জাভা ওওপি ধারণাটি প্রোগ্রামারদের বিভিন্ন প্রসঙ্গে বিভিন্ন জিনিস বোঝাতে একই শব্দটি ব্যবহার করতে দেয়। 
//  জাভাতে পলিমারফিজমের একটি ফর্ম হল মেথড ওভারলোডিং। 
//  কোডটি নিজেই বিভিন্ন অর্থ বোঝায় That অন্য ফর্মটি হল মেথড ওভাররাইড। 
//  এটি তখনই যখন সরবরাহ করা ভেরিয়েবলের মান দ্বারা বিভিন্ন অর্থ বোঝানো হয়। 

// examople:::
// class Person {
//     void walk() {
//      System.out.println(“Can Run….”);
//     }
//    }
//    class Employee extends Person {
//     void walk() {
//      System.out.println(“Running Fast…”);
//     }
//     public static void main(String arg[]) {
//      Person p = new Employee(); //upcasting
//      p.walk();
//     }
//    }