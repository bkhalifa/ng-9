// import { InMemoryDbService } from 'angular-in-memory-web-api';
// import { Product } from '../core/product';

// export class ProductData implements InMemoryDbService {

//     createDb() {
//         const products: Product[] = [{
//           "productId": 407,
//           "categoryId": 17,
//           "modelNumber": "BILELBK",
//           "modelName": "Ben Khliafa",
//           "productImage": "image.png",
//           "unitCost": 99.99,
//           "description": "Bilel Ben Khalifa is a software developer !."
//         },
//         {
//           "productId": 391,
//           "categoryId": 17,
//           "modelNumber": "BSUR2DUC",
//           "modelName": "Bullet Proof Facial Tissue",
//           "productImage": "image.png",
//           "unitCost": 79.99,
//           "description": "Being a spy can be dangerous work. Our patented Bulletproof Facial Tissue gives a spy confidence that any bullets in the vicinity risk-free. Unlike traditional bulletproof devices, these lightweight tissues have amazingly high tensile strength. To protect the upper body, simply place a tissue in your shirt pocket. To protect the lower body, place a tissue in your pants pocket. If you do not have any pockets, be sure to check out our Bulletproof Tape. 100 tissues per box. WARNING: Bullet must not be moving for device to successfully stop penetration."
//         },
//         {
//           "productId": 376,
//           "categoryId": 15,
//           "modelNumber": "CITSME9",
//           "modelName": "Cloaking Device",
//           "productImage": "image.png",
//           "unitCost": 9999.99,
//           "description": "Worried about detection on your covert mission? Confuse mission-threatening forces with this cloaking device. Powerful new features include string-activated pre-programmed phrases such as \"Danger! Danger!\", \"Reach for the sky!\", and other anti-enemy expressions. Hyper-reactive karate chop action deters even the most persistent villain."
//         },
//         {
//           "productId": 386,
//           "categoryId": 17,
//           "modelNumber": "1MOR4ME",
//           "modelName": "Cocktail Party Pal",
//           "productImage": "image.png",
//           "unitCost": 69.99,
//           "description": "Do your assignments have you flitting from one high society party to the next? Worried about keeping your wits about you as you mingle witih the champagne-and-caviar crowd? No matter how many drinks you're offered, you can safely operate even the most complicated heavy machinery as long as you use our model 1MOR4ME alcohol-neutralizing coaster. Simply place the beverage glass on the patented circle to eliminate any trace of alcohol in the drink."
//         },
//         {
//           "productId": 360,
//           "categoryId": 14,
//           "modelNumber": "RED1",
//           "modelName": "Communications Device",
//           "productImage": "image.png",
//           "unitCost": 49.99,
//           "description": "Subversively stay in touch with this miniaturized wireless communications device. Speak into the pointy end and listen with the other end! Voice-activated dialing makes calling for backup a breeze. Excellent for undercover work at schools, rest homes, and most corporate headquarters. Comes in assorted colors."
//         },
//         {
//           "productId": 388,
//           "categoryId": 20,
//           "modelNumber": "ICUCLRLY00",
//           "modelName": "Contact Lenses",
//           "productImage": "image.png",
//           "unitCost": 59.99,
//           "description": "Traditional binoculars and night goggles can be bulky, especially for assignments in confined areas. The problem is solved with these patent-pending contact lenses, which give excellent visibility up to 100 miles. New feature: now with a night vision feature that permits you to see in complete darkness! Contacts now come in a variety of fashionable colors for coordinating with your favorite ensembles."
//         },
//         {
//           "productId": 394,
//           "categoryId": 15,
//           "modelNumber": "BHONST93",
//           "modelName": "Correction Fluid",
//           "productImage": "image.png",
//           "unitCost": 1.99,
//           "description": "Disguised as typewriter correction fluid, this scientific truth serum forces subjects to correct anything not perfectly true. Simply place a drop of the special correction fluid on the tip of the subject's nose. Within seconds, the suspect will automatically correct every lie. Effects from Correction Fluid last approximately 30 minutes per drop. WARNING: Discontinue use if skin appears irritated."
//         },
//         {
//           "productId": 374,
//           "categoryId": 15,
//           "modelNumber": "DNTGCGHT",
//           "modelName": "Counterfeit Creation Wallet",
//           "productImage": "image.png",
//           "unitCost": 999.99,
//           "description": "Don't be caught penniless in Prague without this hot item! Instantly creates replicas of most common currencies! Simply place rocks and water in the wallet, close, open up again, and remove your legal tender!"
//         },
//         {
//           "productId": 396,
//           "categoryId": 19,
//           "modelNumber": "BPRECISE00",
//           "modelName": "Dilemma Resolution Device",
//           "productImage": "image.png",
//           "unitCost": 11.99,
//           "description": "Facing a brick wall? Stopped short at a long, sheer cliff wall?  Carry our handy lightweight calculator for just these emergencies. Quickly enter in your dilemma and the calculator spews out the best solutions to the problem.   Manufacturer Warning: Use at own risk. Suggestions may lead to adverse outcomes."
//         },
//         {
//           "productId": 399,
//           "categoryId": 20,
//           "modelNumber": "QLT2112",
//           "modelName": "Document Transportation System",
//           "productImage": "image.png",
//           "unitCost": 299.99,
//           "description": "Keep your stolen Top Secret documents in a place they'll never think to look!  This patent leather briefcase has multiple pockets to keep documents organized.  Top quality craftsmanship to last a lifetime."
//         },
//         {
//           "productId": 384,
//           "categoryId": 19,
//           "modelNumber": "FF007",
//           "modelName": "Eavesdrop Detector",
//           "productImage": "image.png",
//           "unitCost": 99.99,
//           "description": "Worried that counteragents have placed listening devices in your home or office? No problem! Use our bug-sweeping wiener to check your surroundings for unwanted surveillance devices. Just wave the frankfurter around the room ... when bugs are detected, this \"foot-long\" beeps! Comes complete with bun, relish, mustard, and headphones for privacy."
//         },
//         {
//           "productId": 356,
//           "categoryId": 20,
//           "modelNumber": "STKY1",
//           "modelName": "Edible Tape",
//           "productImage": "image.png",
//           "unitCost": 3.99,
//           "description": "The latest in personal survival gear, the STKY1 looks like a roll of ordinary office tape, but can save your life in an emergency.  Just remove the tape roll and place in a kettle of boiling water with mixed vegetables and a ham shank. In just 90 minutes you have a great tasking soup that really sticks to your ribs! Herbs and spices not included."
//         },
//         {
//           "productId": 365,
//           "categoryId": 19,
//           "modelNumber": "BRTLGT1",
//           "modelName": "Effective Flashlight",
//           "productImage": "image.png",
//           "unitCost": 9.99,
//           "description": "The most powerful darkness-removal device offered to creatures of this world.  Rather than amplifying existing/secondary light, this handy product actually REMOVES darkness allowing you to see with your own eyes.  Must-have for nighttime operations. An affordable alternative to the Night Vision Goggles."
//         },
//         {
//           "productId": 385,
//           "categoryId": 16,
//           "modelNumber": "LNGWADN",
//           "modelName": "Escape Cord",
//           "productImage": "image.png",
//           "unitCost": 13.99,
//           "description": "Any agent assigned to mountain terrain should carry this ordinary-looking extension cord ... except that it's really a rappelling rope! Pull quickly on each end to convert the electrical cord into a rope capable of safely supporting up to two agents. Comes in various sizes including Mt McKinley, Everest, and Kilimanjaro. WARNING: To prevent serious injury, be sure to disconnect from wall socket before use."
//         },
//         {
//           "productId": 357,
//           "categoryId": 16,
//           "modelNumber": "P38",
//           "modelName": "Escape Vehicle (Air)",
//           "productImage": "image.png",
//           "unitCost": 2.99,
//           "description": "In a jam, need a quick escape? Just whip out a sheet of our patented P38 paper and, with a few quick folds, it converts into a lighter-than-air escape vehicle! Especially effective on windy days - no fuel required. Comes in several sizes including letter, legal, A10, and B52."
//         },
//         {
//           "productId": 359,
//           "categoryId": 16,
//           "modelNumber": "PT109",
//           "modelName": "Escape Vehicle (Water)",
//           "productImage": "image.png",
//           "unitCost": 1299.99,
//           "description": "Camouflaged as stylish wing tips, these 'shoes' get you out of a jam on the high seas instantly. Exposed to water, the pair transforms into speedy miniature inflatable rafts. Complete with 76 HP outboard motor, these hip heels will whisk you to safety even in the roughest of seas. Warning: Not recommended for beachwear."
//         },
//         {
//           "productId": 358,
//           "categoryId": 19,
//           "modelNumber": "NOZ119",
//           "modelName": "Extracting Tool",
//           "productImage": "image.png",
//           "unitCost": 199,
//           "description": "High-tech miniaturized extracting tool. Excellent for extricating foreign objects from your person. Good for picking up really tiny stuff, too! Cleverly disguised as a pair of tweezers. "
//         },
//         {
//           "productId": 401,
//           "categoryId": 14,
//           "modelNumber": "TCKLR1",
//           "modelName": "Fake Moustache Translator",
//           "productImage": "image.png",
//           "unitCost": 599.99,
//           "description": "Fake Moustache Translator attaches between nose and mouth to double as a language translator and identity concealer. Sophisticated electronics translate your voice into the desired language. Wriggle your nose to toggle between Spanish, English, French, and Arabic. Excellent on diplomatic missions."
//         },
//         {
//           "productId": 375,
//           "categoryId": 16,
//           "modelNumber": "WRLD00",
//           "modelName": "Global Navigational System",
//           "productImage": "image.png",
//           "unitCost": 29.99,
//           "description": "No spy should be without one of these premium devices. Determine your exact location with a quick flick of the finger. Calculate destination points by spinning, closing your eyes, and stopping it with your index finger."
//         },
//         {
//           "productId": 378,
//           "categoryId": 17,
//           "modelNumber": "SQUKY1",
//           "modelName": "Guard Dog Pacifier",
//           "productImage": "image.png",
//           "unitCost": 14.99,
//           "description": "Pesky guard dogs become a spy's best friend with the Guard Dog Pacifier. Even the most ferocious dogs suddenly act like cuddly kittens when they see this prop.  Simply hold the device in front of any threatening dogs, shaking it mildly.  For tougher canines, a quick squeeze emits an irresistible squeak that never fails to  place the dog under your control."
//         },
//         {
//           "productId": 400,
//           "categoryId": 15,
//           "modelNumber": "THNKDKE1",
//           "modelName": "Hologram Cufflinks",
//           "productImage": "image.png",
//           "unitCost": 799.99,
//           "description": "Just point, and a turn of the wrist will project a hologram of you up to 100 yards away. Sneaking past guards will be child's play when you've sent them on a wild goose chase. Note: Hologram adds ten pounds to your appearance."
//         },
//         {
//           "productId": 377,
//           "categoryId": 15,
//           "modelNumber": "BME007",
//           "modelName": "Identity Confusion Device",
//           "productImage": "image.png",
//           "unitCost": 6.99,
//           "description": "Never leave on an undercover mission without our Identity Confusion Device! If a threatening person approaches, deploy the device and point toward the oncoming individual. The subject will fail to recognize you and let you pass unnoticed. Also works well on dogs."
//         },
//         {
//           "productId": 404,
//           "categoryId": 14,
//           "modelNumber": "JWLTRANS6",
//           "modelName": "Interpreter Earrings",
//           "productImage": "image.png",
//           "unitCost": 459.99,
//           "description": "The simple elegance of our stylish monosex earrings accents any wardrobe, but their clean lines mask the sophisticated technology within. Twist the lower half to engage a translator function that intercepts spoken words in any language and converts them to the wearer's native tongue. Warning: do not use in conjunction with our Fake Moustache Translator product, as the resulting feedback loop makes any language sound like Pig Latin."
//         },
//         {
//           "productId": 371,
//           "categoryId": 18,
//           "modelNumber": "WOWPEN",
//           "modelName": "Mighty Mighty Pen",
//           "productImage": "image.png",
//           "unitCost": 129.99,
//           "description": "Some spies claim this item is more powerful than a sword. After examining the titanium frame, built-in blowtorch, and Nerf dart-launcher, we tend to agree! "
//         },
//         {
//           "productId": 437,
//           "categoryId": 17,
//           "modelNumber": "protection model numbr",
//           "modelName": "model number",
//           "productImage": "image.png",
//           "unitCost": 0,
//           "description": "dffs"
//         },
//         {
//           "productId": 363,
//           "categoryId": 18,
//           "modelNumber": "NTMBS1",
//           "modelName": "Multi-Purpose Rubber Band",
//           "productImage": "image.png",
//           "unitCost": 1.99,
//           "description": "One of our most popular items!  A band of rubber that stretches  20 times the original size. Uses include silent one-to-one communication across a crowded room, holding together a pack of Persuasive Pencils, and powering lightweight aircraft. Beware, stretching past 20 feet results in a painful snap and a rubber strip."
//         },
//         {
//           "productId": 370,
//           "categoryId": 17,
//           "modelNumber": "TGFDA",
//           "modelName": "Multi-Purpose Towelette",
//           "productImage": "image.png",
//           "unitCost": 12.99,
//           "description": "Don't leave home without your monogrammed towelette! Made from lightweight, quick-dry fabric, this piece of equipment has more uses in a spy's day than a Swiss Army knife. The perfect all-around tool while undercover in the locker room: serves as towel, shield, disguise, sled, defensive weapon, whip and emergency food source. Handy bail gear for the Toaster Boat. Monogram included with purchase price."
//         },
//         {
//           "productId": 406,
//           "categoryId": 19,
//           "modelNumber": "GRTWTCH9",
//           "modelName": "Multi-Purpose Watch",
//           "productImage": "image.png",
//           "unitCost": 399.99,
//           "description": "In the tradition of famous spy movies, the Multi Purpose Watch comes with every convenience! Installed with lighter, TV, camera, schedule-organizing software, MP3 player, water purifier, spotlight, and tire pump. Special feature: Displays current date and time. Kitchen sink add-on will be available in the fall of 2001."
//         },
//         {
//           "productId": 397,
//           "categoryId": 14,
//           "modelNumber": "LSRPTR1",
//           "modelName": "Nonexplosive Cigar",
//           "productImage": "image.png",
//           "unitCost": 29.99,
//           "description": "Contrary to popular spy lore, not all cigars owned by spies explode! Best used during mission briefings, our Nonexplosive Cigar is really a cleverly-disguised, top-of-the-line, precision laser pointer. Make your next presentation a hit."
//         },
//         {
//           "productId": 372,
//           "categoryId": 20,
//           "modelNumber": "ICNCU",
//           "modelName": "Perfect-Vision Glasses",
//           "productImage": "image.png",
//           "unitCost": 129.99,
//           "description": "Avoid painful and potentially devastating laser eye surgery and contact lenses. Cheaper and more effective than a visit to the optometrist, these Perfect-Vision Glasses simply slide over nose and eyes and hook on ears. Suddenly you have 20/20 vision! Glasses also function as HUD (Heads Up Display) for most European sports cars manufactured after 1992."
//         },
//         {
//           "productId": 362,
//           "categoryId": 14,
//           "modelNumber": "LK4TLNT",
//           "modelName": "Persuasive Pencil",
//           "productImage": "image.png",
//           "unitCost": 1.99,
//           "description": "Persuade anyone to see your point of view!  Captivate your friends and enemies alike!  Draw the crime-scene or map out the chain of events.  All you need is several years of training or copious amounts of natural talent. You're halfway there with the Persuasive Pencil. Purchase this item with the Retro Pocket Protector Rocket Pack for optimum disguise."
//         },
//         {
//           "productId": 373,
//           "categoryId": 17,
//           "modelNumber": "LKARCKT",
//           "modelName": "Pocket Protector Rocket Pack",
//           "productImage": "image.png",
//           "unitCost": 1.99,
//           "description": "Any debonair spy knows that this accoutrement is coming back in style. Flawlessly protects the pockets of your short-sleeved oxford from unsightly ink and pencil marks. But there's more! Strap it on your back and it doubles as a rocket pack. Provides enough turbo-thrust for a 250-pound spy or a passel of small children. Maximum travel radius: 3000 miles."
//         },
//         {
//           "productId": 442,
//           "categoryId": 17,
//           "modelNumber": "test",
//           "modelName": "protection model",
//           "productImage": "image.png",
//           "unitCost": 0,
//           "description": "test this is me !"
//         },
//         {
//           "productId": 445,
//           "categoryId": 17,
//           "modelNumber": "test",
//           "modelName": "protection model",
//           "productImage": "4.jpg",
//           "unitCost": 0,
//           "description": "dfdsfds"
//         },
//         {
//           "productId": 355,
//           "categoryId": 16,
//           "modelNumber": "RU007",
//           "modelName": "Rain Racer 2000",
//           "productImage": "image.png",
//           "unitCost": 1499.99,
//           "description": "Looks like an ordinary bumbershoot, but don't be fooled! Simply place Rain Racer's tip on the ground and press the release latch. Within seconds, this ordinary rain umbrella converts into a two-wheeled gas-powered mini-scooter. Goes from 0 to 60 in 7.5 seconds - even in a driving rain! Comes in black, blue, and candy-apple red."
//         },
//         {
//           "productId": 387,
//           "categoryId": 20,
//           "modelNumber": "SQRTME1",
//           "modelName": "Remote Foliage Feeder",
//           "productImage": "image.png",
//           "unitCost": 9.99,
//           "description": "Even spies need to care for their office plants.  With this handy remote watering device, you can water your flowers as a spy should, from the comfort of your chair.  Water your plants from up to 50 feet away.  Comes with an optional aiming system that can be mounted to the top for improved accuracy."
//         },
//         {
//           "productId": 390,
//           "categoryId": 19,
//           "modelNumber": "ULOST007",
//           "modelName": "Rubber Stamp Beacon",
//           "productImage": "image.png",
//           "unitCost": 129.99,
//           "description": "With the Rubber Stamp Beacon, you'll never get lost on your missions again. As you proceed through complicated terrain, stamp a stationary object with this device. Once an object has been stamped, the stamp's patented ink will emit a signal that can be detected up to 153.2 miles away by the receiver embedded in the device's case. WARNING: Do not expose ink to water."
//         },
//         {
//           "productId": 393,
//           "categoryId": 20,
//           "modelNumber": "NOBOOBOO4U",
//           "modelName": "Speed Bandages",
//           "productImage": "image.png",
//           "unitCost": 3.99,
//           "description": "Even spies make mistakes.  Barbed wire and guard dogs pose a threat of injury for the active spy.  Use our special bandages on cuts and bruises to rapidly heal the injury.  Depending on the severity of the wound, the bandages can take between 10 to 30 minutes to completely heal the injury."
//         },
//         {
//           "productId": 382,
//           "categoryId": 20,
//           "modelNumber": "CHEW99",
//           "modelName": "Survival Bar",
//           "productImage": "image.png",
//           "unitCost": 6.99,
//           "description": "Survive for up to four days in confinement with this handy item. Disguised as a common eraser, it's really a high-calorie food bar. Stranded in hostile territory without hope of nourishment? Simply break off a small piece of the eraser and chew vigorously for at least twenty minutes. Developed by the same folks who created freeze-dried ice cream, powdered drink mix, and glow-in-the-dark shoelaces."
//         },
//         {
//           "productId": 389,
//           "categoryId": 20,
//           "modelNumber": "OPNURMIND",
//           "modelName": "Telekinesis Spoon",
//           "productImage": "image.png",
//           "unitCost": 2.99,
//           "description": "Learn to move things with your mind! Broaden your mental powers using this training device to hone telekinesis skills. Simply look at the device, concentrate, and repeat \"There is no spoon\" over and over."
//         },
//         {
//           "productId": 402,
//           "categoryId": 20,
//           "modelNumber": "C00LCMB1",
//           "modelName": "Telescoping Comb",
//           "productImage": "image.png",
//           "unitCost": 399.99,
//           "description": "Use the Telescoping Comb to track down anyone, anywhere! Deceptively simple, this is no normal comb. Flip the hidden switch and two telescoping lenses project forward creating a surprisingly powerful set of binoculars (50X). Night-vision add-on is available for midnight hour operations."
//         },
//         {
//           "productId": 438,
//           "categoryId": 17,
//           "modelNumber": "test",
//           "modelName": "test model",
//           "productImage": "image.png",
//           "unitCost": 0,
//           "description": "fhggh dfghdghgfh"
//         },
//         {
//           "productId": 439,
//           "categoryId": 17,
//           "modelNumber": "protection test",
//           "modelName": "test model",
//           "productImage": "image.png",
//           "unitCost": 0,
//           "description": "dfdsfdsf"
//         },
//         {
//           "productId": 441,
//           "categoryId": 17,
//           "modelNumber": "protection test model",
//           "modelName": "test model",
//           "productImage": "image.png",
//           "unitCost": 0,
//           "description": "dfdfdsfsdfds"
//         },
//         {
//           "productId": 443,
//           "categoryId": 16,
//           "modelNumber": "travel test",
//           "modelName": "test model",
//           "productImage": "2.jpg",
//           "unitCost": 0,
//           "description": "this a test "
//         },
//         {
//           "productId": 446,
//           "categoryId": 17,
//           "modelNumber": "prodcution test",
//           "modelName": "test model",
//           "productImage": "2020-02-13 at 21-33-41.png",
//           "unitCost": 0,
//           "description": "this is test "
//         },
//         {
//           "productId": 447,
//           "categoryId": 20,
//           "modelNumber": "general test",
//           "modelName": "test model",
//           "productImage": "4.jpg",
//           "unitCost": 0,
//           "description": "fzdfdsfdf"
//         },
//         {
//           "productId": 448,
//           "categoryId": 18,
//           "modelNumber": "test",
//           "modelName": "test model",
//           "productImage": "3.jpg",
//           "unitCost": 0,
//           "description": "gghhgj"
//         },
//         {
//           "productId": 449,
//           "categoryId": 16,
//           "modelNumber": "asma",
//           "modelName": "test model",
//           "productImage": "timbre.PNG",
//           "unitCost": 0,
//           "description": "xcwcwcvcxvc"
//         },
//         {
//           "productId": 450,
//           "categoryId": 16,
//           "modelNumber": "test",
//           "modelName": "test model",
//           "productImage": "5.jpg",
//           "unitCost": 0,
//           "description": "wdfdfdsfdsf"
//         },
//         {
//           "productId": 451,
//           "categoryId": 16,
//           "modelNumber": "travel mode",
//           "modelName": "test model",
//           "productImage": "4.jpg",
//           "unitCost": 0,
//           "description": "fdsfdsf"
//         },
//         {
//           "productId": 367,
//           "categoryId": 18,
//           "modelNumber": "INCPPRCLP",
//           "modelName": "The Incredible Versatile Paperclip",
//           "productImage": "image.png",
//           "unitCost": 1.49,
//           "description": "This 0. 01 oz piece of metal is the most versatile item in any respectable spy's toolbox and will come in handy in all sorts of situations. Serves as a wily lock pick, aerodynamic projectile (used in conjunction with Multi-Purpose Rubber Band), or escape-proof finger cuffs.  Best of all, small size and pliability means it fits anywhere undetected.  Order several today!"
//         },
//         {
//           "productId": 368,
//           "categoryId": 16,
//           "modelNumber": "DNTRPR",
//           "modelName": "Toaster Boat",
//           "productImage": "image.png",
//           "unitCost": 19999.98,
//           "description": "Turn breakfast into a high-speed chase! In addition to toasting bagels and breakfast pastries, this inconspicuous toaster turns into a speedboat at the touch of a button. Boasting top speeds of 60 knots and an ultra-quiet motor, this valuable item will get you where you need to be ... fast! Best of all, Toaster Boat is easily repaired using a Versatile Paperclip or a standard butter knife. Manufacturer's Warning: Do not submerge electrical items."
//         },
//         {
//           "productId": 379,
//           "categoryId": 17,
//           "modelNumber": "SHADE01",
//           "modelName": "Ultra Violet Attack Defender",
//           "productImage": "image.png",
//           "unitCost": 89.99,
//           "description": "Be safe and suave. A spy wearing this trendy article of clothing is safe from ultraviolet ray-gun attacks. Worn correctly, the Defender deflects rays from ultraviolet weapons back to the instigator. As a bonus, also offers protection against harmful solar ultraviolet rays, equivalent to SPF 50."
//         },
//         {
//           "productId": 364,
//           "categoryId": 19,
//           "modelNumber": "NE1RPR",
//           "modelName": "Universal Repair System",
//           "productImage": "image.png",
//           "unitCost": 4.99,
//           "description": "Few people appreciate the awesome repair possibilities contained in a single roll of duct tape. In fact, some houses in the Midwest are made entirely out of the miracle material contained in every roll! Can be safely used to repair cars, computers, people, dams, and a host of other items."
//         }
//           ]
//         return {products};
//     }
// }
