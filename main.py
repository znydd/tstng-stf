import torch
from transformers import Qwen2_5_VLForConditionalGeneration, AutoProcessor
from PIL import Image
import requests
from io import BytesIO

# 🔹 Free up GPU memory
torch.cuda.empty_cache()

# 🔹 Load model with float16 to reduce memory usage
model = Qwen2_5_VLForConditionalGeneration.from_pretrained(
    "Qwen/Qwen2.5-VL-3B-Instruct",
    torch_dtype=torch.float16,  # More memory-efficient than bfloat16
    device_map="auto"
)

processor = AutoProcessor.from_pretrained("Qwen/Qwen2.5-VL-3B-Instruct", use_fast=True)

# 🔹 Load and process the image
image_url = './demo.jpeg' 
image = Image.open(image_url).convert("RGB")

# 🔹 Resize the image (smaller to fit in memory)
image = image.resize((224, 224))  

# 🔹 Define conversation (correct chat format)
conversation = [
    {
        "role": "user",
        "content": [
            {"type": "image", "image": image},  # ✅ Pass actual image, not URL
            {"type": "text", "text": "what is the gender of the person."}
        ],
    }
]

# 🔹 Process input correctly
inputs = processor.apply_chat_template(
    conversation,
    add_generation_prompt=True,
    tokenize=True,
    return_dict=True,
    return_tensors="pt"
)

# 🔹 Move tensors to GPU
inputs = {k: v.to("cuda") for k, v in inputs.items()}

# 🔹 Check if pixel_values exist
if "pixel_values" not in inputs:
    raise ValueError("Missing `pixel_values` in inputs!")

# 🔹 Generate output
output_ids = model.generate(**inputs, max_new_tokens=128, use_cache=False)
output_text = processor.batch_decode(output_ids, skip_special_tokens=True)

print(output_text)
