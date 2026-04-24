const cardsData = [
    // === หมวด SERVICE ===
    { name: "ร้านเสริมสวยและสปา", category: "Service", tags: "SERVICE / HEALTH / ENTERTAINMENT", cost: 6, income: 2, bonus: 'ถ้ามี "โรงงานเครื่องสำอางออร์แกนิก" รายได้ +1M', imageUrl: "images/Asset 13@4x.png" },
    { name: "บริษัทจัดอีเวนต์", category: "Service", tags: "SERVICE / MARKETING / ENTERTAINMENT", cost: 8, income: 3, bonus: 'ถ้ามี ธุรกิจ Influencer Marketing & Affiliate รายได้ +1M', imageUrl: "images/Asset 14@4x.png" },
    { name: "บริการทำความสะอาดบ้าน", category: "Service", tags: "SERVICE / SMART LIVING / HOSPITALITY", cost: 5, income: 2, bonus: 'ถ้ามี "โรงงานเซรามิก และของใช้ในครัวเรือน" รายได้ +1M', imageUrl: "images/Asset 15@4x.png" },
    { name: "โรงแรมขนาดเล็ก (บูทีคโฮเทล)", category: "Service", tags: "SERVICE / CONSTRUCTION / HOSPITALITY", cost: 10, income: 4, bonus: 'ถ้ามี "ธุรกิจท่องเที่ยวและทัวร์" รายได้ +1M', imageUrl: "images/Asset 16@4x.png" },
    { name: "บริการที่ปรึกษาทางธุรกิจ", category: "Service", tags: "SERVICE / FINANCE / EDUCATION", cost: 9, income: 3, bonus: 'ถ้ามี "สตาร์ทอัพด้านฟินเทค" หรือ "บริษัทให้บริการ Cloud Computing" รายได้ +1M', imageUrl: "images/Asset 17@4x.png" },
    { name: "บริการขนส่งและโลจิสติกส์", category: "Service", tags: "SERVICE / LOGISTIC / TECHNOLOGY / ENERGY", cost: 10, income: 3, bonus: 'ถ้ามี "ร้านค้าส่งอุปกรณ์ก่อสร้าง" หรือ "Marketplace เฉพาะกลุ่ม" รายได้ +1M', imageUrl: "images/Asset 8@4x.png" },
    { name: "โรงเรียนกวดวิชา", category: "Service", tags: "SERVICE / EDUCATION", cost: 6, income: 2, bonus: 'ถ้ามี "แพลตฟอร์มการเรียนออนไลน์" รายได้ +1M', imageUrl: "images/Asset 9@4x.png" },
    { name: "โรงพยาบาลเอกชน", category: "Service", tags: "SERVICE / HEALTH", cost: 15, income: 5, bonus: 'ถ้ามี "ร้านขายยาและเวชภัณฑ์" รายได้ +2M', imageUrl: "images/Asset 10@4x.png" },
    { name: "ธุรกิจท่องเที่ยวและทัวร์", category: "Service", tags: "SERVICE / HOSPITALITY / ENTERTAINMENT", cost: 9, income: 3, bonus: 'ถ้ามี "โรงแรมขนาดเล็ก" รายได้ +1M', imageUrl: "images/Asset 11@4x.png" },
    { name: "ฟิตเนสและสตูดิโอโยคะ", category: "Service", tags: "SERVICE / HEALTH / ENTERTAINMENT", cost: 7, income: 3, bonus: 'ถ้ามี "โรงงานผลิตเครื่องดื่มสุขภาพ" รายได้ +1M', imageUrl: "images/Asset 12@4x.png" },
    { name: "คลินิกทันตกรรม", category: "Service", tags: "SERVICE / HEALTH", cost: 8, income: 3, bonus: 'ถ้ามี "โรงพยาบาลเอกชน" รายได้ +1M', imageUrl: "images/Asset 72@4x.png" },

    // === หมวด MANUFACTURING ===
    { name: "โรงงานผลิตขนมขบเคี้ยว", category: "Manufacturing", tags: "MANUFACTURING / FOOD", cost: 9, income: 3, bonus: 'ถ้ามี "ธุรกิจ Subscription Box" หรือ "ร้านขายของชำในชุมชน" รายได้ +1M', imageUrl: "images/Asset 25@4x.png" },
    { name: "โรงงานผลิตเครื่องดื่มสุขภาพ", category: "Manufacturing", tags: "MANUFACTURING / FOOD / HEALTH", cost: 9, income: 3, bonus: 'ถ้ามี "ฟิตเนสและสตูดิโอโยคะ" หรือ "ร้านค้าออนไลน์ขายอาหารสุขภาพ" รายได้ +1M', imageUrl: "images/Asset 26@4x.png" },
    { name: "โรงงานเซรามิกและของใช้ในครัวเรือน", category: "Manufacturing", tags: "MANUFACTURING / INDUSTRIAL / LIFESTYLE", cost: 8, income: 3, bonus: 'ถ้ามี "ร้านขายของแต่งบ้าน" รายได้ +1M', imageUrl: "images/Asset 27@4x.png" },
    { name: "ผลิตเสื้อผ้า", category: "Manufacturing", tags: "MANUFACTURING / FASHION / INDUSTRIAL", cost: 6, income: 2, bonus: 'ถ้ามี "ร้านขายเสื้อผ้าแฟชั่น" รายได้ +1M', imageUrl: "images/Asset 18@4x.png" },
    { name: "โรงงานอาหารแช่แข็ง", category: "Manufacturing", tags: "MANUFACTURING / FOOD / LOGISTICS", cost: 8, income: 3, bonus: 'ถ้ามี "ร้านขายของชำในชุมชน" รายได้ +1M', imageUrl: "images/Asset 19@4x.png" },
    { name: "ผลิตเฟอร์นิเจอร์ไม้", category: "Manufacturing", tags: "MANUFACTURING / INDUSTRIAL", cost: 9, income: 3, bonus: 'ถ้ามี "ร้านขายของแต่งบ้าน" รายได้ +1M', imageUrl: "images/Asset 20@4x.png" },
    { name: "โรงงานผลิตพลังงานแสงอาทิตย์", category: "Manufacturing", tags: "MANUFACTURING / ENERGY / INDUSTRIAL / ENVIRONMENT", cost: 12, income: 7, bonus: 'ถ้ามี "ธุรกิจเทคโนโลยี" รายได้ +2M', imageUrl: "images/Asset 21@4x.png" },
    { name: "โรงงานเครื่องสำอางออร์แกนิก", category: "Manufacturing", tags: "MANUFACTURING / HEALTH / FASHION", cost: 10, income: 4, bonus: 'ถ้ามี "ร้านค้าออนไลน์ขายเครื่องสำอาง" รายได้ +1M', imageUrl: "images/Asset 22@4x.png" },
    { name: "โรงงานบรรจุภัณฑ์รักษ์โลก", category: "Manufacturing", tags: "MANUFACTURING / INDUSTRIAL / ENVIRONMENT", cost: 7, income: 3, bonus: 'ถ้ามี "ฟาร์มผักออร์แกนิก" รายได้ +1M', imageUrl: "images/Asset 23@4x.png" },
    { name: "โรงงานผลิตรองเท้ากีฬา", category: "Manufacturing", tags: "MANUFACTURING / SPORTS / INDUSTRIAL / FASHION", cost: 8, income: 3, bonus: 'ถ้ามี "ร้านขายอุปกรณ์กีฬา" รายได้ +1M', imageUrl: "images/Asset 24@4x.png" },
    { name: "โรงงานผลิตชิ้นส่วนยานยนต์", category: "Manufacturing", tags: "MANUFACTURING / INDUSTRIAL / LOGISTICS", cost: 10, income: 4, bonus: 'ถ้ามี "บริการขนส่งและโลจิสติกส์" รายได้ +1M', imageUrl: "images/Asset 29@4x.png" },
    { name: "โรงงานผลิตอุปกรณ์ก่อสร้าง", category: "Manufacturing", tags: "MANUFACTURING / INDUSTRIAL / CONSTRUCTION", cost: 10, income: 3, bonus: 'ถ้ามี "ร้านค้าส่งอุปกรณ์ก่อสร้าง" รายได้ +1M', imageUrl: "images/Asset 28@4x.png" },

    // === หมวด TRADING ===
    { name: "ขายเครื่องเขียน", category: "Trading", tags: "TRADING / EDUCATION / INDUSTRIAL", cost: 4, income: 1, bonus: 'ถ้ามี "โรงเรียนกวดวิชา" รายได้ +1M', imageUrl: "images/Asset 36@4x.png" },
    { name: "ขายของแต่งบ้าน", category: "Trading", tags: "TRADING / SECURITY / SMART LIVING / LOGISTICS / LIFESTYLE", cost: 7, income: 3, bonus: 'ถ้ามี "โรงงานผลิตเฟอร์นิเจอร์ไม้" รายได้ +1M', imageUrl: "images/Asset 37@4x.png" },
    { name: "ขายอุปกรณ์กีฬา", category: "Trading", tags: "TRADING / SPORTS / LIFESTYLE", cost: 6, income: 2, bonus: 'ถ้ามี "ฟิตเนสและสตูดิโอโยคะ" รายได้ +1M', imageUrl: "images/Asset 38@4x.png" },
    { name: "ขายต้นไม้และอุปกรณ์ปลูก", category: "Trading", tags: "TRADING / AGRICULTURE / ENVIRONMENT / LIFESTYLE", cost: 6, income: 2, bonus: 'ถ้ามี "ธุรกิจเพาะเลี้ยงไม้ดอกไม้ประดับ" รายได้ +1M', imageUrl: "images/Asset 39@4x.png" },
    { name: "ร้านค้าปลีก", category: "Trading", tags: "TRADING / LOGISTICS / FOOD / LIFESTYLE", cost: 9, income: 3, bonus: 'ถ้ามี "ธุรกิจดรอปชิป" รายได้ +1M', imageUrl: "images/Asset 30@4x.png" },
    { name: "ขายของชำในชุมชน", category: "Trading", tags: "TRADING / FOOD / LIFESTYLE", cost: 6, income: 2, bonus: 'ถ้ามี "ฟาร์มผักออร์แกนิก" หรือ "โรงงานอาหารแช่แข็ง" รายได้ +1M', imageUrl: "images/Asset 31@4x.png" },
    { name: "ค้าส่งอุปกรณ์ก่อสร้าง", category: "Trading", tags: "TRADING / CONSTRUCTION", cost: 6, income: 2, bonus: 'ถ้ามี "โรงงานผลิตอุปกรณ์ก่อสร้าง" รายได้ +1M', imageUrl: "images/Asset 32@4x.png" },
    { name: "ขายเสื้อผ้าแฟชั่น", category: "Trading", tags: "TRADING / FASHION", cost: 6, income: 2, bonus: 'ถ้ามี "โรงงานผลิตเสื้อผ้า" รายได้ +1M', imageUrl: "images/Asset 33@4x.png" },
    { name: "ขายอุปกรณ์อิเล็กทรอนิกส์", category: "Trading", tags: "TRADING / TECHNOLOGY / COMMUNICATION / SECURITY", cost: 7, income: 3, bonus: 'ถ้ามี "บริษัทพัฒนาแอปพลิเคชันมือถือ" รายได้ +1M', imageUrl: "images/Asset 34@4x.png" },
    { name: "ขายยาและเวชภัณฑ์", category: "Trading", tags: "TRADING / HEALTH", cost: 6, income: 2, bonus: 'ถ้ามี "คลินิกทันตกรรม" หรือ "โรงพยาบาลเอกชน" รายได้ +1M', imageUrl: "images/Asset 35@4x.png" },

    // === หมวด AGRICULTURE ===
    { name: "ฟาร์มผักออร์แกนิก", category: "Agriculture", tags: "AGRICULTURE / ENVIRONMENT / FOOD", cost: 6, income: 2, bonus: 'ถ้ามี "ร้านขายของชำในชุมชน" รายได้ +1M', imageUrl: "images/Asset 40@4x.png" },
    { name: "ฟาร์มเลี้ยงไก่ไข่อินทรีย์", category: "Agriculture", tags: "AGRICULTURE / ENVIRONMENT / FOOD", cost: 6, income: 2, bonus: 'ถ้ามี "ฟาร์มผักออร์แกนิก" หรือ "โรงงานอาหารแช่แข็ง" รายได้ +1M', imageUrl: "images/Asset 41@4x.png" },
    { name: "สวนผลไม้", category: "Agriculture", tags: "AGRICULTURE / ENVIRONMENT / FOOD", cost: 6, income: 2, bonus: 'ถ้ามี "ฟาร์มสมุนไพรไทย" รายได้ +1M', imageUrl: "images/Asset 42@4x.png" },
    { name: "ฟาร์มโคนม", category: "Agriculture", tags: "AGRICULTURE / FOOD", cost: 7, income: 3, bonus: 'ถ้ามี "โรงพยาบาลเอกชน" รายได้ +1M', imageUrl: "images/Asset 43@4x.png" },
    { name: "ฟาร์มเลี้ยงปลา", category: "Agriculture", tags: "AGRICULTURE / FOOD", cost: 7, income: 3, bonus: 'ถ้ามี "บริการขนส่งและโลจิสติกส์" รายได้ +1M', imageUrl: "images/Asset 44@4x.png" },
    { name: "ฟาร์มเลี้ยงกุ้ง", category: "Agriculture", tags: "AGRICULTURE / FOOD", cost: 8, income: 3, bonus: 'ถ้ามี "บริการขนส่งและโลจิสติกส์" รายได้ +1M', imageUrl: "images/Asset 45@4x.png" },
    { name: "ฟาร์มเห็ดเศรษฐกิจ", category: "Agriculture", tags: "AGRICULTURE / FOOD", cost: 6, income: 2, bonus: 'ถ้ามี "ร้านค้าออนไลน์ขายอาหารสุขภาพ" รายได้ +1M', imageUrl: "images/Asset 46@4x.png" },
    { name: "ฟาร์มสมุนไพรไทย", category: "Agriculture", tags: "AGRICULTURE / HEALTH / ENVIRONMENT", cost: 6, income: 2, bonus: 'ถ้ามี "ร้านขายยาและเวชภัณฑ์" รายได้ +1M', imageUrl: "images/Asset 47@4x.png" },
    { name: "ธุรกิจเพาะเลี้ยงไม้ดอกไม้ประดับ", category: "Agriculture", tags: "AGRICULTURE / LIFESTYLE", cost: 5, income: 2, bonus: 'ถ้ามี "ร้านขายต้นไม้และอุปกรณ์ปลูก" รายได้ +1M', imageUrl: "images/Asset 48@4x.png" },
    { name: "ฟาร์มเลี้ยงแกะและแพะ", category: "Agriculture", tags: "AGRICULTURE / FOOD", cost: 7, income: 3, bonus: 'ถ้ามี "ฟาร์มโคนม" รายได้ +1M', imageUrl: "images/Asset 49@4x.png" },

    // === หมวด TECHNOLOGY ===
    { name: "บริษัทซอฟต์แวร์", category: "Technology", tags: "TECHNOLOGY / COMMUNICATION / SMART LIVING", cost: 9, income: 3, bonus: 'ถ้ามี "ธุรกิจ AR/VR" หรือ "บริษัทพัฒนาแอปมือถือ" รายได้ +1M', imageUrl: "images/Asset 50@4x.png" },
    { name: "บริษัทพัฒนาแอปพลิเคชันมือถือ", category: "Technology", tags: "TECHNOLOGY / COMMUNICATION / SECURITY / SMART LIVING", cost: 8, income: 3, bonus: 'ถ้ามี "ร้านขายอุปกรณ์อิเล็กทรอนิกส์" รายได้ +1M', imageUrl: "images/Asset 51@4x.png" },
    { name: "ธุรกิจ IoT", category: "Technology", tags: "TECHNOLOGY / COMMUNICATION / SECURITY / SMART LIVING", cost: 9, income: 3, bonus: 'ถ้ามี "ร้านค้าออนไลน์ขายของใช้ในบ้าน" รายได้ +1M', imageUrl: "images/Asset 52@4x.png" },
    { name: "ธุรกิจปัญญาประดิษฐ์", category: "Technology", tags: "TECHNOLOGY / SECURITY / SMART LIVING / FINANCE", cost: 12, income: 4, bonus: 'ถ้ามี "บริษัทให้บริการ Cloud Computing" รายได้ +1M', imageUrl: "images/Asset 53@4x.png" },
    { name: "ธุรกิจด้านความปลอดภัยไซเบอร์", category: "Technology", tags: "TECHNOLOGY / SECURITY", cost: 10, income: 4, bonus: 'ถ้ามี "สตาร์ทอัพด้านฟินเทค" รายได้ +1M', imageUrl: "images/Asset 54@4x.png" },
    { name: "บริษัทให้บริการ Cloud Computing", category: "Technology", tags: "TECHNOLOGY / COMMUNICATION / SMART LIVING", cost: 11, income: 4, bonus: 'ถ้ามี "บริษัทซอฟต์แวร์" รายได้ +1M', imageUrl: "images/Asset 55@4x.png" },
    { name: "สตาร์ทอัพด้านฟินเทค", category: "Technology", tags: "TECHNOLOGY / FINANCE / COMMUNICATION", cost: 10, income: 3, bonus: 'ถ้ามี "บริการที่ปรึกษาทางธุรกิจ" รายได้ +1M', imageUrl: "images/Asset 56@4x.png" },
    { name: "บริษัทเกมออนไลน์", category: "Technology", tags: "TECHNOLOGY / ENTERTAINMENT / COMMUNICATION", cost: 8, income: 3, bonus: 'ถ้ามี "ธุรกิจ AR/VR" หรือ "บริษัทพัฒนาแอปมือถือ" รายได้ +1M', imageUrl: "images/Asset 57@4x.png" },
    { name: "ธุรกิจหุ่นยนต์อัตโนมัติ", category: "Technology", tags: "TECHNOLOGY / SECURITY / INDUSTRIAL", cost: 12, income: 4, bonus: 'ถ้ามี "โรงงานผลิตชิ้นส่วนยานยนต์" รายได้ +1M', imageUrl: "images/Asset 58@4x.png" },
    { name: "แพลตฟอร์มการเรียนออนไลน์", category: "Technology", tags: "TECHNOLOGY / EDUCATION / COMMUNICATION", cost: 8, income: 3, bonus: 'ถ้ามี "โรงเรียนกวดวิชา" รายได้ +1M', imageUrl: "images/Asset 59@4x.png" },
    { name: "ธุรกิจ AR/VR", category: "Technology", tags: "TECHNOLOGY / ENTERTAINMENT / COMMUNICATION / INDUSTRIAL", cost: 10, income: 3, bonus: 'ถ้ามี "บริษัทเกมออนไลน์" รายได้ +1M', imageUrl: "images/Asset 60@4x.png" },

    // === หมวด E-COMMERCE ===
    { name: "ร้านค้าออนไลน์ขายอาหารสุขภาพ", category: "E-commerce", tags: "E-COMMERCE / HEALTH / FOOD", cost: 7, income: 3, bonus: 'ถ้ามี "โรงงานผลิตเครื่องดื่มสุขภาพ" รายได้ +1M', imageUrl: "images/Asset 64@4x.png" },
    { name: "ร้านค้าออนไลน์ขายสินค้าท้องถิ่น", category: "E-commerce", tags: "E-COMMERCE / FOOD", cost: 5, income: 2, bonus: 'ถ้ามี "ธุรกิจเกษตรกรรม" รายได้ +1M', imageUrl: "images/Asset 65@4x.png" },
    { name: "ธุรกิจดรอปชิป", category: "E-commerce", tags: "E-COMMERCE / MARKETING / LOGISTICS", cost: 8, income: 3, bonus: 'ถ้ามี "ร้านค้าปลีก" รายได้ +1M', imageUrl: "images/Asset 66@4x.png" },
    { name: "Marketplace เฉพาะกลุ่ม", category: "E-commerce", tags: "E-COMMERCE / MARKETING / LOGISTICS", cost: 9, income: 3, bonus: 'ถ้ามี "บริการขนส่งและโลจิสติกส์" รายได้ +1M', imageUrl: "images/Asset 67@4x.png" },
    { name: "ธุรกิจขายคอร์สออนไลน์", category: "E-commerce", tags: "E-COMMERCE / EDUCATION", cost: 8, income: 3, bonus: 'ถ้ามี "แพลตฟอร์มการเรียนออนไลน์" รายได้ +1M', imageUrl: "images/Asset 68@4x.png" },
    { name: "ร้านค้าออนไลน์ขาย Gadget", category: "E-commerce", tags: "E-COMMERCE / TECHNOLOGY / SECURITY / COMMUNICATION", cost: 7, income: 3, bonus: 'ถ้ามี "บริษัทพัฒนาแอปพลิเคชันมือถือ" รายได้ +1M', imageUrl: "images/Asset 69@4x.png" },
    { name: "ธุรกิจ Subscription Box", category: "E-commerce", tags: "E-COMMERCE / MARKETING / FOOD / LIFESTYLE", cost: 7, income: 3, bonus: 'ถ้ามี "ฟาร์มผักออร์แกนิก" หรือ "โรงงานขนมขบเคี้ยว" รายได้ +1M', imageUrl: "images/Asset 70@4x.png" },
    { name: "ร้านค้าออนไลน์ขายเสื้อผ้า", category: "E-commerce", tags: "E-COMMERCE / FASHION", cost: 6, income: 2, bonus: 'ถ้ามี "โรงงานผลิตเสื้อผ้า" รายได้ +1M', imageUrl: "images/Asset 61@4x.png" },
    { name: "ร้านค้าออนไลน์ขายเครื่องสำอาง", category: "E-commerce", tags: "E-COMMERCE / FASHION", cost: 6, income: 2, bonus: 'ถ้ามี "โรงงานเครื่องสำอางออร์แกนิก" รายได้ +1M', imageUrl: "images/Asset 62@4x.png" },
    { name: "ร้านค้าออนไลน์ขายของใช้ในบ้าน", category: "E-commerce", tags: "E-COMMERCE / LIFESTYLE", cost: 6, income: 2, bonus: 'ถ้ามี "โรงงานเซรามิกและของใช้ในครัวเรือน" รายได้ +1M', imageUrl: "images/Asset 63@4x.png" },
    { name: "ธุรกิจ Influencer Marketing & Affiliate", category: "E-commerce", tags: "E-COMMERCE / COMMUNICATION / MARKETING", cost: 8, income: 3, bonus: 'ถ้ามี "บริษัทจัดอีเวนต์" รายได้ +1M', imageUrl: "images/Asset 71@4x.png" },

    // === หมวด CONNECTION ===
    {
        name: "กองทัพคนติดซีรีส์",
        category: "Connection",
        tags: "CONNECTION / ENTERTAINMENT",
        cost: 8,
        income: 0,
        bonus: '[ต่อเนื่อง] ธุรกิจบันเทิง +3M | [เงื่อนไข] มีธุรกิจบันเทิง',
        imageUrl: "concard/Asset 19.jpg"
    },
    {
        name: "สมาคมบ้ากีฬา",
        category: "Connection",
        tags: "CONNECTION / SPORTS",
        cost: 8,
        income: 0,
        bonus: '[ต่อเนื่อง] ธุรกิจกีฬา +3M | [เงื่อนไข] ต้องมีธุรกิจกีฬา',
        imageUrl: "concard/Asset 20.jpg"
    },
    {
        name: "ชมรมคนรักบ้านแต่ไม่เคยซ่อม",
        category: "Connection",
        tags: "CONNECTION / CONSTRUCTION",
        cost: 8,
        income: 0,
        bonus: '[ต่อเนื่อง] ธุรกิจก่อสร้าง +3M | [เงื่อนไข] ต้องมีธุรกิจก่อสร้าง',
        imageUrl: "concard/Asset 21.jpg"
    },
    {
        name: "แบ็คอัพสายมืด",
        category: "Connection",
        tags: "CONNECTION / SPECIAL",
        cost: 20,
        income: 0,
        bonus: '[เมื่อซื้อ] ทำลายการ์ดธุรกิจคู่แข่ง 1 ใบ จากนั้นนำการ์ดใบนี้กลับกอง Connection แล้วสับกอง | [เงื่อนไข] ข้ามเทิร์นหน้าของคุณ',
        imageUrl: "concard/Asset 22.jpg"
    },
    {
        name: "กรมชลประทาน",
        category: "Connection",
        tags: "CONNECTION / AGRICULTURE / TECHNOLOGY",
        cost: 20,
        income: 0,
        bonus: '[ต่อเนื่อง] ธุรกิจเกษตรของคุณ +4M ทุกต้นรอบ ให้ธุรกิจ 1 ใบของคุณ รายได้ +3M เลือกผู้เล่นอื่น 1 คน +2M | [เงื่อนไข] ต้องมีธุรกิจหมวดเทคโนโลยี',
        imageUrl: "concard/Asset 23.jpg"
    },
    {
        name: "กรมทางหลวง",
        category: "Connection",
        tags: "CONNECTION / LOGISTICS / TRADING / MANUFACTURING",
        cost: 20,
        income: 0,
        bonus: '[ต่อเนื่อง] -3M ให้กับผู้เล่นอื่นที่มี โลจิสติกส์/การค้า/การผลิต (ของเรา +1M) | [เงื่อนไข] เทิร์นละครั้ง จ่าย 1M/2M/3M เพิ่มขึ้นทุกครั้งที่ใช้',
        imageUrl: "concard/Asset 24.jpg"
    },
    {
        name: "กรมป่าไม้",
        category: "Connection",
        tags: "CONNECTION / ENVIRONMENT / MANUFACTURING",
        cost: 20,
        income: 0,
        bonus: '[ต่อเนื่อง] เลือกธุรกิจสิ่งแวดล้อม 1 ใบของคุณ ได้มูลค่า +5M | [เงื่อนไข] เทิร์นละครั้ง จ่าย 2M ต่อธุรกิจการผลิต',
        imageUrl: "concard/Asset 25.jpg"
    },
    {
        name: "กรมไฟฟ้า",
        category: "Connection",
        tags: "CONNECTION / ENERGY / MANUFACTURING",
        cost: 20,
        income: 0,
        bonus: '[ต่อเนื่อง] ธุรกิจที่มีรายได้มากที่สุดจะไม่โดนผลลบของอีเวนต์ ทุกต้นรอบเลือกธุรกิจการผลิต 1 ใบ +3M | [เงื่อนไข] ต้องมีธุรกิจหมวดพลังงาน',
        imageUrl: "concard/Asset 26.jpg"
    },
    {
        name: "ชมรมช้อปปิ้งออนไลน์ 24 ชม.",
        category: "Connection",
        tags: "CONNECTION / E-COMMERCE",
        cost: 8,
        income: 0,
        bonus: '[ต่อเนื่อง] ธุรกิจออนไลน์ +2M ต่อเทิร์น | [เงื่อนไข] ต้องมีธุรกิจออนไลน์ 2 แห่งขึ้นไป',
        imageUrl: "concard/Asset 27.jpg"
    },
    {
        name: "อาสาสมัครสายส่งของ",
        category: "Connection",
        tags: "CONNECTION / LOGISTICS",
        cost: 8,
        income: 0,
        bonus: '[ต่อเนื่อง] ธุรกิจโลจิสติกส์ +3M | [เงื่อนไข] ต้องมีธุรกิจโลจิสติก',
        imageUrl: "concard/Asset 28.jpg"
    },
    // === หมวด CONNECTION (ชุดใหม่ 10 ใบ) ===
    { 
        name: "ที่ปรึกษาธนาคาร", 
        category: "Connection", 
        tags: "CONNECTION / FINANCE", 
        cost: 15, 
        income: 0, 
        bonus: '[เลือก 1 ใน 3] ทิ้งธุรกิจคุณ 2 แห่ง รับ +10M | ทิ้งธุรกิจ 3 แห่ง รับ +15M | ทิ้งธุรกิจ 4 แห่ง รับ +25M | [เงื่อนไข] คุณต้องขาดทุนในตานี้', 
        imageUrl: "concard/Asset 38.jpg" 
    },
    { 
        name: "สถาบันสร้างแบรนด์ระดับโลก", 
        category: "Connection", 
        tags: "CONNECTION / FASHION / ENTERTAINMENT / MARKETING", 
        cost: 15, 
        income: 0, 
        bonus: '[ต่อเนื่อง] ธุรกิจแฟชั่น/บันเทิง/การตลาด +5M | [เงื่อนไข] ต้องจ่าย 4M ทุกเทิร์น', 
        imageUrl: "concard/Asset 29.jpg" 
    },
    { 
        name: "ศูนย์โลจิสติกส์ซูเปอร์สปีด", 
        category: "Connection", 
        tags: "CONNECTION / LOGISTICS / TRADING / E-COMMERCE / MANUFACTURING", 
        cost: 15, 
        income: 0, 
        bonus: '[เลือก 1 ใน 3] ธุรกิจหมวดการค้า +3M | หมวดออนไลน์ +3M | หมวดการผลิต +4M | [เงื่อนไข] ต้องมีธุรกิจ การค้า / การผลิต / ออนไลน์', 
        imageUrl: "concard/Asset 30.jpg" 
    },
    { 
        name: "เพื่อนบ้านขี้เม้าท์ระดับประเทศ", 
        category: "Connection", 
        tags: "CONNECTION / COMMUNICATION / TECHNOLOGY", 
        cost: 10, 
        income: 0, 
        bonus: '[ต่อเนื่อง] ได้ +1M ทุกครั้งที่ผู้เล่นอื่นซื้อธุรกิจ | [เงื่อนไข] ต้องมีเมื่อมีธุรกิจเทคโนโลยี 2 ใบขึ้นไป', 
        imageUrl: "concard/Asset 31.jpg" 
    },
    { 
        name: "ชมรมกาแฟตอนตีสาม", 
        category: "Connection", 
        tags: "CONNECTION / FOOD / LIFESTYLE", 
        cost: 10, 
        income: 0, 
        bonus: '[ต่อเนื่อง] ได้ +2M ตอน ช่วงรับเงิน | [เงื่อนไข] ต้องมีธุรกิจอย่างน้อย 2 ใบ', 
        imageUrl: "concard/Asset 32.jpg" 
    },
    { 
        name: "สมาคมนักท่องเที่ยว", 
        category: "Connection", 
        tags: "CONNECTION / HOSPITALITY / LIFESTYLE", 
        cost: 15, 
        income: 0, 
        bonus: '[ต่อเนื่อง] ธุรกิจที่พัก/ท่องเที่ยว +3M (บวกเพิ่มเป็น 6M หากผู้เล่นคนอื่นไม่มีใครมีธุรกิจที่พัก/ท่องเที่ยว) | [เงื่อนไข] ต้องมีธุรกิจที่พัก/ท่องเที่ยว', 
        imageUrl: "concard/Asset 33.jpg" 
    },
    { 
        name: "คลับลับ CEO ชอบเม้าท์คู่แข่ง", 
        category: "Connection", 
        tags: "CONNECTION / COMMUNICATION / SPECIAL", 
        cost: 10, 
        income: 0, 
        bonus: '[ต่อเนื่อง] เลือกธุรกิจของคุณ 1 หมวด ได้ +5M ต่อเทิร์น | [เงื่อนไข] จ่าย 1M ให้ผู้เล่นทุกคนตอนนับเงิน', 
        imageUrl: "concard/Asset 34.jpg" 
    },
    { 
        name: "เครือข่ายผู้ใหญ่บ้านทั่วประเทศ", 
        category: "Connection", 
        tags: "CONNECTION / COMMUNICATION", 
        cost: 10, 
        income: 0, 
        bonus: '[ต่อเนื่อง] เมื่อผู้เล่นคนอื่นติดลบรับ +3M | [เงื่อนไข] คุณต้องไม่ขาดทุนติดลบ', 
        imageUrl: "concard/Asset 35.jpg" 
    },
    { 
        name: "กลุ่มทุนท้องถิ่น", 
        category: "Connection", 
        tags: "CONNECTION / AGRICULTURE / ENVIRONMENT", 
        cost: 10, 
        income: 0, 
        bonus: '[ต่อเนื่อง] ลดราคาซื้อธุรกิจหมวดเกษตรกรรม -2M | [เงื่อนไข] ทำงานตลอดเวลา เมื่อมีธุรกิจสิ่งแวดล้อม', 
        imageUrl: "concard/Asset 36.jpg" 
    },
    { 
        name: "มหาวิทยาลัยพันธมิตร", 
        category: "Connection", 
        tags: "CONNECTION / EDUCATION / SERVICE", 
        cost: 10, 
        income: 0, 
        bonus: '[ต่อเนื่อง] ธุรกิจหมวดบริการได้รับ +2M | [เงื่อนไข] ต้องมีธุรกิจในหมวดการศึกษา', 
        imageUrl: "concard/Asset 37.jpg" 
    },
    { 
        name: "สหกรณ์เกษตรฟื้นฟูดิน", 
        category: "Connection", 
        tags: "CONNECTION / AGRICULTURE / ENVIRONMENT", 
        cost: 12, 
        income: 0, 
        bonus: '[ต่อเนื่อง] ธุรกิจเกษตรของคุณทุกใบ +2M | [เงื่อนไข] ต้องมีธุรกิจการเกษตรกรรม', 
        imageUrl: "concard/Asset 39.jpg" 
    },
    { 
        name: "ระบบเกษตรอัตโนมัติรุ่นต่อไป", 
        category: "Connection", 
        tags: "CONNECTION / AGRICULTURE / TECHNOLOGY", 
        cost: 12, 
        income: 0, 
        bonus: '[ต่อเนื่อง] เลือกการเกษตรกรรม 1 ใบของคุณ เพิ่มรายได้ถาวร +5M | [เงื่อนไข] ต้องมีธุรกิจการเกษตรกรรม', 
        imageUrl: "concard/Asset 40.jpg" 
    },
    { 
        name: "ศูนย์อุตสาหกรรมผลิตเร็วพิเศษ", 
        category: "Connection", 
        tags: "CONNECTION / MANUFACTURING / INDUSTRIAL", 
        cost: 12, 
        income: 0, 
        bonus: '[ต่อเนื่อง] ธุรกิจการผลิตของคุณทุกใบ +2M ถ้าในรอบนี้คุณซื้อธุรกิจใหม่ +3M | [เงื่อนไข] ต้องมีธุรกิจการผลิต 2 ใบหรือมากกว่า', 
        imageUrl: "concard/Asset 41.jpg" 
    },
    { 
        name: "มือปืน", 
        category: "Connection", 
        tags: "CONNECTION / SPECIAL", 
        cost: 20, 
        income: 0, 
        bonus: '[เมื่อซื้อ] ทำลายการ์ด Connection คู่แข่ง 1 ใบ จากนั้นนำการ์ดใบนี้กลับกอง Connection แล้วสับกอง | [เงื่อนไข] ข้ามเทิร์นหน้าของคุณ', 
        imageUrl: "concard/Asset 42.jpg" 
    },
    { 
        name: "AI ผู้ช่วยบริหารธุรกิจ", 
        category: "Connection", 
        tags: "CONNECTION / TECHNOLOGY / FINANCE", 
        cost: 12, 
        income: 0, 
        bonus: '[ต่อเนื่อง] ราคาซื้อธุรกิจเทคโนโลยี -2M ทุกต้นรอบ เลือกธุรกิจเทคโนโลยีของคุณกับผู้เล่นอื่น +2M | [เงื่อนไข] ต้องมีธุรกิจเทคโนโลยี 2 ใบหรือมากกว่า', 
        imageUrl: "concard/Asset 43.jpg" 
    },
    { 
        name: "ศูนย์ประมวลผลความเร็วสูง", 
        category: "Connection", 
        tags: "CONNECTION / TECHNOLOGY / COMMUNICATION", 
        cost: 12, 
        income: 0, 
        bonus: '[ต่อเนื่อง] ทุกครั้งที่มีผู้เล่นซื้อ Connection Card +4M ธุรกิจเทคโนโลยีทั้งหมดของคุณได้ +3M | [เงื่อนไข] ต้องมีธุรกิจเทคโนโลยี 5 ใบหรือมากกว่า', 
        imageUrl: "concard/Asset 44.jpg" 
    },
    { 
        name: "เครือข่าย IOT ระดับเมือง", 
        category: "Connection", 
        tags: "CONNECTION / TECHNOLOGY / COMMUNICATION / SECURITY / SMART LIVING", 
        cost: 12, 
        income: 0, 
        bonus: '[ต่อเนื่อง] เลือก 1 ธุรกิจหมวด การสื่อสาร ความปลอดภัย บ้านอัจฉริยะ +3M หากมีธุรกิจหมวดดังกล่าว 4 ใบหรือมากกว่า +2M | [เงื่อนไข] ต้องมีธุรกิจเทคโนโลยี 3 ใบหรือมากกว่า', 
        imageUrl: "concard/Asset 45.jpg" 
    },
    { 
        name: "ศูนย์ควบคุมบ้านอัจฉริยะ", 
        category: "Connection", 
        tags: "CONNECTION / TECHNOLOGY / SMART LIVING / SECURITY", 
        cost: 12, 
        income: 0, 
        bonus: '[ต่อเนื่อง] ธุรกิจหมวดเทคโนโลยี และ ออนไลน์ +1M ตามจำนวน ธุรกิจ การสื่อสาร,ความปลอดภัย,บ้านอัจฉริยะ | [เงื่อนไข] ต้องมีธุรกิจบ้านอัจฉริยะ', 
        imageUrl: "concard/Asset 46.jpg" 
    },
    { 
        name: "คณะวิศวกรวางระบบสายพาน", 
        category: "Connection", 
        tags: "CONNECTION / MANUFACTURING / INDUSTRIAL", 
        cost: 12, 
        income: 0, 
        bonus: '[ต่อเนื่อง] เลือกธุรกิจการผลิต 1 ใบ +5M ถ้าในรอบนี้คุณซื้อธุรกิจใหม่เพิ่มอีก +1M | [เงื่อนไข] ต้องมีธุรกิจการผลิต 2 ใบหรือมากกว่า', 
        imageUrl: "concard/Asset 47.jpg" 
    },
    { 
        name: "สมาคมผู้ผลิตอัตโนมัติ", 
        category: "Connection", 
        tags: "CONNECTION / MANUFACTURING / INDUSTRIAL", 
        cost: 12, 
        income: 0, 
        bonus: '[ต่อเนื่อง] ธุรกิจการผลิต +5M ในรอบนี้ เมื่อคุณซื้อธุรกิจใหม่ | [เงื่อนไข] ต้องมีการผลิต 2 ใบหรือมากกว่า', 
        imageUrl: "concard/Asset 48.jpg" 
    },
    { 
        name: "ศูนย์เพาะพันธุ์พืชระดับสูง", 
        category: "Connection", 
        tags: "CONNECTION / AGRICULTURE / ENVIRONMENT", 
        cost: 15, 
        income: 0, 
        bonus: '[ต่อเนื่อง] เลือกธุรกิจการเกษตรกรรม 1 ใบของคุณ เพิ่มรายได้ +8M | [เงื่อนไข] ต้องมีธุรกิจการเกษตรกรรม 2 ใบ', 
        imageUrl: "concard/Asset 49.jpg" 
    },
    { 
        name: "โปรแกรมฟื้นฟูหน้าดินระยะยาว", 
        category: "Connection", 
        tags: "CONNECTION / AGRICULTURE / ENVIRONMENT", 
        cost: 15, 
        income: 0, 
        bonus: '[ต่อเนื่อง] ธุรกิจการเกษตรกรรมทุกใบของคุณเพิ่มรายได้ +4M | [เงื่อนไข] เทิร์นละครั้ง เลือกธุรกิจการเกษตร 2 ใบ ไม่รับรายได้', 
        imageUrl: "concard/Asset 50.jpg" 
    },
    { 
        name: "กรมสรรพากร", 
        category: "Connection", 
        tags: "CONNECTION / FINANCE / SPECIAL", 
        cost: 10, 
        income: 0, 
        bonus: '-1M ต่อ จำนวนธุรกิจที่คุณมี ตอนจบรอบ ให้กับผู้เล่นอื่นทุกคน (ผู้เล่นอื่นสามารถจ่าย 5M ให้คุณ เพื่อนำการ์ดนี้กลับใต้กอง Connection แล้วสับกอง) | [เงื่อนไข] สั่งใช้งาน ตอนช่วงรับเงิน', 
        imageUrl: "concard/Asset 51.jpg" 
    },
    { 
        name: "ทนายชั่วร้าย", 
        category: "Connection", 
        tags: "CONNECTION / SPECIAL", 
        cost: 10, 
        income: 0, 
        bonus: 'ในรอบของผู้เล่นคนใดก็ตาม ทำให้ผู้เล่น 1 คน ไม่สามารถซื้อธุรกิจในเทิร์นนั้นได้ จากนั้นนำการ์ดใบนี้กลับเข้าใต้กอง Connection แล้วสับกอง | [เงื่อนไข] สั่งใช้งาน ตอนเริ่มรอบผู้เล่นอื่น', 
        imageUrl: "concard/Asset 52.jpg" 
    },
    { 
        name: "นักสะสมแต้มบัตรสมาชิก", 
        category: "Connection", 
        tags: "CONNECTION / LIFESTYLE / TRADING", 
        cost: 8, 
        income: 0, 
        bonus: '[ต่อเนื่อง] รับ +3M | [เงื่อนไข] ต้องมีรายได้รวม มากกว่า 10M', 
        imageUrl: "concard/Asset 53.jpg" 
    },
    { 
        name: "ชมรมอ่านหนังสือ", 
        category: "Connection", 
        tags: "CONNECTION / EDUCATION", 
        cost: 8, 
        income: 0, 
        bonus: '[ต่อเนื่อง] ธุรกิจการศึกษา +2M | [เงื่อนไข] ต้องมีธุรกิจการศึกษา', 
        imageUrl: "concard/Asset 54.jpg" 
    },
    { 
        name: "กลุ่มเซลฟี่ทุกที่", 
        category: "Connection", 
        tags: "CONNECTION / FASHION / ENTERTAINMENT", 
        cost: 8, 
        income: 0, 
        bonus: '[ต่อเนื่อง] ธุรกิจแฟชั่น +3M | [เงื่อนไข] ต้องมีธุรกิจแฟชั่น', 
        imageUrl: "concard/Asset 55.jpg" 
    },
    { 
        name: "เพื่อนที่รู้จักคนทุกวงการ", 
        category: "Connection", 
        tags: "CONNECTION / COMMUNICATION / SPECIAL", 
        cost: 8, 
        income: 0, 
        bonus: '[ต่อเนื่อง] รับ +2M ทุกเทิร์น | [เงื่อนไข] ต้องมี 3 หมวดธุรกิจหลักขึ้นไป', 
        imageUrl: "concard/Asset 56.jpg" 
    },
    { 
        name: "องค์กร CSR เพื่อสังคม", 
        category: "Connection", 
        tags: "CONNECTION / ENVIRONMENT / SERVICE", 
        cost: 10, 
        income: 0, 
        bonus: '[ต่อเนื่อง] ธุรกิจคุณได้รับ +1M ทุกธุรกิจ | [เงื่อนไข] ต้องมีธุรกิจหมวด สิ่งแวดล้อมอย่างน้อย 1 ใบ', 
        imageUrl: "concard/Asset 57.jpg" 
    },
    { 
        name: "สมาคมผู้ประกอบการท่องเที่ยว", 
        category: "Connection", 
        tags: "CONNECTION / HOSPITALITY / SERVICE", 
        cost: 9, 
        income: 0, 
        bonus: '[ต่อเนื่อง] หมวดท่องเที่ยว และ บริการของคุณ ไม่ถูกลดรายได้จากอีเวนต์ | [เงื่อนไข] มีธุรกิจหมวดบริการ 2 ใบขึ้นไป', 
        imageUrl: "concard/Asset 58.jpg" 
    },
    // === หมวด CONNECTION (เพิ่มเติมอีก 2 ใบ) ===
    { 
        name: "เครือข่ายสตาร์ทอัพสีเขียว", 
        category: "Connection", 
        tags: "CONNECTION / TECHNOLOGY / ENVIRONMENT", 
        cost: 10, 
        income: 0, 
        bonus: '[ต่อเนื่อง] ธุรกิจหมวดเทคโนโลยี และ สิ่งแวดล้อม ของคุณเพิ่มรายได้ +3M | [เงื่อนไข] เมื่อเริ่มปีใหม่ -1M ต่อธุรกิจอื่นที่ไม่ได้เพิ่มรายได้', 
        imageUrl: "concard/Asset 59.jpg" 
    },
    { 
        name: "สมาคมนักธุรกิจรุ่นใหม่", 
        category: "Connection", 
        tags: "CONNECTION / SPECIAL", 
        cost: 10, 
        income: 0, 
        bonus: '[ต่อเนื่อง] เลือกธุรกิจในหมวดย่อยเดียวกันทุกใบ ของคุณเพิ่มรายได้ +2M | [เงื่อนไข] เมื่อเริ่มปีใหม่ -1M ต่อจำนวนธุรกิจที่คุณมี', 
        imageUrl: "concard/Asset 60.jpg" 
    },
    // === หมวด EVENT ===
    { 
        name: "แผ่นดินไหวใหญ่ทำลายเมืองหลัก", 
        category: "Event", 
        tags: "EVENT / CONSTRUCTION / LOGISTIC", 
        cost: 0, 
        income: 0, 
        bonus: '[ผลลบ] ก่อสร้าง (Construction) -10M | โลจิสติกส์ (Logistics) -9M | ท่องเที่ยว (Hospitality) -8M', 
        imageUrl: "eventcard/Asset 21.jpg" 
    },
    { 
        name: "โรคระบาดระลอกใหม่ทั่วโลก", 
        category: "Event", 
        tags: "EVENT / HEALTH / FOOD / LIFESTYLE", 
        cost: 0, 
        income: 0, 
        bonus: '[ผลลบ] สุขภาพ (Health) -10M | อาหาร (Food) -8M | ท่องเที่ยว (Hospitality) -12M | ไลฟ์สไตล์ (Lifestyle) -6M', 
        imageUrl: "eventcard/Asset 22.jpg" 
    },
    { 
        name: "ราคาน้ำมันพุ่งสูงสุดในรอบ 20 ปี", 
        category: "Event", 
        tags: "EVENT / LOGISTIC / INDUSTRIAL / CONSTRUCTION", 
        cost: 0, 
        income: 0, 
        bonus: '[ผลลบ] โลจิสติกส์ (Logistics) -10M | อุตสาหกรรม (Industrial) -8M | ก่อสร้าง (Construction) -7M', 
        imageUrl: "eventcard/Asset 23.jpg" 
    },
    { 
        name: "สงครามโลก", 
        category: "Event", 
        tags: "EVENT / CRISIS", 
        cost: 0, 
        income: 0, 
        bonus: '[ผลลบ] ทุกอย่าง -30M', 
        imageUrl: "eventcard/Asset 14.jpg" 
    },
    { 
        name: "พายุทำลายโครงสร้างพื้นฐานหลัก", 
        category: "Event", 
        tags: "EVENT / CONSTRUCTION / LOGISTIC", 
        cost: 0, 
        income: 0, 
        bonus: '[ผลลบ] ก่อสร้าง (Construction) -9M | โลจิสติกส์ (Logistics) -8M | ท่องเที่ยว (Hospitality) -6M', 
        imageUrl: "eventcard/Asset 15.jpg" 
    },
    { 
        name: "โรคระบาดในพืชและสัตว์", 
        category: "Event", 
        tags: "EVENT / FOOD / ENVIRONMENT / INDUSTRIAL", 
        cost: 0, 
        income: 0, 
        bonus: '[ผลลบ] อาหาร (Food) -8M | สิ่งแวดล้อม (Environment) -4M | อุตสาหกรรม (Industrial) -3M', 
        imageUrl: "eventcard/Asset 16.jpg" 
    },
    { 
        name: "ตลาดหุ้นร่วงหนักทั่วโลก", 
        category: "Event", 
        tags: "EVENT / FINANCE / MARKETING / LIFESTYLE", 
        cost: 0, 
        income: 0, 
        bonus: '[ผลลบ] การเงิน (Finance) -12M | การตลาด (Marketing) -6M | ไลฟ์สไตล์ (Lifestyle) -5M', 
        imageUrl: "eventcard/Asset 17.jpg" 
    },
    { 
        name: "ไซเบอร์แฮกระดับโลก", 
        category: "Event", 
        tags: "EVENT / FINANCE / SECURITY / TECHNOLOGY / COMMUNICATION", 
        cost: 0, 
        income: 0, 
        bonus: '[ผลลบ] การเงิน (Finance) -7M | ความปลอดภัย (Security) -8M | เทคโนโลยี (Technology) -6M | การสื่อสาร (Communication) -5M', 
        imageUrl: "eventcard/Asset 18.jpg" 
    },
    { 
        name: "ภัยแล้งและอุณหภูมิสูงผิดปกติ", 
        category: "Event", 
        tags: "EVENT / FOOD / ENVIRONMENT / CONSTRUCTION", 
        cost: 0, 
        income: 0, 
        bonus: '[ผลลบ] อาหาร (Food) -9M | สิ่งแวดล้อม (Environment) -5M | ก่อสร้าง (Construction) -4M', 
        imageUrl: "eventcard/Asset 19.jpg" 
    },
    { 
        name: "ระบบขนส่งโลกหยุดชะงัก", 
        category: "Event", 
        tags: "EVENT / LOGISTIC / TECHNOLOGY / INDUSTRIAL", 
        cost: 0, 
        income: 0, 
        bonus: '[ผลลบ] โลจิสติกส์ (Logistics) -12M | เทคโนโลยี (Technology) -6M | อุตสาหกรรม (Industrial) -8M', 
        imageUrl: "eventcard/Asset 20.jpg" 
    },
    { 
        name: "เปิดเส้นทางรถไฟใหม่", 
        category: "Event", 
        tags: "EVENT / INDUSTRIAL / LOGISTICS / HOSPITALITY", 
        cost: 0, 
        income: 0, 
        bonus: '[ผลลบ] วัตถุดิบ (Industrial) -3M | [ผลบวก] โลจิสติกส์ (Logistics) +6M | ท่องเที่ยว (Hospitality) +5M', 
        imageUrl: "eventcard/Asset 30.jpg" 
    },
    { 
        name: "ปัญหาโลจิสติกส์โลก", 
        category: "Event", 
        tags: "EVENT / INDUSTRIAL / LOGISTICS", 
        cost: 0, 
        income: 0, 
        bonus: '[ผลลบ] นำเข้า / ส่งออก (Industrial) -6M | [ผลบวก] ขนส่งในประเทศ (Logistics) +4M', 
        imageUrl: "eventcard/Asset 31.jpg" 
    },
    { 
        name: "การโจมตีไซเบอร์ครั้งใหญ่", 
        category: "Event", 
        tags: "EVENT / COMMUNICATION / SECURITY", 
        cost: 0, 
        income: 0, 
        bonus: '[ผลลบ] การสื่อสาร (Communication) -5M | [ผลบวก] ความปลอดภัย (Security) +6M', 
        imageUrl: "eventcard/Asset 32.jpg" 
    },
    { 
        name: "เทรนด์ WORK FROM HOME", 
        category: "Event", 
        tags: "EVENT / LOGISTICS / SMART LIVING / TECHNOLOGY", 
        cost: 0, 
        income: 0, 
        bonus: '[ผลลบ] การเดินทาง (Logistics) -4M | [ผลบวก] บ้านอัจฉริยะ (Smart Living) +6M | เทคโนโลยี (Technology) +4M', 
        imageUrl: "eventcard/Asset 33.jpg" 
    },
    { 
        name: "ห้ามใช้พลาสติกทั่วประเทศ", 
        category: "Event", 
        tags: "EVENT / INDUSTRIAL / ENVIRONMENT", 
        cost: 0, 
        income: 0, 
        bonus: '[ผลลบ] วัตถุดิบ (Industrial) -6M | [ผลบวก] สิ่งแวดล้อม (Environment) +8M', 
        imageUrl: "eventcard/Asset 24.jpg" 
    },
    { 
        name: "โอลิมปิก", 
        category: "Event", 
        tags: "EVENT / ENVIRONMENT / SPORTS / MARKETING", 
        cost: 0, 
        income: 0, 
        bonus: '[ผลลบ] สิ่งแวดล้อม (Environment) -3M | [ผลบวก] กีฬา (Sports) +8M | การตลาด (Marketing) +6M', 
        imageUrl: "eventcard/Asset 25.jpg" 
    },
    { 
        name: "โลกร้อนรุนแรงขึ้น", 
        category: "Event", 
        tags: "EVENT / AGRICULTURE / CONSTRUCTION / ENVIRONMENT", 
        cost: 0, 
        income: 0, 
        bonus: '[ผลลบ] เกษตร (Agriculture) -8M | ก่อสร้าง (Construction) -4M | [ผลบวก] สิ่งแวดล้อม (Environment) +5M', 
        imageUrl: "eventcard/Asset 26.jpg" 
    },
    { 
        name: "ภาษีเอื้อธุรกิจขนาดเล็ก", 
        category: "Event", 
        tags: "EVENT / FINANCE / INDUSTRIAL", 
        cost: 0, 
        income: 0, 
        bonus: '[ผลลบ] ธนาคาร (Finance) -3M | [ผลบวก] SME (Industrial) +6M', 
        imageUrl: "eventcard/Asset 27.jpg" 
    },
    { 
        name: "ค่าเงินผันผวน", 
        category: "Event", 
        tags: "EVENT / MARKETING / FINANCE", 
        cost: 0, 
        income: 0, 
        bonus: '[ผลลบ] การค้า (Marketing) -4M | [ผลบวก] นักลงทุน (Finance) +4M', 
        imageUrl: "eventcard/Asset 28.jpg" 
    },
    { 
        name: "บ้านอัจฉริยะบูม", 
        category: "Event", 
        tags: "EVENT / CONSTRUCTION / SMART LIVING / TECHNOLOGY", 
        cost: 0, 
        income: 0, 
        bonus: '[ผลลบ] ก่อสร้าง (Construction) -5M | [ผลบวก] บ้านอัจฉริยะ (Smart Living) +6M | เทคโนโลยี (Technology) +4M', 
        imageUrl: "eventcard/Asset 29.jpg" 
    },
    { 
        name: "กระแส ESPORT โต", 
        category: "Event", 
        tags: "EVENT / SPORTS / TECHNOLOGY / ENTERTAINMENT", 
        cost: 0, 
        income: 0, 
        bonus: '[ผลลบ] กีฬา (Sports) -3M | [ผลบวก] เทคโนโลยี (Technology) +6M | บันเทิง (Entertainment) +6M', 
        imageUrl: "eventcard/Asset 43.jpg" 
    },
    { 
        name: "ขึ้นค่าแรงขั้นต่ำ", 
        category: "Event", 
        tags: "EVENT / CONSTRUCTION / INDUSTRIAL / HEALTH", 
        cost: 0, 
        income: 0, 
        bonus: '[ผลลบ] ก่อสร้าง (Construction) -5M | อุตสาหกรรม (Industrial) -4M | [ผลบวก] สุขภาพ (Health) +3M', 
        imageUrl: "eventcard/Asset 34.jpg" 
    },
    { 
        name: "เทศกาลดนตรีโลก", 
        category: "Event", 
        tags: "EVENT / ENVIRONMENT / ENTERTAINMENT / FASHION", 
        cost: 0, 
        income: 0, 
        bonus: '[ผลลบ] สิ่งแวดล้อม (Environment) -3M | [ผลบวก] บันเทิง (Entertainment) +7M | แฟชั่น (Fashion) +4M', 
        imageUrl: "eventcard/Asset 35.jpg" 
    },
    { 
        name: "วิกฤตพลังงาน", 
        category: "Event", 
        tags: "EVENT / LOGISTICS / INDUSTRIAL / ENVIRONMENT", 
        cost: 0, 
        income: 0, 
        bonus: '[ผลลบ] โลจิสติกส์ (Logistics) -5M | อุตสาหกรรม (Industrial) -6M | [ผลบวก] สิ่งแวดล้อม (Environment) +6M', 
        imageUrl: "eventcard/Asset 36.jpg" 
    },
    { 
        name: "รัฐหนุนเกษตรอินทรีย์", 
        category: "Event", 
        tags: "EVENT / INDUSTRIAL / FOOD / ENVIRONMENT", 
        cost: 0, 
        income: 0, 
        bonus: '[ผลลบ] ปุ๋ยเคมี (Industrial) -3M | [ผลบวก] อาหาร (Food) +6M | สิ่งแวดล้อม (Environment) +4M', 
        imageUrl: "eventcard/Asset 37.jpg" 
    },
    { 
        name: "แผ่นดินไหวครั้งใหญ่", 
        category: "Event", 
        tags: "EVENT / HOSPITALITY / INDUSTRIAL / CONSTRUCTION", 
        cost: 0, 
        income: 0, 
        bonus: '[ผลลบ] ที่พัก (Hospitality) -6M | อุตสาหกรรม (Industrial) -4M | [ผลบวก] ก่อสร้าง (Construction) +6M', 
        imageUrl: "eventcard/Asset 38.jpg" 
    },
    { 
        name: "กระแส BLOCKCHAIN", 
        category: "Event", 
        tags: "EVENT / ENVIRONMENT / FINANCE / TECHNOLOGY", 
        cost: 0, 
        income: 0, 
        bonus: '[ผลลบ] พลังงาน (Environment) -3M | [ผลบวก] การเงิน (Finance) +7M | เทคโนโลยี (Technology) +6M', 
        imageUrl: "eventcard/Asset 39.jpg" 
    },
    { 
        name: "ข้อมูลรั่วระดับโลก", 
        category: "Event", 
        tags: "EVENT / TECHNOLOGY / COMMUNICATION / SECURITY", 
        cost: 0, 
        income: 0, 
        bonus: '[ผลลบ] เทคโนโลยี (Technology) -4M | การสื่อสาร (Communication) -4M | [ผลบวก] ความปลอดภัย (Security) +5M', 
        imageUrl: "eventcard/Asset 40.jpg" 
    },
    { 
        name: "เทรนด์เรียนออนไลน์", 
        category: "Event", 
        tags: "EVENT / CONSTRUCTION / INDUSTRIAL / HEALTH", 
        cost: 0, 
        income: 0, 
        bonus: '[ผลลบ] ก่อสร้าง (Construction) -5M | อุตสาหกรรม (Industrial) -4M | [ผลบวก] สุขภาพ (Health) +3M', 
        imageUrl: "eventcard/Asset 41.jpg" 
    },
    { 
        name: "ดอกเบี้ยสูง", 
        category: "Event", 
        tags: "EVENT / LIFESTYLE / CONSTRUCTION / FINANCE", 
        cost: 0, 
        income: 0, 
        bonus: '[ผลลบ] ไลฟ์สไตล์ (Lifestyle) -5M | ก่อสร้าง (Construction) -4M | [ผลบวก] ธนาคาร (Finance) +5M', 
        imageUrl: "eventcard/Asset 42.jpg" 
    },
    {
        name: "เทรนด์สุขภาพ",
        category: "Event",
        tags: "EVENT / FOOD / HEALTH",
        cost: 0,
        income: 0,
        bonus: '[ผลลบ] อาหาร (Food) -3M | [ผลบวก] สุขภาพ (Health) +8M',
        imageUrl: "eventcard/Asset 50.jpg"
    },
    {
        name: "สงครามการค้า",
        category: "Event",
        tags: "EVENT / LOGISTICS / TECHNOLOGY / INDUSTRIAL",
        cost: 0,
        income: 0,
        bonus: '[ผลลบ] โลจิสติกส์ (Logistics) -6M | เทคโนโลยี (Technology) -5M | [ผลบวก] ผลิตภายในประเทศ (Industrial) +4M',
        imageUrl: "eventcard/Asset 51.jpg"
    },
    {
        name: "ประกาศเปิดตัว โทรศัพท์ รุ่นใหม่",
        category: "Event",
        tags: "EVENT / INDUSTRIAL / TECHNOLOGY / MARKETING",
        cost: 0,
        income: 0,
        bonus: '[ผลลบ] วัตถุดิบ (Industrial) -3M | [ผลบวก] เทคโนโลยี (Technology) +6M | การตลาด (Marketing) +4M',
        imageUrl: "eventcard/Asset 52.jpg"
    },
    {
        name: "โรคระบาด ระลอกใหม่",
        category: "Event",
        tags: "EVENT / INDUSTRIAL / HOSPITALITY / HEALTH",
        cost: 0,
        income: 0,
        bonus: '[ผลลบ] อุตสาหกรรม (Industrial) -10M | ท่องเที่ยว (Hospitality) -7M | [ผลบวก] สุขภาพ (Health) +6M',
        imageUrl: "eventcard/Asset 53.jpg"
    },
    {
        name: "ภัยแล้งรุนแรง",
        category: "Event",
        tags: "EVENT / AGRICULTURE / FOOD / CONSTRUCTION",
        cost: 0,
        income: 0,
        bonus: '[ผลลบ] เกษตร (Agriculture) -8M | อาหาร (Food) -7M | [ผลบวก] ก่อสร้าง (Construction) +4M',
        imageUrl: "eventcard/Asset 44.jpg"
    },
    {
        name: "ฟองสบู่ STARTUP แตก",
        category: "Event",
        tags: "EVENT / TECHNOLOGY / FINANCE / INDUSTRIAL",
        cost: 0,
        income: 0,
        bonus: '[ผลลบ] เทคโนโลยี (Technology) -6M | การเงิน (Finance) -4M | [ผลบวก] อุตสาหกรรม (Industrial) +4M',
        imageUrl: "eventcard/Asset 45.jpg"
    },
    {
        name: "เทศกาลลดราคาทั่วโลก 11.11",
        category: "Event",
        tags: "EVENT / LIFESTYLE / MARKETING / E-COMMERCE",
        cost: 0,
        income: 0,
        bonus: '[ผลลบ] ไลฟ์สไตล์ (Lifestyle) -4M | [ผลบวก] การตลาด (Marketing) +6M | ค้าขายออนไลน์ (E-commerce) +5M',
        imageUrl: "eventcard/Asset 46.jpg"
    },
    {
        name: "สินค้าแฟชั่น รักษ์โลกฮิต",
        category: "Event",
        tags: "EVENT / INDUSTRIAL / FASHION / ENVIRONMENT",
        cost: 0,
        income: 0,
        bonus: '[ผลลบ] วัตถุดิบ (Industrial) -3M | [ผลบวก] แฟชั่น (Fashion) +6M | สิ่งแวดล้อม (Environment) +4M',
        imageUrl: "eventcard/Asset 47.jpg"
    },
    {
        name: "เทคโนโลยี AI บูม",
        category: "Event",
        tags: "EVENT / CONSTRUCTION / INDUSTRIAL / HEALTH",
        cost: 0,
        income: 0,
        bonus: '[ผลลบ] ก่อสร้าง (Construction) -5M | อุตสาหกรรม (Industrial) -4M | [ผลบวก] สุขภาพ (Health) +3M',
        imageUrl: "eventcard/Asset 48.jpg"
    },
    {
        name: "ภาวะเงินเฟ้อ",
        category: "Event",
        tags: "EVENT / LIFESTYLE / FOOD / FINANCE",
        cost: 0,
        income: 0,
        bonus: '[ผลลบ] ค้าปลีก (Lifestyle) -6M | อาหาร (Food) -4M | [ผลบวก] ธนาคาร (Finance) +4M',
        imageUrl: "eventcard/Asset 49.jpg"
    },
    {
        name: "ฟุตบอลโลก",
        category: "Event",
        tags: "EVENT / LOGISTICS / SPORTS / MARKETING",
        cost: 0,
        income: 0,
        bonus: '[ผลลบ] โลจิสติกส์ (Logistics) -5M | [ผลบวก] กีฬา (Sports) +8M | การตลาด (Marketing) +5M',
        imageUrl: "eventcard/Asset 54.jpg"
    },
    {
        name: "ราคาน้ำมันพุ่งสูง",
        category: "Event",
        tags: "EVENT / LOGISTICS / CONSTRUCTION / INDUSTRIAL",
        cost: 0,
        income: 0,
        bonus: '[ผลลบ] โลจิสติกส์ (Logistics) -8M | ก่อสร้าง (Construction) -4M | [ผลบวก] พลังงาน (Industrial) +5M',
        imageUrl: "eventcard/Asset 55.jpg"
    }

];

let currentDisplayedCards = [];
let currentIndex = 0;
let currentView = 'grid';

const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');
const subCategoryFilter = document.getElementById('subCategoryFilter');
const sortOrder = document.getElementById('sortOrder');
const cardContainer = document.getElementById('cardContainer');
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('expandedImg');
const captionText = document.getElementById('caption');
const closeModalBtn = document.getElementById('closeModal');
const prevCardBtn = document.getElementById('prevCard');
const nextCardBtn = document.getElementById('nextCard');
const viewControlsContainer = document.querySelector('.view-controls');
const btnGrid4 = document.getElementById('btnGrid4');
const btnGrid6 = document.getElementById('btnGrid6');

let gridColumns = 4;

function addCardTilt(wrapper) {
    const imgElement = wrapper.querySelector('img');

    wrapper.addEventListener('mousemove', function (e) {
        const { left, top, width, height } = wrapper.getBoundingClientRect();
        const x = (e.clientX - left - width / 2) / 10;
        const y = -(e.clientY - top - height / 2) / 10;

        imgElement.style.transform = `perspective(1000px) rotateY(${x}deg) rotateX(${y}deg) scale(1.03)`;
        imgElement.style.boxShadow = `${-x * 2}px ${-y * 2}px 30px rgba(116, 195, 77, ${0.4 + Math.abs(x) / 30}), 0 15px 30px rgba(0, 0, 0, 0.6)`;
    });

    wrapper.addEventListener('mouseleave', function () {
        imgElement.style.transform = `perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1)`;
        imgElement.style.boxShadow = '0 6px 15px rgba(0, 0, 0, 0.5)';
    });
}

function updateGallery() {
    const searchText = searchInput.value.trim().toLowerCase();
    const categoryValue = categoryFilter.value;
    const subCategoryValue = subCategoryFilter.value;
    const sortValue = sortOrder.value;

    let filteredCards = cardsData.filter(card => {
        const matchSearch = searchText === "" || 
                    card.name.toLowerCase().includes(searchText) || 
                    card.tags.toLowerCase().includes(searchText) || 
                    card.bonus.toLowerCase().includes(searchText);
        const matchCategory = categoryValue === "all" || card.category === categoryValue;
        const matchSubCategory = subCategoryValue === "all" || card.tags.includes(subCategoryValue);
        return matchSearch && matchCategory && matchSubCategory;
    });

    if (sortValue === "cost-desc") filteredCards.sort((a, b) => b.cost - a.cost);
    else if (sortValue === "cost-asc") filteredCards.sort((a, b) => a.cost - b.cost);
    else if (sortValue === "income-desc") filteredCards.sort((a, b) => b.income - a.income);
    else if (sortValue === "income-asc") filteredCards.sort((a, b) => a.income - b.income);

    renderCards(filteredCards);
}

function showModalContent(index) {
    if (index < 0 || index >= currentDisplayedCards.length) return;
    currentIndex = index;
    const card = currentDisplayedCards[currentIndex];

    modalImg.src = card.imageUrl;
    captionText.innerHTML = `<strong>${card.name}</strong><br>💰 ซื้อ: ${card.cost}M | 💵 รายได้: ${card.income}M<br><em>${card.tags}</em><br><small style="color:#74C34D;">${card.bonus}</small>`;
}

function renderCards(cardsToRender) {
    currentDisplayedCards = cardsToRender;
    cardContainer.innerHTML = "";

    let gridClass = `${currentView}-view`;
    if (currentView === 'grid' && gridColumns === 6) {
        gridClass += ' columns-6';
    }
    cardContainer.className = `card-grid ${gridClass}`;

    if (cardsToRender.length === 0) {
        cardContainer.innerHTML = "<p style='grid-column: 1 / -1; text-align: center; color: #aaa; padding: 30px;'>ไม่พบการ์ดที่คุณค้นหา 😭</p>";
        return;
    }

    cardsToRender.forEach((card, index) => {
        if (currentView === 'grid') {
            const wrapper = document.createElement('div');
            wrapper.className = 'card-image-wrapper';
            wrapper.innerHTML = `<img src="${card.imageUrl}" alt="${card.name}" onclick="openModal(${index})">`;
            addCardTilt(wrapper);
            cardContainer.appendChild(wrapper);

        } else if (currentView === 'hybrid') {
            const div = document.createElement('div');
            div.className = 'hybrid-card';
            div.innerHTML = `
                <img src="${card.imageUrl}" onclick="openModal(${index})">
                <div class="hybrid-info">
                    <h3 style="color:var(--accent-color); margin:0;">${card.name}</h3>
                    <p style="font-size:14px; color:#aaa; margin:5px 0;">${card.tags}</p>
                    <div style="font-weight:bold;">💰 ${card.cost}M | 💵 ${card.income}M</div>
                    <small style="color:#888;">${card.bonus}</small>
                </div>
            `;
            cardContainer.appendChild(div);

        } else if (currentView === 'list') {
            const div = document.createElement('div');
            div.className = 'list-item';
            div.innerHTML = `
                <img src="${card.imageUrl}" onclick="openModal(${index})">
                <div style="font-weight:bold;">${card.name}</div>
                <div class="hide-mobile">${card.category}</div>
                <div class="cost-tag">Cost: ${card.cost}M</div>
                <div class="income-tag">Inc: ${card.income}M</div>
                <div class="hide-mobile" style="font-size:12px; color:#888;">${card.bonus}</div>
            `;
            div.onclick = () => openModal(index);
            cardContainer.appendChild(div);
        }
    });
}

function openModal(index) {
    modal.style.display = "block";
    showModalContent(index);
}

const btnGrid = document.getElementById('btnGrid');
const btnHybrid = document.getElementById('btnHybrid');
const btnList = document.getElementById('btnList');

function setActiveView(view, activeBtn) {
    currentView = view;

    [btnGrid, btnHybrid, btnList].forEach(btn => btn.classList.remove('active'));
    activeBtn.classList.add('active');

    if (view === 'grid') {
        viewControlsContainer.classList.add('is-grid');
    } else {
        viewControlsContainer.classList.remove('is-grid');
    }

    renderCards(currentDisplayedCards);
}

btnGrid4.addEventListener('click', () => {
    gridColumns = 4;
    btnGrid4.classList.add('active');
    btnGrid6.classList.remove('active');
    renderCards(currentDisplayedCards);
});

btnGrid6.addEventListener('click', () => {
    gridColumns = 6;
    btnGrid6.classList.add('active');
    btnGrid4.classList.remove('active');
    renderCards(currentDisplayedCards);
});

btnGrid.addEventListener('click', () => setActiveView('grid', btnGrid));
btnHybrid.addEventListener('click', () => setActiveView('hybrid', btnHybrid));
btnList.addEventListener('click', () => setActiveView('list', btnList));

if (closeModalBtn) closeModalBtn.onclick = () => modal.style.display = "none";
window.onclick = (e) => { if (e.target === modal) modal.style.display = "none"; }

if (prevCardBtn) {
    prevCardBtn.onclick = (e) => {
        e.stopPropagation();
        showModalContent(currentIndex > 0 ? currentIndex - 1 : currentDisplayedCards.length - 1);
    }
}
if (nextCardBtn) {
    nextCardBtn.onclick = (e) => {
        e.stopPropagation();
        showModalContent(currentIndex < currentDisplayedCards.length - 1 ? currentIndex + 1 : 0);
    }
}

document.addEventListener('keydown', function (e) {
    if (modal.style.display === "block") {
        if (e.key === "ArrowLeft") prevCardBtn.click();
        if (e.key === "ArrowRight") nextCardBtn.click();
        if (e.key === "Escape") closeModalBtn.click();
    }
});

const btnLarge = document.getElementById('btnLarge');
const btnSmall = document.getElementById('btnSmall');

if (btnLarge && btnSmall) {
    btnLarge.addEventListener('click', () => {
        cardContainer.classList.remove('small-grid');
        btnLarge.classList.add('active');
        btnSmall.classList.remove('active');
    });
    btnSmall.addEventListener('click', () => {
        cardContainer.classList.add('small-grid');
        btnSmall.classList.add('active');
        btnLarge.classList.remove('active');
    });
}

searchInput.addEventListener('input', updateGallery);
categoryFilter.addEventListener('change', updateGallery);
subCategoryFilter.addEventListener('change', updateGallery);
sortOrder.addEventListener('change', updateGallery);

updateGallery();
