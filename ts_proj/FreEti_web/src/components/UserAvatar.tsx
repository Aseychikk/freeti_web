interface UserAvatarProps {
    avatarStr?: string | null;
    username?: string | null;
    size?: number;       // Размер кружка в пикселях (по умолчанию 40)
    fontSize?: number;   // Размер шрифта (по умолчанию 16)
    bgColor?: string;    // Цвет фона (по умолчанию синий)
}

export function UserAvatar({ 
    avatarStr, 
    username, 
    size = 40, 
    fontSize = 16, 
    bgColor = '#3b82f6' 
}: UserAvatarProps) {
    // 1. Определяем "сырую" строку (аватар или первая буква имени)
    const rawAvatar = avatarStr 
        ? String(avatarStr) 
        : String(Array.from(String(username || '?'))[0] || '?').toUpperCase();
        
    // 2. Проверяем, есть ли эмодзи
    const isAvEmoji = /\p{Extended_Pictographic}/u.test(rawAvatar);
    
    // 3. Формируем итоговый текст (если эмодзи - берем 1 символ, если текст - до 4)
    const displayAvatar = isAvEmoji 
        ? Array.from(rawAvatar)[0] 
        : Array.from(rawAvatar).slice(0, 4).join('');

    return (
        <div style={{ 
            width: `${size}px`, 
            height: `${size}px`, 
            borderRadius: '50%', 
            backgroundColor: bgColor, 
            color: 'white', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            fontWeight: 'bold', 
            fontSize: `${fontSize}px`,
            transform: isAvEmoji ? 'none' : 'rotate(90deg)', // Умный поворот
            flexShrink: 0
        }}>
            {displayAvatar}
        </div>
    );
}