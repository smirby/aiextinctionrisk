import re
import requests

# 1. Load the manuscript/references text file
with open("Referencesv136.md", "r", encoding="utf-8") as f:
    text = f.read()

# 2. Extract raw URL candidates
raw_urls = re.findall(r'https?://[^\s<>"]+', text)

# 3. Strip trailing periods and punctuation introduced by citation formats
cleaned_urls = []
for u in raw_urls:
    clean_u = u.rstrip(".,;:)\\]")
    if clean_u:
        cleaned_urls.append(clean_u)

# Remove duplicate links while preserving order
unique_urls = list(dict.fromkeys(cleaned_urls))
print(f"Found {len(unique_urls)} unique URLs to verify...\n")

headers = {
    "User-Agent": (
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
        "AppleWebKit/537.36 (KHTML, like Gecko) "
        "Chrome/120.0.0.0 Safari/537.36"
    )
}

broken_urls = []

for url in unique_urls:
    try:
        # First attempt a lightweight HEAD request
        response = requests.head(url, headers=headers, allow_redirects=True, timeout=10)
        
        # Some servers reject HEAD; fall back to GET if needed
        if response.status_code in (403, 405):
            response = requests.get(url, headers=headers, allow_redirects=True, timeout=10, stream=True)

        if response.status_code >= 400:
            print(f"[{response.status_code}] BROKEN: {url}")
            broken_urls.append((url, response.status_code))
        else:
            print(f"[{response.status_code}] OK: {url}")

    except requests.RequestException as e:
        print(f"[FAILED / TIMEOUT] {url} -> {type(e).__name__}")
        broken_urls.append((url, "Request Error"))

print(f"\n--- Verification Complete ---")
print(f"Total Broken / Flagged: {len(broken_urls)}")
