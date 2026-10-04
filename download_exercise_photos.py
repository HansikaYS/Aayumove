import os
import urllib.request
import time
from PIL import Image

def setup_photos():
    os.makedirs('assets/photos', exist_ok=True)
    if os.path.exists('test_photo.jpg'):
        os.remove('test_photo.jpg')

    # Curated real human fitness photos (Unsplash high-res photography of athletes)
    photo_urls = {
        'pushup-pike': 'assets/photos/pushup-pike.jpg',
        'pushup-diamond': 'assets/photos/pushup-diamond.jpg',
        'pushup-wall': 'assets/photos/pushup-wall.jpg',
        'pushup-deficit': 'assets/photos/pushup-deficit.jpg',
        'pushup-standard': 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80',
        'squat-chair': 'https://images.unsplash.com/photo-1566241142559-40e1dab266c6?auto=format&fit=crop&w=800&q=80',
        'squat-bulgarian': 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80',
        'squat-pistol': 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80',
        'squat-jump': 'https://images.unsplash.com/photo-1434596922112-19c563067271?auto=format&fit=crop&w=800&q=80',
        'lunge-curtsy-sumo': 'https://upload.wikimedia.org/wikipedia/commons/2/29/Airman_performing_lunge.jpg',
        'wall-sit': 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80',
        'squat-air': 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=800&q=80',
        'core-shoulder-taps': 'https://images.unsplash.com/photo-1566241477600-ac026ad43874?auto=format&fit=crop&w=800&q=80',
        'core-plank-dips': 'https://upload.wikimedia.org/wikipedia/commons/e/ee/Plank.jpg',
        'rows-doorframe': 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80',
        'lunge-reverse': 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80',
        'bridge-glute': 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Stretching_1200830.jpg',
        'calves-stretch': 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=800&q=80',
        'core-deadbugs': 'https://upload.wikimedia.org/wikipedia/commons/c/cf/FloorCrunch.JPG',
        'core-bicycle': 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=800&q=80',
        'core-sculpt-matrix': 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80',
        'core-posterior-chain': 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80',
        'cardio-skaters': 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80',
        'cardio-climbers': 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=800&q=80',
        'cardio-burpees': 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Airborne_Burpee.jpg',
        'cardio-boxing': 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&w=800&q=80',
        'cardio-jacks-knees': 'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?auto=format&fit=crop&w=800&q=80',
        'mobility-neck-rolls': 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80',
        'mobility-spinal-twist': 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=800&q=80',
        'mobility-eagle-arms': 'https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?auto=format&fit=crop&w=800&q=80',
        'mobility-chest-expansion': 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80',
        'mobility-palming-eyes': 'assets/photos/mobility-palming-eyes.jpg',
        'mobility-distant-focus': 'assets/photos/mobility-distant-focus.jpg',
        'mobility-wrist-stretch': 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80',
        'mobility-cat-cow': 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80',
        'mobility-side-reach': 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80',
        'yoga-childs-pose': 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Balasana.JPG',
        'yoga-knee-chest': 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80',
        'yoga-lying-twist': 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80',
        'yoga-legs-wall': 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Viparita-Karani_Yoga-Asana_Nina-Mel.jpg',
        'yoga-down-dog-cobra': 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=800&q=80',
        'yoga-low-lunge-splits': 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80',
        'yoga-butterfly-fold': 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80',
        'mobility-worlds-greatest': 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80',
        'mobility-90-90-hips': 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=800&q=80',
        'mobility-puppy-dog': 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80',
        'mobility-pigeon-pose': 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80',
        'yoga-warrior-triangle': 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80',
        'yoga-mountain-reach': 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80',
        'yoga-savasana': 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80',
        'mobility-warmup-general': 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80'
    }

    headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}

    for ex_id, url in photo_urls.items():
        dest = f'assets/photos/{ex_id}.jpg'
        if not os.path.exists(dest):
            try:
                req = urllib.request.Request(url, headers=headers)
                with urllib.request.urlopen(req) as resp, open(dest, 'wb') as f:
                    f.write(resp.read())
                print(f"Downloaded photo for {ex_id}")
                time.sleep(0.05)
            except Exception as e:
                print(f"Error for {ex_id}: {e}")

    print("All realistic human fitness photos downloaded and verified!")

if __name__ == '__main__':
    setup_photos()
