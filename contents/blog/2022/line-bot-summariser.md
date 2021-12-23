---
slug: "/blog/line-bot-summariser"
date: "2021-12-05"
title: "สร้าง Content จากบทสนทนาใน LINE Group"
blurb: "หลายธุรกิจให้พนักงานรายงานการทำงานผ่าน LINE ซึ่ง LINE นั้นถือเป็น App ที่ต้องมีทุกเครื่องไปแล้ว
แต่การต้องนำข้อมูลที่ส่งผ่าน LINE chat นั้นมาสรุปเป็นรายงาน เพื่อลงในระบบอื่นต่อไป ถือเป็นงานที่ซ้ำซ้อน และ สามารถ Automate ได้"
thumb: "../line-shop-for-local-food-delivery-01.jpg"

---

หลายธุรกิจให้พนักงานรายงานการทำงานผ่าน LINE ซึ่ง LINE นั้นถือเป็น App ที่ต้องมีทุกเครื่องไปแล้ว
แต่การต้องนำข้อมูลที่ส่งผ่าน LINE chat นั้นมาสรุปเป็นรายงาน เพื่อลงในระบบอื่นต่อไป ถือเป็นงานที่ซ้ำซ้อน และ สามารถ Automate ได้
เราสร้าง LINE Bot ที่เฝ้าห้องสนทนา และ เมื่อมีข้อความเข้ามา และ มีจุดจับประเด็นได้ว่าเป็นข้อความการรายงานการทำงาน
Bot จะเก็บเนื้อหาเหล่านั้น ทั้งรูปภาพ ทั้งจุด Check-in และนำมาสรุปเก็บใส่ Database ให้ระบบอื่นได้นำไปใช้ต่อไป
ผลที่ได้คือการประหยัดเวลาในการทำงานลงได้อย่างมา