# Vercel

### **📌 Parancssoros deploy Vercelre (CLI-ből)**

Ha manuálisan szeretnéd **deployolni az alkalmazást** a Vercelre parancssorból, kövesd az alábbi lépéseket.

---

## **1️⃣ Lépj be a projekt könyvtárába**

Ha még nem vagy a megfelelő mappában, lépj be:

```bash
cd /path/to/the-good-old-developer
```

_(Cseréld le az elérési utat a saját projektedére.)_

---

## **2️⃣ Telepítsd a Vercel CLI-t (ha még nem tetted meg)**

Ha még nincs telepítve a Vercel CLI, futtasd:

```bash
npm install -g vercel
```

Ellenőrizheted, hogy sikeresen települt-e:

```bash
vercel --version
```

_(A verziószámot kell látnod, pl. `41.1.4`.)_

---

## **3️⃣ Jelentkezz be Vercelbe (ha még nem vagy bejelentkezve)**

```bash
vercel login
```

Ez megnyitja a böngésződben a **Vercel bejelentkezési oldalt**, ahol **GitHub, GitLab vagy e-mail cím segítségével beléphetsz**.

---

## **4️⃣ Deployold az alkalmazást**

🔹 **Első alkalommal futtasd:**

```bash
vercel
```

📌 **Ez végigvezet a beállításokon:**

- **Kapcsolódás meglévő projekthez vagy új projekt létrehozása**
- **Automatikus framework-felismerés (Next.js)**
- **Beállítások mentése a Vercel számára**

---

## **5️⃣ Ha már korábban deployoltad, és frissíteni akarod az éles verziót**

```bash
vercel --prod
```

📌 **Ez az aktuális kódot a Vercelen azonnal éles verzióként deployolja.**

---

## **6️⃣ Ha a cache miatt a build hibás, kényszeríts egy új buildet**

```bash
vercel --force
```

📌 **Ez újratelepíti az összes függőséget és tiszta buildet készít.**

---

## **7️⃣ Ha a deploy sikeres, nézd meg az élő verziót**

A **Vercel a végén kiír egy URL-t**, például:

```
✅  Production: https://the-good-old-developer.vercel.app
```

Ezt megnyitva **ellenőrizheted az új verziót**.

---

### **🔹 Összegzés**

🔹 **Első deploy:**

```bash
vercel
```

🔹 **Frissítés az éles verzióban:**

```bash
vercel --prod
```

🔹 **Cache törlés és tiszta build:**

```bash
vercel --force
```

🔹 **Élő verzió ellenőrzése:**

```bash
vercel open
```

🚀 **Most már teljesen manuálisan deployolhatod az alkalmazásodat!** 🎯  
🔹 **Próbáld ki, és szólj, ha még segítség kell!**
