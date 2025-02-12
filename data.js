const niches = [
    { name: 'E-commerce', icon: '🛍️' },
    { name: 'Portfolio', icon: '🎨' },
    { name: 'Blog', icon: '✍️' },
    { name: 'Corporate', icon: '🏢' },
    { name: 'Non-Profit', icon: '🤝' },
    { name: 'Educational', icon: '📚' },
    { name: 'Health & Fitness', icon: '💪' },
    { name: 'Travel', icon: '✈️' },
    { name: 'Restaurant', icon: '🍽️' },
    { name: 'Photography', icon: '📸' },
    { name: 'Real Estate', icon: '🏠' },
    { name: 'Technology', icon: '💻' },
    { name: 'Entertainment', icon: '🎬' },
    { name: 'Fashion', icon: '👗' },
    { name: 'Sports', icon: '⚽' },
    { name: 'Music', icon: '🎵' },
    { name: 'Art & Design', icon: '🎨' },
    { name: 'Finance', icon: '💰' },
    { name: 'Automotive', icon: '🚗' },
    { name: 'Web3', icon: '🌐' },
    { name: 'News', icon: '📰' },
    { name: 'Gaming', icon: '🎮' },
    { name: 'Pet Services', icon: '🐾' },
    { name: 'Personal Blog', icon: '📝' },
    { name: 'Beauty', icon: '💄' },
    { name: 'Wedding', icon: '💒' },
    { name: 'Events', icon: '🎪' }
];

const colorSchemes = {
    'E-commerce': [
        {
            name: "Autumnal Essence",
            description: "Deep plum and forest green create a natural, calming connection perfect for eco-friendly brands",
            colors: ["#4A2749", "#2C4C3B", "#D6C4B4", "#8B9B7C"]
        },
        {
            name: "Vibrant Playful",
            description: "High-energy combination perfect for youth-oriented brands",
            colors: ["#5C2A9D", "#FF1F7D", "#FFE45C", "#B4FF4E"]
        },
        {
            name: "Modern Festive",
            description: "Bold blues and greens with celebratory red, ideal for community-focused brands",
            colors: ["#1B3D6D", "#24966D", "#E54B4B", "#FFFFFF"]
        },
        {
            name: "Vintage Charm",
            description: "Muted, timeless tones perfect for feminine fashion and vintage aesthetics",
            colors: ["#F5E6D3", "#D2C4B5", "#8C9B7D", "#E8E1D9"]
        },
        {
            name: "Slate Luxury",
            description: "High-contrast palette mixing dramatic darks with soft ivory for luxury appeal",
            colors: ["#2C2C2C", "#F7F3EE", "#9A8F84", "#4A4A4A"]
        },
        {
            name: "Fresh Mint",
            description: "Clean and refreshing with playful warm accents for a balanced appeal",
            colors: ["#7CDBD5", "#9BE3DE", "#FFE74C", "#FFBEA3"]
        },
        {
            name: "Cozy Complement",
            description: "Warm blush tones with forest green create an inviting, balanced aesthetic",
            colors: ["#F8D7D0", "#2C4C3B", "#E54B4B", "#FFD700"]
        },
        {
            name: "Urban Sophisticate",
            description: "Warm neutrals with deep sophisticated hues for classic appeal",
            colors: ["#C17F59", "#E6D5C9", "#4A5859", "#2B4257"]
        },
        {
            name: "Bold Luxury",
            description: "Sophisticated black with gold accents for premium positioning",
            colors: ["#000000", "#D4AF37", "#FFFFFF", "#4A4A4A"]
        },
        {
            name: "Coastal Breeze",
            description: "Ocean-inspired blues with sandy neutrals for a fresh, natural feel",
            colors: ["#4A90E2", "#C2E0FF", "#F4D03F", "#E5E5E5"]
        },
        {
            name: "Bold Earth",
            description: "Strong earthy tones grounded in nature yet bold in presentation",
            colors: ["#5C4B51", "#8B785D", "#A4AC96", "#565264"]
        },
        {
            name: "Nordic Frost",
            description: "Clean and minimal palette inspired by Scandinavian design",
            colors: ["#F7F7F7", "#C4CCD4", "#7D8B98", "#2D3B4D"]
        },
        {
            name: "Desert Dawn",
            description: "Warm and inviting tones inspired by sunrise in the desert",
            colors: ["#FF7E5F", "#FEB47B", "#FFE5D9", "#7D6B7D"]
        },
        {
            name: "Tech Edge",
            description: "Modern and sleek combination for tech-forward brands",
            colors: ["#1A1A1A", "#00FF9D", "#E5E5E5", "#404040"]
        },
        {
            name: "Royal Elegance",
            description: "Luxurious combination of deep purple and gold",
            colors: ["#2C1810", "#7D4427", "#D4AF37", "#FFFFFF"]
        }
    ],
    'Portfolio': [
        {
            name: "Elegant Minimalism",
            description: "Perfect for fashion portfolios focusing on clean lines and timeless style",
            colors: ["#FFFFFF", "#F5F5F5", "#CCCCCC", "#333333"]
        },
        {
            name: "Creative Burst",
            description: "Perfect for digital branding where bold colors capture attention",
            colors: ["#FF6F61", "#88B04B", "#FFA07A", "#98FB98"]
        },
        {
            name: "Modern Professional",
            description: "Creates a sense of stability and reliability, ideal for corporate portfolios",
            colors: ["#2C3E50", "#34495E", "#7F8C8D", "#ECF0F1"]
        },
        {
            name: "Urban Chic",
            description: "Perfect for creative projects, balancing sophistication with warmth",
            colors: ["#4A4E69", "#22223B", "#C9ADA7", "#F2E9E4"]
        },
        {
            name: "Ocean Breeze",
            description: "Ideal for design portfolios, creating both serenity and vibrancy",
            colors: ["#0077B6", "#00B4D8", "#90E0EF", "#CAF0F8"]
        },
        {
            name: "Studio Dark",
            description: "Bold and dramatic for photography and video portfolios",
            colors: ["#0A0A0A", "#292929", "#A6A6A6", "#FFFFFF"]
        },
        {
            name: "Nature's Touch",
            description: "Organic and earthy palette for environmental and nature photographers",
            colors: ["#2D5A27", "#8B4513", "#A8E6CF", "#F3E9D2"]
        },
        {
            name: "Digital Wave",
            description: "Modern and tech-forward for digital art portfolios",
            colors: ["#1A1A1A", "#333333", "#00BCD4", "#FFFFFF"]
        },
        {
            name: "Artistic Soul",
            description: "Expressive and bold for fine art portfolios",
            colors: ["#D92027", "#FF9234", "#FFCD3C", "#35D0BA"]
        },
        {
            name: "Minimal Studio",
            description: "Clean and sophisticated for architecture portfolios",
            colors: ["#FFFFFF", "#E0E0E0", "#9E9E9E", "#212121"]
        },
        {
            name: "Creative Flow",
            description: "Dynamic and energetic for motion design portfolios",
            colors: ["#2D00F7", "#6A00F4", "#8900F2", "#A100F2"]
        },
        {
            name: "Design Focus",
            description: "Sharp and professional for UX/UI design portfolios",
            colors: ["#1B262C", "#0F4C75", "#3282B8", "#BBE1FA"]
        },
        {
            name: "Illustration Pop",
            description: "Playful and vibrant for illustration portfolios",
            colors: ["#FF0075", "#172774", "#77D970", "#FDFF00"]
        },
        {
            name: "Craft & Make",
            description: "Warm and textural for craft and maker portfolios",
            colors: ["#CB997E", "#DDBEA9", "#FFE8D6", "#B7B7A4"]
        },
        {
            name: "Code & Create",
            description: "Tech-inspired palette for developer portfolios",
            colors: ["#2B2B2B", "#64FFDA", "#C792EA", "#FFFFFF"]
        }
    ],
    'Blog': [
        {
            name: "Reader's Delight",
            description: "Easy on the eyes, perfect for long-form content",
            colors: ["#FFFFFF", "#F8F9FA", "#343A40", "#6C757D"]
        },
        {
            name: "Story Time",
            description: "Warm and inviting for personal storytelling",
            colors: ["#FFF3E6", "#5D4037", "#8D6E63", "#BCAAA4"]
        },
        {
            name: "Tech Blog",
            description: "Modern and clean for technical content",
            colors: ["#1E1E1E", "#4CAF50", "#E0E0E0", "#757575"]
        },
        {
            name: "Food Stories",
            description: "Appetizing and fresh for culinary blogs",
            colors: ["#FFFFFF", "#FF6B6B", "#4ECDC4", "#45B7AF"]
        },
        {
            name: "Travel Tales",
            description: "Adventure-inspiring colors for travel blogs",
            colors: ["#2B2D42", "#8D99AE", "#EDF2F4", "#EF233C"]
        },
        {
            name: "Lifestyle Light",
            description: "Bright and airy for lifestyle content",
            colors: ["#FFFFFF", "#FAF3F0", "#A8E6CF", "#FF8B94"]
        },
        {
            name: "Mindful Space",
            description: "Calming palette for wellness blogs",
            colors: ["#F8F9FA", "#E9ECEF", "#6C757D", "#212529"]
        },
        {
            name: "Creative Writing",
            description: "Inspiring combination for literary blogs",
            colors: ["#FFFBF5", "#2C3639", "#3F4E4F", "#A27B5C"]
        },
        {
            name: "News Focus",
            description: "Professional and trustworthy for news blogs",
            colors: ["#FFFFFF", "#14213D", "#E5E5E5", "#000000"]
        },
        {
            name: "Art Review",
            description: "Gallery-inspired palette for art blogs",
            colors: ["#FFFFFF", "#F4F4F4", "#333333", "#FF0066"]
        },
        {
            name: "Green Living",
            description: "Natural and eco-friendly for sustainability blogs",
            colors: ["#DAD7CD", "#A3B18A", "#588157", "#3A5A40"]
        },
        {
            name: "Fashion Edit",
            description: "Chic and trendy for fashion blogs",
            colors: ["#FFFFFF", "#FFD7BA", "#000000", "#98B4AA"]
        },
        {
            name: "Digital Nomad",
            description: "Modern and minimal for tech lifestyle blogs",
            colors: ["#FFFFFF", "#00B4D8", "#0077B6", "#03045E"]
        },
        {
            name: "Bookworm",
            description: "Cozy and classic for book review blogs",
            colors: ["#EADCD7", "#EA9010", "#41436A", "#974063"]
        },
        {
            name: "Parenting Joy",
            description: "Playful yet sophisticated for parenting blogs",
            colors: ["#FFF1E6", "#FDE2E4", "#FAD2E1", "#BEE1E6"]
        }
    ],
    'Corporate': [
        {
            name: "Executive Suite",
            description: "Professional and authoritative for corporate headquarters",
            colors: ["#0A192F", "#172A45", "#8892B0", "#CCD6F6"]
        },
        {
            name: "Innovation Hub",
            description: "Modern and forward-thinking for tech companies",
            colors: ["#FFFFFF", "#2196F3", "#1976D2", "#0D47A1"]
        },
        {
            name: "Financial Trust",
            description: "Reliable and established for financial institutions",
            colors: ["#002B5B", "#2B4865", "#256D85", "#8FE3CF"]
        },
        {
            name: "Legal Authority",
            description: "Traditional and trustworthy for law firms",
            colors: ["#1B1B1B", "#373737", "#8B0000", "#FFFFFF"]
        },
        {
            name: "Consulting Edge",
            description: "Sharp and professional for consulting firms",
            colors: ["#0F1B2D", "#374785", "#24305E", "#F8F8F8"]
        },
        {
            name: "Enterprise Solutions",
            description: "Clean and efficient for B2B services",
            colors: ["#FFFFFF", "#007BFF", "#6C757D", "#343A40"]
        },
        {
            name: "Growth Capital",
            description: "Dynamic and stable for investment firms",
            colors: ["#1A374D", "#406882", "#6998AB", "#B1D0E0"]
        },
        {
            name: "Modern Office",
            description: "Contemporary and professional for modern businesses",
            colors: ["#F8F9FA", "#E9ECEF", "#212529", "#495057"]
        },
        {
            name: "Global Trade",
            description: "International and inclusive for global corporations",
            colors: ["#003F5C", "#58508D", "#BC5090", "#FF6361"]
        },
        {
            name: "Tech Enterprise",
            description: "Innovative and reliable for enterprise software",
            colors: ["#2C3333", "#395B64", "#A5C9CA", "#E7F6F2"]
        },
        {
            name: "Agency Pro",
            description: "Creative yet professional for marketing agencies",
            colors: ["#222831", "#393E46", "#00ADB5", "#EEEEEE"]
        },
        {
            name: "Startup Success",
            description: "Energetic and professional for growing companies",
            colors: ["#2D4059", "#EA5455", "#F07B3F", "#FFD460"]
        },
        {
            name: "Research Lab",
            description: "Clean and focused for research institutions",
            colors: ["#FFFFFF", "#4A90E2", "#F5F5F5", "#333333"]
        },
        {
            name: "Media Group",
            description: "Bold and contemporary for media companies",
            colors: ["#1A1A1A", "#F44336", "#E0E0E0", "#9E9E9E"]
        },
        {
            name: "Data Driven",
            description: "Precise and modern for data companies",
            colors: ["#081F37", "#5FC9F3", "#2C7DA0", "#FFFFFF"]
        }
    ],
    'Restaurant': [
        {
            name: "Rustic Warmth",
            description: "Perfect for Italian or Mediterranean restaurants, evoking warmth and tradition",
            colors: ["#8B4513", "#D2691E", "#F4A460", "#DEB887"]
        },
        {
            name: "Fresh & Organic",
            description: "Ideal for health-focused or vegetarian restaurants",
            colors: ["#2E7D32", "#81C784", "#C8E6C9", "#F1F8E9"]
        },
        {
            name: "Asian Fusion",
            description: "Modern and sophisticated palette for contemporary Asian cuisine",
            colors: ["#D4AF37", "#1A237E", "#E53935", "#212121"]
        },
        {
            name: "Bistro Classic",
            description: "Timeless combination for upscale dining establishments",
            colors: ["#37474F", "#90A4AE", "#ECEFF1", "#B71C1C"]
        },
        {
            name: "Street Food Vibes",
            description: "Energetic and bold palette for casual dining and food trucks",
            colors: ["#FF6F00", "#FFA000", "#FFF176", "#FFFFFF"]
        },
        {
            name: "Fine Dining",
            description: "Elegant and sophisticated for upscale restaurants",
            colors: ["#212121", "#424242", "#D4AF37", "#FFFFFF"]
        },
        {
            name: "Seafood Special",
            description: "Ocean-inspired colors for seafood restaurants",
            colors: ["#01579B", "#0288D1", "#B3E5FC", "#FFFFFF"]
        },
        {
            name: "Steakhouse",
            description: "Rich and bold for steakhouse restaurants",
            colors: ["#3E2723", "#5D4037", "#D7CCC8", "#FFFFFF"]
        },
        {
            name: "Cafe Cozy",
            description: "Warm and inviting for cafes and coffee shops",
            colors: ["#795548", "#8D6E63", "#D7CCC8", "#FFFFFF"]
        },
        {
            name: "Modern Dining",
            description: "Contemporary and clean for modern restaurants",
            colors: ["#263238", "#455A64", "#CFD8DC", "#FFFFFF"]
        },
        {
            name: "Sushi Bar",
            description: "Minimal and elegant for Japanese cuisine",
            colors: ["#000000", "#212121", "#F5F5F5", "#FF4081"]
        },
        {
            name: "Mexican Fiesta",
            description: "Vibrant and festive for Mexican restaurants",
            colors: ["#004D40", "#00796B", "#FFC107", "#FFFFFF"]
        },
        {
            name: "Pizza Place",
            description: "Classic Italian colors for pizzerias",
            colors: ["#B71C1C", "#1B5E20", "#F5F5F5", "#FFC107"]
        },
        {
            name: "Desert Cafe",
            description: "Sweet and inviting for dessert cafes",
            colors: ["#AD1457", "#D81B60", "#F8BBD0", "#FFFFFF"]
        },
        {
            name: "Brewery Style",
            description: "Industrial and rustic for breweries and pubs",
            colors: ["#37474F", "#546E7A", "#D4AF37", "#FFFFFF"]
        }
    ],
    'Tech Startup': [
        {
            name: "Digital Innovation",
            description: "Modern and progressive palette for innovative tech companies",
            colors: ["#1976D2", "#64B5F6", "#BBDEFB", "#FFFFFF"]
        },
        {
            name: "Crypto Future",
            description: "Bold and futuristic scheme for blockchain and crypto startups",
            colors: ["#311B92", "#7C4DFF", "#B388FF", "#000000"]
        },
        {
            name: "Clean SaaS",
            description: "Professional and trustworthy palette for SaaS platforms",
            colors: ["#007BFF", "#26A69A", "#B2DFDB", "#E0F2F1"]
        },
        {
            name: "AI Modern",
            description: "Sophisticated scheme for artificial intelligence companies",
            colors: ["#0D47A1", "#42A5F5", "#90CAF9", "#212121"]
        },
        {
            name: "App Minimal",
            description: "Clean and minimal palette for mobile apps",
            colors: ["#212121", "#757575", "#BDBDBD", "#FFFFFF"]
        },
        {
            name: "Cloud Tech",
            description: "Light and airy for cloud computing services",
            colors: ["#1565C0", "#42A5F5", "#E3F2FD", "#FFFFFF"]
        },
        {
            name: "Data Science",
            description: "Professional and analytical for data companies",
            colors: ["#004D40", "#00796B", "#B2DFDB", "#FFFFFF"]
        },
        {
            name: "Security Pro",
            description: "Strong and trustworthy for cybersecurity",
            colors: ["#1A237E", "#3949AB", "#C5CAE9", "#FFFFFF"]
        },
        {
            name: "DevOps Flow",
            description: "Efficient and modern for development operations",
            colors: ["#263238", "#455A64", "#CFD8DC", "#FFFFFF"]
        },
        {
            name: "IoT Connect",
            description: "Connected and innovative for IoT platforms",
            colors: ["#006064", "#00ACC1", "#B2EBF2", "#FFFFFF"]
        },
        {
            name: "Gaming Tech",
            description: "Energetic and bold for gaming startups",
            colors: ["#1A1A1A", "#6200EA", "#B388FF", "#FFFFFF"]
        },
        {
            name: "AR Future",
            description: "Forward-thinking for augmented reality",
            colors: ["#311B92", "#512DA8", "#D1C4E9", "#FFFFFF"]
        },
        {
            name: "HealthTech",
            description: "Clean and trustworthy for health technology",
            colors: ["#0277BD", "#039BE5", "#B3E5FC", "#FFFFFF"]
        },
        {
            name: "EdTech Innovation",
            description: "Engaging and professional for education technology",
            colors: ["#2E7D32", "#4CAF50", "#C8E6C9", "#FFFFFF"]
        },
        {
            name: "Robotics Lab",
            description: "Technical and precise for robotics startups",
            colors: ["#212121", "#424242", "#90A4AE", "#FFFFFF"]
        }
    ],
    'Fashion': [
        {
            name: "Haute Couture",
            description: "Elegant and luxurious for high fashion",
            colors: ["#000000", "#212121", "#E0E0E0", "#FFFFFF"]
        },
        {
            name: "Street Style",
            description: "Urban and edgy for street fashion",
            colors: ["#212121", "#424242", "#BDBDBD", "#FF4081"]
        },
        {
            name: "Minimalist Mode",
            description: "Clean and modern for contemporary fashion",
            colors: ["#FAFAFA", "#F5F5F5", "#757575", "#212121"]
        },
        {
            name: "Vintage Vogue",
            description: "Classic and timeless for vintage fashion",
            colors: ["#3E2723", "#5D4037", "#D7CCC8", "#FFFFFF"]
        },
        {
            name: "Luxury Labels",
            description: "Sophisticated and premium for luxury brands",
            colors: ["#212121", "#424242", "#D4AF37", "#FFFFFF"]
        },
        {
            name: "Sustainable Style",
            description: "Natural and eco-friendly for sustainable fashion",
            colors: ["#1B5E20", "#388E3C", "#C8E6C9", "#FFFFFF"]
        },
        {
            name: "Fashion Week",
            description: "Bold and glamorous for fashion events",
            colors: ["#880E4F", "#E91E63", "#F8BBD0", "#FFFFFF"]
        },
        {
            name: "Designer Studio",
            description: "Creative and professional for fashion design",
            colors: ["#263238", "#455A64", "#CFD8DC", "#FFFFFF"]
        },
        {
            name: "Accessories Edit",
            description: "Chic and detailed for accessories",
            colors: ["#1A1A1A", "#333333", "#C0C0C0", "#FFFFFF"]
        },
        {
            name: "Beauty Blend",
            description: "Soft and elegant for beauty fashion",
            colors: ["#AD1457", "#D81B60", "#F8BBD0", "#FFFFFF"]
        },
        {
            name: "Urban Uniform",
            description: "Modern and sleek for urban fashion",
            colors: ["#212121", "#616161", "#9E9E9E", "#FFFFFF"]
        },
        {
            name: "Boho Chic",
            description: "Natural and free-spirited for boho fashion",
            colors: ["#795548", "#8D6E63", "#D7CCC8", "#FFFFFF"]
        },
        {
            name: "Sport Luxe",
            description: "Athletic and luxurious for sportswear",
            colors: ["#1A237E", "#3949AB", "#C5CAE9", "#FFFFFF"]
        },
        {
            name: "Evening Elegance",
            description: "Dramatic and sophisticated for evening wear",
            colors: ["#000000", "#212121", "#9E9E9E", "#FFFFFF"]
        },
        {
            name: "Fashion Tech",
            description: "Innovative and modern for fashion technology",
            colors: ["#006064", "#00ACC1", "#B2EBF2", "#FFFFFF"]
        }
    ],
    'Sports': [
        {
            name: "Victory Red",
            description: "Bold and energetic for sports teams",
            colors: ["#B71C1C", "#E53935", "#FFCDD2", "#FFFFFF"]
        },
        {
            name: "Team Spirit",
            description: "Dynamic and powerful for team sports",
            colors: ["#1A237E", "#3949AB", "#C5CAE9", "#FFFFFF"]
        },
        {
            name: "Fitness Pro",
            description: "Clean and motivating for fitness",
            colors: ["#212121", "#424242", "#BDBDBD", "#4CAF50"]
        },
        {
            name: "Stadium Lights",
            description: "Bright and exciting for sports venues",
            colors: ["#263238", "#455A64", "#CFD8DC", "#FFFFFF"]
        },
        {
            name: "Champion Gold",
            description: "Victorious and premium for achievements",
            colors: ["#212121", "#FFC107", "#FFECB3", "#FFFFFF"]
        },
        {
            name: "Training Ground",
            description: "Focused and professional for training",
            colors: ["#004D40", "#00796B", "#B2DFDB", "#FFFFFF"]
        },
        {
            name: "Game Day",
            description: "Energetic and bold for competitions",
            colors: ["#311B92", "#512DA8", "#D1C4E9", "#FFFFFF"]
        },
        {
            name: "Outdoor Sports",
            description: "Natural and rugged for outdoor activities",
            colors: ["#33691E", "#558B2F", "#DCEDC8", "#FFFFFF"]
        },
        {
            name: "Sports Tech",
            description: "Modern and innovative for sports technology",
            colors: ["#006064", "#00ACC1", "#B2EBF2", "#FFFFFF"]
        },
        {
            name: "Arena Power",
            description: "Strong and dramatic for sports arenas",
            colors: ["#1A1A1A", "#333333", "#FF5722", "#FFFFFF"]
        },
        {
            name: "Race Track",
            description: "Fast and dynamic for racing sports",
            colors: ["#212121", "#F44336", "#FFCDD2", "#FFFFFF"]
        },
        {
            name: "Water Sports",
            description: "Fresh and energetic for aquatic sports",
            colors: ["#01579B", "#0288D1", "#B3E5FC", "#FFFFFF"]
        },
        {
            name: "Winter Sports",
            description: "Cool and crisp for winter athletics",
            colors: ["#1A237E", "#3949AB", "#C5CAE9", "#FFFFFF"]
        },
        {
            name: "Extreme Sports",
            description: "Bold and adventurous for extreme sports",
            colors: ["#BF360C", "#E64A19", "#FFCCBC", "#FFFFFF"]
        },
        {
            name: "Sports Medicine",
            description: "Professional and caring for sports health",
            colors: ["#0D47A1", "#1976D2", "#BBDEFB", "#FFFFFF"]
        }
    ],
    'Music': [
        {
            name: "Rock Stage",
            description: "Bold and energetic for rock music",
            colors: ["#000000", "#D32F2F", "#FFFFFF", "#757575"]
        },
        {
            name: "Jazz Club",
            description: "Smooth and sophisticated for jazz",
            colors: ["#212121", "#4A148C", "#E1BEE7", "#FFFFFF"]
        },
        {
            name: "Classical Hall",
            description: "Elegant and refined for classical music",
            colors: ["#3E2723", "#5D4037", "#D7CCC8", "#FFFFFF"]
        },
        {
            name: "Electronic Beat",
            description: "Modern and vibrant for electronic music",
            colors: ["#1A1A1A", "#6200EA", "#B388FF", "#FFFFFF"]
        },
        {
            name: "Hip Hop Style",
            description: "Urban and bold for hip hop",
            colors: ["#212121", "#FF6F00", "#FFE0B2", "#FFFFFF"]
        },
        {
            name: "Pop Star",
            description: "Bright and energetic for pop music",
            colors: ["#880E4F", "#E91E63", "#F8BBD0", "#FFFFFF"]
        },
        {
            name: "Studio Sound",
            description: "Professional and focused for recording",
            colors: ["#263238", "#455A64", "#CFD8DC", "#FFFFFF"]
        },
        {
            name: "Folk Acoustic",
            description: "Warm and natural for folk music",
            colors: ["#795548", "#8D6E63", "#D7CCC8", "#FFFFFF"]
        },
        {
            name: "Blues Mood",
            description: "Deep and soulful for blues",
            colors: ["#1A237E", "#3949AB", "#C5CAE9", "#FFFFFF"]
        },
        {
            name: "Festival Vibes",
            description: "Colorful and exciting for music festivals",
            colors: ["#4A148C", "#AA00FF", "#EA80FC", "#FFFFFF"]
        },
        {
            name: "Country Roads",
            description: "Rustic and warm for country music",
            colors: ["#3E2723", "#5D4037", "#D7CCC8", "#FFFFFF"]
        },
        {
            name: "Digital Audio",
            description: "Modern and clean for digital music",
            colors: ["#006064", "#00ACC1", "#B2EBF2", "#FFFFFF"]
        },
        {
            name: "Indie Scene",
            description: "Creative and alternative for indie music",
            colors: ["#37474F", "#546E7A", "#CFD8DC", "#FFFFFF"]
        },
        {
            name: "World Music",
            description: "Rich and cultural for world music",
            colors: ["#004D40", "#00796B", "#B2DFDB", "#FFFFFF"]
        },
        {
            name: "Metal Edge",
            description: "Dark and powerful for metal music",
            colors: ["#000000", "#212121", "#757575", "#FFFFFF"]
        }
    ],
    'Art & Design': [
        {
            name: "Creative Studio",
            description: "Clean and inspiring for design studios",
            colors: ["#FFFFFF", "#F5F5F5", "#212121", "#000000"]
        },
        {
            name: "Gallery White",
            description: "Minimal and focused for art galleries",
            colors: ["#FAFAFA", "#F5F5F5", "#757575", "#212121"]
        },
        {
            name: "Digital Art",
            description: "Modern and tech-forward for digital art",
            colors: ["#1A1A1A", "#333333", "#00BCD4", "#FFFFFF"]
        },
        {
            name: "Paint Studio",
            description: "Artistic and expressive for painters",
            colors: ["#263238", "#455A64", "#B0BEC5", "#FFFFFF"]
        },
        {
            name: "Sculpture Space",
            description: "Strong and textural for sculptors",
            colors: ["#37474F", "#546E7A", "#CFD8DC", "#FFFFFF"]
        },
        {
            name: "Graphic Design",
            description: "Bold and professional for graphic design",
            colors: ["#000000", "#212121", "#E0E0E0", "#FF4081"]
        },
        {
            name: "UI Design",
            description: "Clean and modern for interface design",
            colors: ["#1A237E", "#3949AB", "#C5CAE9", "#FFFFFF"]
        },
        {
            name: "Print Shop",
            description: "Technical and precise for print design",
            colors: ["#004D40", "#00796B", "#B2DFDB", "#FFFFFF"]
        },
        {
            name: "Illustration",
            description: "Playful and creative for illustrators",
            colors: ["#311B92", "#512DA8", "#D1C4E9", "#FFFFFF"]
        },
        {
            name: "Art School",
            description: "Educational and inspiring for art education",
            colors: ["#006064", "#00ACC1", "#B2EBF2", "#FFFFFF"]
        },
        {
            name: "Mixed Media",
            description: "Diverse and experimental for mixed media",
            colors: ["#1A1A1A", "#4A148C", "#E1BEE7", "#FFFFFF"]
        },
        {
            name: "Photography Art",
            description: "Dramatic and focused for art photography",
            colors: ["#212121", "#424242", "#BDBDBD", "#FFFFFF"]
        },
        {
            name: "Design Agency",
            description: "Professional and creative for agencies",
            colors: ["#0D47A1", "#1976D2", "#BBDEFB", "#FFFFFF"]
        },
        {
            name: "Art Exhibition",
            description: "Elegant and sophisticated for exhibitions",
            colors: ["#212121", "#9E9E9E", "#F5F5F5", "#FFFFFF"]
        },
        {
            name: "Motion Design",
            description: "Dynamic and modern for motion graphics",
            colors: ["#1A1A1A", "#6200EA", "#B388FF", "#FFFFFF"]
        }
    ],
    'Finance': [
        {
            name: "Corporate Trust",
            description: "Professional and reliable for corporate finance",
            colors: ["#0D47A1", "#1976D2", "#BBDEFB", "#FFFFFF"]
        },
        {
            name: "Investment Pro",
            description: "Strong and trustworthy for investment firms",
            colors: ["#1A237E", "#3949AB", "#C5CAE9", "#FFFFFF"]
        },
        {
            name: "Banking Blue",
            description: "Traditional and secure for banking",
            colors: ["#01579B", "#0288D1", "#B3E5FC", "#FFFFFF"]
        },
        {
            name: "Wealth Management",
            description: "Sophisticated and premium for wealth services",
            colors: ["#212121", "#424242", "#D4AF37", "#FFFFFF"]
        },
        {
            name: "Fintech Future",
            description: "Modern and innovative for financial technology",
            colors: ["#006064", "#00ACC1", "#B2EBF2", "#FFFFFF"]
        },
        {
            name: "Insurance Trust",
            description: "Reliable and professional for insurance",
            colors: ["#263238", "#455A64", "#CFD8DC", "#FFFFFF"]
        },
        {
            name: "Trading Floor",
            description: "Dynamic and focused for trading",
            colors: ["#004D40", "#00796B", "#B2DFDB", "#FFFFFF"]
        },
        {
            name: "Credit Service",
            description: "Trustworthy and stable for credit services",
            colors: ["#1B5E20", "#388E3C", "#C8E6C9", "#FFFFFF"]
        },
        {
            name: "Tax Professional",
            description: "Precise and reliable for tax services",
            colors: ["#37474F", "#546E7A", "#CFD8DC", "#FFFFFF"]
        },
        {
            name: "Audit Expert",
            description: "Professional and detailed for auditing",
            colors: ["#000000", "#212121", "#9E9E9E", "#FFFFFF"]
        },
        {
            name: "Financial Plan",
            description: "Clear and trustworthy for financial planning",
            colors: ["#0277BD", "#039BE5", "#B3E5FC", "#FFFFFF"]
        },
        {
            name: "Market Analysis",
            description: "Sharp and analytical for market research",
            colors: ["#311B92", "#512DA8", "#D1C4E9", "#FFFFFF"]
        },
        {
            name: "Crypto Finance",
            description: "Modern and secure for cryptocurrency",
            colors: ["#1A1A1A", "#333333", "#4CAF50", "#FFFFFF"]
        },
        {
            name: "Private Equity",
            description: "Premium and exclusive for private equity",
            colors: ["#212121", "#424242", "#D4AF37", "#FFFFFF"]
        },
        {
            name: "Risk Management",
            description: "Stable and professional for risk assessment",
            colors: ["#004D40", "#00796B", "#B2DFDB", "#FFFFFF"]
        }
    ],
    'Non-Profit': [
        {
            name: "Community Heart",
            description: "Warm and welcoming for community organizations",
            colors: ["#2E7D32", "#4CAF50", "#C8E6C9", "#FFFFFF"]
        },
        {
            name: "Social Impact",
            description: "Strong and purposeful for social causes",
            colors: ["#1565C0", "#42A5F5", "#BBDEFB", "#FFFFFF"]
        },
        {
            name: "Earth Care",
            description: "Natural and sustainable for environmental organizations",
            colors: ["#2E7D32", "#81C784", "#C8E6C9", "#F1F8E9"]
        },
        {
            name: "Hope & Help",
            description: "Uplifting and supportive for charitable organizations",
            colors: ["#00796B", "#26A69A", "#B2DFDB", "#E0F2F1"]
        },
        {
            name: "Global Unity",
            description: "Inclusive and diverse for international organizations",
            colors: ["#0277BD", "#039BE5", "#B3E5FC", "#FFFFFF"]
        },
        {
            name: "Youth Focus",
            description: "Bright and energetic for youth programs",
            colors: ["#F57C00", "#FFB74D", "#FFE0B2", "#FFFFFF"]
        },
        {
            name: "Animal Welfare",
            description: "Gentle and caring for animal organizations",
            colors: ["#558B2F", "#7CB342", "#DCEDC8", "#F1F8E9"]
        },
        {
            name: "Education Access",
            description: "Clear and accessible for educational initiatives",
            colors: ["#1976D2", "#64B5F6", "#BBDEFB", "#FFFFFF"]
        },
        {
            name: "Health Support",
            description: "Clean and reassuring for health organizations",
            colors: ["#00ACC1", "#4DD0E1", "#B2EBF2", "#FFFFFF"]
        },
        {
            name: "Arts & Culture",
            description: "Creative and expressive for cultural organizations",
            colors: ["#6A1B9A", "#AB47BC", "#E1BEE7", "#FFFFFF"]
        },
        {
            name: "Disaster Relief",
            description: "Urgent and trustworthy for emergency response",
            colors: ["#D32F2F", "#EF5350", "#FFCDD2", "#FFFFFF"]
        },
        {
            name: "Food Security",
            description: "Nurturing and sustainable for food programs",
            colors: ["#689F38", "#9CCC65", "#DCEDC8", "#FFFFFF"]
        },
        {
            name: "Peace & Justice",
            description: "Balanced and dignified for advocacy groups",
            colors: ["#1565C0", "#42A5F5", "#BBDEFB", "#FFFFFF"]
        },
        {
            name: "Community Development",
            description: "Grounded and progressive for development programs",
            colors: ["#00695C", "#26A69A", "#B2DFDB", "#FFFFFF"]
        },
        {
            name: "Volunteer Spirit",
            description: "Inspiring and engaging for volunteer programs",
            colors: ["#00838F", "#26C6DA", "#B2EBF2", "#FFFFFF"]
        }
    ],
    'Educational': [
        {
            name: "Academic Excellence",
            description: "Professional and scholarly for higher education",
            colors: ["#1A237E", "#3949AB", "#C5CAE9", "#FFFFFF"]
        },
        {
            name: "Early Learning",
            description: "Playful and engaging for early education",
            colors: ["#F57C00", "#FFB74D", "#FFE0B2", "#FFFFFF"]
        },
        {
            name: "STEM Focus",
            description: "Technical and precise for science education",
            colors: ["#006064", "#00ACC1", "#B2EBF2", "#FFFFFF"]
        },
        {
            name: "Arts Education",
            description: "Creative and expressive for arts programs",
            colors: ["#AD1457", "#D81B60", "#F8BBD0", "#FFFFFF"]
        },
        {
            name: "Digital Learning",
            description: "Modern and tech-forward for online education",
            colors: ["#1976D2", "#64B5F6", "#BBDEFB", "#FFFFFF"]
        },
        {
            name: "Language Studies",
            description: "Global and diverse for language learning",
            colors: ["#0277BD", "#039BE5", "#B3E5FC", "#FFFFFF"]
        },
        {
            name: "Library Knowledge",
            description: "Calm and focused for learning spaces",
            colors: ["#37474F", "#546E7A", "#CFD8DC", "#FFFFFF"]
        },
        {
            name: "Student Life",
            description: "Energetic and social for student activities",
            colors: ["#00796B", "#26A69A", "#B2DFDB", "#FFFFFF"]
        },
        {
            name: "Research Excellence",
            description: "Sophisticated and analytical for research institutions",
            colors: ["#263238", "#455A64", "#CFD8DC", "#FFFFFF"]
        },
        {
            name: "Special Education",
            description: "Supportive and inclusive for special needs",
            colors: ["#558B2F", "#7CB342", "#DCEDC8", "#FFFFFF"]
        },
        {
            name: "Professional Training",
            description: "Professional and focused for career education",
            colors: ["#0D47A1", "#1976D2", "#BBDEFB", "#FFFFFF"]
        },
        {
            name: "Educational Tech",
            description: "Innovative and modern for educational technology",
            colors: ["#006064", "#00ACC1", "#B2EBF2", "#FFFFFF"]
        },
        {
            name: "Adult Learning",
            description: "Mature and engaging for adult education",
            colors: ["#2E7D32", "#4CAF50", "#C8E6C9", "#FFFFFF"]
        },
        {
            name: "Distance Learning",
            description: "Connected and accessible for remote education",
            colors: ["#1565C0", "#42A5F5", "#BBDEFB", "#FFFFFF"]
        },
        {
            name: "Montessori Method",
            description: "Natural and nurturing for alternative education",
            colors: ["#00695C", "#26A69A", "#B2DFDB", "#FFFFFF"]
        }
    ],
    'Health & Fitness': [
        {
            name: "Wellness Balance",
            description: "Calm and balanced for wellness centers",
            colors: ["#00796B", "#26A69A", "#B2DFDB", "#FFFFFF"]
        },
        {
            name: "Fitness Power",
            description: "Energetic and strong for gyms",
            colors: ["#D32F2F", "#EF5350", "#FFCDD2", "#FFFFFF"]
        },
        {
            name: "Yoga Zen",
            description: "Serene and peaceful for yoga studios",
            colors: ["#558B2F", "#7CB342", "#DCEDC8", "#FFFFFF"]
        },
        {
            name: "Medical Care",
            description: "Professional and trustworthy for healthcare",
            colors: ["#1565C0", "#42A5F5", "#BBDEFB", "#FFFFFF"]
        },
        {
            name: "Sports Training",
            description: "Dynamic and motivating for sports facilities",
            colors: ["#F57C00", "#FFB74D", "#FFE0B2", "#FFFFFF"]
        },
        {
            name: "Mental Wellness",
            description: "Calming and supportive for mental health",
            colors: ["#0097A7", "#4DD0E1", "#B2EBF2", "#FFFFFF"]
        },
        {
            name: "Nutrition Focus",
            description: "Fresh and clean for nutrition services",
            colors: ["#2E7D32", "#4CAF50", "#C8E6C9", "#FFFFFF"]
        },
        {
            name: "Physical Therapy",
            description: "Professional and healing for rehabilitation",
            colors: ["#0277BD", "#039BE5", "#B3E5FC", "#FFFFFF"]
        },
        {
            name: "CrossFit Energy",
            description: "Bold and powerful for intense training",
            colors: ["#212121", "#424242", "#FF5722", "#FFFFFF"]
        },
        {
            name: "Mindful Movement",
            description: "Gentle and focused for pilates and movement",
            colors: ["#00695C", "#26A69A", "#B2DFDB", "#FFFFFF"]
        },
        {
            name: "Health Tech",
            description: "Modern and innovative for digital health",
            colors: ["#006064", "#00ACC1", "#B2EBF2", "#FFFFFF"]
        },
        {
            name: "Recovery Care",
            description: "Soothing and supportive for recovery services",
            colors: ["#1976D2", "#64B5F6", "#BBDEFB", "#FFFFFF"]
        },
        {
            name: "Personal Training",
            description: "Professional and motivating for personal trainers",
            colors: ["#37474F", "#546E7A", "#CFD8DC", "#FFFFFF"]
        },
        {
            name: "Dance Studio",
            description: "Artistic and energetic for dance fitness",
            colors: ["#AD1457", "#D81B60", "#F8BBD0", "#FFFFFF"]
        },
        {
            name: "Outdoor Fitness",
            description: "Natural and invigorating for outdoor activities",
            colors: ["#33691E", "#558B2F", "#C5E1A5", "#FFFFFF"]
        }
    ],
    'Travel': [
        {
            name: "Adventure Spirit",
            description: "Bold and exciting for adventure travel",
            colors: ["#FF6F00", "#FFA000", "#FFF3E0", "#FFFFFF"]
        },
        {
            name: "Luxury Journey",
            description: "Elegant and sophisticated for luxury travel",
            colors: ["#212121", "#424242", "#D4AF37", "#FFFFFF"]
        },
        {
            name: "Beach Paradise",
            description: "Fresh and tropical for beach destinations",
            colors: ["#0288D1", "#4FC3F7", "#B3E5FC", "#FFFFFF"]
        },
        {
            name: "Mountain Trek",
            description: "Rugged and natural for mountain adventures",
            colors: ["#33691E", "#558B2F", "#C5E1A5", "#FFFFFF"]
        },
        {
            name: "Cultural Tour",
            description: "Rich and vibrant for cultural experiences",
            colors: ["#C62828", "#EF5350", "#FFCDD2", "#FFFFFF"]
        },
        {
            name: "Urban Explorer",
            description: "Modern and sleek for city travel",
            colors: ["#263238", "#455A64", "#CFD8DC", "#FFFFFF"]
        },
        {
            name: "Eco Travel",
            description: "Natural and sustainable for eco-tourism",
            colors: ["#2E7D32", "#4CAF50", "#C8E6C9", "#FFFFFF"]
        },
        {
            name: "Desert Safari",
            description: "Warm and exotic for desert adventures",
            colors: ["#BF360C", "#E64A19", "#FFCCBC", "#FFFFFF"]
        },
        {
            name: "Cruise Life",
            description: "Maritime and elegant for cruise travel",
            colors: ["#01579B", "#039BE5", "#B3E5FC", "#FFFFFF"]
        },
        {
            name: "Backpacker",
            description: "Casual and friendly for budget travel",
            colors: ["#00695C", "#26A69A", "#B2DFDB", "#FFFFFF"]
        },
        {
            name: "Food Tourism",
            description: "Appetizing and warm for culinary travel",
            colors: ["#D84315", "#FF5722", "#FFCCBC", "#FFFFFF"]
        },
        {
            name: "Winter Wonder",
            description: "Cool and crisp for winter destinations",
            colors: ["#1A237E", "#3949AB", "#C5CAE9", "#FFFFFF"]
        },
        {
            name: "Historic Journey",
            description: "Classic and timeless for heritage sites",
            colors: ["#4E342E", "#6D4C41", "#D7CCC8", "#FFFFFF"]
        },
        {
            name: "Island Escape",
            description: "Tropical and relaxing for island getaways",
            colors: ["#00796B", "#26A69A", "#B2DFDB", "#FFFFFF"]
        },
        {
            name: "Digital Nomad",
            description: "Modern and connected for remote work travel",
            colors: ["#006064", "#00ACC1", "#B2EBF2", "#FFFFFF"]
        }
    ],
    'Photography': [
        {
            name: "Studio Pro",
            description: "Clean and professional for studio photography",
            colors: ["#212121", "#424242", "#BDBDBD", "#FFFFFF"]
        },
        {
            name: "Nature Lens",
            description: "Natural and organic for nature photography",
            colors: ["#2E7D32", "#4CAF50", "#C8E6C9", "#FFFFFF"]
        },
        {
            name: "Portrait Artist",
            description: "Soft and flattering for portrait photography",
            colors: ["#C2185B", "#E91E63", "#F8BBD0", "#FFFFFF"]
        },
        {
            name: "Street Scene",
            description: "Urban and edgy for street photography",
            colors: ["#263238", "#455A64", "#CFD8DC", "#FFFFFF"]
        },
        {
            name: "Wedding Moments",
            description: "Romantic and elegant for wedding photography",
            colors: ["#6A1B9A", "#AB47BC", "#E1BEE7", "#FFFFFF"]
        },
        {
            name: "Fashion Flash",
            description: "Bold and glamorous for fashion photography",
            colors: ["#1A1A1A", "#333333", "#FF4081", "#FFFFFF"]
        },
        {
            name: "Documentary",
            description: "Honest and impactful for documentary work",
            colors: ["#37474F", "#546E7A", "#CFD8DC", "#FFFFFF"]
        },
        {
            name: "Product Perfect",
            description: "Clean and precise for product photography",
            colors: ["#006064", "#00ACC1", "#B2EBF2", "#FFFFFF"]
        },
        {
            name: "Sports Action",
            description: "Dynamic and energetic for sports photography",
            colors: ["#BF360C", "#E64A19", "#FFCCBC", "#FFFFFF"]
        },
        {
            name: "Fine Art",
            description: "Sophisticated and artistic for fine art photography",
            colors: ["#1A237E", "#7C4DFF", "#B388FF", "#FFFFFF"]
        },
        {
            name: "Event Capture",
            description: "Versatile and professional for event photography",
            colors: ["#00695C", "#26A69A", "#B2DFDB", "#FFFFFF"]
        },
        {
            name: "Architecture",
            description: "Structural and clean for architectural photography",
            colors: ["#0D47A1", "#1976D2", "#BBDEFB", "#FFFFFF"]
        },
        {
            name: "Food Story",
            description: "Rich and appetizing for food photography",
            colors: ["#D84315", "#FF5722", "#FFCCBC", "#FFFFFF"]
        },
        {
            name: "Night Vision",
            description: "Dramatic and moody for night photography",
            colors: ["#1A1A1A", "#333333", "#4FC3F7", "#FFFFFF"]
        },
        {
            name: "Aerial View",
            description: "Expansive and dynamic for drone photography",
            colors: ["#004D40", "#00796B", "#B2DFDB", "#FFFFFF"]
        }
    ],
    'Real Estate': [
        {
            name: "Luxury Property",
            description: "Elegant and premium for luxury real estate",
            colors: ["#212121", "#424242", "#D4AF37", "#FFFFFF"]
        },
        {
            name: "Modern Living",
            description: "Contemporary and clean for modern homes",
            colors: ["#263238", "#455A64", "#CFD8DC", "#FFFFFF"]
        },
        {
            name: "Urban Development",
            description: "Professional and urban for city properties",
            colors: ["#0D47A1", "#1976D2", "#BBDEFB", "#FFFFFF"]
        },
        {
            name: "Eco Home",
            description: "Natural and sustainable for eco-friendly properties",
            colors: ["#2E7D32", "#4CAF50", "#C8E6C9", "#FFFFFF"]
        },
        {
            name: "Classic Estate",
            description: "Timeless and sophisticated for traditional properties",
            colors: ["#4E342E", "#6D4C41", "#D7CCC8", "#FFFFFF"]
        },
        {
            name: "Beach Property",
            description: "Fresh and coastal for waterfront homes",
            colors: ["#0288D1", "#4FC3F7", "#B3E5FC", "#FFFFFF"]
        },
        {
            name: "Commercial Space",
            description: "Professional and reliable for commercial real estate",
            colors: ["#37474F", "#546E7A", "#CFD8DC", "#FFFFFF"]
        },
        {
            name: "Smart Home",
            description: "Modern and tech-forward for smart properties",
            colors: ["#006064", "#00ACC1", "#B2EBF2", "#FFFFFF"]
        },
        {
            name: "Rural Retreat",
            description: "Warm and inviting for country properties",
            colors: ["#5D4037", "#795548", "#D7CCC8", "#FFFFFF"]
        },
        {
            name: "Investment Property",
            description: "Professional and trustworthy for investors",
            colors: ["#1565C0", "#1976D2", "#BBDEFB", "#FFFFFF"]
        },
        {
            name: "New Development",
            description: "Fresh and progressive for new constructions",
            colors: ["#00695C", "#26A69A", "#B2DFDB", "#FFFFFF"]
        },
        {
            name: "Historic Property",
            description: "Classic and heritage for historic homes",
            colors: ["#3E2723", "#5D4037", "#D7CCC8", "#FFFFFF"]
        },
        {
            name: "Rental Market",
            description: "Approachable and professional for rentals",
            colors: ["#0277BD", "#039BE5", "#B3E5FC", "#FFFFFF"]
        },
        {
            name: "Mountain Property",
            description: "Rugged and natural for mountain homes",
            colors: ["#33691E", "#558B2F", "#C5E1A5", "#FFFFFF"]
        },
        {
            name: "Urban Loft",
            description: "Industrial and modern for urban lofts",
            colors: ["#212121", "#424242", "#BDBDBD", "#FFFFFF"]
        }
    ],
    'Restaurant & Food': [
        {
            name: "Fine Dining",
            description: "Elegant and sophisticated for upscale restaurants",
            colors: ["#212121", "#424242", "#D4AF37", "#FFFFFF"]
        },
        {
            name: "Casual Bistro",
            description: "Warm and inviting for casual dining",
            colors: ["#D84315", "#FF5722", "#FFCCBC", "#FFFFFF"]
        },
        {
            name: "Cafe Culture",
            description: "Cozy and welcoming for coffee shops",
            colors: ["#5D4037", "#795548", "#D7CCC8", "#FFFFFF"]
        },
        {
            name: "Asian Fusion",
            description: "Modern and exotic for Asian cuisine",
            colors: ["#C2185B", "#E91E63", "#F8BBD0", "#FFFFFF"]
        },
        {
            name: "Italian Trattoria",
            description: "Rustic and traditional for Italian restaurants",
            colors: ["#B71C1C", "#E53935", "#FFCDD2", "#FFFFFF"]
        },
        {
            name: "Health Food",
            description: "Fresh and natural for healthy eating",
            colors: ["#2E7D32", "#4CAF50", "#C8E6C9", "#FFFFFF"]
        },
        {
            name: "Street Food",
            description: "Bold and vibrant for food trucks",
            colors: ["#FF6F00", "#FFA000", "#FFF3E0", "#FFFFFF"]
        },
        {
            name: "Dessert Shop",
            description: "Sweet and playful for dessert cafes",
            colors: ["#C2185B", "#F06292", "#F8BBD0", "#FFFFFF"]
        },
        {
            name: "Seafood Restaurant",
            description: "Fresh and maritime for seafood dining",
            colors: ["#0277BD", "#039BE5", "#B3E5FC", "#FFFFFF"]
        },
        {
            name: "Steakhouse",
            description: "Rich and bold for steakhouses",
            colors: ["#3E2723", "#5D4037", "#D7CCC8", "#FFFFFF"]
        },
        {
            name: "Vegan Kitchen",
            description: "Natural and eco-friendly for vegan restaurants",
            colors: ["#33691E", "#558B2F", "#C5E1A5", "#FFFFFF"]
        },
        {
            name: "Pizza Place",
            description: "Fun and casual for pizzerias",
            colors: ["#BF360C", "#E64A19", "#FFCCBC", "#FFFFFF"]
        },
        {
            name: "Sushi Bar",
            description: "Clean and minimal for sushi restaurants",
            colors: ["#263238", "#455A64", "#CFD8DC", "#FFFFFF"]
        },
        {
            name: "Craft Brewery",
            description: "Industrial and rustic for breweries",
            colors: ["#37474F", "#546E7A", "#CFD8DC", "#FFFFFF"]
        },
        {
            name: "Bakery",
            description: "Warm and homey for bakeries",
            colors: ["#D84315", "#FF5722", "#FFCCBC", "#FFFFFF"]
        }
    ],
    'Technology': [
        {
            name: "Tech Startup",
            description: "Modern and innovative for startups",
            colors: ["#1A237E", "#3949AB", "#C5CAE9", "#FFFFFF"]
        },
        {
            name: "AI Solutions",
            description: "Futuristic and intelligent for AI companies",
            colors: ["#006064", "#00ACC1", "#B2EBF2", "#FFFFFF"]
        },
        {
            name: "Cloud Services",
            description: "Light and scalable for cloud platforms",
            colors: ["#0288D1", "#4FC3F7", "#B3E5FC", "#FFFFFF"]
        },
        {
            name: "Cybersecurity",
            description: "Secure and trustworthy for security firms",
            colors: ["#263238", "#455A64", "#CFD8DC", "#FFFFFF"]
        },
        {
            name: "Gaming Tech",
            description: "Energetic and bold for gaming companies",
            colors: ["#311B92", "#5E35B1", "#D1C4E9", "#FFFFFF"]
        },
        {
            name: "IoT Platform",
            description: "Connected and innovative for IoT solutions",
            colors: ["#004D40", "#00796B", "#B2DFDB", "#FFFFFF"]
        },
        {
            name: "Data Analytics",
            description: "Precise and modern for data companies",
            colors: ["#0D47A1", "#1976D2", "#BBDEFB", "#FFFFFF"]
        },
        {
            name: "Mobile Dev",
            description: "Clean and modern for mobile development",
            colors: ["#C2185B", "#E91E63", "#F8BBD0", "#FFFFFF"]
        },
        {
            name: "Hardware Tech",
            description: "Industrial and reliable for hardware companies",
            colors: ["#37474F", "#546E7A", "#CFD8DC", "#FFFFFF"]
        },
        {
            name: "Blockchain",
            description: "Secure and innovative for blockchain tech",
            colors: ["#1565C0", "#1976D2", "#BBDEFB", "#FFFFFF"]
        },
        {
            name: "VR Experience",
            description: "Immersive and cutting-edge for VR/AR",
            colors: ["#4A148C", "#6A1B9A", "#E1BEE7", "#FFFFFF"]
        },
        {
            name: "Green Tech",
            description: "Sustainable and eco-friendly for green tech",
            colors: ["#2E7D32", "#4CAF50", "#C8E6C9", "#FFFFFF"]
        },
        {
            name: "Fintech",
            description: "Professional and trustworthy for financial tech",
            colors: ["#01579B", "#039BE5", "#B3E5FC", "#FFFFFF"]
        },
        {
            name: "DevOps",
            description: "Efficient and reliable for DevOps services",
            colors: ["#006064", "#00ACC1", "#B2EBF2", "#FFFFFF"]
        },
        {
            name: "Tech Support",
            description: "Helpful and reliable for support services",
            colors: ["#0277BD", "#039BE5", "#B3E5FC", "#FFFFFF"]
        }
    ],
    'Entertainment': [
        {
            name: "Movie Studio",
            description: "Dramatic and cinematic for film production",
            colors: ["#212121", "#424242", "#D4AF37", "#FFFFFF"]
        },
        {
            name: "Music Industry",
            description: "Dynamic and rhythmic for music business",
            colors: ["#311B92", "#5E35B1", "#D1C4E9", "#FFFFFF"]
        },
        {
            name: "Gaming Studio",
            description: "Playful and exciting for game development",
            colors: ["#1A237E", "#3949AB", "#C5CAE9", "#FFFFFF"]
        },
        {
            name: "Live Events",
            description: "Energetic and vibrant for event production",
            colors: ["#B71C1C", "#E53935", "#FFCDD2", "#FFFFFF"]
        },
        {
            name: "Streaming Platform",
            description: "Modern and engaging for streaming services",
            colors: ["#006064", "#00ACC1", "#B2EBF2", "#FFFFFF"]
        },
        {
            name: "Theater Arts",
            description: "Classic and dramatic for performing arts",
            colors: ["#4A148C", "#6A1B9A", "#E1BEE7", "#FFFFFF"]
        },
        {
            name: "Animation Studio",
            description: "Creative and imaginative for animation",
            colors: ["#C2185B", "#E91E63", "#F8BBD0", "#FFFFFF"]
        },
        {
            name: "Sports Network",
            description: "Dynamic and energetic for sports media",
            colors: ["#BF360C", "#E64A19", "#FFCCBC", "#FFFFFF"]
        },
        {
            name: "Comedy Club",
            description: "Fun and lively for comedy venues",
            colors: ["#FF6F00", "#FFA000", "#FFF3E0", "#FFFFFF"]
        },
        {
            name: "Digital Media",
            description: "Contemporary and fresh for digital content",
            colors: ["#0288D1", "#4FC3F7", "#B3E5FC", "#FFFFFF"]
        },
        {
            name: "Radio Station",
            description: "Vibrant and acoustic for radio broadcasting",
            colors: ["#D84315", "#FF5722", "#FFCCBC", "#FFFFFF"]
        },
        {
            name: "Art Gallery",
            description: "Elegant and artistic for galleries",
            colors: ["#263238", "#455A64", "#CFD8DC", "#FFFFFF"]
        },
        {
            name: "Dance Studio",
            description: "Energetic and expressive for dance",
            colors: ["#C2185B", "#F06292", "#F8BBD0", "#FFFFFF"]
        },
        {
            name: "Theme Park",
            description: "Fun and exciting for amusement parks",
            colors: ["#0D47A1", "#1976D2", "#BBDEFB", "#FFFFFF"]
        },
        {
            name: "Festival",
            description: "Colorful and celebratory for festivals",
            colors: ["#4A148C", "#6A1B9A", "#E1BEE7", "#FFFFFF"]
        }
    ],
    'Fashion & Beauty': [
        {
            name: "Haute Couture",
            description: "Elegant and luxurious for high fashion",
            colors: ["#212121", "#424242", "#D4AF37", "#FFFFFF"]
        },
        {
            name: "Street Style",
            description: "Urban and trendy for street fashion",
            colors: ["#263238", "#455A64", "#CFD8DC", "#FFFFFF"]
        },
        {
            name: "Beauty Salon",
            description: "Glamorous and sophisticated for salons",
            colors: ["#C2185B", "#E91E63", "#F8BBD0", "#FFFFFF"]
        },
        {
            name: "Cosmetics",
            description: "Fresh and elegant for beauty products",
            colors: ["#6A1B9A", "#AB47BC", "#E1BEE7", "#FFFFFF"]
        },
        {
            name: "Sustainable Fashion",
            description: "Eco-friendly and natural for sustainable brands",
            colors: ["#2E7D32", "#4CAF50", "#C8E6C9", "#FFFFFF"]
        },
        {
            name: "Jewelry Design",
            description: "Luxurious and precious for jewelry",
            colors: ["#3E2723", "#5D4037", "#D4AF37", "#FFFFFF"]
        },
        {
            name: "Active Wear",
            description: "Dynamic and energetic for sportswear",
            colors: ["#0277BD", "#039BE5", "#B3E5FC", "#FFFFFF"]
        },
        {
            name: "Vintage Style",
            description: "Classic and nostalgic for vintage fashion",
            colors: ["#4E342E", "#6D4C41", "#D7CCC8", "#FFFFFF"]
        },
        {
            name: "Men's Fashion",
            description: "Sharp and sophisticated for menswear",
            colors: ["#1A1A1A", "#333333", "#BDBDBD", "#FFFFFF"]
        },
        {
            name: "Kids Fashion",
            description: "Playful and bright for children's wear",
            colors: ["#FF6F00", "#FFA000", "#FFF3E0", "#FFFFFF"]
        },
        {
            name: "Bridal",
            description: "Romantic and elegant for bridal fashion",
            colors: ["#C2185B", "#F06292", "#F8BBD0", "#FFFFFF"]
        },
        {
            name: "Accessories",
            description: "Versatile and stylish for accessories",
            colors: ["#37474F", "#546E7A", "#CFD8DC", "#FFFFFF"]
        },
        {
            name: "Spa & Wellness",
            description: "Calming and serene for spa services",
            colors: ["#004D40", "#00796B", "#B2DFDB", "#FFFFFF"]
        },
        {
            name: "Fashion Tech",
            description: "Modern and innovative for fashion tech",
            colors: ["#006064", "#00ACC1", "#B2EBF2", "#FFFFFF"]
        },
        {
            name: "Luxury Lifestyle",
            description: "Premium and exclusive for luxury brands",
            colors: ["#1A237E", "#3949AB", "#C5CAE9", "#FFFFFF"]
        }
    ],
    'Automotive': [
        {
            name: "Performance Red",
            description: "Bold and energetic for sports cars and performance vehicles",
            colors: ["#FF1E1E", "#1A1A1A", "#D9D9D9", "#FFFFFF"]
        },
        {
            name: "Luxury Executive",
            description: "Sophisticated and premium for luxury vehicles",
            colors: ["#1A1A1A", "#C0C0C0", "#E5E5E5", "#FFFFFF"]
        },
        {
            name: "Electric Future",
            description: "Modern and eco-friendly for electric vehicles",
            colors: ["#00BFA5", "#263238", "#ECEFF1", "#B2DFDB"]
        },
        {
            name: "Classic Heritage",
            description: "Timeless and traditional for vintage automobiles",
            colors: ["#8B4513", "#D4AF37", "#E8E3D9", "#2C2C2C"]
        },
        {
            name: "Industrial Power",
            description: "Strong and reliable for trucks and industrial vehicles",
            colors: ["#37474F", "#546E7A", "#CFD8DC", "#ECEFF1"]
        },
        {
            name: "Racing Spirit",
            description: "Dynamic and competitive for motorsports",
            colors: ["#F44336", "#212121", "#FFC107", "#FFFFFF"]
        },
        {
            name: "German Engineering",
            description: "Precise and sophisticated for German automotive brands",
            colors: ["#102027", "#37474F", "#B0BEC5", "#FFFFFF"]
        },
        {
            name: "Italian Passion",
            description: "Passionate and exotic for Italian sports cars",
            colors: ["#D32F2F", "#212121", "#FFD700", "#FFFFFF"]
        },
        {
            name: "British Elegance",
            description: "Refined and prestigious for British luxury cars",
            colors: ["#1B5E20", "#212121", "#D4AF37", "#FFFFFF"]
        },
        {
            name: "Japanese Precision",
            description: "Clean and efficient for Japanese manufacturers",
            colors: ["#263238", "#455A64", "#CFD8DC", "#FFFFFF"]
        },
        {
            name: "American Muscle",
            description: "Bold and powerful for muscle cars",
            colors: ["#B71C1C", "#212121", "#FFC107", "#FFFFFF"]
        },
        {
            name: "Swedish Innovation",
            description: "Clean and safe for Scandinavian vehicles",
            colors: ["#006064", "#0097A7", "#B2EBF2", "#FFFFFF"]
        },
        {
            name: "Off-Road Adventure",
            description: "Rugged and capable for 4x4 vehicles",
            colors: ["#33691E", "#558B2F", "#C5E1A5", "#F1F8E9"]
        },
        {
            name: "Future Mobility",
            description: "Forward-thinking for autonomous vehicles",
            colors: ["#311B92", "#5E35B1", "#D1C4E9", "#FFFFFF"]
        },
        {
            name: "Custom Garage",
            description: "Creative and unique for custom builds",
            colors: ["#3E2723", "#5D4037", "#D7CCC8", "#FFFFFF"]
        }
    ],
    'Web3': [
        {
            name: "Crypto Future",
            description: "Modern and tech-forward for blockchain projects",
            colors: ["#7B1FA2", "#9C27B0", "#E1BEE7", "#FFFFFF"]
        },
        {
            name: "Digital Asset",
            description: "Bold and trustworthy for cryptocurrency platforms",
            colors: ["#1A237E", "#3949AB", "#C5CAE9", "#E8EAF6"]
        },
        {
            name: "Metaverse",
            description: "Vibrant and futuristic for virtual worlds",
            colors: ["#6200EA", "#651FFF", "#B388FF", "#FFFFFF"]
        },
        {
            name: "DeFi Protocol",
            description: "Professional and secure for decentralized finance",
            colors: ["#004D40", "#00695C", "#B2DFDB", "#E0F2F1"]
        },
        {
            name: "NFT Gallery",
            description: "Creative and digital for NFT marketplaces",
            colors: ["#311B92", "#5E35B1", "#D1C4E9", "#FFFFFF"]
        },
        {
            name: "Blockchain Core",
            description: "Reliable and technical for blockchain infrastructure",
            colors: ["#263238", "#37474F", "#B0BEC5", "#FFFFFF"]
        },
        {
            name: "DAO Community",
            description: "Collaborative and inclusive for decentralized organizations",
            colors: ["#0D47A1", "#1976D2", "#BBDEFB", "#FFFFFF"]
        },
        {
            name: "Smart Contract",
            description: "Precise and trustworthy for smart contract platforms",
            colors: ["#1B5E20", "#2E7D32", "#C8E6C9", "#FFFFFF"]
        },
        {
            name: "Web3 Social",
            description: "Connected and engaging for decentralized social platforms",
            colors: ["#4A148C", "#6A1B9A", "#E1BEE7", "#FFFFFF"]
        },
        {
            name: "Crypto Exchange",
            description: "Professional and secure for trading platforms",
            colors: ["#01579B", "#0277BD", "#B3E5FC", "#FFFFFF"]
        },
        {
            name: "Gaming Token",
            description: "Playful and energetic for gaming cryptocurrencies",
            colors: ["#D50000", "#FF1744", "#FF8A80", "#FFFFFF"]
        },
        {
            name: "Privacy Chain",
            description: "Secure and discreet for privacy-focused blockchains",
            colors: ["#212121", "#424242", "#BDBDBD", "#FFFFFF"]
        },
        {
            name: "Token Launch",
            description: "Exciting and trustworthy for new token launches",
            colors: ["#BF360C", "#D84315", "#FFCCBC", "#FFFFFF"]
        },
        {
            name: "Crypto Wallet",
            description: "Secure and user-friendly for digital wallets",
            colors: ["#006064", "#0097A7", "#B2EBF2", "#FFFFFF"]
        },
        {
            name: "Web3 Analytics",
            description: "Data-focused and insightful for blockchain analytics",
            colors: ["#1A237E", "#283593", "#C5CAE9", "#FFFFFF"]
        }
    ],
    'News': [
        {
            name: "Breaking News",
            description: "Bold and authoritative for headline news",
            colors: ["#B71C1C", "#D32F2F", "#FFCDD2", "#FFFFFF"]
        },
        {
            name: "Digital Press",
            description: "Professional and readable for online news",
            colors: ["#1A237E", "#283593", "#C5CAE9", "#FFFFFF"]
        },
        {
            name: "Media Network",
            description: "Modern and trustworthy for media organizations",
            colors: ["#01579B", "#0277BD", "#B3E5FC", "#E1F5FE"]
        },
        {
            name: "Editorial",
            description: "Sophisticated and clean for in-depth journalism",
            colors: ["#212121", "#424242", "#E0E0E0", "#FFFFFF"]
        },
        {
            name: "Live Updates",
            description: "Dynamic and engaging for breaking news",
            colors: ["#BF360C", "#D84315", "#FFCCBC", "#FBE9E7"]
        },
        {
            name: "Business News",
            description: "Professional and reliable for financial news",
            colors: ["#004D40", "#00796B", "#B2DFDB", "#E0F2F1"]
        },
        {
            name: "Tech Coverage",
            description: "Modern and sharp for technology news",
            colors: ["#311B92", "#512DA8", "#D1C4E9", "#FFFFFF"]
        },
        {
            name: "Sports News",
            description: "Energetic and dynamic for sports coverage",
            colors: ["#1B5E20", "#2E7D32", "#C8E6C9", "#FFFFFF"]
        },
        {
            name: "Entertainment News",
            description: "Vibrant and engaging for entertainment coverage",
            colors: ["#880E4F", "#AD1457", "#F8BBD0", "#FFFFFF"]
        },
        {
            name: "World News",
            description: "Global and authoritative for international coverage",
            colors: ["#0D47A1", "#1976D2", "#BBDEFB", "#FFFFFF"]
        },
        {
            name: "Politics Hub",
            description: "Balanced and professional for political news",
            colors: ["#37474F", "#546E7A", "#CFD8DC", "#FFFFFF"]
        },
        {
            name: "Science Section",
            description: "Clean and precise for scientific news",
            colors: ["#006064", "#0097A7", "#B2EBF2", "#FFFFFF"]
        },
        {
            name: "Weather Updates",
            description: "Clear and informative for weather news",
            colors: ["#1565C0", "#1E88E5", "#BBDEFB", "#FFFFFF"]
        },
        {
            name: "Culture News",
            description: "Rich and elegant for arts and culture coverage",
            colors: ["#4A148C", "#6A1B9A", "#E1BEE7", "#FFFFFF"]
        },
        {
            name: "Local News",
            description: "Approachable and trustworthy for community news",
            colors: ["#2E7D32", "#388E3C", "#C8E6C9", "#FFFFFF"]
        }
    ],
    'Gaming': [
        {
            name: "Neon Arcade",
            description: "Vibrant and energetic for retro gaming",
            colors: ["#1A1A1A", "#00FF00", "#FF00FF", "#FFFFFF"]
        },
        {
            name: "Console Classic",
            description: "Bold and nostalgic for gaming communities",
            colors: ["#311B92", "#6200EA", "#B388FF", "#FFFFFF"]
        },
        {
            name: "Esports Arena",
            description: "Dynamic and competitive for esports platforms",
            colors: ["#1A1A1A", "#FF4081", "#00BFA5", "#FFFFFF"]
        },
        {
            name: "Stream Setup",
            description: "Dark and focused for streaming platforms",
            colors: ["#212121", "#9C27B0", "#69F0AE", "#FFFFFF"]
        },
        {
            name: "RPG World",
            description: "Mystical and immersive for role-playing games",
            colors: ["#1A237E", "#7C4DFF", "#B388FF", "#FFFFFF"]
        },
        {
            name: "Battle Royale",
            description: "Intense and energetic for competitive gaming",
            colors: ["#D32F2F", "#FF1744", "#FF8A80", "#FFFFFF"]
        },
        {
            name: "Pixel Art",
            description: "Retro-inspired for indie games",
            colors: ["#006064", "#00BCD4", "#84FFFF", "#FFFFFF"]
        },
        {
            name: "Fantasy Quest",
            description: "Magical and adventurous for fantasy games",
            colors: ["#4A148C", "#7B1FA2", "#E1BEE7", "#FFFFFF"]
        },
        {
            name: "Sci-Fi Future",
            description: "Futuristic and sleek for sci-fi games",
            colors: ["#263238", "#01579B", "#80D8FF", "#FFFFFF"]
        },
        {
            name: "Racing Thrill",
            description: "Fast and dynamic for racing games",
            colors: ["#BF360C", "#FF3D00", "#FF9E80", "#FFFFFF"]
        },
        {
            name: "Strategy Command",
            description: "Professional and tactical for strategy games",
            colors: ["#004D40", "#00695C", "#B2DFDB", "#FFFFFF"]
        },
        {
            name: "Horror Gaming",
            description: "Dark and atmospheric for horror games",
            colors: ["#1A1A1A", "#B71C1C", "#FF8A80", "#FFFFFF"]
        },
        {
            name: "Mobile Gaming",
            description: "Bright and accessible for mobile games",
            colors: ["#0D47A1", "#2196F3", "#BBDEFB", "#FFFFFF"]
        },
        {
            name: "Sandbox World",
            description: "Creative and playful for sandbox games",
            colors: ["#2E7D32", "#43A047", "#A5D6A7", "#FFFFFF"]
        },
        {
            name: "Fighting Arena",
            description: "Bold and intense for fighting games",
            colors: ["#880E4F", "#E91E63", "#F8BBD0", "#FFFFFF"]
        }
    ],
    'Pet Services': [
        {
            name: "Playful Paws",
            description: "Fun and friendly for pet care services",
            colors: ["#00796B", "#26A69A", "#B2DFDB", "#E0F2F1"]
        },
        {
            name: "Gentle Care",
            description: "Soft and nurturing for veterinary services",
            colors: ["#558B2F", "#7CB342", "#DCEDC8", "#F1F8E9"]
        },
        {
            name: "Happy Tails",
            description: "Cheerful and welcoming for pet grooming",
            colors: ["#EF6C00", "#FB8C00", "#FFE0B2", "#FFF3E0"]
        },
        {
            name: "Pet Boutique",
            description: "Stylish and premium for pet products",
            colors: ["#4E342E", "#6D4C41", "#D7CCC8", "#EFEBE9"]
        },
        {
            name: "Animal Haven",
            description: "Calming and trustworthy for animal shelters",
            colors: ["#2E7D32", "#388E3C", "#C8E6C9", "#E8F5E9"]
        },
        {
            name: "Puppy Paradise",
            description: "Energetic and playful for dog daycare",
            colors: ["#1E88E5", "#42A5F5", "#BBDEFB", "#FFFFFF"]
        },
        {
            name: "Cat Corner",
            description: "Elegant and cozy for cat-specific services",
            colors: ["#6A1B9A", "#8E24AA", "#E1BEE7", "#FFFFFF"]
        },
        {
            name: "Pet Hospital",
            description: "Professional and reassuring for medical care",
            colors: ["#0277BD", "#039BE5", "#B3E5FC", "#FFFFFF"]
        },
        {
            name: "Training Academy",
            description: "Structured and encouraging for pet training",
            colors: ["#1565C0", "#1976D2", "#BBDEFB", "#FFFFFF"]
        },
        {
            name: "Exotic Care",
            description: "Unique and specialized for exotic pet services",
            colors: ["#AD1457", "#D81B60", "#F8BBD0", "#FFFFFF"]
        },
        {
            name: "Pet Spa",
            description: "Luxurious and relaxing for premium grooming",
            colors: ["#00695C", "#00897B", "#B2DFDB", "#FFFFFF"]
        },
        {
            name: "Animal Rescue",
            description: "Compassionate and hopeful for rescue services",
            colors: ["#689F38", "#7CB342", "#DCEDC8", "#FFFFFF"]
        },
        {
            name: "Pet Store",
            description: "Bright and inviting for retail spaces",
            colors: ["#F57C00", "#FB8C00", "#FFE0B2", "#FFFFFF"]
        },
        {
            name: "Aquatic Care",
            description: "Serene and professional for aquatic pet services",
            colors: ["#0097A7", "#00ACC1", "#B2EBF2", "#FFFFFF"]
        },
        {
            name: "Mobile Grooming",
            description: "Fresh and convenient for mobile services",
            colors: ["#00838F", "#0097A7", "#B2EBF2", "#FFFFFF"]
        }
    ],
    'Wedding': [
        {
            name: "Classic Romance",
            description: "Timeless and elegant for traditional weddings",
            colors: ["#B71C1C", "#D32F2F", "#FFCDD2", "#FFFFFF"]
        },
        {
            name: "Garden Party",
            description: "Fresh and natural for outdoor ceremonies",
            colors: ["#388E3C", "#4CAF50", "#C8E6C9", "#FFFFFF"]
        },
        {
            name: "Modern Love",
            description: "Contemporary and minimalist for modern weddings",
            colors: ["#212121", "#424242", "#E0E0E0", "#FFFFFF"]
        },
        {
            name: "Beach Wedding",
            description: "Coastal and breezy for beach ceremonies",
            colors: ["#0288D1", "#03A9F4", "#B3E5FC", "#FFFFFF"]
        },
        {
            name: "Vintage Charm",
            description: "Nostalgic and romantic for vintage themes",
            colors: ["#4E342E", "#6D4C41", "#D7CCC8", "#FFFFFF"]
        },
        {
            name: "Royal Affair",
            description: "Luxurious and regal for upscale weddings",
            colors: ["#4A148C", "#6A1B9A", "#E1BEE7", "#FFFFFF"]
        },
        {
            name: "Rustic Love",
            description: "Warm and natural for rustic celebrations",
            colors: ["#5D4037", "#795548", "#D7CCC8", "#FFFFFF"]
        },
        {
            name: "Spring Romance",
            description: "Light and fresh for spring weddings",
            colors: ["#C2185B", "#E91E63", "#F8BBD0", "#FFFFFF"]
        },
        {
            name: "Winter Wonder",
            description: "Cool and elegant for winter weddings",
            colors: ["#1565C0", "#1976D2", "#BBDEFB", "#FFFFFF"]
        },
        {
            name: "Autumn Love",
            description: "Rich and warm for fall ceremonies",
            colors: ["#E65100", "#F57C00", "#FFE0B2", "#FFFFFF"]
        },
        {
            name: "Sunset Ceremony",
            description: "Warm and romantic for evening events",
            colors: ["#D84315", "#F4511E", "#FFCCBC", "#FFFFFF"]
        },
        {
            name: "Enchanted Forest",
            description: "Magical and natural for woodland weddings",
            colors: ["#1B5E20", "#2E7D32", "#C8E6C9", "#FFFFFF"]
        },
        {
            name: "Urban Chic",
            description: "Sophisticated and sleek for city weddings",
            colors: ["#263238", "#37474F", "#CFD8DC", "#FFFFFF"]
        },
        {
            name: "Desert Romance",
            description: "Earthy and warm for desert ceremonies",
            colors: ["#BF360C", "#D84315", "#FFCCBC", "#FFFFFF"]
        },
        {
            name: "Fairytale Dream",
            description: "Soft and dreamy for fairytale themes",
            colors: ["#880E4F", "#AD1457", "#F8BBD0", "#FFFFFF"]
        }
    ],
    'Personal Blog': [
        {
            name: "Cozy Reading",
            description: "Warm and inviting for personal stories",
            colors: ["#795548", "#A1887F", "#D7CCC8", "#EFEBE9"]
        },
        {
            name: "Modern Writer",
            description: "Clean and minimal for focused reading",
            colors: ["#212121", "#757575", "#EEEEEE", "#FFFFFF"]
        },
        {
            name: "Creative Journal",
            description: "Artistic and expressive for creative writing",
            colors: ["#AD1457", "#D81B60", "#F8BBD0", "#FFFFFF"]
        },
        {
            name: "Life Stories",
            description: "Soft and personal for lifestyle blogging",
            colors: ["#5D4037", "#8D6E63", "#D7CCC8", "#EFEBE9"]
        },
        {
            name: "Digital Diary",
            description: "Contemporary and clean for modern blogging",
            colors: ["#006064", "#0097A7", "#B2EBF2", "#E0F7FA"]
        },
        {
            name: "Travel Tales",
            description: "Adventure-inspired for travel blogging",
            colors: ["#00695C", "#00897B", "#B2DFDB", "#E0F2F1"]
        },
        {
            name: "Food Stories",
            description: "Appetizing and warm for culinary blogs",
            colors: ["#D84315", "#F4511E", "#FFE0B2", "#FFFFFF"]
        },
        {
            name: "Mindful Space",
            description: "Calming palette for wellness blogs",
            colors: ["#558B2F", "#7CB342", "#DCEDC8", "#F1F8E9"]
        },
        {
            name: "Photo Journal",
            description: "Visual-focused for photography blogs",
            colors: ["#37474F", "#546E7A", "#CFD8DC", "#FFFFFF"]
        },
        {
            name: "Poetry Corner",
            description: "Elegant and emotive for poetry blogs",
            colors: ["#4A148C", "#6A1B9A", "#E1BEE7", "#FFFFFF"]
        },
        {
            name: "Tech Notes",
            description: "Sharp and clean for technology writing",
            colors: ["#1A237E", "#283593", "#C5CAE9", "#FFFFFF"]
        },
        {
            name: "Fashion Diary",
            description: "Stylish and trendy for fashion blogging",
            colors: ["#880E4F", "#AD1457", "#F8BBD0", "#FFFFFF"]
        },
        {
            name: "Parent Stories",
            description: "Friendly and warm for parenting blogs",
            colors: ["#EF6C00", "#F57C00", "#FFE0B2", "#FFF3E0"]
        },
        {
            name: "Book Reviews",
            description: "Classic and readable for literary blogs",
            colors: ["#3E2723", "#5D4037", "#D7CCC8", "#FFFFFF"]
        },
        {
            name: "Art Blog",
            description: "Creative and inspiring for art blogs",
            colors: ["#311B92", "#512DA8", "#D1C4E9", "#FFFFFF"]
        }
    ],
    'Beauty': [
        {
            name: "Elegant Spa",
            description: "Luxurious and calming for spa services",
            colors: ["#6A1B9A", "#8E24AA", "#E1BEE7", "#FFFFFF"]
        },
        {
            name: "Modern Salon",
            description: "Chic and sophisticated for hair salons",
            colors: ["#880E4F", "#AD1457", "#F8BBD0", "#FFFFFF"]
        },
        {
            name: "Natural Glow",
            description: "Organic and fresh for natural beauty",
            colors: ["#558B2F", "#689F38", "#DCEDC8", "#F1F8E9"]
        },
        {
            name: "Makeup Studio",
            description: "Glamorous and bold for makeup artists",
            colors: ["#4A148C", "#6A1B9A", "#E1BEE7", "#FFFFFF"]
        },
        {
            name: "Skincare Haven",
            description: "Clean and pure for skincare services",
            colors: ["#00695C", "#00897B", "#B2DFDB", "#FFFFFF"]
        },
        {
            name: "Nail Boutique",
            description: "Stylish and trendy for nail services",
            colors: ["#C2185B", "#E91E63", "#F8BBD0", "#FFFFFF"]
        },
        {
            name: "Wellness Center",
            description: "Balanced and serene for holistic beauty",
            colors: ["#00796B", "#26A69A", "#B2DFDB", "#E0F2F1"]
        },
        {
            name: "Beauty Tech",
            description: "Modern and innovative for beauty tech",
            colors: ["#1565C0", "#1976D2", "#BBDEFB", "#FFFFFF"]
        },
        {
            name: "Luxury Beauty",
            description: "Premium and exclusive for high-end services",
            colors: ["#3E2723", "#5D4037", "#D7CCC8", "#FFFFFF"]
        },
        {
            name: "Cosmetic Clinic",
            description: "Professional and clinical for medical beauty",
            colors: ["#0277BD", "#039BE5", "#B3E5FC", "#FFFFFF"]
        },
        {
            name: "Organic Beauty",
            description: "Natural and eco-friendly for organic products",
            colors: ["#2E7D32", "#388E3C", "#C8E6C9", "#FFFFFF"]
        },
        {
            name: "Beauty Bar",
            description: "Fun and social for beauty bars",
            colors: ["#D81B60", "#EC407A", "#F8BBD0", "#FFFFFF"]
        },
        {
            name: "Lash Studio",
            description: "Delicate and feminine for lash services",
            colors: ["#AD1457", "#D81B60", "#F8BBD0", "#FFFFFF"]
        },
        {
            name: "Aromatherapy",
            description: "Soothing and therapeutic for aromatherapy",
            colors: ["#00695C", "#00897B", "#B2DFDB", "#FFFFFF"]
        },
        {
            name: "Beauty Academy",
            description: "Professional and educational for training",
            colors: ["#0097A7", "#00ACC1", "#B2EBF2", "#FFFFFF"]
        }
    ],
    'Events': [
        {
            name: "Corporate Summit",
            description: "Professional and polished for business events",
            colors: ["#1A237E", "#283593", "#C5CAE9", "#FFFFFF"]
        },
        {
            name: "Birthday Bash",
            description: "Fun and festive for birthday celebrations",
            colors: ["#6A1B9A", "#8E24AA", "#E1BEE7", "#FFFFFF"]
        },
        {
            name: "Conference Pro",
            description: "Clean and focused for professional conferences",
            colors: ["#01579B", "#0277BD", "#B3E5FC", "#FFFFFF"]
        },
        {
            name: "Gala Night",
            description: "Elegant and sophisticated for formal galas",
            colors: ["#311B92", "#4527A0", "#D1C4E9", "#FFFFFF"]
        },
        {
            name: "Music Festival",
            description: "Vibrant and energetic for music events",
            colors: ["#B71C1C", "#D32F2F", "#FFCDD2", "#FFFFFF"]
        },
        {
            name: "Tech Expo",
            description: "Modern and innovative for tech exhibitions",
            colors: ["#006064", "#0097A7", "#B2EBF2", "#FFFFFF"]
        },
        {
            name: "Art Exhibition",
            description: "Creative and inspiring for art shows",
            colors: ["#4A148C", "#6A1B9A", "#E1BEE7", "#FFFFFF"]
        },
        {
            name: "Food Festival",
            description: "Appetizing and warm for culinary events",
            colors: ["#E65100", "#F57C00", "#FFE0B2", "#FFFFFF"]
        },
        {
            name: "Sports Event",
            description: "Dynamic and energetic for sporting events",
            colors: ["#1B5E20", "#2E7D32", "#C8E6C9", "#FFFFFF"]
        },
        {
            name: "Fashion Show",
            description: "Chic and glamorous for fashion events",
            colors: ["#880E4F", "#AD1457", "#F8BBD0", "#FFFFFF"]
        },
        {
            name: "Charity Gala",
            description: "Impactful and professional for fundraisers",
            colors: ["#004D40", "#00695C", "#B2DFDB", "#FFFFFF"]
        },
        {
            name: "Educational Summit",
            description: "Focused and engaging for educational events",
            colors: ["#0D47A1", "#1565C0", "#BBDEFB", "#FFFFFF"]
        },
        {
            name: "Product Launch",
            description: "Bold and innovative for launch events",
            colors: ["#263238", "#37474F", "#CFD8DC", "#FFFFFF"]
        },
        {
            name: "Cultural Festival",
            description: "Rich and diverse for cultural celebrations",
            colors: ["#BF360C", "#D84315", "#FFCCBC", "#FFFFFF"]
        },
        {
            name: "Holiday Party",
            description: "Festive and joyful for holiday celebrations",
            colors: ["#1B5E20", "#2E7D32", "#C8E6C9", "#FFFFFF"]
        }
    ]
};

// Make variables available globally
window.niches = niches;
window.colorSchemes = colorSchemes;
