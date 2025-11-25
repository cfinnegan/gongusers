import { useState } from 'react';
import type { User } from '../types/users';

function ProfileImage({ user }: { user: User | null }) {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const initials = user
    ? `${user.firstName?.[0] || ''}${user.lastName?.[0] || ''}`.toUpperCase() ||
      '?'
    : '?';

  const photoUrl = user?.photo?.trim() || '';
  const hasPhoto = photoUrl !== '';
  const showImage = hasPhoto && !imageError;
  const showInitials = !hasPhoto || imageError || !imageLoaded;

  // Mock component - will be replaced with shadcn later
  return (
    <div
      style={{
        width: '32px',
        height: '32px',
        borderRadius: '50%',
        backgroundColor: '#8039E9',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: '14px',
        fontWeight: 'bold',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {showInitials && <span>{initials}</span>}
      {showImage && (
        <img
          src={photoUrl}
          alt="Profile"
          style={{
            width: '100%',
            height: '100%',
            minWidth: '100%',
            minHeight: '100%',
            objectFit: 'cover',
            borderRadius: '50%',
            display: imageLoaded ? 'block' : 'none',
          }}
          onLoad={(e) => {
            const img = e.currentTarget;
            // Check if image is too small (less than 32px in either dimension)
            if (img.naturalWidth < 32 || img.naturalHeight < 32) {
              console.log(
                '\nimage is too small',
                img.naturalWidth,
                img.naturalHeight
              );
              setImageError(true);
            } else {
              setImageLoaded(true);
            }
          }}
          onError={() => setImageError(true)}
        />
      )}
    </div>
  );
}

export default ProfileImage;
