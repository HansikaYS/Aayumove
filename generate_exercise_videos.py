import os
import math
import numpy as np
from PIL import Image, ImageDraw, ImageFont
import cv2

def ensure_dirs():
    os.makedirs('assets/animations', exist_ok=True)
    os.makedirs('assets/animation', exist_ok=True)

def create_human_frame(w, h, t, exercise_type='cardio-boxing'):
    # Create dark studio canvas
    img = Image.new('RGB', (w, h), (15, 23, 42))
    draw = ImageDraw.Draw(img)
    
    # Draw studio floor line & subtle floor reflection grid
    draw.rectangle([0, h - 60, w, h], fill=(30, 41, 59))
    draw.line([0, h - 60, w, h - 60], fill=(56, 189, 248), width=2)
    
    # Phase calculation for smooth seamless loop (t goes from 0 to 1)
    angle = t * 2 * math.pi
    
    if exercise_type == 'cardio-boxing':
        # Human Shadow Boxing Motion
        # Weight shift & footwork oscillation
        body_x = w // 2 + int(12 * math.sin(angle))
        body_y = h // 2 + int(4 * math.cos(angle * 2))
        
        # Head
        head_radius = 18
        head_x = body_x
        head_y = body_y - 85
        draw.ellipse([head_x - head_radius, head_y - head_radius, head_x + head_radius, head_y + head_radius], fill=(253, 186, 116), outline=(234, 88, 12))
        # Hair/Cap
        draw.chord([head_x - head_radius, head_y - head_radius, head_x + head_radius, head_y], 180, 360, fill=(30, 41, 59))
        
        # Torso (Athletic Shirt)
        torso_box = [body_x - 24, body_y - 65, body_x + 24, body_y + 10]
        draw.rectangle(torso_box, fill=(2, 132, 199), outline=(3, 105, 161), width=2)
        
        # Legs & Shorts
        draw.rectangle([body_x - 24, body_y + 10, body_x + 24, body_y + 35], fill=(30, 41, 59))
        
        # Left Leg & Sneaker (Back Leg in Stance)
        leg_l_x = body_x - 30 + int(8 * math.sin(angle))
        draw.line([(body_x - 14, body_y + 35), (leg_l_x, body_y + 90)], fill=(253, 186, 116), width=12)
        draw.rectangle([leg_l_x - 14, body_y + 88, leg_l_x + 10, body_y + 98], fill=(37, 99, 235))
        
        # Right Leg & Sneaker (Lead Leg)
        leg_r_x = body_x + 20 - int(8 * math.sin(angle))
        draw.line([(body_x + 14, body_y + 35), (leg_r_x, body_y + 90)], fill=(253, 186, 116), width=12)
        draw.rectangle([leg_r_x - 10, body_y + 88, leg_r_x + 16, body_y + 98], fill=(37, 99, 235))
        
        # Boxing Arm Punching Logic (Jab / Cross cycle)
        # Left Arm (Jab)
        jab_extension = max(0, math.sin(angle * 2)) * 60
        glove_l_x = body_x - 20 - int(jab_extension)
        glove_l_y = body_y - 40 - int(10 * math.cos(angle * 2))
        draw.line([(body_x - 20, body_y - 50), (glove_l_x, glove_l_y)], fill=(253, 186, 116), width=10)
        # Red Boxing Glove Left
        draw.ellipse([glove_l_x - 12, glove_l_y - 12, glove_l_x + 12, glove_l_y + 12], fill=(239, 68, 68))
        
        # Right Arm (Cross / Hook)
        cross_extension = max(0, -math.sin(angle * 2)) * 75
        glove_r_x = body_x + 20 + int(cross_extension)
        glove_r_y = body_y - 45 - int(8 * math.sin(angle * 2))
        draw.line([(body_x + 20, body_y - 50), (glove_r_x, glove_r_y)], fill=(253, 186, 116), width=10)
        # Red Boxing Glove Right
        draw.ellipse([glove_r_x - 12, glove_r_y - 12, glove_r_x + 12, glove_r_y + 12], fill=(239, 68, 68))
        
        # On-screen Title Overlay
        draw.text((w // 2 - 120, 20), "SILENT SHADOW BOXING", fill=(56, 189, 248))
        draw.text((w // 2 - 130, h - 30), "Human Form • Jab-Cross Combination", fill=(251, 146, 60))

    else:
        # General Human Exercise Motion
        body_y = h // 2 + int(20 * math.sin(angle))
        body_x = w // 2
        
        # Head
        draw.ellipse([body_x - 16, body_y - 75, body_x + 16, body_y - 43], fill=(253, 186, 116))
        # Torso
        draw.rectangle([body_x - 22, body_y - 43, body_x + 22, body_y + 20], fill=(2, 132, 199))
        # Shorts & Legs
        draw.rectangle([body_x - 22, body_y + 20, body_x + 22, body_y + 40], fill=(30, 41, 59))
        draw.line([(body_x - 12, body_y + 40), (body_x - 20, body_y + 90)], fill=(253, 186, 116), width=10)
        draw.line([(body_x + 12, body_y + 40), (body_x + 20, body_y + 90)], fill=(253, 186, 116), width=10)
        draw.rectangle([body_x - 28, body_y + 88, body_x - 10, body_y + 98], fill=(37, 99, 235))
        draw.rectangle([body_x + 10, body_y + 88, body_x + 28, body_y + 98], fill=(37, 99, 235))
        
        # Arms
        arm_y = body_y - 20 + int(30 * math.cos(angle))
        draw.line([(body_x - 20, body_y - 35), (body_x - 50, arm_y)], fill=(253, 186, 116), width=8)
        draw.line([(body_x + 20, body_y - 35), (body_x + 50, arm_y)], fill=(253, 186, 116), width=8)
        
        draw.text((w // 2 - 100, 20), exercise_type.upper().replace('-', ' '), fill=(56, 189, 248))

    return np.array(img)

def render_mp4_video(output_path, exercise_type='cardio-boxing', num_frames=60, fps=30, width=480, height=270):
    fourcc = cv2.VideoWriter_fourcc(*'mp4v')
    out = cv2.VideoWriter(output_path, fourcc, fps, (width, height))
    
    for i in range(num_frames):
        t = i / num_frames
        frame_rgb = create_human_frame(width, height, t, exercise_type)
        frame_bgr = cv2.cvtColor(frame_rgb, cv2.COLOR_RGB2BGR)
        out.write(frame_bgr)
        
    out.release()
    print(f"Generated video: {output_path}")

if __name__ == '__main__':
    ensure_dirs()
    
    # 1. Generate cardio-boxing in both assets/animations and assets/animation
    render_mp4_video('assets/animations/cardio-boxing.mp4', 'cardio-boxing')
    render_mp4_video('assets/animation/cardio-boxing.mp4', 'cardio-boxing')
    
    # 2. Also generate all 50 exercise videos so every exercise has a working MP4 file!
    exercises = [
        'pushup-pike', 'pushup-diamond', 'pushup-wall', 'pushup-deficit', 'pushup-standard',
        'squat-chair', 'squat-bulgarian', 'squat-pistol', 'squat-jump', 'lunge-curtsy-sumo',
        'wall-sit', 'squat-air', 'core-shoulder-taps', 'core-plank-dips', 'rows-doorframe',
        'lunge-reverse', 'bridge-glute', 'calves-stretch', 'core-deadbugs', 'core-bicycle',
        'core-sculpt-matrix', 'core-posterior-chain', 'cardio-skaters', 'cardio-climbers',
        'cardio-burpees', 'cardio-boxing', 'cardio-jacks-knees', 'mobility-neck-rolls',
        'mobility-spinal-twist', 'mobility-eagle-arms', 'mobility-chest-expansion',
        'mobility-palming-eyes', 'mobility-wrist-stretch', 'mobility-cat-cow', 'mobility-side-reach',
        'yoga-childs-pose', 'yoga-knee-chest', 'yoga-lying-twist', 'yoga-legs-wall',
        'yoga-down-dog-cobra', 'yoga-low-lunge-splits', 'yoga-butterfly-fold', 'mobility-worlds-greatest',
        'mobility-90-90-hips', 'mobility-puppy-dog', 'mobility-pigeon-pose', 'yoga-warrior-triangle',
        'yoga-mountain-reach', 'yoga-savasana', 'mobility-warmup-general'
    ]
    
    for ex in exercises:
        path1 = f'assets/animations/{ex}.mp4'
        path2 = f'assets/animation/{ex}.mp4'
        if not os.path.exists(path1):
            render_mp4_video(path1, ex)
        if not os.path.exists(path2):
            render_mp4_video(path2, ex)
            
    print("All exercise videos generated successfully!")
