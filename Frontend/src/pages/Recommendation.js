// import { Router } from "express";
import React from "react";
import Box from './Box'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
// import { hover } from "@testing-library/user-event/dist/hover";
// import libicon from '../images/libicon.png'
// import { useState } from 'react'
// import props from 'prop-types'

export default function c() {

  // let Top=['https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png']
  // let Fiction=['https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png','https://www.amazon.in/Diary-Wimpy-Kid-Third-Wheel/dp/0141348569/ref=sr_1_2?crid=2ALMJGX457YKF&keywords=diary+of+wimpy+kid+all+book&qid=1667496454&sprefix=diary+of+wimpy+kid+all+books+%2Caps%2C371&sr=8-2']
//   let Fiction =['https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg/330px-The_Great_Gatsby_Cover_1925_Retouched.jpg','https://www.amazon.in/Great-Gatsby-F-Scott-Fitzgerald/dp/8172344562/ref=sr_1_3?crid=KRTHG9Z3IOYO&keywords=great+gatsby&qid=1668070051&qu=eyJxc2MiOiIzLjI3IiwicXNhIjoiMi42OSIsInFzcCI6IjIuMjMifQ%3D%3D&s=books&sprefix=great+gatsby%2Cstripbooks%2C700&sr=1-3',
// 'https://m.media-amazon.com/images/I/51bu58-DHXL.jpg','https://www.amazon.in/One-Hundred-Years-of-Solitude/dp/B079P88ZT6/ref=sr_1_3?crid=19OSRP746XJS&keywords=One+Hundred+Years+of+Solitude&qid=1668070242&qu=eyJxc2MiOiIxLjk2IiwicXNhIjoiMC45MyIsInFzcCI6IjAuNTEifQ%3D%3D&sprefix=one+hundred+years+of+solitude+%2Caps%2C633&sr=8-3',
// 'https://m.media-amazon.com/images/I/41BP68Lj0EL.jpg','https://www.amazon.in/Pride-and-Prejudice-Penguin-Classics/dp/B0842RDKS7/ref=sr_1_1?keywords=pride+and+prejudice+by+jane+austen+penguin+classics&qid=1668070445&qu=eyJxc2MiOiIyLjYwIiwicXNhIjoiMS42NiIsInFzcCI6IjEuMTAifQ%3D%3D&s=audible&sprefix=pride+a%2Caudible%2C589&sr=1-1',

// 'https://m.media-amazon.com/images/I/81gepf1eMqL._AC_UY327_QL65_.jpg','https://www.amazon.in/Kill-Mockingbird-Harper-Lee/dp/0099549484/ref=sr_1_1?crid=13JN44HPD7ACO&keywords=To+Kill+a+Mockingbird&qid=1668070569&qu=eyJxc2MiOiIyLjM2IiwicXNhIjoiMS4zNCIsInFzcCI6IjEuMzEifQ%3D%3D&sprefix=to+kill+a+mockingbird%2Caps%2C302&sr=8-1']

let Fiction = [['https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg/330px-The_Great_Gatsby_Cover_1925_Retouched.jpg', 'https://drive.google.com/file/d/1PVHJboXvYn5BcWVqafnY6KcWwVLsZnne/view?usp=share_link'],
    ['https://m.media-amazon.com/images/I/51bu58-DHXL.jpg', 'https://drive.google.com/file/d/1_4RT6kG-tDzRBLreLHCtCk3vtWaEV3rk/view?usp=share_link'],
    ['https://m.media-amazon.com/images/I/41BP68Lj0EL.jpg', 'https://drive.google.com/file/d/1J9xLFm_m-YGnis83wGKD-NHg6xWM9-Sy/view?usp=share_link'],
    ['https://m.media-amazon.com/images/I/81gepf1eMqL._AC_UY327_QL65_.jpg', 'https://drive.google.com/file/d/1F9yTxvpaIb-XGNE6sZLzK8vHN_s0IF8y/view?usp=share_link'],
    ['https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/1984first.jpg/440px-1984first.jpg'  ,'https://drive.google.com/file/d/18Y8_i4U2532jrEN_qRHgX6TuqscUVchf/view?usp=share_link'],
    ['https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Beloved_%281987_1st_ed_dust_jacket_cover%29.jpg/440px-Beloved_%281987_1st_ed_dust_jacket_cover%29.jpg','https://drive.google.com/file/d/1Wr7s-0rJRM4SAKYVnAjco2VxGi_6oJRp/view?usp=share_link'],
    ['https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Invisible_Man_%281952_1st_ed_jacket_cover%29.jpg/440px-Invisible_Man_%281952_1st_ed_jacket_cover%29.jpg','https://drive.google.com/file/d/1WbPSFXFLummHmRFqzstqofcao6o-1K7q/view?usp=share_link'],
    ['https://upload.wikimedia.org/wikipedia/commons/0/05/WarAndPeace.jpg','https://drive.google.com/file/d/1BWH08fMHDvrAS0Nym8b2HSyb396Ahgnb/view?usp=share_link'],
    ['https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/The_Catcher_in_the_Rye_%281951%2C_first_edition_cover%29.jpg/440px-The_Catcher_in_the_Rye_%281951%2C_first_edition_cover%29.jpg','https://drive.google.com/file/d/1mONB36EvlnpaUWzYB0Rpf0ZKSAjdBjpG/view?usp=share_link'],
    ['https://upload.wikimedia.org/wikipedia/en/6/6d/Atonement_%28novel%29.jpg','https://drive.google.com/file/d/1hupFGeu598m8RBX2Fa8qsoj1or_MCPjB/view?usp=share_link']
  ]
  
Fiction.sort(() => (Math.random() > .5) ? 1 : -1);

let Action = [['https://upload.wikimedia.org/wikipedia/commons/2/26/JackLondoncallwild.jpg','https://drive.google.com/file/d/1VF50yIQjp0GXg5-lltiau_87DVFMV6Tv/view?usp=share_link'],
                ['https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Verne_Tour_du_Monde.jpg/440px-Verne_Tour_du_Monde.jpg','https://drive.google.com/file/d/1SeItznXgCtqylGhie1BNcjYL_fDshjTM/view?usp=share_link'],
                ['https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Gullivers_travels.jpg/500px-Gullivers_travels.jpg','https://drive.google.com/file/d/1Ir3FC3Xx_jNzeOuXOiPf7WppOqqDCDe1/view?usp=share_link'],
                ['https://upload.wikimedia.org/wikipedia/en/4/4a/TheHobbit_FirstEdition.jpg','https://drive.google.com/file/d/1eulTo-Wb8NR1BvC6ImNJWzWK2e-vVv2o/view?usp=share_link'],
                ['https://upload.wikimedia.org/wikipedia/en/6/63/Into_the_Wild_%28book%29_cover.png','https://drive.google.com/file/d/1AZDCYfJR8UOisUp2GccScA4PO8UHwpY3/view?usp=share_link'],
                ['https://upload.wikimedia.org/wikipedia/en/4/46/Into_Thin_Air.jpg','https://drive.google.com/file/d/1cvFwdTy4tsOqRj5hxB1zZAuRi5GqLdQo/view?usp=share_link'],
                ['https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Treasure_Island-Scribner%27s-1911.jpg/440px-Treasure_Island-Scribner%27s-1911.jpg','https://drive.google.com/file/d/1-MNuVUE40p2l1uii_GGUG3xrwUUZa880/view?usp=share_link'],
                ['https://upload.wikimedia.org/wikipedia/en/9/98/KingSolomonsMinesFirstEdition.jpg','https://drive.google.com/file/d/1ZscEGqJXGB-l6dj2h6_438YP0sWhCJ7Q/view?usp=share_link']]

Action.sort(() => (Math.random() > .5) ? 1 : -1);

let Horror=[['https://upload.wikimedia.org/wikipedia/en/thumb/f/f4/The_Only_Good_Indians.jpg/220px-The_Only_Good_Indians.jpg','https://drive.google.com/file/d/17U_k3ayOripDCBQjtEKODT0u6t99CoCW/view?usp=share_link'],
['https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Dracula_1st_ed_cover_reproduction.jpg/220px-Dracula_1st_ed_cover_reproduction.jpg','https://drive.google.com/file/d/1SZhGPwyaLn9sstcFfxvG6zASCUUr777c/view?usp=share_link'],
 ['https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Frankenstein_1818_edition_title_page.jpg/220px-Frankenstein_1818_edition_title_page.jpg','https://drive.google.com/file/d/1nscHUfccaT5sPhYEAmC6KZyzE98YCPMO/view?usp=share_link'],
 ['https://upload.wikimedia.org/wikipedia/en/thumb/0/04/HauntingOfHillHouse.JPG/220px-HauntingOfHillHouse.JPG','https://drive.google.com/file/d/1gBtgeCA9IOCGnOiAivnkVIXs6Qt7R3Wl/view?usp=share_link'],
 ['https://upload.wikimedia.org/wikipedia/en/thumb/d/de/House_of_leaves.jpg/220px-House_of_leaves.jpg','https://drive.google.com/file/d/1QBqbukXmIKYyUufLdBW7Y49sCzIAwJBP/view?usp=share_link'],
 ['https://upload.wikimedia.org/wikipedia/en/5/5a/It_%282017%29_poster.jpg','https://drive.google.com/file/d/1F7WIZOeyzgodM52f1nwnAjXrTqsyFbL7/view?usp=share_link'],
 ['https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Shiningnovel.jpg/220px-Shiningnovel.jpg','https://drive.google.com/file/d/15xkkSxChSyeEBOSNrDYZmp0U1E2Fl74J/view?usp=share_link'],
 ['https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/Exorcist_ver2.jpg/220px-Exorcist_ver2.jpg','https://drive.google.com/file/d/19056e0ZK5kKFfuLLWpEPbdOs6jy6Z_6P/view?usp=share_link']
]
Horror.sort(() => (Math.random() > .5) ? 1 : -1);





let fantasy=[['https://upload.wikimedia.org/wikipedia/en/thumb/9/93/AGameOfThrones.jpg/220px-AGameOfThrones.jpg','https://drive.google.com/file/d/1WVrDxuC4jKFext4GlHt5RuAJo-RzOb7k/view?usp=share_link'],
            ['https://upload.wikimedia.org/wikipedia/en/thumb/0/01/The_Fifth_Season_%28novel%29.jpg/220px-The_Fifth_Season_%28novel%29.jpg','https://drive.google.com/file/d/1GaE7UxqMaQoNM3kCVf7b7P9ZziVsnlvk/view?usp=share_link'],
            ['https://upload.wikimedia.org/wikipedia/en/thumb/8/8b/TheWayOfKings.png/220px-TheWayOfKings.png','https://drive.google.com/file/d/15XMtaRbfg5GaPKI87znGaXkf_e3gasMS/view?usp=share_link'],
            ['https://upload.wikimedia.org/wikipedia/en/thumb/0/00/WoT01_TheEyeOfTheWorld.jpg/200px-WoT01_TheEyeOfTheWorld.jpg','https://drive.google.com/file/d/1QSg2K6smIqzCHRSpl_Rane8S2knLQFg8/view?usp=share_link'],
            ['https://upload.wikimedia.org/wikipedia/en/thumb/b/b1/Locke_Lamora.jpg/220px-Locke_Lamora.jpg','https://drive.google.com/file/d/1pq3gwrUmQm18c9KqUc-F6_FHQDl9GTIX/view?usp=share_link'],
            ['https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR-MLGUxkFF_CuEp1hJPHKYo7VSvLmWVXChC8tHa6ZCqhTTlNhq'],
            ['https://upload.wikimedia.org/wikipedia/en/thumb/5/59/AWizardOfEarthsea%281stEd%29.jpg/220px-AWizardOfEarthsea%281stEd%29.jpg','https://drive.google.com/file/d/1ERO5rEzj_iIFVSWwFJXlLHs-0QjzKSSq/view?usp=share_link'],
            ['https://upload.wikimedia.org/wikipedia/en/thumb/5/56/TheNameoftheWind_cover.jpg/220px-TheNameoftheWind_cover.jpg','https://drive.google.com/file/d/1Ha73LQX2cVMRNkadOECfiTLkz4CNldmq/view?usp=share_link'],
            ['https://upload.wikimedia.org/wikipedia/en/e/e8/Uprooted_cover_picture.jpg','https://drive.google.com/file/d/1COA6RYi-dxI9EdUm9Imse3mQlf-1SdMg/view?usp=share_link'],
            ['https://upload.wikimedia.org/wikipedia/en/e/e1/StardustGaimanbookcover.jpg','https://drive.google.com/file/d/1q-Kr84RESp2DVTJOrLzoDzGxv9tdMigs/view?usp=share_link']
]


fantasy.sort(() => (Math.random() > .5) ? 1 : -1);





let horror=[['https://upload.wikimedia.org/wikipedia/en/thumb/f/f4/The_Only_Good_Indians.jpg/220px-The_Only_Good_Indians.jpg','https://drive.google.com/file/d/17U_k3ayOripDCBQjtEKODT0u6t99CoCW/view?usp=share_link'],
['https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Dracula_1st_ed_cover_reproduction.jpg/220px-Dracula_1st_ed_cover_reproduction.jpg','https://drive.google.com/file/d/1SZhGPwyaLn9sstcFfxvG6zASCUUr777c/view?usp=share_link'],
['https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Frankenstein_1818_edition_title_page.jpg/220px-Frankenstein_1818_edition_title_page.jpg','https://drive.google.com/file/d/1nscHUfccaT5sPhYEAmC6KZyzE98YCPMO/view?usp=share_link'],
              ['https://upload.wikimedia.org/wikipedia/en/thumb/0/04/HauntingOfHillHouse.JPG/220px-HauntingOfHillHouse.JPG','https://drive.google.com/file/d/1gBtgeCA9IOCGnOiAivnkVIXs6Qt7R3Wl/view?usp=share_link'],
              ['https://upload.wikimedia.org/wikipedia/en/thumb/d/de/House_of_leaves.jpg/220px-House_of_leaves.jpg','https://drive.google.com/file/d/1QBqbukXmIKYyUufLdBW7Y49sCzIAwJBP/view?usp=share_link'],
              ['https://upload.wikimedia.org/wikipedia/en/5/5a/It_%282017%29_poster.jpg','https://drive.google.com/file/d/1F7WIZOeyzgodM52f1nwnAjXrTqsyFbL7/view?usp=share_link'],
              ['https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Shiningnovel.jpg/220px-Shiningnovel.jpg','https://drive.google.com/file/d/15xkkSxChSyeEBOSNrDYZmp0U1E2Fl74J/view?usp=share_link'],
              ['https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/Exorcist_ver2.jpg/220px-Exorcist_ver2.jpg','https://drive.google.com/file/d/19056e0ZK5kKFfuLLWpEPbdOs6jy6Z_6P/view?usp=share_link'],
              ['https://upload.wikimedia.org/wikipedia/en/3/31/Carrienovel.jpg','https://drive.google.com/file/d/1-S-28LDrC8fEpwKKjQ_tvPXPsDEM3UZK/view?usp=share_link'],
              ['https://upload.wikimedia.org/wikipedia/en/8/8e/Ruins_Smith.jpg','https://drive.google.com/file/d/1nJi51JYlqebG50C_nqN4XMzxk6I1z3YV/view?usp=share_link']
]
horror.sort(() => (Math.random() > .5) ? 1 : -1);




let thriller=[['https://upload.wikimedia.org/wikipedia/en/thumb/d/df/The_Silent_Patient_early_2019_UK_edition.png/220px-The_Silent_Patient_early_2019_UK_edition.png','https://drive.google.com/file/d/1eDM1nUKojX68dzarNMe5V7CE6jWrqOxg/view?usp=share_link'],
['https://upload.wikimedia.org/wikipedia/en/thumb/7/7e/Gone_Girl_%28Flynn_novel%29.jpg/220px-Gone_Girl_%28Flynn_novel%29.jpg','https://drive.google.com/file/d/1v5gfGVR6JrenYT2z5sbCNUSjizYV8HqV/view?usp=share_link'],
['https://upload.wikimedia.org/wikipedia/en/thumb/5/50/The_Girl_On_The_Train_%28US_cover_2015%29.png/220px-The_Girl_On_The_Train_%28US_cover_2015%29.png','https://drive.google.com/file/d/1-KHZ4lT4sUOEdbJNoEIkRNpXJhvbDkMi/view?usp=share_link'],
['https://upload.wikimedia.org/wikipedia/en/thumb/b/b6/BeforeIGoToSleep.jpg/220px-BeforeIGoToSleep.jpg','https://drive.google.com/file/d/1Op6rZJ4nZg9yA06ijyBp7k6qr_kqxVQl/view?usp=share_link'],
['https://upload.wikimedia.org/wikipedia/en/thumb/b/b4/The_Wife_Between_Us.jpg/220px-The_Wife_Between_Us.jpg','https://drive.google.com/file/d/1qUxgJJ6gKaMMf3Io9XK5fuTbjcLGswgf/view?usp=share_link'],
['https://upload.wikimedia.org/wikipedia/en/thumb/d/dc/My_Sister%2C_the_Serial_Killer.jpg/220px-My_Sister%2C_the_Serial_Killer.jpg','https://upload.wikimedia.org/wikipedia/en/thumb/d/dc/My_Sister%2C_the_Serial_Killer.jpg/220px-My_Sister%2C_the_Serial_Killer.jpg'],
['https://upload.wikimedia.org/wikipedia/en/b/b5/Book_cover_of_Kepnes%27s_2014_novel_%22You%22.png','https://drive.google.com/file/d/1mfg2Mz06OtTz7qaTIJs7zAdj14WZ0jrB/view?usp=share_link'],
['https://upload.wikimedia.org/wikipedia/en/thumb/6/62/Silence3.png/220px-Silence3.png','https://drive.google.com/file/d/1QgQSvGYOcxgJxn-A_BCNoNRFy6fyFHIH/view?usp=share_link'],
['https://upload.wikimedia.org/wikipedia/en/1/1f/Big_Little_Lies_Cover.jpg','https://drive.google.com/file/d/1Az4mv8bAOHLe7RjnGrVYkNUs7mpXtZZ8/view?usp=share_link'],
['https://upload.wikimedia.org/wikipedia/en/5/5e/Lock_Every_Door.jpg','https://drive.google.com/file/d/1K9UUt5kkpjMsaYYkAlyHkAiy-ChdiFmE/view?usp=share_link']
]
thriller.sort(() => (Math.random() > .5) ? 1 : -1);


let Best =[['https://upload.wikimedia.org/wikipedia/en/thumb/d/df/The_Silent_Patient_early_2019_UK_edition.png/220px-The_Silent_Patient_early_2019_UK_edition.png','https://drive.google.com/file/d/1eDM1nUKojX68dzarNMe5V7CE6jWrqOxg/view?usp=share_link'],
['https://upload.wikimedia.org/wikipedia/en/thumb/7/7e/Gone_Girl_%28Flynn_novel%29.jpg/220px-Gone_Girl_%28Flynn_novel%29.jpg','https://drive.google.com/file/d/1v5gfGVR6JrenYT2z5sbCNUSjizYV8HqV/view?usp=share_link'],
['https://upload.wikimedia.org/wikipedia/en/thumb/5/50/The_Girl_On_The_Train_%28US_cover_2015%29.png/220px-The_Girl_On_The_Train_%28US_cover_2015%29.png','https://drive.google.com/file/d/1-KHZ4lT4sUOEdbJNoEIkRNpXJhvbDkMi/view?usp=share_link'],
['https://upload.wikimedia.org/wikipedia/en/thumb/b/b6/BeforeIGoToSleep.jpg/220px-BeforeIGoToSleep.jpg','https://drive.google.com/file/d/1Op6rZJ4nZg9yA06ijyBp7k6qr_kqxVQl/view?usp=share_link'],
['https://upload.wikimedia.org/wikipedia/en/thumb/b/b4/The_Wife_Between_Us.jpg/220px-The_Wife_Between_Us.jpg','https://drive.google.com/file/d/1qUxgJJ6gKaMMf3Io9XK5fuTbjcLGswgf/view?usp=share_link'],
['https://upload.wikimedia.org/wikipedia/en/thumb/d/dc/My_Sister%2C_the_Serial_Killer.jpg/220px-My_Sister%2C_the_Serial_Killer.jpg','https://upload.wikimedia.org/wikipedia/en/thumb/d/dc/My_Sister%2C_the_Serial_Killer.jpg/220px-My_Sister%2C_the_Serial_Killer.jpg'],
['https://upload.wikimedia.org/wikipedia/en/b/b5/Book_cover_of_Kepnes%27s_2014_novel_%22You%22.png','https://drive.google.com/file/d/1mfg2Mz06OtTz7qaTIJs7zAdj14WZ0jrB/view?usp=share_link'],
['https://upload.wikimedia.org/wikipedia/en/thumb/6/62/Silence3.png/220px-Silence3.png','https://drive.google.com/file/d/1QgQSvGYOcxgJxn-A_BCNoNRFy6fyFHIH/view?usp=share_link'],
['https://upload.wikimedia.org/wikipedia/en/1/1f/Big_Little_Lies_Cover.jpg','https://drive.google.com/file/d/1Az4mv8bAOHLe7RjnGrVYkNUs7mpXtZZ8/view?usp=share_link'],
['https://upload.wikimedia.org/wikipedia/en/5/5e/Lock_Every_Door.jpg','https://drive.google.com/file/d/1K9UUt5kkpjMsaYYkAlyHkAiy-ChdiFmE/view?usp=share_link']]

Best.sort(() => (Math.random() > .5) ? 1 : -1);






let Top = [['https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Mrs._Dalloway_cover.jpg/440px-Mrs._Dalloway_cover.jpg','https://drive.google.com/file/d/10LY_F256FqhwShqNwIBR3xULHSgRursi/view?usp=share_link'],
             ['https://upload.wikimedia.org/wikipedia/en/c/c0/Thecorrectionscvr.jpg','https://drive.google.com/file/d/1k8rFmThucm8UMBt7vUqY7bPgiYKDx-Gn/view?usp=share_link'],
             ['https://upload.wikimedia.org/wikipedia/en/3/38/Cloud_atlas.jpg','https://drive.google.com/file/d/1omf6PjA9_QZwSSrxWpTndwzCml6yVHmV/view?usp=share_link'],
             ['https://upload.wikimedia.org/wikipedia/en/1/1d/Twilightbook.jpg','https://drive.google.com/file/d/1Z2JjKvBY5SxwFK5yP-HJyFMNJ_DdnEyb/view?usp=share_link'],
             ['https://upload.wikimedia.org/wikipedia/en/4/4a/The_White_Tiger.JPG','https://drive.google.com/file/d/1J6buA4PbT0U48CGzKKkKuJaL2G_uulW5/view?usp=share_link'],
             ['https://upload.wikimedia.org/wikipedia/en/1/1f/WhiteTeeth.jpg','https://drive.google.com/file/d/1L-zSTdJpbHUb8ZLUxAKZ0EbxN8m5NYzR/view?usp=share_link'],
             ['https://upload.wikimedia.org/wikipedia/en/e/ed/Wolf_Hall_cover.jpg','https://drive.google.com/file/d/1Ug5I79zySOVdnXPEJ61PJ_7wkLC8Pn8K/view?usp=share_link'],
             ['https://upload.wikimedia.org/wikipedia/en/6/61/Coraline.jpg','https://drive.google.com/file/d/1CQMlElPXmkYI5TW0V9Lu2JbjGRSsqW-6/view?usp=share_link'],
             ['https://upload.wikimedia.org/wikipedia/en/6/66/Never_Let_Me_Go_%28First-edition_cover%29.jpg','https://drive.google.com/file/d/1NnlDRQTKkD1XL3NDdfHMV-W0PcrJnSeG/view?usp=share_link'],
             ['https://upload.wikimedia.org/wikipedia/en/6/62/Kite_runner.jpg','https://drive.google.com/file/d/1mL6IUQjGOLclPaMOvYt5_XhmEPUYJmml/view?usp=share_link']
]
Top.sort(() => (Math.random() > .5) ? 1 : -1);

// let Top=['https://st.depositphotos.com/1006899/2590/i/600/depositphotos_25909751-stock-photo-action-metaphor.jpg']
  // let Horror=['https://st.depositphotos.com/1006899/2590/i/600/depositphotos_25909751-stock-photo-action-metaphor.jpg']
  // let Love=['https://images.pexels.com/photos/6788862/pexels-photo-6788862.jpeg?cs=srgb&dl=pexels-how-far-from-home-6788862.jpg&fm=jpg']
  // let Action=['https://images.pexels.com/photos/6788862/pexels-photo-6788862.jpeg?cs=srgb&dl=pexels-how-far-from-home-6788862.jpg&fm=jpg']
  return (
    // <Router>
    <div className="maincontainer">
      <div className="grid-container">
        <button className="grid-item st"><Link  to="/rec/fiction" style={{textDecoration:'none' ,color:'white' }}>Fiction</Link></button>
        <button className="grid-item"  id="st"  ><Link  to="/rec/horror"style={{textDecoration:'none' ,color:'white'}}>Horror</Link></button>
        <button className="grid-item"  id="st"  ><Link  to="/rec/action"style={{textDecoration:'none' ,color:'white'}}>Action</Link></button>
        <button className="grid-item"  id="st"   ><Link  to="/rec/fantasy"style={{textDecoration:'none' ,color:'white'}}>Fantasy</Link></button>
        <button className="grid-item"  id="st"  ><Link  to="/rec/thriller"style={{textDecoration:'none' ,color:'white'}}>Thriller</Link></button>
        <button className="grid-item"  id="st"  ><Link  to="/rec/Top"style={{textDecoration:'none' ,color:'white'}}>Love  </Link></button>
        <button className="grid-item"  id="st"  ><Link  to="/rec/Top"style={{textDecoration:'none' ,color:'white'}}>Other</Link></button>
        
      </div>
      <Routes>
          {/* <Route path="/" element={<Box abc={Top}/>}/> */}
          <Route path="/" element={<Box abc={Best}/>}/>
          <Route path="/fiction" element={<Box abc={Fiction}/>}/>
          <Route path="/horror" element={<Box abc={Horror}/>}/>
          <Route path="/action" element={<Box abc={Action}/>}/>
          <Route path="/fantasy" element={<Box abc={fantasy}/>}/>
          <Route path="/thriller" element={<Box abc={thriller}/>}/>
          <Route path="/Top" element={<Box abc={Top}/>}/>
          {/* <Route path="/love" element={<Box abc={Love}/>}/> */}
          {/* <Route path="/hor" element={<Box abc={y}/>}/>
          <Route path="/act" element={<Box abc={x}/>}/> */}
          
        </Routes>
      {/* <Box abc={x} /> */}
    </div>
    // {/* </Router> */}
  );
}