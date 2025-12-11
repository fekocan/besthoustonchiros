
import { City, Therapist } from './supabase-server';

export const MOCK_CITIES: City[] = [
  {
    "id": "1",
    "name": "Houston",
    "slug": "houston",
    "population": 0,
    "image": "https://images.unsplash.com/photo-1542738226-f78696cf15a3?auto=format&fit=crop&q=80&w=2000"
  },
  {
    "id": "2",
    "name": "Friendswood",
    "slug": "friendswood",
    "population": 0,
    "image": "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&q=80&w=2000"
  },
  {
    "id": "3",
    "name": "Kingwood",
    "slug": "kingwood",
    "population": 0,
    "image": "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&q=80&w=2000"
  },
  {
    "id": "4",
    "name": "Webster",
    "slug": "webster",
    "population": 0,
    "image": "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&q=80&w=2000"
  }
];

export const MOCK_THERAPISTS: Therapist[] = [
  {
    "id": "1",
    "first_name": "",
    "last_name": "ChiroSport",
    "slug": "chirosport-1",
    "city_id": "1",
    "services": [
      "Neck Pain",
      "Back Pain",
      "Wellness Care",
      "Doctor",
      "Sports Injuries",
      "Chiropractic Care"
    ],
    "phone": "(713) 425-2524",
    "email": "",
    "website": "https://www.clearlakeintegrativemedicine.com/",
    "address": "1335 Regents Park Dr #110, Houston, TX 77058",
    "photo": "https://lh3.googleusercontent.com/p/AF1QipO-F-wL4lXU43eGgYXGo_uVPQzLpwFAwuHnM03i=w408-h272-k-no",
    "images": [
      "https://lh3.googleusercontent.com/p/AF1QipO-F-wL4lXU43eGgYXGo_uVPQzLpwFAwuHnM03i=w408-h272-k-no"
    ],
    "bio": "Located in Clear Lake, ChiroSport provides quality chiropractic care. Open Monday 8\u202fAM to 7\u202fPM",
    "languages": [
      "English"
    ],
    "rating": 5,
    "review_count": 53,
    "analysis": []
  },
  {
    "id": "2",
    "first_name": "",
    "last_name": "Beecher Chiropractic Clinic",
    "slug": "beecher-chiropractic-clinic-2",
    "city_id": "1",
    "services": [
      "Neck Pain",
      "Back Pain",
      "Wellness Care",
      "Chiropractic Care"
    ],
    "phone": "(281) 286-1300",
    "email": "",
    "website": "https://beecherchiropractic.com/",
    "address": "1001 Pineloch Dr #700, Houston, TX 77062",
    "photo": "https://lh3.googleusercontent.com/p/AF1QipPNwqR5FAtHoWAyZxCsmVBcK1Un58ISlkq4E7j4=w426-h240-k-no",
    "images": [
      "https://lh3.googleusercontent.com/p/AF1QipPNwqR5FAtHoWAyZxCsmVBcK1Un58ISlkq4E7j4=w426-h240-k-no"
    ],
    "bio": "Located in Clear Lake, Beecher Chiropractic Clinic provides quality chiropractic care. Open Monday 9\u202fAM to 12\u202fPM, 2 to 6\u202fPM",
    "languages": [
      "English"
    ],
    "rating": 5,
    "review_count": 336,
    "analysis": []
  },
  {
    "id": "3",
    "first_name": "",
    "last_name": "Baybrook Chiropractic",
    "slug": "baybrook-chiropractic-3",
    "city_id": "1",
    "services": [
      "Neck Pain",
      "Back Pain",
      "Physical therapist",
      "Wellness Care",
      "Chiropractic Care"
    ],
    "phone": "(346) 342-1818",
    "email": "",
    "website": "",
    "address": "14200 Gulf Fwy #110, Houston, TX 77034",
    "photo": "https://lh3.googleusercontent.com/p/AF1QipNKjWNTxQUlLpIgJENC69zOO8UAX2r9MKRPpTKl=w408-h541-k-no",
    "images": [
      "https://lh3.googleusercontent.com/p/AF1QipNKjWNTxQUlLpIgJENC69zOO8UAX2r9MKRPpTKl=w408-h541-k-no"
    ],
    "bio": "Located in South Belt / Ellington, Baybrook Chiropractic provides quality chiropractic care. Open Monday 9\u202fAM to 6\u202fPM",
    "languages": [
      "English"
    ],
    "rating": 5,
    "review_count": 21,
    "analysis": []
  },
  {
    "id": "4",
    "first_name": "",
    "last_name": "Backed by Blackmon | Dr. Randi B. Likely",
    "slug": "backed-by-blackmon---dr--randi-b--likely-4",
    "city_id": "1",
    "services": [
      "Neck Pain",
      "Back Pain",
      "Wellness Care",
      "Chiropractic Care"
    ],
    "phone": "(713) 321-0506",
    "email": "",
    "website": "https://www.backedbyblackmon.com/",
    "address": "17047 El Camino Real # 140, Houston, TX 77058",
    "photo": "https://lh3.googleusercontent.com/p/AF1QipNo3pgLsBQnuHckBVLQfd_iQBcNxpIFJ_IkoLvI=w408-h272-k-no",
    "images": [
      "https://lh3.googleusercontent.com/p/AF1QipNo3pgLsBQnuHckBVLQfd_iQBcNxpIFJ_IkoLvI=w408-h272-k-no"
    ],
    "bio": "Located in Clear Lake, Backed by Blackmon | Dr. Randi B. Likely provides quality chiropractic care. Open Monday 9\u202fAM to 1\u202fPM",
    "languages": [
      "English"
    ],
    "rating": 5,
    "review_count": 38,
    "analysis": []
  },
  {
    "id": "5",
    "first_name": "",
    "last_name": "Sea Lark Chiropractic",
    "slug": "sea-lark-chiropractic-5",
    "city_id": "1",
    "services": [
      "Neck Pain",
      "Back Pain",
      "Wellness Care",
      "Yoga studio",
      "Chiropractic Care"
    ],
    "phone": "(281) 488-0111",
    "email": "",
    "website": "http://sealarkchiro.com/",
    "address": "16626 Sea Lark Rd, Houston, TX 77062",
    "photo": "https://lh3.googleusercontent.com/p/AF1QipM8ny2cpaXkn7D_Ai5Ho0tEZY_GyPuFSHDSTBB_=w408-h408-k-no",
    "images": [
      "https://lh3.googleusercontent.com/p/AF1QipM8ny2cpaXkn7D_Ai5Ho0tEZY_GyPuFSHDSTBB_=w408-h408-k-no"
    ],
    "bio": "Located in Clear Lake, Sea Lark Chiropractic provides quality chiropractic care. Open Monday 9\u202fAM to 7\u202fPM",
    "languages": [
      "English"
    ],
    "rating": 5,
    "review_count": 369,
    "analysis": []
  },
  {
    "id": "6",
    "first_name": "",
    "last_name": "Dr Banda's Southbelt Wellness & Injury Center",
    "slug": "dr-banda-s-southbelt-wellness---injury-center-6",
    "city_id": "1",
    "services": [
      "Neck Pain",
      "Back Pain",
      "Wellness center",
      "Wellness Care"
    ],
    "phone": "(281) 484-5500",
    "email": "",
    "website": "http://drbanda.com/",
    "address": "12221 Fuqua St d, Houston, TX 77034",
    "photo": "https://lh3.googleusercontent.com/p/AF1QipNBuMX0B-umyux7NN6wDiG9al6MB8wMrCcNneLm=w408-h306-k-no",
    "images": [
      "https://lh3.googleusercontent.com/p/AF1QipNBuMX0B-umyux7NN6wDiG9al6MB8wMrCcNneLm=w408-h306-k-no"
    ],
    "bio": "Located in South Belt / Ellington, Dr Banda's Southbelt Wellness & Injury Center provides quality chiropractic care. Open Monday 9\u202fAM to 12\u202fPM, 2 to 6\u202fPM",
    "languages": [
      "English"
    ],
    "rating": 5,
    "review_count": 82,
    "analysis": []
  },
  {
    "id": "7",
    "first_name": "",
    "last_name": "AMO Health and Therapy",
    "slug": "amo-health-and-therapy-7",
    "city_id": "1",
    "services": [
      "Neck Pain",
      "Back Pain",
      "Wellness Care",
      "Chiropractic Care"
    ],
    "phone": "(713) 910-0600",
    "email": "",
    "website": "http://www.facebook.com/AmoHealthAndTherapy",
    "address": "11043 Fuqua St D, Houston, TX 77089",
    "photo": "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSz3x9axjymzdr2FBrivqtslSWwZyn5zPA0kuhHb3GfhoxZ6V39ExTtmrpT2yMxG32wSVWOkiJgJ-Vlc6fv3cItfbBPx3G8NO1LVHfPM2rjecf7fRO5-nMNreIWynWy7jKuC8i9n=w408-h544-k-no",
    "images": [
      "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSz3x9axjymzdr2FBrivqtslSWwZyn5zPA0kuhHb3GfhoxZ6V39ExTtmrpT2yMxG32wSVWOkiJgJ-Vlc6fv3cItfbBPx3G8NO1LVHfPM2rjecf7fRO5-nMNreIWynWy7jKuC8i9n=w408-h544-k-no"
    ],
    "bio": "Located in South Belt / Ellington, AMO Health and Therapy provides quality chiropractic care. Open Monday 9\u202fAM to 8\u202fPM",
    "languages": [
      "English"
    ],
    "rating": 4.7,
    "review_count": 122,
    "analysis": []
  },
  {
    "id": "8",
    "first_name": "",
    "last_name": "Flourish Family Chiropractic",
    "slug": "flourish-family-chiropractic-8",
    "city_id": "1",
    "services": [
      "Neck Pain",
      "Back Pain",
      "Wellness Care",
      "Chiropractic Care"
    ],
    "phone": "(281) 984-7748",
    "email": "",
    "website": "http://www.flourishfamilytx.com/",
    "address": "979 Reseda Dr, Houston, TX 77062",
    "photo": "https://lh3.googleusercontent.com/p/AF1QipPUOJ6N6_S12kOpSDPShxg2j3kMWc0YZpBxEwg=w408-h611-k-no",
    "images": [
      "https://lh3.googleusercontent.com/p/AF1QipPUOJ6N6_S12kOpSDPShxg2j3kMWc0YZpBxEwg=w408-h611-k-no"
    ],
    "bio": "Located in Clear Lake, Flourish Family Chiropractic provides quality chiropractic care. Open Monday 9\u202fAM to 6\u202fPM",
    "languages": [
      "English"
    ],
    "rating": 5,
    "review_count": 197,
    "analysis": []
  },
  {
    "id": "9",
    "first_name": "",
    "last_name": "Fuqua Health & Rehab",
    "slug": "fuqua-health---rehab-9",
    "city_id": "1",
    "services": [
      "Neck Pain",
      "Back Pain",
      "Wellness Care",
      "Chiropractic Care"
    ],
    "phone": "(713) 943-7477",
    "email": "",
    "website": "http://houstonhealthrehab.com/",
    "address": "10655 Fuqua St # A, Houston, TX 77089",
    "photo": "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=tWOcW8YD5mTNs-grPI7Tlw&cb_client=search.gws-prod.gps&w=408&h=240&yaw=343.05444&pitch=0&thumbfov=100",
    "images": [
      "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=tWOcW8YD5mTNs-grPI7Tlw&cb_client=search.gws-prod.gps&w=408&h=240&yaw=343.05444&pitch=0&thumbfov=100"
    ],
    "bio": "Located in South Belt / Ellington, Fuqua Health & Rehab provides quality chiropractic care. Open Monday 8\u202fAM to 6\u202fPM",
    "languages": [
      "English"
    ],
    "rating": 5,
    "review_count": 16,
    "analysis": []
  },
  {
    "id": "10",
    "first_name": "",
    "last_name": "Dr. John Banda",
    "slug": "dr--john-banda-10",
    "city_id": "1",
    "services": [
      "Neck Pain",
      "Back Pain",
      "Wellness Care",
      "Chiropractic Care"
    ],
    "phone": "(281) 484-5500",
    "email": "",
    "website": "http://drbanda.com/",
    "address": "12221 Fuqua St d, Houston, TX 77034",
    "photo": "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSyUI1PdzxwDsxFov0G311JiQjHa8U3pVwg_nrI40DADzGnc468YM3RyPN-4IMulMBFKtz9co-6q8uGBzYvtS4rKhTP16xM5LtFPisNjZakZBWJqRgVgDPomfOWBzF3hr9VGYQG9=w408-h544-k-no",
    "images": [
      "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSyUI1PdzxwDsxFov0G311JiQjHa8U3pVwg_nrI40DADzGnc468YM3RyPN-4IMulMBFKtz9co-6q8uGBzYvtS4rKhTP16xM5LtFPisNjZakZBWJqRgVgDPomfOWBzF3hr9VGYQG9=w408-h544-k-no"
    ],
    "bio": "Located in South Belt / Ellington, Dr. John Banda provides quality chiropractic care. Open Monday 9\u202fAM to 12\u202fPM, 2 to 6\u202fPM",
    "languages": [
      "English"
    ],
    "rating": 5,
    "review_count": 12,
    "analysis": []
  },
  {
    "id": "11",
    "first_name": "",
    "last_name": "Todd C. Goodale, DC",
    "slug": "todd-c--goodale--dc-11",
    "city_id": "1",
    "services": [
      "Neck Pain",
      "Back Pain",
      "Wellness Care",
      "Chiropractic Care"
    ],
    "phone": "(281) 480-7784",
    "email": "",
    "website": "",
    "address": "1833 El Dorado Blvd, Houston, TX 77062",
    "photo": "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=K9eYSh_Nq-VVkYeWkGEgGQ&cb_client=search.gws-prod.gps&w=408&h=240&yaw=313.0252&pitch=0&thumbfov=100",
    "images": [
      "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=K9eYSh_Nq-VVkYeWkGEgGQ&cb_client=search.gws-prod.gps&w=408&h=240&yaw=313.0252&pitch=0&thumbfov=100"
    ],
    "bio": "Located in Clear Lake, Todd C. Goodale, DC provides quality chiropractic care. Open Monday 9\u202fAM to 6\u202fPM",
    "languages": [
      "English"
    ],
    "rating": 4.6,
    "review_count": 19,
    "analysis": []
  },
  {
    "id": "12",
    "first_name": "",
    "last_name": "Rebel Mobility and Fitness",
    "slug": "rebel-mobility-and-fitness-12",
    "city_id": "1",
    "services": [
      "Neck Pain",
      "Back Pain",
      "Wellness Care",
      "Sports Injuries",
      "Chiropractic Care"
    ],
    "phone": "(281) 800-5047",
    "email": "",
    "website": "http://www.rebelmobilityfitness.com/",
    "address": "17047 El Camino Real #105, Houston, TX 77058",
    "photo": "https://lh3.googleusercontent.com/p/AF1QipOaf_VntG3WamKvAHr45qlR8US2kynXztAvOC70=w408-h544-k-no",
    "images": [
      "https://lh3.googleusercontent.com/p/AF1QipOaf_VntG3WamKvAHr45qlR8US2kynXztAvOC70=w408-h544-k-no"
    ],
    "bio": "Located in Clear Lake, Rebel Mobility and Fitness provides quality chiropractic care. Open Monday 9\u202fAM to 6\u202fPM",
    "languages": [
      "English"
    ],
    "rating": 5,
    "review_count": 34,
    "analysis": []
  },
  {
    "id": "13",
    "first_name": "",
    "last_name": "LifeClinic Chiropractic & Rehabilitation - Baybrook, TX",
    "slug": "lifeclinic-chiropractic---rehabilitation---baybrook--tx-13",
    "city_id": "2",
    "services": [
      "Neck Pain",
      "Back Pain",
      "Wellness Care",
      "Rehabilitation center",
      "Physical therapy clinic",
      "Chiropractic Care"
    ],
    "phone": "(346) 600-7858",
    "email": "",
    "website": "https://www.lifeclinics.us/",
    "address": "19250 Gulfbrook Dr, Friendswood, TX 77546",
    "photo": "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSyYHc6sslEMUZv0Uh_TqxmiKAnds43ep5dGj82_zENUhUThAQSXwe30cFuNke1ibkrAfo_ookfN2zph9wrhyp_Qvfq9s6bEOWrieUYSqVHIEhTlnDEoXyXW4BcCMQEOuMdjn6LV=w408-h544-k-no",
    "images": [
      "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSyYHc6sslEMUZv0Uh_TqxmiKAnds43ep5dGj82_zENUhUThAQSXwe30cFuNke1ibkrAfo_ookfN2zph9wrhyp_Qvfq9s6bEOWrieUYSqVHIEhTlnDEoXyXW4BcCMQEOuMdjn6LV=w408-h544-k-no"
    ],
    "bio": "Located in Clear Lake, LifeClinic Chiropractic & Rehabilitation - Baybrook, TX provides quality chiropractic care. Open Monday 8\u202fAM to 5\u202fPM",
    "languages": [
      "English"
    ],
    "rating": 5,
    "review_count": 151,
    "analysis": []
  },
  {
    "id": "14",
    "first_name": "",
    "last_name": "Advanced Chiropractic Relief",
    "slug": "advanced-chiropractic-relief-14",
    "city_id": "1",
    "services": [
      "Neck Pain",
      "Back Pain",
      "Wellness Care",
      "Chiropractic Care"
    ],
    "phone": "(281) 405-2611",
    "email": "",
    "website": "https://advancedhoustonchiropractor.com/",
    "address": "363 N Sam Houston Pkwy E #1060, Houston, TX 77060",
    "photo": "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSw086wVIMayqQeM0WpyvqHi0E_cHQJx60WpJuKqOUOdeCzUtxj3ayPM_ReMnOSdZV7Yw5wIKlTyMdnRBruYU6PqPHibNBzlKCPBUhcOTirxDVxB5JqrH-knQAXeBm6Yk46gVWbZhA=w408-h306-k-no",
    "images": [
      "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSw086wVIMayqQeM0WpyvqHi0E_cHQJx60WpJuKqOUOdeCzUtxj3ayPM_ReMnOSdZV7Yw5wIKlTyMdnRBruYU6PqPHibNBzlKCPBUhcOTirxDVxB5JqrH-knQAXeBm6Yk46gVWbZhA=w408-h306-k-no"
    ],
    "bio": "Located in Greater Greenspoint, Advanced Chiropractic Relief provides quality chiropractic care. Open Monday 9\u202fAM to 5\u202fPM",
    "languages": [
      "English"
    ],
    "rating": 4.7,
    "review_count": 433,
    "analysis": []
  },
  {
    "id": "15",
    "first_name": "",
    "last_name": "Houston Healing Chiropractic",
    "slug": "houston-healing-chiropractic-15",
    "city_id": "1",
    "services": [
      "Neck Pain",
      "Back Pain",
      "Wellness Care",
      "Medical clinic",
      "Specialized clinic",
      "Chiropractic Care"
    ],
    "phone": "(713) 300-0327",
    "email": "",
    "website": "https://www.houstonhealing.com/",
    "address": "1611 Fannin St, Houston, TX 77002",
    "photo": "https://lh3.googleusercontent.com/p/AF1QipMQqmEL3w4tlz7R6SFzP5tYQ_XmTR5DthlkY7Zu=w408-h271-k-no",
    "images": [
      "https://lh3.googleusercontent.com/p/AF1QipMQqmEL3w4tlz7R6SFzP5tYQ_XmTR5DthlkY7Zu=w408-h271-k-no"
    ],
    "bio": "Located in Downtown Houston, Houston Healing Chiropractic provides quality chiropractic care. Open Monday 9\u202fAM to 6\u202fPM",
    "languages": [
      "English"
    ],
    "rating": 5,
    "review_count": 190,
    "analysis": []
  },
  {
    "id": "16",
    "first_name": "",
    "last_name": "CORE Chiropractic",
    "slug": "core-chiropractic-16",
    "city_id": "1",
    "services": [
      "Neck Pain",
      "Back Pain",
      "Wellness Care",
      "Pain management physician",
      "Wellness center",
      "Alternative medicine practitioner",
      "Chiropractic Care"
    ],
    "phone": "(713) 622-3300",
    "email": "",
    "website": "https://www.corechiropractic.net/galleria-chiropractor/",
    "address": "1770 Saint James Place #210, Houston, TX 77056",
    "photo": "https://lh3.googleusercontent.com/p/AF1QipPw8mOoPgw_3bPhjrfAr-hu-SqrPv7RW0Ph9GUT=w408-h306-k-no",
    "images": [
      "https://lh3.googleusercontent.com/p/AF1QipPw8mOoPgw_3bPhjrfAr-hu-SqrPv7RW0Ph9GUT=w408-h306-k-no"
    ],
    "bio": "Located in Westside, CORE Chiropractic provides quality chiropractic care. Open Monday 8\u202fAM to 6\u202fPM",
    "languages": [
      "English"
    ],
    "rating": 4.9,
    "review_count": 729,
    "analysis": []
  },
  {
    "id": "17",
    "first_name": "",
    "last_name": "NuSpine Chiropractic - Houston",
    "slug": "nuspine-chiropractic---houston-17",
    "city_id": "1",
    "services": [
      "Neck Pain",
      "Back Pain",
      "Wellness Care",
      "Alternative medicine practitioner",
      "Pain control clinic",
      "Chiropractic Care"
    ],
    "phone": "(281) 974-4602",
    "email": "",
    "website": "https://nuspine.com/locations/heights?utm_campaign=gbp",
    "address": "187A Heights Blvd, Houston, TX 77007",
    "photo": "https://lh3.googleusercontent.com/p/AF1QipOJzOUUwoJ7tyBvM6EaENvS1jUB3whkeKONtnLi=w408-h306-k-no",
    "images": [
      "https://lh3.googleusercontent.com/p/AF1QipOJzOUUwoJ7tyBvM6EaENvS1jUB3whkeKONtnLi=w408-h306-k-no"
    ],
    "bio": "Located in Washington Avenue Coalition / Memorial Park, NuSpine Chiropractic - Houston provides quality chiropractic care. Open Monday 10\u202fAM to 6\u202fPM",
    "languages": [
      "English"
    ],
    "rating": 4.8,
    "review_count": 269,
    "analysis": []
  },
  {
    "id": "18",
    "first_name": "",
    "last_name": "Chirosports Performance & Rehab",
    "slug": "chirosports-performance---rehab-18",
    "city_id": "1",
    "services": [
      "Neck Pain",
      "Back Pain",
      "Wellness Care",
      "Rehabilitation center",
      "Sports Injuries",
      "Chiropractic Care",
      "Health counselor"
    ],
    "phone": "(832) 586-7183",
    "email": "",
    "website": "https://www.chirospr.com/",
    "address": "1225 N Loop W Ste 1010, Houston, TX 77008",
    "photo": "https://lh3.googleusercontent.com/p/AF1QipNB5VDOAgC0gwJz9Q9jRrvpmPIZ7XWbFHPoKYsg=w408-h544-k-no",
    "images": [
      "https://lh3.googleusercontent.com/p/AF1QipNB5VDOAgC0gwJz9Q9jRrvpmPIZ7XWbFHPoKYsg=w408-h544-k-no"
    ],
    "bio": "Located in Greater Heights, Chirosports Performance & Rehab provides quality chiropractic care. Open Monday 8\u202fAM to 6\u202fPM",
    "languages": [
      "English"
    ],
    "rating": 5,
    "review_count": 120,
    "analysis": []
  },
  {
    "id": "19",
    "first_name": "",
    "last_name": "The Joint Chiropractic",
    "slug": "the-joint-chiropractic-19",
    "city_id": "1",
    "services": [
      "Neck Pain",
      "Back Pain",
      "Wellness Care",
      "Chiropractic Care"
    ],
    "phone": "(281) 559-6042",
    "email": "",
    "website": "https://www.thejoint.com/texas/houston/little-york-28188?y_source=1_NzkyNTk4MDAtNzE1LWxvY2F0aW9uLndlYnNpdGU%3D",
    "address": "3500 Little York Rd Suite B5, Houston, TX 77093",
    "photo": "https://lh3.googleusercontent.com/p/AF1QipPxhjsgvHySZH3mxvRVmhpwgmMDDQNAXrk1_qjK=w408-h544-k-no",
    "images": [
      "https://lh3.googleusercontent.com/p/AF1QipPxhjsgvHySZH3mxvRVmhpwgmMDDQNAXrk1_qjK=w408-h544-k-no"
    ],
    "bio": "Located in Northeast Houston, The Joint Chiropractic provides quality chiropractic care. Open Monday 10\u202fAM to 2\u202fPM, 2:45 to 7\u202fPM",
    "languages": [
      "English"
    ],
    "rating": 4.9,
    "review_count": 264,
    "analysis": []
  },
  {
    "id": "20",
    "first_name": "",
    "last_name": "Natural Health Houston",
    "slug": "natural-health-houston-20",
    "city_id": "1",
    "services": [
      "Neck Pain",
      "Back Pain",
      "Wellness Care",
      "Chiropractic Care"
    ],
    "phone": "(713) 522-9814",
    "email": "",
    "website": "https://www.naturalhealthhouston.com/",
    "address": "2211 Norfolk St Suite 105, Houston, TX 77098",
    "photo": "https://lh3.googleusercontent.com/p/AF1QipPhlXQ-f8hesTK61LFoE5xEfJgSdGLVeEYErnbe=w408-h306-k-no",
    "images": [
      "https://lh3.googleusercontent.com/p/AF1QipPhlXQ-f8hesTK61LFoE5xEfJgSdGLVeEYErnbe=w408-h306-k-no"
    ],
    "bio": "Located in Greenway / Upper Kirby Area, Natural Health Houston provides quality chiropractic care. Open Monday 9\u202fAM to 7\u202fPM",
    "languages": [
      "English"
    ],
    "rating": 4.9,
    "review_count": 307,
    "analysis": []
  },
  {
    "id": "21",
    "first_name": "",
    "last_name": "Elite Spine & Health Center - Houston",
    "slug": "elite-spine---health-center---houston-21",
    "city_id": "1",
    "services": [
      "Neck Pain",
      "Back Pain",
      "Wellness Care",
      "Chiropractic Care"
    ],
    "phone": "(832) 925-6004",
    "email": "",
    "website": "https://www.elitespinehouston.com/",
    "address": "2901 Wilcrest Dr #140, Houston, TX 77042",
    "photo": "https://lh3.googleusercontent.com/p/AF1QipN59udiSSn4hpJc0E2WpAoR_q_sUE1ItcLwZ7dS=w408-h271-k-no",
    "images": [
      "https://lh3.googleusercontent.com/p/AF1QipN59udiSSn4hpJc0E2WpAoR_q_sUE1ItcLwZ7dS=w408-h271-k-no"
    ],
    "bio": "Located in Westside, Elite Spine & Health Center - Houston provides quality chiropractic care. Open Monday 9\u202fAM to 6\u202fPM",
    "languages": [
      "English"
    ],
    "rating": 4.9,
    "review_count": 535,
    "analysis": []
  },
  {
    "id": "22",
    "first_name": "",
    "last_name": "Brando Chiropractic Clinic",
    "slug": "brando-chiropractic-clinic-22",
    "city_id": "1",
    "services": [
      "Neck Pain",
      "Back Pain",
      "Wellness Care",
      "Chiropractic Care"
    ],
    "phone": "(713) 227-2222",
    "email": "",
    "website": "http://www.brandochiropractic.com/",
    "address": "2914 N Main St Suite B, Houston, TX 77009",
    "photo": "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwpDxuZ7TCuOG_iDYKgBZQy7SzNEM6HmPsg60IpGk6wCePGTdhzfuH1SBzr8TbW15PvntxWPd1kgcevwZwS__UrqI9Ng8SNSiIrXc81cFSi0wSXs0w6ubg0x3x4YjiayWbJ-ti-=w408-h306-k-no",
    "images": [
      "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwpDxuZ7TCuOG_iDYKgBZQy7SzNEM6HmPsg60IpGk6wCePGTdhzfuH1SBzr8TbW15PvntxWPd1kgcevwZwS__UrqI9Ng8SNSiIrXc81cFSi0wSXs0w6ubg0x3x4YjiayWbJ-ti-=w408-h306-k-no"
    ],
    "bio": "Located in Northside, Brando Chiropractic Clinic provides quality chiropractic care. Open Monday 8:30\u202fAM to 12\u202fPM, 2 to 6\u202fPM",
    "languages": [
      "English"
    ],
    "rating": 4.9,
    "review_count": 274,
    "analysis": []
  },
  {
    "id": "23",
    "first_name": "",
    "last_name": "The Joint Chiropractic",
    "slug": "the-joint-chiropractic-23",
    "city_id": "1",
    "services": [
      "Neck Pain",
      "Back Pain",
      "Wellness Care",
      "Chiropractic Care"
    ],
    "phone": "(713) 903-3397",
    "email": "",
    "website": "https://www.thejoint.com/texas/houston/heights-28031?y_source=1_Mzk3OTU3MS03MTUtbG9jYXRpb24ud2Vic2l0ZQ%3D%3D",
    "address": "174 Yale St Suite #500, Houston, TX 77007",
    "photo": "https://lh3.googleusercontent.com/p/AF1QipMWYNXewegrnKBjgR7X1XF5wq8y60Qn2yoI8Qys=w408-h612-k-no",
    "images": [
      "https://lh3.googleusercontent.com/p/AF1QipMWYNXewegrnKBjgR7X1XF5wq8y60Qn2yoI8Qys=w408-h612-k-no"
    ],
    "bio": "Located in Washington Avenue Coalition / Memorial Park, The Joint Chiropractic provides quality chiropractic care. Open Monday 10\u202fAM to 2\u202fPM, 2:45 to 7\u202fPM",
    "languages": [
      "English"
    ],
    "rating": 4.8,
    "review_count": 1021,
    "analysis": []
  },
  {
    "id": "24",
    "first_name": "",
    "last_name": "Gregory Johnson, DC",
    "slug": "gregory-johnson--dc-24",
    "city_id": "1",
    "services": [
      "Neck Pain",
      "Back Pain",
      "Wellness Care",
      "Chiropractic Care"
    ],
    "phone": "(281) 405-2611",
    "email": "",
    "website": "https://advancedhoustonchiropractor.com/",
    "address": "363 N Sam Houston Pkwy E #1060, Houston, TX 77060",
    "photo": "https://lh3.googleusercontent.com/p/AF1QipPxyzdmBhJCeElXTLGpAWGAky-sCxrbWnBvmXVK=w408-h306-k-no",
    "images": [
      "https://lh3.googleusercontent.com/p/AF1QipPxyzdmBhJCeElXTLGpAWGAky-sCxrbWnBvmXVK=w408-h306-k-no"
    ],
    "bio": "Located in Greater Greenspoint, Gregory Johnson, DC provides quality chiropractic care. Open Monday 9\u202fAM to 5\u202fPM",
    "languages": [
      "English"
    ],
    "rating": 4.3,
    "review_count": 79,
    "analysis": []
  },
  {
    "id": "25",
    "first_name": "",
    "last_name": "Bruna Chiropractic Clinic",
    "slug": "bruna-chiropractic-clinic-25",
    "city_id": "1",
    "services": [
      "Neck Pain",
      "Back Pain",
      "Wellness Care",
      "Chiropractic Care"
    ],
    "phone": "(713) 923-4000",
    "email": "",
    "website": "",
    "address": "5011 N Shepherd Dr, Houston, TX 77018",
    "photo": "https://lh3.googleusercontent.com/p/AF1QipOO0T3F2bUqy0p3e3rjjxzoQqHwRrnz4Dcf8Boy=w408-h544-k-no",
    "images": [
      "https://lh3.googleusercontent.com/p/AF1QipOO0T3F2bUqy0p3e3rjjxzoQqHwRrnz4Dcf8Boy=w408-h544-k-no"
    ],
    "bio": "Located in Central Northwest, Bruna Chiropractic Clinic provides quality chiropractic care. Open Monday 10\u202fAM to 6\u202fPM",
    "languages": [
      "English"
    ],
    "rating": 4.8,
    "review_count": 23,
    "analysis": []
  },
  {
    "id": "26",
    "first_name": "",
    "last_name": "Goodale Chiropractic Office",
    "slug": "goodale-chiropractic-office-26",
    "city_id": "1",
    "services": [
      "Neck Pain",
      "Back Pain",
      "Wellness Care",
      "Chiropractic Care"
    ],
    "phone": "(281) 480-7784",
    "email": "",
    "website": "",
    "address": "1833 El Dorado Blvd, Houston, TX 77062",
    "photo": "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=K9eYSh_Nq-VVkYeWkGEgGQ&cb_client=search.gws-prod.gps&w=408&h=240&yaw=325.47806&pitch=0&thumbfov=100",
    "images": [
      "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=K9eYSh_Nq-VVkYeWkGEgGQ&cb_client=search.gws-prod.gps&w=408&h=240&yaw=325.47806&pitch=0&thumbfov=100"
    ],
    "bio": "Located in Clear Lake, Goodale Chiropractic Office provides quality chiropractic care. Open Monday 9\u202fAM to 12\u202fPM, 3 to 6\u202fPM",
    "languages": [
      "English"
    ],
    "rating": 5,
    "review_count": 11,
    "analysis": []
  },
  {
    "id": "27",
    "first_name": "",
    "last_name": "total bodywork chiropractic",
    "slug": "total-bodywork-chiropractic-27",
    "city_id": "1",
    "services": [
      "Neck Pain",
      "Back Pain",
      "Wellness Care",
      "Chiropractic Care"
    ],
    "phone": "(281) 480-7000",
    "email": "",
    "website": "http://www.tbodywork.com/",
    "address": "17045 El Camino Real #108, Houston, TX 77058",
    "photo": "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSw7vFhPXm4XHLCGa3lMxL2UaZWdB8MyCq4zdlB6WNQltvslgY8yXWF_suTLQ75hIvnQg4go09FyceXyKXUmHMdqt5X4muUqNPXK8qkVxm_zqC9V6TrE2ZvoCGtUhwDhCmvBcTNO2g=w408-h369-k-no",
    "images": [
      "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSw7vFhPXm4XHLCGa3lMxL2UaZWdB8MyCq4zdlB6WNQltvslgY8yXWF_suTLQ75hIvnQg4go09FyceXyKXUmHMdqt5X4muUqNPXK8qkVxm_zqC9V6TrE2ZvoCGtUhwDhCmvBcTNO2g=w408-h369-k-no"
    ],
    "bio": "Located in Clear Lake, total bodywork chiropractic provides quality chiropractic care. Open Monday 9:30\u202fAM to 12\u202fPM, 2:30 to 5\u202fPM",
    "languages": [
      "English"
    ],
    "rating": 5,
    "review_count": 20,
    "analysis": []
  },
  {
    "id": "28",
    "first_name": "",
    "last_name": "Kingwood Chiropractic Spine and Injury Center",
    "slug": "kingwood-chiropractic-spine-and-injury-center-28",
    "city_id": "3",
    "services": [
      "Neck Pain",
      "Back Pain",
      "Wellness Care",
      "Massage therapist",
      "Pain management physician",
      "Medical office",
      "Alternative medicine practitioner",
      "Rehabilitation center",
      "Sports Injuries",
      "Chiropractic Care",
      "Physical therapy clinic",
      "Physical rehabilitation center",
      "Holistic medicine practitioner"
    ],
    "phone": "(281) 360-8387",
    "email": "",
    "website": "https://kingwoodchiropracticspineandinjurycenter.com/",
    "address": "3039 Woodland Hills Dr, Kingwood, TX 77339",
    "photo": "https://lh3.googleusercontent.com/p/AF1QipOhFsJUlDpa82E8EafnCmZ_JQGdiUF6LfUKGh5q=w408-h544-k-no",
    "images": [
      "https://lh3.googleusercontent.com/p/AF1QipOhFsJUlDpa82E8EafnCmZ_JQGdiUF6LfUKGh5q=w408-h544-k-no"
    ],
    "bio": "Located in Kingwood, Kingwood Chiropractic Spine and Injury Center provides quality chiropractic care. Open Monday 7:30\u202fAM to 5\u202fPM",
    "languages": [
      "English"
    ],
    "rating": 5,
    "review_count": 290,
    "analysis": []
  },
  {
    "id": "29",
    "first_name": "",
    "last_name": "aAvanc\u00e9 Chiropractic Healthcare",
    "slug": "aavanc\u00e9-chiropractic-healthcare-29",
    "city_id": "4",
    "services": [
      "Neck Pain",
      "Back Pain",
      "Wellness Care",
      "Chiropractic Care"
    ],
    "phone": "(832) 240-4319",
    "email": "",
    "website": "https://www.aavancechiropractic.com/?utm_source=google&utm_medium=local&utm_campaign=gmb_listing",
    "address": "14214 State Hwy 3 # A, Webster, TX 77598",
    "photo": "https://lh3.googleusercontent.com/p/AF1QipNK3LVdH6iIwvGtcR6H3kqGreMA6-Q4xeO6rJdS=w491-h240-k-no",
    "images": [
      "https://lh3.googleusercontent.com/p/AF1QipNK3LVdH6iIwvGtcR6H3kqGreMA6-Q4xeO6rJdS=w491-h240-k-no"
    ],
    "bio": "Located in Clear Lake, aAvanc\u00e9 Chiropractic Healthcare provides quality chiropractic care. Open Monday 9\u202fAM to 12\u202fPM, 2 to 5\u202fPM",
    "languages": [
      "English"
    ],
    "rating": 5,
    "review_count": 187,
    "analysis": []
  },
  {
    "id": "30",
    "first_name": "",
    "last_name": "Clear Lake Chiropractic",
    "slug": "clear-lake-chiropractic-30",
    "city_id": "4",
    "services": [
      "Neck Pain",
      "Back Pain",
      "Wellness Care",
      "Massage therapist",
      "Occupational health service",
      "Vitamin & supplements store",
      "Pain control clinic",
      "Chiropractic Care"
    ],
    "phone": "(281) 488-2291",
    "email": "",
    "website": "http://clearlakechiro.com/",
    "address": "527 El Dorado Blvd, Webster, TX 77598",
    "photo": "https://lh3.googleusercontent.com/p/AF1QipMCqeJMtMv08PiLeYp1R5QZQRnGvKbRs9EBUu6x=w408-h306-k-no",
    "images": [
      "https://lh3.googleusercontent.com/p/AF1QipMCqeJMtMv08PiLeYp1R5QZQRnGvKbRs9EBUu6x=w408-h306-k-no"
    ],
    "bio": "Located in Clear Lake, Clear Lake Chiropractic provides quality chiropractic care. Open Monday 9\u202fAM to 6:30\u202fPM",
    "languages": [
      "English"
    ],
    "rating": 4.3,
    "review_count": 58,
    "analysis": []
  },
  {
    "id": "31",
    "first_name": "",
    "last_name": "Dr. Ward Beecher",
    "slug": "dr--ward-beecher-31",
    "city_id": "1",
    "services": [
      "Neck Pain",
      "Back Pain",
      "Wellness Care",
      "Chiropractic Care"
    ],
    "phone": "(281) 286-1300",
    "email": "",
    "website": "https://beecherchiropractic.com/",
    "address": "1001 Pineloch Dr #700, Houston, TX 77062",
    "photo": "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=_aWmk6jLuBPpsei3SjCE0w&cb_client=search.gws-prod.gps&w=408&h=240&yaw=24.391317&pitch=0&thumbfov=100",
    "images": [
      "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=_aWmk6jLuBPpsei3SjCE0w&cb_client=search.gws-prod.gps&w=408&h=240&yaw=24.391317&pitch=0&thumbfov=100"
    ],
    "bio": "Located in Clear Lake, Dr. Ward Beecher provides quality chiropractic care. Open Monday 9\u202fAM to 6\u202fPM",
    "languages": [
      "English"
    ],
    "rating": 5,
    "review_count": 3,
    "analysis": []
  },
  {
    "id": "32",
    "first_name": "",
    "last_name": "Summit Sport Therapy",
    "slug": "summit-sport-therapy-32",
    "city_id": "1",
    "services": [
      "Neck Pain",
      "Back Pain",
      "Wellness Care",
      "Chiropractic Care"
    ],
    "phone": "(832) 240-4005",
    "email": "",
    "website": "http://www.summitsporttherapy.com/",
    "address": "16815 Royal Crest Dr Suite 140, Houston, TX 77058",
    "photo": "https://lh3.googleusercontent.com/p/AF1QipOQi3FNOGWd22FqpQ-_EVW_bNskJcaaXIvptMii=w408-h272-k-no",
    "images": [
      "https://lh3.googleusercontent.com/p/AF1QipOQi3FNOGWd22FqpQ-_EVW_bNskJcaaXIvptMii=w408-h272-k-no"
    ],
    "bio": "Located in Clear Lake, Summit Sport Therapy provides quality chiropractic care. Open Monday Closed",
    "languages": [
      "English"
    ],
    "rating": 5,
    "review_count": 41,
    "analysis": []
  },
  {
    "id": "33",
    "first_name": "",
    "last_name": "Dr. Earl Hendrikz",
    "slug": "dr--earl-hendrikz-33",
    "city_id": "1",
    "services": [
      "Neck Pain",
      "Back Pain",
      "Wellness Care",
      "Practitioner service location",
      "Chiropractic Care"
    ],
    "phone": "(832) 464-4645",
    "email": "",
    "website": "https://www.clearlakeintegrativemedicine.com/dr-earl-hendrikz-dc-ccsp",
    "address": "1335 Regents Park Dr #110, Houston, TX 77058",
    "photo": "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=Jtiys3A0aommDsaB8eywqw&cb_client=search.gws-prod.gps&w=408&h=240&yaw=96.14887&pitch=0&thumbfov=100",
    "images": [
      "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=Jtiys3A0aommDsaB8eywqw&cb_client=search.gws-prod.gps&w=408&h=240&yaw=96.14887&pitch=0&thumbfov=100"
    ],
    "bio": "Located in Clear Lake, Dr. Earl Hendrikz provides quality chiropractic care. ",
    "languages": [
      "English"
    ],
    "rating": 5,
    "review_count": 1,
    "analysis": []
  },
  {
    "id": "34",
    "first_name": "",
    "last_name": "Americana Injury Clinic",
    "slug": "americana-injury-clinic-34",
    "city_id": "1",
    "services": [
      "Neck Pain",
      "Back Pain",
      "Wellness Care",
      "Medical clinic",
      "Chiropractic Care"
    ],
    "phone": "(713) 480-6254",
    "email": "",
    "website": "https://www.americanainjuryclinic.com/",
    "address": "17049 El Camino Real Ste. 204, Houston, TX 77058",
    "photo": "https://lh3.googleusercontent.com/p/AF1QipPNNORF-CwFy462GYfdJ7CVyywcWWtsEhU2bq_j=w408-h272-k-no",
    "images": [
      "https://lh3.googleusercontent.com/p/AF1QipPNNORF-CwFy462GYfdJ7CVyywcWWtsEhU2bq_j=w408-h272-k-no"
    ],
    "bio": "Located in Clear Lake, Americana Injury Clinic provides quality chiropractic care. Open Monday 9\u202fAM to 6\u202fPM",
    "languages": [
      "English"
    ],
    "rating": 5,
    "review_count": 2,
    "analysis": []
  },
  {
    "id": "35",
    "first_name": "",
    "last_name": "Natures Medicine Clinic",
    "slug": "natures-medicine-clinic-35",
    "city_id": "1",
    "services": [
      "Neck Pain",
      "Back Pain",
      "Wellness Care",
      "Chiropractic Care"
    ],
    "phone": "(281) 486-5617",
    "email": "",
    "website": "",
    "address": "16627 Sea Lark Rd, Houston, TX 77062",
    "photo": "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300",
    "images": [],
    "bio": "Located in Clear Lake, Natures Medicine Clinic provides quality chiropractic care. ",
    "languages": [
      "English"
    ],
    "rating": 0,
    "review_count": 0,
    "analysis": []
  },
  {
    "id": "36",
    "first_name": "",
    "last_name": "A Aachen Back",
    "slug": "a-aachen-back-36",
    "city_id": "1",
    "services": [
      "Neck Pain",
      "Back Pain",
      "Wellness Care",
      "Chiropractic Care"
    ],
    "phone": "(281) 486-1947",
    "email": "",
    "website": "",
    "address": "16627 Sea Lark Rd, Houston, TX 77062",
    "photo": "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=wbxnVQhaByAHjiOI6L51yg&cb_client=search.gws-prod.gps&w=408&h=240&yaw=319.6778&pitch=0&thumbfov=100",
    "images": [
      "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=wbxnVQhaByAHjiOI6L51yg&cb_client=search.gws-prod.gps&w=408&h=240&yaw=319.6778&pitch=0&thumbfov=100"
    ],
    "bio": "Located in Clear Lake, A Aachen Back provides quality chiropractic care. ",
    "languages": [
      "English"
    ],
    "rating": 0,
    "review_count": 0,
    "analysis": []
  },
  {
    "id": "37",
    "first_name": "",
    "last_name": "Stable Performance Chiropractic, PLLC",
    "slug": "stable-performance-chiropractic--pllc-37",
    "city_id": "1",
    "services": [
      "Neck Pain",
      "Back Pain",
      "Wellness Care",
      "Service establishment",
      "Chiropractic Care"
    ],
    "phone": "(281) 451-3111",
    "email": "",
    "website": "https://www.stabledr.com/",
    "address": "",
    "photo": "https://lh3.googleusercontent.com/p/AF1QipPT3ix9YlAHChBo2zi6yHoMsYaT1FI0wQU8NOON=w408-h544-k-no",
    "images": [
      "https://lh3.googleusercontent.com/p/AF1QipPT3ix9YlAHChBo2zi6yHoMsYaT1FI0wQU8NOON=w408-h544-k-no"
    ],
    "bio": "Located in Houston, Stable Performance Chiropractic, PLLC provides quality chiropractic care. Open Monday 7\u202fAM to 7\u202fPM",
    "languages": [
      "English"
    ],
    "rating": 0,
    "review_count": 0,
    "analysis": []
  },
  {
    "id": "38",
    "first_name": "",
    "last_name": "Dr. Alice Duffer",
    "slug": "dr--alice-duffer-38",
    "city_id": "4",
    "services": [
      "Neck Pain",
      "Back Pain",
      "Wellness Care",
      "Practitioner service location",
      "Chiropractic Care"
    ],
    "phone": "(832) 240-4319",
    "email": "",
    "website": "",
    "address": "14214 State Hwy 3 Ste A, Webster, TX 77598",
    "photo": "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=gbe9z1oGe01ng7qVW-ZlsA&cb_client=search.gws-prod.gps&w=408&h=240&yaw=231.21811&pitch=0&thumbfov=100",
    "images": [
      "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=gbe9z1oGe01ng7qVW-ZlsA&cb_client=search.gws-prod.gps&w=408&h=240&yaw=231.21811&pitch=0&thumbfov=100"
    ],
    "bio": "Located in Clear Lake, Dr. Alice Duffer provides quality chiropractic care. ",
    "languages": [
      "English"
    ],
    "rating": 0,
    "review_count": 0,
    "analysis": []
  },
  {
    "id": "39",
    "first_name": "",
    "last_name": "Debra Gomach, DC",
    "slug": "debra-gomach--dc-39",
    "city_id": "4",
    "services": [
      "Neck Pain",
      "Back Pain",
      "Wellness Care",
      "Chiropractic Care"
    ],
    "phone": "(281) 286-8520",
    "email": "",
    "website": "",
    "address": "548 El Dorado Blvd, Webster, TX 77598",
    "photo": "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=wC7u-SCKZDy6zYMkjC0xNw&cb_client=search.gws-prod.gps&w=408&h=240&yaw=224.72798&pitch=0&thumbfov=100",
    "images": [
      "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=wC7u-SCKZDy6zYMkjC0xNw&cb_client=search.gws-prod.gps&w=408&h=240&yaw=224.72798&pitch=0&thumbfov=100"
    ],
    "bio": "Located in Clear Lake, Debra Gomach, DC provides quality chiropractic care. ",
    "languages": [
      "English"
    ],
    "rating": 0,
    "review_count": 0,
    "analysis": []
  },
  {
    "id": "40",
    "first_name": "",
    "last_name": "Peak Chiropractic Friendswood",
    "slug": "peak-chiropractic-friendswood-40",
    "city_id": "2",
    "services": [
      "Neck Pain",
      "Back Pain",
      "Wellness Care",
      "Chiropractic Care"
    ],
    "phone": "(281) 271-5880",
    "email": "",
    "website": "https://linktr.ee/peakchiro",
    "address": "1560 W Bay Area Blvd #260, Friendswood, TX 77546",
    "photo": "https://lh3.googleusercontent.com/p/AF1QipNT3mJrJSx59eSlDyVp0ZFqwh0JD1DgLBGV1c4=w408-h306-k-no",
    "images": [
      "https://lh3.googleusercontent.com/p/AF1QipNT3mJrJSx59eSlDyVp0ZFqwh0JD1DgLBGV1c4=w408-h306-k-no"
    ],
    "bio": "Located in Clear Lake, Peak Chiropractic Friendswood provides quality chiropractic care. ",
    "languages": [
      "English"
    ],
    "rating": 4.7,
    "review_count": 13,
    "analysis": []
  },
  {
    "id": "41",
    "first_name": "",
    "last_name": "Restore Chiropractic",
    "slug": "restore-chiropractic-41",
    "city_id": "1",
    "services": [
      "Neck Pain",
      "Back Pain",
      "Wellness Care",
      "Chiropractic Care"
    ],
    "phone": "(281) 781-7152",
    "email": "",
    "website": "http://www.restorechirotx.com/",
    "address": "16310 Texas 249 Access Rd #1604, Houston, TX 77064",
    "photo": "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwGV816YW_sT1q-PmU1DYEskPQ9uQk9N3PmzrIW0_7U-enpSGWOB0Kv7L4NfJPaLXNWIJ3jwnY8UKV0Fu3w3u9bL2GwBi1xIKfBy0z39Q3CgDde11aW8PhM3R9mEfKNkV1WbfCk=w408-h544-k-no",
    "images": [
      "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwGV816YW_sT1q-PmU1DYEskPQ9uQk9N3PmzrIW0_7U-enpSGWOB0Kv7L4NfJPaLXNWIJ3jwnY8UKV0Fu3w3u9bL2GwBi1xIKfBy0z39Q3CgDde11aW8PhM3R9mEfKNkV1WbfCk=w408-h544-k-no"
    ],
    "bio": "Located in Willowbrook, Restore Chiropractic provides quality chiropractic care. Open Monday 8\u202fAM to 5\u202fPM",
    "languages": [
      "English"
    ],
    "rating": 5,
    "review_count": 137,
    "analysis": []
  },
  {
    "id": "42",
    "first_name": "",
    "last_name": "Dr. Nicole Shutko Chiropractic Center",
    "slug": "dr--nicole-shutko-chiropractic-center-42",
    "city_id": "1",
    "services": [
      "Neck Pain",
      "Back Pain",
      "Wellness Care",
      "Chiropractic Care"
    ],
    "phone": "(713) 522-2886",
    "email": "",
    "website": "https://www.femalechiropractorhouston.com/",
    "address": "2040 N Loop W #103a, Houston, TX 77018",
    "photo": "https://lh3.googleusercontent.com/p/AF1QipM7_E8y3guzH4EqfG74rm7UyNSB9w0jD6htkzzD=w408-h306-k-no",
    "images": [
      "https://lh3.googleusercontent.com/p/AF1QipM7_E8y3guzH4EqfG74rm7UyNSB9w0jD6htkzzD=w408-h306-k-no"
    ],
    "bio": "Located in Central Northwest, Dr. Nicole Shutko Chiropractic Center provides quality chiropractic care. Open Monday 9:30\u202fAM to 12\u202fPM, 2 to 5\u202fPM",
    "languages": [
      "English"
    ],
    "rating": 4.8,
    "review_count": 255,
    "analysis": []
  },
  {
    "id": "43",
    "first_name": "",
    "last_name": "The Joint Chiropractic",
    "slug": "the-joint-chiropractic-43",
    "city_id": "1",
    "services": [
      "Neck Pain",
      "Back Pain",
      "Wellness Care",
      "Chiropractic Care"
    ],
    "phone": "(713) 903-3372",
    "email": "",
    "website": "https://www.thejoint.com/texas/houston/heights-at-yale-21st-28086?y_source=1_MTA5Njk2MDMtNzE1LWxvY2F0aW9uLndlYnNpdGU%3D",
    "address": "2105 Yale St, Houston, TX 77008",
    "photo": "https://lh3.googleusercontent.com/p/AF1QipNd0FEKLvkucxBDof7YYzSaGAGq5SnctBsnqKsJ=w408-h544-k-no",
    "images": [
      "https://lh3.googleusercontent.com/p/AF1QipNd0FEKLvkucxBDof7YYzSaGAGq5SnctBsnqKsJ=w408-h544-k-no"
    ],
    "bio": "Located in Greater Heights, The Joint Chiropractic provides quality chiropractic care. Open Monday 10\u202fAM to 2\u202fPM, 2:45 to 7\u202fPM",
    "languages": [
      "English"
    ],
    "rating": 4.9,
    "review_count": 667,
    "analysis": []
  },
  {
    "id": "44",
    "first_name": "",
    "last_name": "Synergy Chiropractic of Houston",
    "slug": "synergy-chiropractic-of-houston-44",
    "city_id": "1",
    "services": [
      "Neck Pain",
      "Back Pain",
      "Acupuncture clinic",
      "Wellness Care",
      "Weight loss service",
      "Alternative medicine practitioner",
      "Chiropractic Care"
    ],
    "phone": "(832) 786-8404",
    "email": "",
    "website": "http://www.synergychiropractichouston.com/",
    "address": "5151 Katy Fwy #201, Houston, TX 77007",
    "photo": "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=m56bOoLFMxej7mpuUKbxGA&cb_client=search.gws-prod.gps&w=408&h=240&yaw=6.2554445&pitch=0&thumbfov=100",
    "images": [
      "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=m56bOoLFMxej7mpuUKbxGA&cb_client=search.gws-prod.gps&w=408&h=240&yaw=6.2554445&pitch=0&thumbfov=100"
    ],
    "bio": "Located in Washington Avenue Coalition / Memorial Park, Synergy Chiropractic of Houston provides quality chiropractic care. Open Monday 3\u202fAM to 6\u202fPM",
    "languages": [
      "English"
    ],
    "rating": 5,
    "review_count": 45,
    "analysis": []
  },
  {
    "id": "45",
    "first_name": "",
    "last_name": "The Joint Chiropractic",
    "slug": "the-joint-chiropractic-45",
    "city_id": "1",
    "services": [
      "Neck Pain",
      "Back Pain",
      "Wellness Care",
      "Chiropractic Care"
    ],
    "phone": "(713) 715-7986",
    "email": "",
    "website": "https://www.thejoint.com/texas/houston/midtown-houston-28122?y_source=1_MTc4MDgwMjQtNzE1LWxvY2F0aW9uLndlYnNpdGU%3D",
    "address": "120 Westheimer Rd Suite J, Houston, TX 77006",
    "photo": "https://lh3.googleusercontent.com/p/AF1QipM2LL4j6hKizbjYuOGsx5RFThnTVKJ6Pez94Pzt=w408-h510-k-no",
    "images": [
      "https://lh3.googleusercontent.com/p/AF1QipM2LL4j6hKizbjYuOGsx5RFThnTVKJ6Pez94Pzt=w408-h510-k-no"
    ],
    "bio": "Located in Montrose, The Joint Chiropractic provides quality chiropractic care. Open Monday 10\u202fAM to 2\u202fPM, 2:45 to 7\u202fPM",
    "languages": [
      "English"
    ],
    "rating": 4.9,
    "review_count": 433,
    "analysis": []
  },
  {
    "id": "46",
    "first_name": "",
    "last_name": "East Loop Chiropractic Clinic",
    "slug": "east-loop-chiropractic-clinic-46",
    "city_id": "1",
    "services": [
      "Neck Pain",
      "Back Pain",
      "Wellness Care",
      "Chiropractic Care"
    ],
    "phone": "(713) 455-7074",
    "email": "",
    "website": "https://www.eastloopchiropracticclinic.com/",
    "address": "1140 Westmont Dr Ste 547, Houston, TX 77015",
    "photo": "https://lh3.googleusercontent.com/p/AF1QipPRpsUrJef812t17wyQPcEpXN9y0PkTwOSPhgwe=w408-h272-k-no",
    "images": [
      "https://lh3.googleusercontent.com/p/AF1QipPRpsUrJef812t17wyQPcEpXN9y0PkTwOSPhgwe=w408-h272-k-no"
    ],
    "bio": "Located in Northeast Houston, East Loop Chiropractic Clinic provides quality chiropractic care. Open Monday 7\u202fAM to 6\u202fPM",
    "languages": [
      "English"
    ],
    "rating": 4.6,
    "review_count": 115,
    "analysis": []
  },
  {
    "id": "47",
    "first_name": "",
    "last_name": "CORE Chiropractic - Greenway Plaza",
    "slug": "core-chiropractic---greenway-plaza-47",
    "city_id": "1",
    "services": [
      "Neck Pain",
      "Back Pain",
      "Wellness Care",
      "Wellness center",
      "Chiropractic Care"
    ],
    "phone": "(713) 929-4330",
    "email": "",
    "website": "https://www.corechiropractic.net/greenway-plaza-chiropractor/",
    "address": "3334 Richmond Ave. Ste 107, Houston, TX 77098",
    "photo": "https://lh3.googleusercontent.com/p/AF1QipN1ilYML1k7905F7pTReslRxd86-fRKQlS_lwaK=w408-h481-k-no",
    "images": [
      "https://lh3.googleusercontent.com/p/AF1QipN1ilYML1k7905F7pTReslRxd86-fRKQlS_lwaK=w408-h481-k-no"
    ],
    "bio": "Located in Greenway / Upper Kirby Area, CORE Chiropractic - Greenway Plaza provides quality chiropractic care. Open Monday 8\u202fAM to 6\u202fPM",
    "languages": [
      "English"
    ],
    "rating": 4.9,
    "review_count": 253,
    "analysis": []
  },
  {
    "id": "48",
    "first_name": "",
    "last_name": "Spinal Perceptions Chiropractic and Wellness Center",
    "slug": "spinal-perceptions-chiropractic-and-wellness-center-48",
    "city_id": "1",
    "services": [
      "Neck Pain",
      "Back Pain",
      "Wellness Care",
      "Chiropractic Care"
    ],
    "phone": "(346) 330-9876",
    "email": "",
    "website": "https://spinalpchiro.com/",
    "address": "1500 McGowen St STE 140, Houston, TX 77004",
    "photo": "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSzptA78tC0XiSUmEg4G1qAHz5tm7rj47X8ek-nnc2zHCIfvDbvODdVm1MyeF6NlC8B_Dego9m3R1_Cx_4BQ5_hCJ-R8oK5YJGrCtSu5yeeYEiB111It4eRqhnA0ut-idPqA8nYD=w408-h544-k-no",
    "images": [
      "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSzptA78tC0XiSUmEg4G1qAHz5tm7rj47X8ek-nnc2zHCIfvDbvODdVm1MyeF6NlC8B_Dego9m3R1_Cx_4BQ5_hCJ-R8oK5YJGrCtSu5yeeYEiB111It4eRqhnA0ut-idPqA8nYD=w408-h544-k-no"
    ],
    "bio": "Located in Midtown, Spinal Perceptions Chiropractic and Wellness Center provides quality chiropractic care. Open Monday 9:30\u202fAM to 6\u202fPM",
    "languages": [
      "English"
    ],
    "rating": 4.9,
    "review_count": 266,
    "analysis": []
  },
  {
    "id": "49",
    "first_name": "",
    "last_name": "Midtown Chiropractic & Rehab",
    "slug": "midtown-chiropractic---rehab-49",
    "city_id": "1",
    "services": [
      "Neck Pain",
      "Back Pain",
      "Wellness Care",
      "Doctor",
      "Chiropractic Care"
    ],
    "phone": "(713) 650-6656",
    "email": "",
    "website": "http://midtownchiroandrehab.com/",
    "address": "2117 Chenevert St # J, Houston, TX 77003",
    "photo": "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwZbATgddG3f62rkdSVahfRj4wk_C76Xm2A9YQt89gV2IXO3l9EZ1qoC7Yc35sDlym85cM5tMuC0HEfNR9xXV9cSBn5XdmGUJSvrgiA-UxK2tZsskSyCwcUViSRNnvaQxTQk1SeWw=w408-h544-k-no",
    "images": [
      "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwZbATgddG3f62rkdSVahfRj4wk_C76Xm2A9YQt89gV2IXO3l9EZ1qoC7Yc35sDlym85cM5tMuC0HEfNR9xXV9cSBn5XdmGUJSvrgiA-UxK2tZsskSyCwcUViSRNnvaQxTQk1SeWw=w408-h544-k-no"
    ],
    "bio": "Located in Midtown, Midtown Chiropractic & Rehab provides quality chiropractic care. Open Monday 10\u202fAM to 5\u202fPM",
    "languages": [
      "English"
    ],
    "rating": 5,
    "review_count": 16,
    "analysis": []
  },
  {
    "id": "50",
    "first_name": "",
    "last_name": "United Rehabilitation and Chiropractor Clinic 2",
    "slug": "united-rehabilitation-and-chiropractor-clinic-2-50",
    "city_id": "1",
    "services": [
      "Neck Pain",
      "Back Pain",
      "Wellness Care",
      "Chiropractic Care"
    ],
    "phone": "(346) 319-5745",
    "email": "",
    "website": "http://unitedrcc.com/",
    "address": "3329 Telephone Rd Ste D, Houston, TX 77023",
    "photo": "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwPFfV1jaxVuxUrfVPI2ENuPWOXOgxTI0lTSUGHKgCQV4hrY_C4G9HIwU9KZMcBBMbSWqqP0MkzRTJ7nW7dajNo57qFt3tFbR_wSYLy6VJRCS23r3ZMn-xnU56BkLmiBqFJyE8=w408-h271-k-no",
    "images": [
      "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwPFfV1jaxVuxUrfVPI2ENuPWOXOgxTI0lTSUGHKgCQV4hrY_C4G9HIwU9KZMcBBMbSWqqP0MkzRTJ7nW7dajNo57qFt3tFbR_wSYLy6VJRCS23r3ZMn-xnU56BkLmiBqFJyE8=w408-h271-k-no"
    ],
    "bio": "Located in Gulfgate Riverview / Pine Valley, United Rehabilitation and Chiropractor Clinic 2 provides quality chiropractic care. Open Monday 8\u202fAM to 7\u202fPM",
    "languages": [
      "English"
    ],
    "rating": 4.9,
    "review_count": 78,
    "analysis": []
  },
  {
    "id": "51",
    "first_name": "",
    "last_name": "Walk In Chiropractic Injury & Rehab Clinic",
    "slug": "walk-in-chiropractic-injury---rehab-clinic-51",
    "city_id": "1",
    "services": [
      "Neck Pain",
      "Back Pain",
      "Wellness Care",
      "Chiropractic Care"
    ],
    "phone": "(713) 529-4808",
    "email": "",
    "website": "http://mywalkinchiropractic.com/",
    "address": "5611 Chartres St a, Houston, TX 77004",
    "photo": "https://lh3.googleusercontent.com/p/AF1QipNa_D_VbhFig8-CWjk_8bReIexogEgusA9MhnI=w408-h271-k-no",
    "images": [
      "https://lh3.googleusercontent.com/p/AF1QipNa_D_VbhFig8-CWjk_8bReIexogEgusA9MhnI=w408-h271-k-no"
    ],
    "bio": "Located in Houston Museum District, Walk In Chiropractic Injury & Rehab Clinic provides quality chiropractic care. Open Monday 9\u202fAM to 6\u202fPM",
    "languages": [
      "English"
    ],
    "rating": 4.9,
    "review_count": 65,
    "analysis": []
  },
  {
    "id": "52",
    "first_name": "",
    "last_name": "Franco Chiropractic Clinic",
    "slug": "franco-chiropractic-clinic-52",
    "city_id": "1",
    "services": [
      "Neck Pain",
      "Back Pain",
      "Wellness Care",
      "Chiropractic Care"
    ],
    "phone": "(713) 526-5959",
    "email": "",
    "website": "http://www.francochiropractic.com/",
    "address": "415 Westheimer Rd #211, Houston, TX 77006",
    "photo": "https://lh3.googleusercontent.com/p/AF1QipOvoIY6GmF-hBfeFs2PJbZpcvr4a5FIKP5JRqjw=w408-h262-k-no",
    "images": [
      "https://lh3.googleusercontent.com/p/AF1QipOvoIY6GmF-hBfeFs2PJbZpcvr4a5FIKP5JRqjw=w408-h262-k-no"
    ],
    "bio": "Located in Montrose, Franco Chiropractic Clinic provides quality chiropractic care. Open Monday 9\u202fAM to 5\u202fPM",
    "languages": [
      "English"
    ],
    "rating": 5,
    "review_count": 16,
    "analysis": []
  },
  {
    "id": "53",
    "first_name": "",
    "last_name": "Houston Spine & Rehabilitation Centers",
    "slug": "houston-spine---rehabilitation-centers-53",
    "city_id": "1",
    "services": [
      "Neck Pain",
      "Back Pain",
      "Wellness Care",
      "Pain management physician",
      "Sports medicine physician",
      "Pain control clinic",
      "Physical therapy clinic",
      "Physical rehabilitation center",
      "Chiropractic Care"
    ],
    "phone": "(346) 615-5358",
    "email": "",
    "website": "https://www.spineandrehab.com/houston/?utm_source=gbp&utm_medium=organic",
    "address": "2202 La Branch St, Houston, TX 77002",
    "photo": "https://lh3.googleusercontent.com/p/AF1QipMJYJdf11CQMPFTLnPTApc8bJ8z7z3yJI_IVN_n=w408-h544-k-no",
    "images": [
      "https://lh3.googleusercontent.com/p/AF1QipMJYJdf11CQMPFTLnPTApc8bJ8z7z3yJI_IVN_n=w408-h544-k-no"
    ],
    "bio": "Located in Midtown, Houston Spine & Rehabilitation Centers provides quality chiropractic care. Open Monday 8\u202fAM to 6\u202fPM",
    "languages": [
      "English"
    ],
    "rating": 4.8,
    "review_count": 118,
    "analysis": []
  },
  {
    "id": "54",
    "first_name": "",
    "last_name": "Chiropractic Center of Houston, PC",
    "slug": "chiropractic-center-of-houston--pc-54",
    "city_id": "1",
    "services": [
      "Neck Pain",
      "Back Pain",
      "Wellness Care",
      "Pain management physician",
      "Chiropractic Care"
    ],
    "phone": "(713) 739-1136",
    "email": "",
    "website": "https://www.chiropracticcenter-houston.com/",
    "address": "930 Main St Suite T-275, Houston, TX 77002",
    "photo": "https://lh3.googleusercontent.com/p/AF1QipNcJquZlzCERoWnMSnXLEcm7KG4su6Vg_UJz6h7=w408-h306-k-no",
    "images": [
      "https://lh3.googleusercontent.com/p/AF1QipNcJquZlzCERoWnMSnXLEcm7KG4su6Vg_UJz6h7=w408-h306-k-no"
    ],
    "bio": "Located in Downtown Houston, Chiropractic Center of Houston, PC provides quality chiropractic care. Open Monday 9\u202fAM to 3\u202fPM",
    "languages": [
      "English"
    ],
    "rating": 5,
    "review_count": 24,
    "analysis": []
  },
  {
    "id": "55",
    "first_name": "",
    "last_name": "Muse Chiropractic",
    "slug": "muse-chiropractic-55",
    "city_id": "1",
    "services": [
      "Neck Pain",
      "Back Pain",
      "Wellness Care",
      "Chiropractic Care"
    ],
    "phone": "(832) 482-1898",
    "email": "",
    "website": "https://musechiropractic.com/",
    "address": "2808 Caroline St Suite 201-X, Houston, TX 77004",
    "photo": "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSxoUSzMI5-5pxGbXeqdbmIqgxdmTgy16smle6_J-yO75H_ABFbLmn5GZKl1GfOd8m-YrcLh37-vP2dE4yxuDVwXFWMvjsQVVmpRN3IgHN0ltdxl0N0wNnUZRmLpWqNOvhfTuFQT=w408-h544-k-no",
    "images": [
      "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSxoUSzMI5-5pxGbXeqdbmIqgxdmTgy16smle6_J-yO75H_ABFbLmn5GZKl1GfOd8m-YrcLh37-vP2dE4yxuDVwXFWMvjsQVVmpRN3IgHN0ltdxl0N0wNnUZRmLpWqNOvhfTuFQT=w408-h544-k-no"
    ],
    "bio": "Located in Midtown, Muse Chiropractic provides quality chiropractic care. Open Monday 1 to 7\u202fPM",
    "languages": [
      "English"
    ],
    "rating": 5,
    "review_count": 10,
    "analysis": []
  },
  {
    "id": "56",
    "first_name": "",
    "last_name": "De Loache Chiropractic Center",
    "slug": "de-loache-chiropractic-center-56",
    "city_id": "1",
    "services": [
      "Neck Pain",
      "Back Pain",
      "Wellness Care",
      "Chiropractic Care"
    ],
    "phone": "(713) 521-2003",
    "email": "",
    "website": "https://www.deloachechiro.com/",
    "address": "1305 Waugh Dr, Houston, TX 77019",
    "photo": "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSxyarEbYjtJ3dm3IMoaH0YEwxLjIblP3j1EeNwoERUrA-YJbPmeSXfF9jNmn7EJ2CQij0zQL63d4RXPynxqZ59y-yqbM1SGa_CMf0iM1W757apfunTpxWXu7pTXtV3sDfiwuXU=w408-h306-k-no",
    "images": [
      "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSxyarEbYjtJ3dm3IMoaH0YEwxLjIblP3j1EeNwoERUrA-YJbPmeSXfF9jNmn7EJ2CQij0zQL63d4RXPynxqZ59y-yqbM1SGa_CMf0iM1W757apfunTpxWXu7pTXtV3sDfiwuXU=w408-h306-k-no"
    ],
    "bio": "Located in Montrose, De Loache Chiropractic Center provides quality chiropractic care. Open Monday 10\u202fAM to 6\u202fPM",
    "languages": [
      "English"
    ],
    "rating": 5,
    "review_count": 18,
    "analysis": []
  },
  {
    "id": "57",
    "first_name": "",
    "last_name": "Guajardo Chiropractic and Rehab Clinic",
    "slug": "guajardo-chiropractic-and-rehab-clinic-57",
    "city_id": "1",
    "services": [
      "Neck Pain",
      "Back Pain",
      "Acupuncture clinic",
      "Wellness Care",
      "Physical therapy clinic",
      "Chiropractic Care"
    ],
    "phone": "(713) 928-6255",
    "email": "",
    "website": "http://guajardoclinics.com/",
    "address": "6901 Canal St, Houston, TX 77011",
    "photo": "https://lh3.googleusercontent.com/p/AF1QipMx_noP3gdpG7LTa54t6QeHnbOlGEaI5kZ1IQ9b=w426-h240-k-no",
    "images": [
      "https://lh3.googleusercontent.com/p/AF1QipMx_noP3gdpG7LTa54t6QeHnbOlGEaI5kZ1IQ9b=w426-h240-k-no"
    ],
    "bio": "Located in Magnolia Park, Guajardo Chiropractic and Rehab Clinic provides quality chiropractic care. Open Monday 9\u202fAM to 7\u202fPM",
    "languages": [
      "English"
    ],
    "rating": 4.8,
    "review_count": 103,
    "analysis": []
  },
  {
    "id": "58",
    "first_name": "",
    "last_name": "The Joint Chiropractic",
    "slug": "the-joint-chiropractic-58",
    "city_id": "1",
    "services": [
      "Neck Pain",
      "Back Pain",
      "Wellness Care",
      "Chiropractic Care"
    ],
    "phone": "(713) 803-2518",
    "email": "",
    "website": "https://www.thejoint.com/texas/houston/gulfgate-28172?y_source=1_NTQ1MTk2ODUtNzE1LWxvY2F0aW9uLndlYnNpdGU%3D",
    "address": "735 Gulfgate Center Mall, Houston, TX 77087",
    "photo": "https://lh3.googleusercontent.com/p/AF1QipMf0XxJVp0z0U4iHVnYWOeUzVf_FyP7e3xo9SQP=w408-h527-k-no",
    "images": [
      "https://lh3.googleusercontent.com/p/AF1QipMf0XxJVp0z0U4iHVnYWOeUzVf_FyP7e3xo9SQP=w408-h527-k-no"
    ],
    "bio": "Located in Gulfgate Riverview / Pine Valley, The Joint Chiropractic provides quality chiropractic care. Open Monday 10\u202fAM to 2\u202fPM, 2:45 to 7\u202fPM",
    "languages": [
      "English"
    ],
    "rating": 4.8,
    "review_count": 300,
    "analysis": []
  },
  {
    "id": "59",
    "first_name": "",
    "last_name": "Yvonne Chiropractic Inc.",
    "slug": "yvonne-chiropractic-inc-59",
    "city_id": "1",
    "services": [
      "Neck Pain",
      "Back Pain",
      "Wellness Care",
      "Chiropractic Care"
    ],
    "phone": "(816) 799-7063",
    "email": "",
    "website": "http://yvonnechiropractic.com/",
    "address": "2603 La Branch St Ste #103, Houston, TX 77004",
    "photo": "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=WDM2sLZLW-3uhV10pl6u5A&cb_client=search.gws-prod.gps&w=408&h=240&yaw=126.14791&pitch=0&thumbfov=100",
    "images": [
      "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=WDM2sLZLW-3uhV10pl6u5A&cb_client=search.gws-prod.gps&w=408&h=240&yaw=126.14791&pitch=0&thumbfov=100"
    ],
    "bio": "Located in Midtown, Yvonne Chiropractic Inc. provides quality chiropractic care. Open Monday Closed",
    "languages": [
      "English"
    ],
    "rating": 5,
    "review_count": 41,
    "analysis": []
  },
  {
    "id": "60",
    "first_name": "",
    "last_name": "Advanced Chiropractic Clinic",
    "slug": "advanced-chiropractic-clinic-60",
    "city_id": "1",
    "services": [
      "Neck Pain",
      "Back Pain",
      "Wellness Care",
      "Nutritionist",
      "Massage therapist",
      "Acupuncturist",
      "Chiropractic Care"
    ],
    "phone": "(713) 529-6760",
    "email": "",
    "website": "",
    "address": "2408 Wheeler Ave, Houston, TX 77004",
    "photo": "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwXmAkROxWuoDrKUTIgG236kQkcxOSiklavCbviTkYUpJYSrIWdP8B2IaCSuIW-AWFBTxYQ6mCkDI_2Wk7zED9UeXBP2aObvRXb4DEHpeBPNaUF4VSxFitJaxtxhqY_UHLb-BAX=w408-h544-k-no",
    "images": [
      "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwXmAkROxWuoDrKUTIgG236kQkcxOSiklavCbviTkYUpJYSrIWdP8B2IaCSuIW-AWFBTxYQ6mCkDI_2Wk7zED9UeXBP2aObvRXb4DEHpeBPNaUF4VSxFitJaxtxhqY_UHLb-BAX=w408-h544-k-no"
    ],
    "bio": "Located in South Side, Advanced Chiropractic Clinic provides quality chiropractic care. Open Monday 10\u202fAM to 6\u202fPM",
    "languages": [
      "English"
    ],
    "rating": 4.5,
    "review_count": 19,
    "analysis": []
  },
  {
    "id": "61",
    "first_name": "",
    "last_name": "Kinetic Chiropractic LLC",
    "slug": "kinetic-chiropractic-llc-61",
    "city_id": "1",
    "services": [
      "Neck Pain",
      "Back Pain",
      "Wellness Care",
      "Chiropractic Care"
    ],
    "phone": "(346) 645-0336",
    "email": "",
    "website": "http://kineticchirotx.com/",
    "address": "110 Milby St Suite D2, Houston, TX 77011",
    "photo": "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwGCU2fsGurnN0o9a4FspUaI6wmVQ0Al4a_R1ROshiW_qzWf8BguRmubWSrZV6F4WA3k4pqP0xTJiVgOWnz55Llt4M6g4kLJpjGAMRmPiZEot1OB8CzsUSFF6FKNb5gJ2AXS4mDjA=w408-h544-k-no",
    "images": [
      "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwGCU2fsGurnN0o9a4FspUaI6wmVQ0Al4a_R1ROshiW_qzWf8BguRmubWSrZV6F4WA3k4pqP0xTJiVgOWnz55Llt4M6g4kLJpjGAMRmPiZEot1OB8CzsUSFF6FKNb5gJ2AXS4mDjA=w408-h544-k-no"
    ],
    "bio": "Located in Second Ward, Kinetic Chiropractic LLC provides quality chiropractic care. Open Monday 10\u202fAM to 6\u202fPM",
    "languages": [
      "English"
    ],
    "rating": 5,
    "review_count": 43,
    "analysis": []
  },
  {
    "id": "62",
    "first_name": "",
    "last_name": "Amazon Chiropractic",
    "slug": "amazon-chiropractic-62",
    "city_id": "1",
    "services": [
      "Neck Pain",
      "Back Pain",
      "Wellness Care",
      "Chiropractic Care"
    ],
    "phone": "(713) 645-0546",
    "email": "",
    "website": "https://amazonchiropractic.wordpress.com/",
    "address": "8876 Gulf Fwy #100, Houston, TX 77017",
    "photo": "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSxvX5ZOuJLraCmJNkdcMwPBLXM7ZY-zQSLc3tk9rIj6lgIhAR3l1DOa26Pxe8xQStgfRV2fO-1MInoMqGvJpg3S82cqlUfI786tb4Cf5qMobwRxIXFjmk_QbWKOkjmAXLlTb7aYJQ=w408-h544-k-no",
    "images": [
      "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSxvX5ZOuJLraCmJNkdcMwPBLXM7ZY-zQSLc3tk9rIj6lgIhAR3l1DOa26Pxe8xQStgfRV2fO-1MInoMqGvJpg3S82cqlUfI786tb4Cf5qMobwRxIXFjmk_QbWKOkjmAXLlTb7aYJQ=w408-h544-k-no"
    ],
    "bio": "Located in Southeast Houston, Amazon Chiropractic provides quality chiropractic care. Open Monday 9\u202fAM to 8\u202fPM",
    "languages": [
      "English"
    ],
    "rating": 5,
    "review_count": 11,
    "analysis": []
  },
  {
    "id": "63",
    "first_name": "",
    "last_name": "Dr. Viridiana H. Leyva-Tsychuyeva, DC",
    "slug": "dr--viridiana-h--leyva-tsychuyeva--dc-63",
    "city_id": "1",
    "services": [
      "Neck Pain",
      "Back Pain",
      "Wellness Care",
      "Chiropractic Care"
    ],
    "phone": "(713) 702-5112",
    "email": "",
    "website": "https://drviri.com/",
    "address": "1617 Fannin St UNIT 902, Houston, TX 77002",
    "photo": "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSylT8uIfpE6Vv3vqYY5Aa0go23LQ0Yi3g45bbN839B203gSiYHSU-Z2FINSYG_e6881OCGTQm9fu-eyteGeXydybLivTiX8OP5W5Y079sDtww8UCLbiJlW6yLC7zO10-4kyB_Ys=w408-h544-k-no",
    "images": [
      "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSylT8uIfpE6Vv3vqYY5Aa0go23LQ0Yi3g45bbN839B203gSiYHSU-Z2FINSYG_e6881OCGTQm9fu-eyteGeXydybLivTiX8OP5W5Y079sDtww8UCLbiJlW6yLC7zO10-4kyB_Ys=w408-h544-k-no"
    ],
    "bio": "Located in Downtown Houston, Dr. Viridiana H. Leyva-Tsychuyeva, DC provides quality chiropractic care. Open Monday 9\u202fAM to 6\u202fPM",
    "languages": [
      "English"
    ],
    "rating": 5,
    "review_count": 32,
    "analysis": []
  },
  {
    "id": "64",
    "first_name": "",
    "last_name": "Dr. Shellie N. Smith, DC, DD",
    "slug": "dr--shellie-n--smith--dc--dd-64",
    "city_id": "1",
    "services": [
      "Neck Pain",
      "Back Pain",
      "Wellness Care",
      "Chiropractic Care"
    ],
    "phone": "",
    "email": "",
    "website": "http://www.hcschiro.com/",
    "address": "4366 Holmes Rd, Houston, TX 77051",
    "photo": "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSyYv_OPCe-0o5TUjKMyIlcrPEswVx0aBA0g2dqHGRRGzxtS2dBbjgQEaBG9NnOPEcB7SXZwExn5toY805W9n6TGTYXFyuF1hafIa3r3b2wAV6RinwHTa7lOs88Ge_ypyJmdOpKzeA=w408-h306-k-no",
    "images": [
      "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSyYv_OPCe-0o5TUjKMyIlcrPEswVx0aBA0g2dqHGRRGzxtS2dBbjgQEaBG9NnOPEcB7SXZwExn5toY805W9n6TGTYXFyuF1hafIa3r3b2wAV6RinwHTa7lOs88Ge_ypyJmdOpKzeA=w408-h306-k-no"
    ],
    "bio": "Located in South Side, Dr. Shellie N. Smith, DC, DD provides quality chiropractic care. Open Monday 8:30\u202fAM to 5\u202fPM",
    "languages": [
      "English"
    ],
    "rating": 5,
    "review_count": 857,
    "analysis": []
  },
  {
    "id": "65",
    "first_name": "",
    "last_name": "Marshall Back & Body Wellness Center",
    "slug": "marshall-back---body-wellness-center-65",
    "city_id": "1",
    "services": [
      "Neck Pain",
      "Back Pain",
      "Acupuncture clinic",
      "Physical therapist",
      "Wellness Care",
      "Massage therapist",
      "Nurse practitioner",
      "Wellness center",
      "Chiropractic Care"
    ],
    "phone": "(713) 522-1726",
    "email": "",
    "website": "http://www.marshallbackandbodywellness.com/",
    "address": "510 Waugh Dr, Houston, TX 77019",
    "photo": "https://lh3.googleusercontent.com/p/AF1QipNHuFLMbE72PhQtSvv2T526D96RuVo9sdDfU5j8=w426-h240-k-no",
    "images": [
      "https://lh3.googleusercontent.com/p/AF1QipNHuFLMbE72PhQtSvv2T526D96RuVo9sdDfU5j8=w426-h240-k-no"
    ],
    "bio": "Located in Montrose, Marshall Back & Body Wellness Center provides quality chiropractic care. Open Monday 9\u202fAM to 5\u202fPM",
    "languages": [
      "English"
    ],
    "rating": 4.8,
    "review_count": 109,
    "analysis": []
  },
  {
    "id": "66",
    "first_name": "",
    "last_name": "The Sports and Wellness Doc",
    "slug": "the-sports-and-wellness-doc-66",
    "city_id": "1",
    "services": [
      "Neck Pain",
      "Back Pain",
      "Wellness Care",
      "Weight loss service",
      "Nurse practitioner",
      "Sports Injuries",
      "Chiropractic Care"
    ],
    "phone": "(832) 844-1754",
    "email": "",
    "website": "https://sportsandwellnessdoc.com/",
    "address": "2636 S Loop W Ste 105, Houston, TX 77054",
    "photo": "https://lh3.googleusercontent.com/p/AF1QipPWdO8TNYL1bELvuOIhVh26MqANSc5sz6UohACC=w408-h862-k-no",
    "images": [
      "https://lh3.googleusercontent.com/p/AF1QipPWdO8TNYL1bELvuOIhVh26MqANSc5sz6UohACC=w408-h862-k-no"
    ],
    "bio": "Located in South Main, The Sports and Wellness Doc provides quality chiropractic care. Open Monday 8:30\u202fAM to 2\u202fPM",
    "languages": [
      "English"
    ],
    "rating": 4.9,
    "review_count": 222,
    "analysis": []
  },
  {
    "id": "67",
    "first_name": "",
    "last_name": "HYPE SPORTS MEDICINE HSM",
    "slug": "hype-sports-medicine-hsm-67",
    "city_id": "1",
    "services": [
      "Neck Pain",
      "Back Pain",
      "Acupuncture clinic",
      "Physical therapist",
      "Wellness Care",
      "Doctor",
      "Medical office",
      "Sports Injuries",
      "Chiropractic Care"
    ],
    "phone": "(832) 899-5856",
    "email": "",
    "website": "http://www.hypesportsmedicine.com/",
    "address": "3100 Timmons Ln #585, Houston, TX 77027",
    "photo": "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSxTTSeeD-YaL65h9CJON-7fMwcHnROHw4Ojb2SPN_t1dn0epih1Tq_KiHYCXfP45emowIBjKPiVXNjdCfIt1CDqqd44D5-xRkqKRJa4Z9__cxDb7DO5YatodrfnsXuQKLstlo5NHA=w408-h408-k-no",
    "images": [
      "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSxTTSeeD-YaL65h9CJON-7fMwcHnROHw4Ojb2SPN_t1dn0epih1Tq_KiHYCXfP45emowIBjKPiVXNjdCfIt1CDqqd44D5-xRkqKRJa4Z9__cxDb7DO5YatodrfnsXuQKLstlo5NHA=w408-h408-k-no"
    ],
    "bio": "Located in Greenway / Upper Kirby Area, HYPE SPORTS MEDICINE HSM provides quality chiropractic care. Open Monday 9\u202fAM to 5\u202fPM",
    "languages": [
      "English"
    ],
    "rating": 4.8,
    "review_count": 48,
    "analysis": []
  },
  {
    "id": "68",
    "first_name": "",
    "last_name": "Spa Chiro",
    "slug": "spa-chiro-68",
    "city_id": "1",
    "services": [
      "Neck Pain",
      "Back Pain",
      "Wellness Care",
      "Herbal medicine store",
      "Acupuncturist",
      "Chiropractic Care"
    ],
    "phone": "(281) 556-5200",
    "email": "",
    "website": "https://spachirohouston.com/",
    "address": "2521 Rice Boulevard, Houston, TX 77005",
    "photo": "https://lh3.googleusercontent.com/p/AF1QipM7Nu5S7uWxSkEUpRyZjH4hzge0FZvOLo_ufT5s=w408-h272-k-no",
    "images": [
      "https://lh3.googleusercontent.com/p/AF1QipM7Nu5S7uWxSkEUpRyZjH4hzge0FZvOLo_ufT5s=w408-h272-k-no"
    ],
    "bio": "Located in University Place, Spa Chiro provides quality chiropractic care. Open Monday 9\u202fAM to 6\u202fPM",
    "languages": [
      "English"
    ],
    "rating": 5,
    "review_count": 60,
    "analysis": []
  },
  {
    "id": "69",
    "first_name": "",
    "last_name": "Think Chiropractic",
    "slug": "think-chiropractic-69",
    "city_id": "1",
    "services": [
      "Neck Pain",
      "Back Pain",
      "Wellness Care",
      "Chiropractic Care"
    ],
    "phone": "(713) 800-2988",
    "email": "",
    "website": "https://think-chiro.com/",
    "address": "2525 Robinhood St, Houston, TX 77005",
    "photo": "https://lh3.googleusercontent.com/p/AF1QipNgBA-rmNms2wsalqgDbc5O4NAljhN_nkjAN2sz=w408-h544-k-no",
    "images": [
      "https://lh3.googleusercontent.com/p/AF1QipNgBA-rmNms2wsalqgDbc5O4NAljhN_nkjAN2sz=w408-h544-k-no"
    ],
    "bio": "Located in University Place, Think Chiropractic provides quality chiropractic care. Open Monday 9\u202fAM to 5\u202fPM",
    "languages": [
      "English"
    ],
    "rating": 5,
    "review_count": 19,
    "analysis": []
  },
  {
    "id": "70",
    "first_name": "",
    "last_name": "HealthPro Family Chiropractic & Acupuncture",
    "slug": "healthpro-family-chiropractic---acupuncture-70",
    "city_id": "1",
    "services": [
      "Neck Pain",
      "Back Pain",
      "Wellness Care",
      "Craniosacral therapy",
      "Acupuncturist",
      "Chiropractic Care"
    ],
    "phone": "(281) 506-0105",
    "email": "",
    "website": "https://www.healthprochiro.com/",
    "address": "4101 Greenbriar Dr #135, Houston, TX 77098",
    "photo": "https://lh3.googleusercontent.com/p/AF1QipMjGuM1S0VYAyHeWRMtvdBt6WdsqoqA5F8jYdpP=w408-h272-k-no",
    "images": [
      "https://lh3.googleusercontent.com/p/AF1QipMjGuM1S0VYAyHeWRMtvdBt6WdsqoqA5F8jYdpP=w408-h272-k-no"
    ],
    "bio": "Located in Boulevard Oaks, HealthPro Family Chiropractic & Acupuncture provides quality chiropractic care. Open Monday 9\u202fAM to 5\u202fPM",
    "languages": [
      "English"
    ],
    "rating": 5,
    "review_count": 115,
    "analysis": []
  },
  {
    "id": "71",
    "first_name": "",
    "last_name": "Hill Heals Chiropractic and Rehabilitation",
    "slug": "hill-heals-chiropractic-and-rehabilitation-71",
    "city_id": "1",
    "services": [
      "Neck Pain",
      "Back Pain",
      "Wellness Care",
      "Chiropractic Care"
    ],
    "phone": "(832) 736-3099",
    "email": "",
    "website": "http://hillheals.com/",
    "address": "12 Greenway Plz #1146, Houston, TX 77046",
    "photo": "https://lh3.googleusercontent.com/p/AF1QipMIMmc_cF-fiFOp2rI-11IpAQ0LqCH6U4hF-4Oe=w428-h240-k-no",
    "images": [
      "https://lh3.googleusercontent.com/p/AF1QipMIMmc_cF-fiFOp2rI-11IpAQ0LqCH6U4hF-4Oe=w428-h240-k-no"
    ],
    "bio": "Located in Greenway / Upper Kirby Area, Hill Heals Chiropractic and Rehabilitation provides quality chiropractic care. Open Monday Open 24 hours",
    "languages": [
      "English"
    ],
    "rating": 4.9,
    "review_count": 90,
    "analysis": []
  },
  {
    "id": "72",
    "first_name": "",
    "last_name": "Better Days Chiropractic Clinic",
    "slug": "better-days-chiropractic-clinic-72",
    "city_id": "1",
    "services": [
      "Neck Pain",
      "Back Pain",
      "Wellness Care",
      "Chiropractic Care"
    ],
    "phone": "(713) 661-7246",
    "email": "",
    "website": "http://www.betterdayschiropractic.com/",
    "address": "2600 S Loop W Ste. 620, Houston, TX 77054",
    "photo": "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=LSzrdhCEgs0GnGS2SL5D7Q&cb_client=search.gws-prod.gps&w=408&h=240&yaw=65.874084&pitch=0&thumbfov=100",
    "images": [
      "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=LSzrdhCEgs0GnGS2SL5D7Q&cb_client=search.gws-prod.gps&w=408&h=240&yaw=65.874084&pitch=0&thumbfov=100"
    ],
    "bio": "Located in South Main, Better Days Chiropractic Clinic provides quality chiropractic care. Open Monday 9\u202fAM to 6\u202fPM",
    "languages": [
      "English"
    ],
    "rating": 5,
    "review_count": 31,
    "analysis": []
  },
  {
    "id": "73",
    "first_name": "",
    "last_name": "The Joint Chiropractic",
    "slug": "the-joint-chiropractic-73",
    "city_id": "1",
    "services": [
      "Neck Pain",
      "Back Pain",
      "Wellness Care",
      "Chiropractic Care"
    ],
    "phone": "(713) 903-3375",
    "email": "",
    "website": "https://www.thejoint.com/texas/houston/river-oaks-28010?y_source=1_Mzk3OTU2My03MTUtbG9jYXRpb24ud2Vic2l0ZQ%3D%3D",
    "address": "2612 S Shepherd Dr Suite A, Houston, TX 77098",
    "photo": "https://lh3.googleusercontent.com/p/AF1QipMmjbI6OJ-tt2Mo9zANs-FrKcCwvhaJn7c7PBlX=w408-h245-k-no",
    "images": [
      "https://lh3.googleusercontent.com/p/AF1QipMmjbI6OJ-tt2Mo9zANs-FrKcCwvhaJn7c7PBlX=w408-h245-k-no"
    ],
    "bio": "Located in Greenway / Upper Kirby Area, The Joint Chiropractic provides quality chiropractic care. Open Monday 10\u202fAM to 2\u202fPM, 2:45 to 7\u202fPM",
    "languages": [
      "English"
    ],
    "rating": 4.8,
    "review_count": 486,
    "analysis": []
  },
  {
    "id": "74",
    "first_name": "",
    "last_name": "Strang Chiropractic - The Chiro Bus",
    "slug": "strang-chiropractic---the-chiro-bus-74",
    "city_id": "1",
    "services": [
      "Neck Pain",
      "Back Pain",
      "Wellness Care",
      "Chiropractic Care"
    ],
    "phone": "(713) 526-6600",
    "email": "",
    "website": "http://strangchiro.com/",
    "address": "3730 Kirby Dr #610, Houston, TX 77098",
    "photo": "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSx22ZqV8zojV0I25JRgky5n_T9VEUVq4qiBLnpge6UGyb_y1H2GQPk0YDA-aq5N_rC26-mngilNRpAGLDuUCFcDug8XOWH7IXzL4DPsIZ5wYTiWibFpU3E5cZep7CZ21IcHyEhy=w408-h306-k-no",
    "images": [
      "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSx22ZqV8zojV0I25JRgky5n_T9VEUVq4qiBLnpge6UGyb_y1H2GQPk0YDA-aq5N_rC26-mngilNRpAGLDuUCFcDug8XOWH7IXzL4DPsIZ5wYTiWibFpU3E5cZep7CZ21IcHyEhy=w408-h306-k-no"
    ],
    "bio": "Located in Greenway / Upper Kirby Area, Strang Chiropractic - The Chiro Bus provides quality chiropractic care. Open Monday 8\u202fAM to 9\u202fPM",
    "languages": [
      "English"
    ],
    "rating": 4.9,
    "review_count": 121,
    "analysis": []
  },
  {
    "id": "75",
    "first_name": "",
    "last_name": "Richard J. Werner DC",
    "slug": "richard-j--werner-dc-75",
    "city_id": "1",
    "services": [
      "Neck Pain",
      "Back Pain",
      "Wellness Care",
      "Medical clinic",
      "Chiropractic Care"
    ],
    "phone": "(713) 528-8800",
    "email": "",
    "website": "http://www.chiropractorshoustontexas.com/",
    "address": "3411 Richmond Ave. #100, Houston, TX 77046",
    "photo": "https://lh3.googleusercontent.com/p/AF1QipNvYt8HY5q3snnFK8vwEPGx0Q2TeuXD0y3sBLaN=w408-h306-k-no",
    "images": [
      "https://lh3.googleusercontent.com/p/AF1QipNvYt8HY5q3snnFK8vwEPGx0Q2TeuXD0y3sBLaN=w408-h306-k-no"
    ],
    "bio": "Located in Greenway / Upper Kirby Area, Richard J. Werner DC provides quality chiropractic care. Open Monday 9\u202fAM to 5\u202fPM",
    "languages": [
      "English"
    ],
    "rating": 5,
    "review_count": 48,
    "analysis": []
  },
  {
    "id": "76",
    "first_name": "",
    "last_name": "Protect Your Back",
    "slug": "protect-your-back-76",
    "city_id": "1",
    "services": [
      "Neck Pain",
      "Back Pain",
      "Wellness Care",
      "Chiropractic Care"
    ],
    "phone": "(713) 750-9265",
    "email": "",
    "website": "http://www.protectyourbackchiropractic.com/",
    "address": "3457 Kirby Dr, Houston, TX 77098",
    "photo": "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSzvS3fVCd3wdStcNk7rgraMi3Qsaa8eUaV-EECDWL8IhbHA_zULudy_3jcgtoSLVsO6IyTbGz-5n79-PGXFMfJ5yEEK_JCGOhArKlWopBNe-drBc8unVBXOnor8TRUfJbBZRIw=w408-h544-k-no",
    "images": [
      "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSzvS3fVCd3wdStcNk7rgraMi3Qsaa8eUaV-EECDWL8IhbHA_zULudy_3jcgtoSLVsO6IyTbGz-5n79-PGXFMfJ5yEEK_JCGOhArKlWopBNe-drBc8unVBXOnor8TRUfJbBZRIw=w408-h544-k-no"
    ],
    "bio": "Located in Greenway / Upper Kirby Area, Protect Your Back provides quality chiropractic care. Open Monday 10\u202fAM to 7\u202fPM",
    "languages": [
      "English"
    ],
    "rating": 4.9,
    "review_count": 63,
    "analysis": []
  },
  {
    "id": "77",
    "first_name": "",
    "last_name": "Arabella Chiropractic",
    "slug": "arabella-chiropractic-77",
    "city_id": "1",
    "services": [
      "Neck Pain",
      "Back Pain",
      "Wellness Care",
      "Chiropractic Care"
    ],
    "phone": "(832) 808-6453",
    "email": "",
    "website": "https://arabellachiropractic.com/",
    "address": "3310 Edloe St, Houston, TX 77027",
    "photo": "https://lh3.googleusercontent.com/p/AF1QipOe9G80gbgnTul5p5zukemkLfILnBda-yrPQYGR=w408-h306-k-no",
    "images": [
      "https://lh3.googleusercontent.com/p/AF1QipOe9G80gbgnTul5p5zukemkLfILnBda-yrPQYGR=w408-h306-k-no"
    ],
    "bio": "Located in Greenway / Upper Kirby Area, Arabella Chiropractic provides quality chiropractic care. Open Monday 9\u202fAM to 6\u202fPM",
    "languages": [
      "English"
    ],
    "rating": 4.9,
    "review_count": 39,
    "analysis": []
  },
  {
    "id": "78",
    "first_name": "",
    "last_name": "Alham Samani, DC - Chiropractor",
    "slug": "alham-samani--dc---chiropractor-78",
    "city_id": "1",
    "services": [
      "Neck Pain",
      "Back Pain",
      "Wellness Care",
      "Pain management physician",
      "Medical clinic",
      "Wellness center",
      "Alternative medicine practitioner",
      "Sports Injuries",
      "Chiropractic Care",
      "Holistic medicine practitioner"
    ],
    "phone": "(832) 639-1600",
    "email": "",
    "website": "https://www.accelchiro.com/",
    "address": "1724 Richmond Ave., Houston, TX 77098",
    "photo": "https://lh3.googleusercontent.com/p/AF1QipPBPs3t9BVjgfY1WlqeUQcx0Of082P8_lNAA9n2=w427-h240-k-no",
    "images": [
      "https://lh3.googleusercontent.com/p/AF1QipPBPs3t9BVjgfY1WlqeUQcx0Of082P8_lNAA9n2=w427-h240-k-no"
    ],
    "bio": "Located in Montrose, Alham Samani, DC - Chiropractor provides quality chiropractic care. Open Monday 8\u202fAM to 5\u202fPM",
    "languages": [
      "English"
    ],
    "rating": 4.9,
    "review_count": 110,
    "analysis": []
  },
  {
    "id": "79",
    "first_name": "",
    "last_name": "Mike Yusim, D.C. - Greenway Chiropractic",
    "slug": "mike-yusim--d-c----greenway-chiropractic-79",
    "city_id": "1",
    "services": [
      "Neck Pain",
      "Back Pain",
      "Wellness Care",
      "Chiropractic Care"
    ],
    "phone": "(713) 355-5343",
    "email": "",
    "website": "https://chirohouston.com/",
    "address": "3100 Timmons Ln #135, Houston, TX 77027",
    "photo": "https://lh3.googleusercontent.com/p/AF1QipNVvNDgcSzqCJT4qEtAbw1pmjCBKaig6Xkqznrs=w552-h240-k-no",
    "images": [
      "https://lh3.googleusercontent.com/p/AF1QipNVvNDgcSzqCJT4qEtAbw1pmjCBKaig6Xkqznrs=w552-h240-k-no"
    ],
    "bio": "Located in Greenway / Upper Kirby Area, Mike Yusim, D.C. - Greenway Chiropractic provides quality chiropractic care. Open Monday 7:30\u202fAM to 6\u202fPM",
    "languages": [
      "English"
    ],
    "rating": 4.9,
    "review_count": 71,
    "analysis": []
  },
  {
    "id": "80",
    "first_name": "",
    "last_name": "MVMT Chiropractic",
    "slug": "mvmt-chiropractic-80",
    "city_id": "1",
    "services": [
      "Neck Pain",
      "Back Pain",
      "Wellness Care",
      "Pain management physician",
      "Acupuncturist",
      "Chiropractic Care"
    ],
    "phone": "(832) 391-8077",
    "email": "",
    "website": "https://www.mvmtchiro.com/",
    "address": "1414 W Clay St, Houston, TX 77019",
    "photo": "https://lh3.googleusercontent.com/p/AF1QipMCm4j4ioZ6uvvL44bqiPjNptcae-mQjQLeefmW=w408-h272-k-no",
    "images": [
      "https://lh3.googleusercontent.com/p/AF1QipMCm4j4ioZ6uvvL44bqiPjNptcae-mQjQLeefmW=w408-h272-k-no"
    ],
    "bio": "Located in Montrose, MVMT Chiropractic provides quality chiropractic care. Open Monday 8\u202fAM to 1\u202fPM, 3:30 to 7\u202fPM",
    "languages": [
      "English"
    ],
    "rating": 4.9,
    "review_count": 148,
    "analysis": []
  },
  {
    "id": "81",
    "first_name": "",
    "last_name": "LifeClinic Chiropractic & Rehabilitation - Houston-Greenway, TX",
    "slug": "lifeclinic-chiropractic---rehabilitation---houston-greenway--tx-81",
    "city_id": "1",
    "services": [
      "Neck Pain",
      "Fitness center",
      "Back Pain",
      "Wellness Care",
      "Rehabilitation center",
      "Sports Injuries",
      "Gym",
      "Chiropractic Care"
    ],
    "phone": "(281) 916-7364",
    "email": "",
    "website": "https://www.lifeclinics.us/",
    "address": "One City Club Dr, Houston, TX 77046",
    "photo": "https://lh3.googleusercontent.com/p/AF1QipMNwpMbsu6cL_qKoEA1T682VC8Z5fj9319Sp4QM=w408-h271-k-no",
    "images": [
      "https://lh3.googleusercontent.com/p/AF1QipMNwpMbsu6cL_qKoEA1T682VC8Z5fj9319Sp4QM=w408-h271-k-no"
    ],
    "bio": "Located in Greenway / Upper Kirby Area, LifeClinic Chiropractic & Rehabilitation - Houston-Greenway, TX provides quality chiropractic care. Open Monday 7\u202fAM to 6\u202fPM",
    "languages": [
      "English"
    ],
    "rating": 4.9,
    "review_count": 36,
    "analysis": []
  },
  {
    "id": "82",
    "first_name": "",
    "last_name": "Chiropractic Nutrition Solutions pllc",
    "slug": "chiropractic-nutrition-solutions-pllc-82",
    "city_id": "1",
    "services": [
      "Neck Pain",
      "Back Pain",
      "Wellness Care",
      "Alternative medicine practitioner",
      "Sports Injuries",
      "Chiropractic Care",
      "Holistic medicine practitioner"
    ],
    "phone": "(713) 557-5736",
    "email": "",
    "website": "https://chiropracticnutritionsolutions.com/",
    "address": "2020 Southwest Fwy # 215, Houston, TX 77098",
    "photo": "https://lh3.googleusercontent.com/p/AF1QipNnpVDXLNXMnPyx-3rrHBXKUkdBnkw4d5OQDk0P=w408-h544-k-no",
    "images": [
      "https://lh3.googleusercontent.com/p/AF1QipNnpVDXLNXMnPyx-3rrHBXKUkdBnkw4d5OQDk0P=w408-h544-k-no"
    ],
    "bio": "Located in Montrose, Chiropractic Nutrition Solutions pllc provides quality chiropractic care. Open Monday 8\u202fAM to 6\u202fPM",
    "languages": [
      "English"
    ],
    "rating": 5,
    "review_count": 156,
    "analysis": []
  },
  {
    "id": "83",
    "first_name": "",
    "last_name": "Spine & Sports Therapy",
    "slug": "spine---sports-therapy-83",
    "city_id": "1",
    "services": [
      "Neck Pain",
      "Back Pain",
      "Wellness Care",
      "Chiropractic Care"
    ],
    "phone": "(713) 629-9200",
    "email": "",
    "website": "https://www.fixmysportsinjury.com/",
    "address": "3100 Timmons Ln #450, Houston, TX 77027",
    "photo": "https://lh3.googleusercontent.com/p/AF1QipMpHhvyMELmTP1p9PpcLGhu1Q1jBEd2XUpAxJVQ=w426-h240-k-no",
    "images": [
      "https://lh3.googleusercontent.com/p/AF1QipMpHhvyMELmTP1p9PpcLGhu1Q1jBEd2XUpAxJVQ=w426-h240-k-no"
    ],
    "bio": "Located in Greenway / Upper Kirby Area, Spine & Sports Therapy provides quality chiropractic care. Open Monday 7\u202fAM to 4\u202fPM",
    "languages": [
      "English"
    ],
    "rating": 4.9,
    "review_count": 44,
    "analysis": []
  },
  {
    "id": "84",
    "first_name": "",
    "last_name": "Kennedy Tyer D.C.",
    "slug": "kennedy-tyer-d-c-84",
    "city_id": "1",
    "services": [
      "Neck Pain",
      "Back Pain",
      "Wellness Care",
      "Alternative medicine practitioner",
      "Vitamin & supplements store",
      "Chiropractic Care"
    ],
    "phone": "(713) 522-9814",
    "email": "",
    "website": "",
    "address": "2211 Norfolk St Suite 105, Houston, TX 77098",
    "photo": "https://lh3.googleusercontent.com/p/AF1QipOfubQ2pn_gGqdTU8GjP40voJ4FG-OxT_pzb9T0=w408-h498-k-no",
    "images": [
      "https://lh3.googleusercontent.com/p/AF1QipOfubQ2pn_gGqdTU8GjP40voJ4FG-OxT_pzb9T0=w408-h498-k-no"
    ],
    "bio": "Located in Greenway / Upper Kirby Area, Kennedy Tyer D.C. provides quality chiropractic care. Open Monday 9\u202fAM to 6\u202fPM",
    "languages": [
      "English"
    ],
    "rating": 5,
    "review_count": 51,
    "analysis": []
  },
  {
    "id": "85",
    "first_name": "",
    "last_name": "Greenway Chiropractic- Lance McClintock",
    "slug": "greenway-chiropractic--lance-mcclintock-85",
    "city_id": "1",
    "services": [
      "Neck Pain",
      "Back Pain",
      "Wellness Care",
      "Chiropractic Care"
    ],
    "phone": "(713) 355-5343",
    "email": "",
    "website": "http://drlancemcclintock.com/",
    "address": "3100 Timmons Ln #135, Houston, TX 77027",
    "photo": "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=8UTt2r4_B9EW0CbPaFBIIA&cb_client=search.gws-prod.gps&w=408&h=240&yaw=356.0479&pitch=0&thumbfov=100",
    "images": [
      "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=8UTt2r4_B9EW0CbPaFBIIA&cb_client=search.gws-prod.gps&w=408&h=240&yaw=356.0479&pitch=0&thumbfov=100"
    ],
    "bio": "Located in Greenway / Upper Kirby Area, Greenway Chiropractic- Lance McClintock provides quality chiropractic care. Open Monday 7\u202fAM to 5:30\u202fPM",
    "languages": [
      "English"
    ],
    "rating": 5,
    "review_count": 2,
    "analysis": []
  },
  {
    "id": "86",
    "first_name": "",
    "last_name": "Texas Pain & Rehabilitation",
    "slug": "texas-pain---rehabilitation-86",
    "city_id": "1",
    "services": [
      "Neck Pain",
      "Back Pain",
      "Wellness Care",
      "Chiropractic Care"
    ],
    "phone": "(832) 213-7703",
    "email": "",
    "website": "",
    "address": "9820 Gulf Freeway Suite C3E, Houston, TX 77034",
    "photo": "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSx79drGinN6XGrEYMXHYEf3GA5FTOxqvgKVqC19tqz_cxr91v8m2OKUJ30FA2pZbLRhLXhMbNEvVVJgtuB84sScp15xNw_p3UeH7KlpgSRNXL9hb0Ljx5esyNts0F9CWIb3iVY_RQ=w408-h608-k-no",
    "images": [
      "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSx79drGinN6XGrEYMXHYEf3GA5FTOxqvgKVqC19tqz_cxr91v8m2OKUJ30FA2pZbLRhLXhMbNEvVVJgtuB84sScp15xNw_p3UeH7KlpgSRNXL9hb0Ljx5esyNts0F9CWIb3iVY_RQ=w408-h608-k-no"
    ],
    "bio": "Located in Greater Hobby Area, Texas Pain & Rehabilitation provides quality chiropractic care. Open Monday 9\u202fAM to 5\u202fPM",
    "languages": [
      "English"
    ],
    "rating": 5,
    "review_count": 13,
    "analysis": []
  },
  {
    "id": "87",
    "first_name": "",
    "last_name": "Greenway Chiropractic",
    "slug": "greenway-chiropractic-87",
    "city_id": "1",
    "services": [
      "Neck Pain",
      "Back Pain",
      "Wellness Care",
      "Chiropractic Care"
    ],
    "phone": "(713) 355-5343",
    "email": "",
    "website": "http://www.greenwaychiro.com/",
    "address": "3100 Timmons Ln #135, Houston, TX 77027",
    "photo": "https://lh3.googleusercontent.com/p/AF1QipMW-NXvFs0-ZugRpu_1fHdsGggIcVBbWvbQaKyx=w408-h905-k-no",
    "images": [
      "https://lh3.googleusercontent.com/p/AF1QipMW-NXvFs0-ZugRpu_1fHdsGggIcVBbWvbQaKyx=w408-h905-k-no"
    ],
    "bio": "Located in Greenway / Upper Kirby Area, Greenway Chiropractic provides quality chiropractic care. Open Monday 7:30\u202fAM to 6\u202fPM",
    "languages": [
      "English"
    ],
    "rating": 5,
    "review_count": 4,
    "analysis": []
  },
  {
    "id": "88",
    "first_name": "",
    "last_name": "Garcia Clinic",
    "slug": "garcia-clinic-88",
    "city_id": "1",
    "services": [
      "Neck Pain",
      "Back Pain",
      "Medical examiner",
      "Wellness Care",
      "Drug testing service",
      "Occupational health service",
      "Chiropractic Care"
    ],
    "phone": "(713) 643-6737",
    "email": "",
    "website": "http://www.garciaclinic.com/",
    "address": "4040 Broadway St, Houston, TX 77087",
    "photo": "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=BP6rU9AyHW8ir2z3QG0pww&cb_client=search.gws-prod.gps&w=408&h=240&yaw=274.25177&pitch=0&thumbfov=100",
    "images": [
      "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=BP6rU9AyHW8ir2z3QG0pww&cb_client=search.gws-prod.gps&w=408&h=240&yaw=274.25177&pitch=0&thumbfov=100"
    ],
    "bio": "Located in Southeast Houston, Garcia Clinic provides quality chiropractic care. Open Monday 8:30\u202fAM to 4\u202fPM",
    "languages": [
      "English"
    ],
    "rating": 4.8,
    "review_count": 102,
    "analysis": []
  },
  {
    "id": "89",
    "first_name": "",
    "last_name": "Rankin Chiropractic and Wellness Center",
    "slug": "rankin-chiropractic-and-wellness-center-89",
    "city_id": "1",
    "services": [
      "Neck Pain",
      "Back Pain",
      "Wellness Care",
      "Chiropractic Care"
    ],
    "phone": "(713) 526-2225",
    "email": "",
    "website": "",
    "address": "1931 Richmond Ave. Suite A, Houston, TX 77098",
    "photo": "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSzyqUao0uN7ErHmc09AoHHT5KqL5bh-TB3dPAL6ZTdZquvRyhqO2mmaCNp0qwRyVWnkSAb7w9FX3V1BKq-yHrfIOw-zGhKxQI6JeYUFd5vhnE-y_udNM7Y9uGk639wZr42vH1o=w408-h306-k-no",
    "images": [
      "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSzyqUao0uN7ErHmc09AoHHT5KqL5bh-TB3dPAL6ZTdZquvRyhqO2mmaCNp0qwRyVWnkSAb7w9FX3V1BKq-yHrfIOw-zGhKxQI6JeYUFd5vhnE-y_udNM7Y9uGk639wZr42vH1o=w408-h306-k-no"
    ],
    "bio": "Located in Montrose, Rankin Chiropractic and Wellness Center provides quality chiropractic care. Open Monday 7:30\u202fAM to 5\u202fPM",
    "languages": [
      "English"
    ],
    "rating": 5,
    "review_count": 11,
    "analysis": []
  },
  {
    "id": "90",
    "first_name": "",
    "last_name": "Specialty Injury Clinic",
    "slug": "specialty-injury-clinic-90",
    "city_id": "1",
    "services": [
      "Neck Pain",
      "Back Pain",
      "Wellness Care",
      "Chiropractic Care"
    ],
    "phone": "(346) 701-8930",
    "email": "",
    "website": "http://www.specialtyinjuryclinic.com/",
    "address": "2606 Telephone Rd Suite 300, Houston, TX 77023",
    "photo": "https://lh3.googleusercontent.com/p/AF1QipO_HJAycx8R52XMBGaCRr2uhRotGC9f8cO5tbN4=w408-h544-k-no",
    "images": [
      "https://lh3.googleusercontent.com/p/AF1QipO_HJAycx8R52XMBGaCRr2uhRotGC9f8cO5tbN4=w408-h544-k-no"
    ],
    "bio": "Located in Gulfgate Riverview / Pine Valley, Specialty Injury Clinic provides quality chiropractic care. Open Monday 9\u202fAM to 7\u202fPM",
    "languages": [
      "English"
    ],
    "rating": 5,
    "review_count": 57,
    "analysis": []
  },
  {
    "id": "91",
    "first_name": "",
    "last_name": "Nicholas Ng, DC",
    "slug": "nicholas-ng--dc-91",
    "city_id": "1",
    "services": [
      "Neck Pain",
      "Back Pain",
      "Wellness Care",
      "Chiropractic Care"
    ],
    "phone": "(832) 413-1993",
    "email": "",
    "website": "https://www.fixmysportsinjury.com/doctors/dr-nicholas-ng-d-c",
    "address": "3100 Timmons Ln #450, Houston, TX 77027",
    "photo": "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=Lcca7x66pwAEjYjR6KV8rQ&cb_client=search.gws-prod.gps&w=408&h=240&yaw=171.4959&pitch=0&thumbfov=100",
    "images": [
      "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=Lcca7x66pwAEjYjR6KV8rQ&cb_client=search.gws-prod.gps&w=408&h=240&yaw=171.4959&pitch=0&thumbfov=100"
    ],
    "bio": "Located in Greenway / Upper Kirby Area, Nicholas Ng, DC provides quality chiropractic care. Open Monday 8\u202fAM to 4\u202fPM",
    "languages": [
      "English"
    ],
    "rating": 5,
    "review_count": 22,
    "analysis": []
  },
  {
    "id": "92",
    "first_name": "",
    "last_name": "Babush Faridi, DC",
    "slug": "babush-faridi--dc-92",
    "city_id": "1",
    "services": [
      "Neck Pain",
      "Back Pain",
      "Wellness Care",
      "Chiropractic Care"
    ],
    "phone": "(281) 556-5200",
    "email": "",
    "website": "",
    "address": "2521 Rice Boulevard, Houston, TX 77005",
    "photo": "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=KdFwoBRjKXUK6Q6vQ1-kDw&cb_client=search.gws-prod.gps&w=408&h=240&yaw=177.64749&pitch=0&thumbfov=100",
    "images": [
      "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=KdFwoBRjKXUK6Q6vQ1-kDw&cb_client=search.gws-prod.gps&w=408&h=240&yaw=177.64749&pitch=0&thumbfov=100"
    ],
    "bio": "Located in University Place, Babush Faridi, DC provides quality chiropractic care. Open Monday 10\u202fAM to 7\u202fPM",
    "languages": [
      "English"
    ],
    "rating": 4.7,
    "review_count": 15,
    "analysis": []
  },
  {
    "id": "93",
    "first_name": "",
    "last_name": "Park Place Chiropractic",
    "slug": "park-place-chiropractic-93",
    "city_id": "1",
    "services": [
      "Neck Pain",
      "Back Pain",
      "Wellness Care",
      "Chiropractic Care"
    ],
    "phone": "(832) 915-5543",
    "email": "",
    "website": "",
    "address": "8118 Park Pl Blvd Suite 280, Houston, TX 77017",
    "photo": "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSxmwoZA-sngv8N8v5AeqCwe8o8eUdZEx_jCWF7ZGe6wplBDMAuSvPxjr2sm73mruVI-Eaeo3qs30j1aIqliBQ6cA_NAKdV0qTFoyoKesi1NoWdxWrwcB16oK3p8ohOZ2r-65cVo=w408-h306-k-no",
    "images": [
      "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSxmwoZA-sngv8N8v5AeqCwe8o8eUdZEx_jCWF7ZGe6wplBDMAuSvPxjr2sm73mruVI-Eaeo3qs30j1aIqliBQ6cA_NAKdV0qTFoyoKesi1NoWdxWrwcB16oK3p8ohOZ2r-65cVo=w408-h306-k-no"
    ],
    "bio": "Located in Park Place, Park Place Chiropractic provides quality chiropractic care. Open Monday 9\u202fAM to 6\u202fPM",
    "languages": [
      "English"
    ],
    "rating": 5,
    "review_count": 2,
    "analysis": []
  },
  {
    "id": "94",
    "first_name": "",
    "last_name": "Natural Health Houston: Darin J. Mitchell, DC",
    "slug": "natural-health-houston--darin-j--mitchell--dc-94",
    "city_id": "1",
    "services": [
      "Neck Pain",
      "Back Pain",
      "Wellness Care",
      "Alternative medicine practitioner",
      "Chiropractic Care"
    ],
    "phone": "(713) 522-9814",
    "email": "",
    "website": "https://naturalhealthhouston.com/",
    "address": "2211 Norfolk St Suite 105, Houston, TX 77098",
    "photo": "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=So9TH9tcKfwbD31hw9GlAw&cb_client=search.gws-prod.gps&w=408&h=240&yaw=178.49371&pitch=0&thumbfov=100",
    "images": [
      "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=So9TH9tcKfwbD31hw9GlAw&cb_client=search.gws-prod.gps&w=408&h=240&yaw=178.49371&pitch=0&thumbfov=100"
    ],
    "bio": "Located in Greenway / Upper Kirby Area, Natural Health Houston: Darin J. Mitchell, DC provides quality chiropractic care. Open Monday 9\u202fAM to 5\u202fPM",
    "languages": [
      "English"
    ],
    "rating": 5,
    "review_count": 21,
    "analysis": []
  },
  {
    "id": "95",
    "first_name": "",
    "last_name": "New Power Chiropractic",
    "slug": "new-power-chiropractic-95",
    "city_id": "1",
    "services": [
      "Neck Pain",
      "Wellness program",
      "Back Pain",
      "Wellness Care",
      "Chiropractic Care"
    ],
    "phone": "(346) 802-2195",
    "email": "",
    "website": "http://www.newpowerchiropractic.com/",
    "address": "2603 La Branch St Ste #103, Houston, TX 77004",
    "photo": "https://lh3.googleusercontent.com/p/AF1QipMWKFKXqAGcDsgJ6W_n2Xc8XmS4ciScIYwGsQVg=w408-h271-k-no",
    "images": [
      "https://lh3.googleusercontent.com/p/AF1QipMWKFKXqAGcDsgJ6W_n2Xc8XmS4ciScIYwGsQVg=w408-h271-k-no"
    ],
    "bio": "Located in Midtown, New Power Chiropractic provides quality chiropractic care. Open Monday 9\u202fAM to 1\u202fPM",
    "languages": [
      "English"
    ],
    "rating": 5,
    "review_count": 18,
    "analysis": []
  },
  {
    "id": "96",
    "first_name": "",
    "last_name": "Bodied Chiropractic Clinic",
    "slug": "bodied-chiropractic-clinic-96",
    "city_id": "1",
    "services": [
      "Neck Pain",
      "Back Pain",
      "Wellness Care",
      "Chiropractic Care"
    ],
    "phone": "(346) 802-2984",
    "email": "",
    "website": "https://www.bodiedchiroclinic.com/",
    "address": "2616 S Loop W Ste 430, Houston, TX 77054",
    "photo": "https://lh3.googleusercontent.com/p/AF1QipPP63L_V6NpJoQJDRvMuNiwszlyn05r8TnTnkQB=w408-h509-k-no",
    "images": [
      "https://lh3.googleusercontent.com/p/AF1QipPP63L_V6NpJoQJDRvMuNiwszlyn05r8TnTnkQB=w408-h509-k-no"
    ],
    "bio": "Located in South Main, Bodied Chiropractic Clinic provides quality chiropractic care. Open Monday 9\u202fAM to 6\u202fPM",
    "languages": [
      "English"
    ],
    "rating": 4.5,
    "review_count": 18,
    "analysis": []
  },
  {
    "id": "97",
    "first_name": "",
    "last_name": "Peters Family Chiropractic",
    "slug": "peters-family-chiropractic-97",
    "city_id": "1",
    "services": [
      "Neck Pain",
      "Back Pain",
      "Wellness Care",
      "Chiropractic Care"
    ],
    "phone": "(713) 355-5343",
    "email": "",
    "website": "http://greenwaychiro.com/",
    "address": "3100 Timmons Ln #135, Houston, TX 77027",
    "photo": "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSxToM-yxL69g2U8WvOkLX8YW0aLrWkqya-IVy4KO-SRA7N4yPca45sS-Zyt2EQfZ40MmDMTLXw4OTTu9yo5zEfF6lfECsnIlPM7aAdJs35okn4LpF4K4hTHBScQzFBKPxCjdLbg=w408-h725-k-no",
    "images": [
      "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSxToM-yxL69g2U8WvOkLX8YW0aLrWkqya-IVy4KO-SRA7N4yPca45sS-Zyt2EQfZ40MmDMTLXw4OTTu9yo5zEfF6lfECsnIlPM7aAdJs35okn4LpF4K4hTHBScQzFBKPxCjdLbg=w408-h725-k-no"
    ],
    "bio": "Located in Greenway / Upper Kirby Area, Peters Family Chiropractic provides quality chiropractic care. Open Monday 8\u202fAM to 6\u202fPM",
    "languages": [
      "English"
    ],
    "rating": 5,
    "review_count": 11,
    "analysis": []
  },
  {
    "id": "98",
    "first_name": "",
    "last_name": "Texas Health Clinic",
    "slug": "texas-health-clinic-98",
    "city_id": "1",
    "services": [
      "Neck Pain",
      "Back Pain",
      "Wellness Care",
      "Medical clinic",
      "Chiropractic Care"
    ],
    "phone": "(713) 333-5535",
    "email": "",
    "website": "http://www.txhealthclinic.com/",
    "address": "8876 Gulf Fwy #101, Houston, TX 77017",
    "photo": "https://lh3.googleusercontent.com/p/AF1QipPryHgXGLjpRalkP81nHlr-jJ2KeJkB9mSfLfoa=w408-h273-k-no",
    "images": [
      "https://lh3.googleusercontent.com/p/AF1QipPryHgXGLjpRalkP81nHlr-jJ2KeJkB9mSfLfoa=w408-h273-k-no"
    ],
    "bio": "Located in Southeast Houston, Texas Health Clinic provides quality chiropractic care. Open Monday 8:30\u202fAM to 5:30\u202fPM",
    "languages": [
      "English"
    ],
    "rating": 5,
    "review_count": 9,
    "analysis": []
  },
  {
    "id": "99",
    "first_name": "",
    "last_name": "The Chiroport",
    "slug": "the-chiroport-99",
    "city_id": "1",
    "services": [
      "Neck Pain",
      "Back Pain",
      "Wellness Care",
      "Chiropractic Care"
    ],
    "phone": "",
    "email": "",
    "website": "https://www.thechiroport.com/",
    "address": "7800 Airport Blvd, Houston, TX 77061",
    "photo": "https://lh3.googleusercontent.com/p/AF1QipM5-Xi-6EA1sm5Sv2XRUVusHsl93hi0KCW-mxcz=w408-h272-k-no",
    "images": [
      "https://lh3.googleusercontent.com/p/AF1QipM5-Xi-6EA1sm5Sv2XRUVusHsl93hi0KCW-mxcz=w408-h272-k-no"
    ],
    "bio": "Located in Greater Hobby Area, The Chiroport provides quality chiropractic care. Open Monday 7\u202fAM to 8\u202fPM",
    "languages": [
      "English"
    ],
    "rating": 5,
    "review_count": 4,
    "analysis": []
  },
  {
    "id": "100",
    "first_name": "",
    "last_name": "Transhealth Clinic Southside",
    "slug": "transhealth-clinic-southside-100",
    "city_id": "1",
    "services": [
      "Neck Pain",
      "Back Pain",
      "Wellness Care",
      "Chiropractic Care"
    ],
    "phone": "(281) 974-2351",
    "email": "",
    "website": "",
    "address": "8121 Broadway St Suite 107, Houston, TX 77061",
    "photo": "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=HAWUQcCe5-v3gIS2bcauDg&cb_client=search.gws-prod.gps&w=408&h=240&yaw=182.83847&pitch=0&thumbfov=100",
    "images": [
      "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=HAWUQcCe5-v3gIS2bcauDg&cb_client=search.gws-prod.gps&w=408&h=240&yaw=182.83847&pitch=0&thumbfov=100"
    ],
    "bio": "Located in Southeast Houston, Transhealth Clinic Southside provides quality chiropractic care. Open Monday 9\u202fAM to 7\u202fPM",
    "languages": [
      "English"
    ],
    "rating": 5,
    "review_count": 25,
    "analysis": []
  }
];
