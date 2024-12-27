const districts = [
  {
    id: "1",
    division_id: "3",
    name: "Dhaka",
    bn_name: "ঢাকা",
    lat: "23.7115253",
    long: "90.4111451",
    image:
      "https://images.unsplash.com/photo-1714418903796-addc2facacd3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "2",
    division_id: "3",
    name: "Faridpur",
    bn_name: "ফরিদপুর",
    lat: "23.6070822",
    long: "89.8429406",
    image:
      "https://images.unsplash.com/photo-1583794018021-c841442da0e3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "3",
    division_id: "3",
    name: "Gazipur",
    bn_name: "গাজীপুর",
    lat: "24.0022858",
    long: "90.4264283",
    image:
      "https://images.unsplash.com/photo-1706844977840-511cf07ea3e1?q=80&w=1905&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "4",
    division_id: "3",
    name: "Gopalganj",
    bn_name: "গোপালগঞ্জ",
    lat: "23.0050857",
    long: "89.8266059",
    image:
      "https://images.unsplash.com/photo-1694649640096-d46d98b72776?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "5",
    division_id: "8",
    name: "Jamalpur",
    bn_name: "জামালপুর",
    lat: "24.937533",
    long: "89.937775",
    image:
      "https://images.unsplash.com/photo-1610434700059-d82d2271bfaf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "6",
    division_id: "3",
    name: "Kishoreganj",
    bn_name: "কিশোরগঞ্জ",
    lat: "24.444937",
    long: "90.776575",
    image:
      "https://images.unsplash.com/photo-1701151938848-df0d8f8aeb06?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "7",
    division_id: "3",
    name: "Madaripur",
    bn_name: "মাদারীপুর",
    lat: "23.164102",
    long: "90.1896805",
    image:
      "https://images.unsplash.com/photo-1655549837063-67384558d412?q=80&w=1953&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "8",
    division_id: "3",
    name: "Manikganj",
    bn_name: "মানিকগঞ্জ",
    lat: "23.8644",
    long: "90.0047",
    image:
      "https://images.unsplash.com/photo-1652073287782-2a64e078910f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "9",
    division_id: "3",
    name: "Munshiganj",
    bn_name: "মুন্সিগঞ্জ",
    lat: "23.5422",
    long: "90.5305",
    image:
      "https://images.unsplash.com/photo-1608997455454-0a1b054042fd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "10",
    division_id: "8",
    name: "Mymensingh",
    bn_name: "ময়মনসিংহ",
    lat: "24.7471",
    long: "90.4203",
    image:
      "https://images.unsplash.com/photo-1627231564915-a96758af45ac?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "11",
    division_id: "3",
    name: "Narayanganj",
    bn_name: "নারায়াণগঞ্জ",
    lat: "23.63366",
    long: "90.496482",
    image:
      "https://images.unsplash.com/photo-1703489076987-42a999d28ab9?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "12",
    division_id: "3",
    name: "Narsingdi",
    bn_name: "নরসিংদী",
    lat: "23.932233",
    long: "90.71541",
    image:
      "https://images.unsplash.com/photo-1582741876283-40c6c621c12e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "13",
    division_id: "8",
    name: "Netrokona",
    bn_name: "নেত্রকোণা",
    lat: "24.870955",
    long: "90.727887",
    image:
      "https://www.itsholidaysltd.com/_next/image?url=%2Fimages%2Ftour%2FBangladesh%2FNetrokona%2FScreenshot_2024-10-22_at_02_27_35.png&w=3840&q=100",
  },
  {
    id: "14",
    division_id: "3",
    name: "Rajbari",
    bn_name: "রাজবাড়ি",
    lat: "23.7574305",
    long: "89.6444665",
    image:
      "https://images.unsplash.com/photo-1622916542577-dbee33e80a96?q=80&w=1896&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "15",
    division_id: "3",
    name: "Shariatpur",
    bn_name: "শরীয়তপুর",
    lat: "23.2423",
    long: "90.4348",
    image:
      "https://images.unsplash.com/photo-1608815045016-294216dd282f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "16",
    division_id: "8",
    name: "Sherpur",
    bn_name: "শেরপুর",
    lat: "25.0204933",
    long: "90.0152966",
    image:
      "https://images.unsplash.com/photo-1645258924292-9624a5a9b20f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "17",
    division_id: "3",
    name: "Tangail",
    bn_name: "টাঙ্গাইল",
    lat: "24.2513",
    long: "89.9167",
    image:
      "https://images.unsplash.com/photo-1715922645161-2e8c7618f1ce?q=80&w=1944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "18",
    division_id: "5",
    name: "Bogura",
    bn_name: "বগুড়া",
    lat: "24.8465228",
    long: "89.377755",
    image:
      "https://i0.wp.com/www.alonelytraveler.com/wp-content/uploads/2010/06/gokul-medh-bogura-4.jpg?resize=800%2C600&ssl=1",
  },
  {
    id: "19",
    division_id: "5",
    name: "Joypurhat",
    bn_name: "জয়পুরহাট",
    lat: "25.0968",
    long: "89.0227",
    image:
      "https://images.unsplash.com/photo-1603550281860-b9959d7c2660?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "20",
    division_id: "5",
    name: "Naogaon",
    bn_name: "নওগাঁ",
    lat: "24.7936",
    long: "88.9318",
    image:
      "https://images.unsplash.com/photo-1661111059194-10e236ab7b37?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "21",
    division_id: "5",
    name: "Natore",
    bn_name: "নাটোর",
    lat: "24.420556",
    long: "89.000282",
    image:
      "https://images.unsplash.com/photo-1683753810967-0d618f0289cf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "22",
    division_id: "5",
    name: "Nawabganj",
    bn_name: "নবাবগঞ্জ",
    lat: "24.5965034",
    long: "88.2775122",
    image:
      "https://images.unsplash.com/photo-1670762673913-452f627fb304?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "23",
    division_id: "5",
    name: "Pabna",
    bn_name: "পাবনা",
    lat: "23.998524",
    long: "89.233645",
    image:
      "https://images.unsplash.com/photo-1709729934253-41a587c1e002?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "24",
    division_id: "5",
    name: "Rajshahi",
    bn_name: "রাজশাহী",
    lat: "24.3745",
    long: "88.6042",
    image:
      "https://images.unsplash.com/photo-1584971174445-1fb217ba48d3?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "25",
    division_id: "5",
    name: "Sirajgonj",
    bn_name: "সিরাজগঞ্জ",
    lat: "24.4533978",
    long: "89.7006815",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlZHNF6zS2a337WKK5GJljV4kwWgCNQapiDA&s",
  },
  {
    id: "26",
    division_id: "6",
    name: "Dinajpur",
    bn_name: "দিনাজপুর",
    lat: "25.6217061",
    long: "88.6354504",
    image:
      "https://images.unsplash.com/photo-1706369576247-d7d6c613ffdf?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "27",
    division_id: "6",
    name: "Gaibandha",
    bn_name: "গাইবান্ধা",
    lat: "25.328751",
    long: "89.528088",
    image:
      "https://www.hlimg.com/images/places2see/738X538/maxresdefault_1542103126m.jpg",
  },
  {
    id: "28",
    division_id: "6",
    name: "Kurigram",
    bn_name: "কুড়িগ্রাম",
    lat: "25.805445",
    long: "89.636174",
    image:
      "https://images.unsplash.com/photo-1688715717789-981150357c45?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "29",
    division_id: "6",
    name: "Lalmonirhat",
    bn_name: "লালমনিরহাট",
    lat: "25.9923",
    long: "89.2847",
    image:
      "https://images.unsplash.com/photo-1643214028410-5394730a71ef?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "30",
    division_id: "6",
    name: "Nilphamari",
    bn_name: "নীলফামারী",
    lat: "25.931794",
    long: "88.856006",
    image:
      "https://images.unsplash.com/photo-1695954469035-a2113d86a48e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "31",
    division_id: "6",
    name: "Panchagarh",
    bn_name: "পঞ্চগড়",
    lat: "26.3411",
    long: "88.5541606",
    image:
      "https://images.unsplash.com/photo-1717166992304-728700d3df62?q=80&w=1889&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "32",
    division_id: "6",
    name: "Rangpur",
    bn_name: "রংপুর",
    lat: "25.7558096",
    long: "89.244462",
    image:
      "https://images.unsplash.com/photo-1675834582458-49ba4ed7567c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "33",
    division_id: "6",
    name: "Thakurgaon",
    bn_name: "ঠাকুরগাঁও",
    lat: "26.0336945",
    long: "88.4616834",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d0/Open_Ground_into_the_Balia_Mosque_Complex.jpg",
  },
  {
    id: "34",
    division_id: "1",
    name: "Barguna",
    bn_name: "বরগুনা",
    lat: "22.0953",
    long: "90.1121",
    image:
      "https://images.unsplash.com/photo-1660533867264-ea3eabd3fd4c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "35",
    division_id: "1",
    name: "Barishal",
    bn_name: "বরিশাল",
    lat: "22.7010",
    long: "90.3535",
    image:
      "https://images.unsplash.com/photo-1629116179749-bb0b5b47bbeb?q=80&w=1909&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "36",
    division_id: "1",
    name: "Bhola",
    bn_name: "ভোলা",
    lat: "22.685923",
    long: "90.648179",
    image:
      "https://images.unsplash.com/photo-1553708949-a44cf46a0466?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "37",
    division_id: "1",
    name: "Jhalokati",
    bn_name: "ঝালকাঠি",
    lat: "22.6406",
    long: "90.1987",
    image:
      "https://images.unsplash.com/photo-1613330439938-aaa2fb158fc6?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "38",
    division_id: "1",
    name: "Patuakhali",
    bn_name: "পটুয়াখালী",
    lat: "22.3596316",
    long: "90.3298712",
    image:
      "https://images.unsplash.com/photo-1645153529630-d4ac6e42505a?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "39",
    division_id: "1",
    name: "Pirojpur",
    bn_name: "পিরোজপুর",
    lat: "22.5841",
    long: "89.9720",
    image:
      "https://images.unsplash.com/photo-1708666701284-d7c80765cb5f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "40",
    division_id: "2",
    name: "Bandarban",
    bn_name: "বান্দরবান",
    lat: "22.1953275",
    long: "92.2183773",
    image:
      "https://images.unsplash.com/photo-1667595838732-0e1efe1b2fb6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "41",
    division_id: "2",
    name: "Brahmanbaria",
    bn_name: "ব্রাহ্মণবাড়িয়া",
    lat: "23.9570904",
    long: "91.1119286",
    image:
      "https://images.unsplash.com/photo-1726302885540-f66fd930ad4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "42",
    division_id: "2",
    name: "Chandpur",
    bn_name: "চাঁদপুর",
    lat: "23.2332585",
    long: "90.6712912",
    image:
      "https://images.unsplash.com/photo-1573724351179-6b7fd77dd67b?q=80&w=2032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "43",
    division_id: "2",
    name: "Chattogram",
    bn_name: "চট্টগ্রাম",
    lat: "22.335109",
    long: "91.834073",
    image:
      "https://images.unsplash.com/photo-1622104269661-dfffda1059e4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "44",
    division_id: "2",
    name: "Cumilla",
    bn_name: "কুমিল্লা",
    lat: "23.4682747",
    long: "91.1788135",
    image:
      "https://images.unsplash.com/photo-1615219294081-f9976b71b2d0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "45",
    division_id: "2",
    name: "Cox's Bazar",
    bn_name: "কক্স বাজার",
    lat: "21.4272",
    long: "92.0058",
    image:
      "https://images.unsplash.com/photo-1709136059789-d61700284d5a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "46",
    division_id: "2",
    name: "Feni",
    bn_name: "ফেনী",
    lat: "23.0159",
    long: "91.3976",
    image:
      "https://images.unsplash.com/photo-1675497127872-aa39ae24f947?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "47",
    division_id: "2",
    name: "Khagrachari",
    bn_name: "খাগড়াছড়ি",
    lat: "23.119285",
    long: "91.984663",
    image:
      "https://images.unsplash.com/photo-1662481246213-af1486fa126f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "48",
    division_id: "2",
    name: "Lakshmipur",
    bn_name: "লক্ষ্মীপুর",
    lat: "22.942477",
    long: "90.841184",
    image:
      "https://images.unsplash.com/photo-1665891118442-7857f0158b39?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "49",
    division_id: "2",
    name: "Noakhali",
    bn_name: "নোয়াখালী",
    lat: "22.869563",
    long: "91.099398",
    image:
      "https://images.unsplash.com/photo-1679875191375-5d6fad12f5dc?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "50",
    division_id: "2",
    name: "Rangamati",
    bn_name: "রাঙ্গামাটি",
    lat: "22.7324",
    long: "92.2985",
    image:
      "https://images.unsplash.com/photo-1645985926275-d2184d7c2d5c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "51",
    division_id: "7",
    name: "Habiganj",
    bn_name: "হবিগঞ্জ",
    lat: "24.374945",
    long: "91.41553",
    image:
      "https://images.unsplash.com/photo-1713848144517-62796e444a04?q=80&w=1983&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "52",
    division_id: "7",
    name: "Maulvibazar",
    bn_name: "মৌলভীবাজার",
    lat: "24.482934",
    long: "91.777417",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/9d/Hum_Hum_Waterfall_%283%29.jpg",
  },
  {
    id: "53",
    division_id: "7",
    name: "Sunamganj",
    bn_name: "সুনামগঞ্জ",
    lat: "25.0658042",
    long: "91.3950115",
    image:
      "https://images.unsplash.com/photo-1696347581490-01ee65f5da09?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "54",
    division_id: "7",
    name: "Sylhet",
    bn_name: "সিলেট",
    lat: "24.8897956",
    long: "91.8697894",
    image:
      "https://images.unsplash.com/photo-1686651452430-09d14e313868?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "55",
    division_id: "4",
    name: "Bagerhat",
    bn_name: "বাগেরহাট",
    lat: "22.651568",
    long: "89.785938",
    image:
      "https://images.unsplash.com/photo-1645333691609-e1835882073b?q=80&w=1983&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "56",
    division_id: "4",
    name: "Chuadanga",
    bn_name: "চুয়াডাঙ্গা",
    lat: "23.6401961",
    long: "88.841841",
    image:
      "https://images.unsplash.com/photo-1648682149870-071f63d20d2c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "57",
    division_id: "4",
    name: "Jashore",
    bn_name: "যশোর",
    lat: "23.16643",
    long: "89.2081126",
    image:
      "https://images.unsplash.com/photo-1660829745512-c232027e78fd?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "58",
    division_id: "4",
    name: "Jhenaidah",
    bn_name: "ঝিনাইদহ",
    lat: "23.5448176",
    long: "89.1539213",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/a/ae/Payra_chattar%2C_jhenaidah.jpg",
  },
  {
    id: "59",
    division_id: "4",
    name: "Khulna",
    bn_name: "খুলনা",
    lat: "22.815774",
    long: "89.568679",
    image:
      "https://images.unsplash.com/photo-1666554363523-69b5ce8b54d0?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "60",
    division_id: "4",
    name: "Kushtia",
    bn_name: "কুষ্টিয়া",
    lat: "23.901258",
    long: "89.120482",
    image:
      "https://images.unsplash.com/photo-1631959408508-53628bec0434?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "61",
    division_id: "4",
    name: "Magura",
    bn_name: "মাগুরা",
    lat: "23.487337",
    long: "89.419956",
    image:
      "https://images.unsplash.com/photo-1648568248315-bebbb8bd28b1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "62",
    division_id: "4",
    name: "Meherpur",
    bn_name: "মেহেরপুর",
    lat: "23.762213",
    long: "88.631821",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/31/Meherpur_Paura_Shova_05.jpg",
  },
  {
    id: "63",
    division_id: "4",
    name: "Narail",
    bn_name: "নড়াইল",
    lat: "23.172534",
    long: "89.512672",
    image:
      "https://file-khulna.portal.gov.bd/files/narailsadar.narail.gov.bd/page/e3ed6a4d_1c4a_11e7_8f57_286ed488c766/back-I.jpg",
  },
  {
    id: "64",
    division_id: "4",
    name: "Satkhira",
    bn_name: "সাতক্ষীরা",
    lat: "22.7185",
    long: "89.0705",
    image:
      "https://images.unsplash.com/photo-1559489110-40a90ee4e70a?q=80&w=2062&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

module.exports = { districts };
