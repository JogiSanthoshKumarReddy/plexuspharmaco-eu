import os
import re

lint_output = """
/Users/Guest_Account/Documents/Projects/plexuspharmaco-eu/app/admin/inquiries/page.tsx
  3:26  warning  'Mail' is defined but never used   @typescript-eslint/no-unused-vars
  3:32  warning  'Phone' is defined but never used  @typescript-eslint/no-unused-vars

/Users/Guest_Account/Documents/Projects/plexuspharmaco-eu/app/admin/page.tsx
  4:37  warning  'TrendingUp' is defined but never used  @typescript-eslint/no-unused-vars

/Users/Guest_Account/Documents/Projects/plexuspharmaco-eu/app/admin/products/page.tsx
  3:32  warning  'MoreVertical' is defined but never used  @typescript-eslint/no-unused-vars

/Users/Guest_Account/Documents/Projects/plexuspharmaco-eu/app/compilance-reporting/page.tsx
   5:8   warning  'Link' is defined but never used   @typescript-eslint/no-unused-vars
  40:14  warning  'error' is defined but never used  @typescript-eslint/no-unused-vars

/Users/Guest_Account/Documents/Projects/plexuspharmaco-eu/app/global-office/page.tsx
  3:31  warning  'Globe2' is defined but never used      @typescript-eslint/no-unused-vars
  3:50  warning  'TrendingUp' is defined but never used  @typescript-eslint/no-unused-vars

/Users/Guest_Account/Documents/Projects/plexuspharmaco-eu/app/healthcare-tool/page.tsx
  3:56  warning  'ArrowRight' is defined but never used  @typescript-eslint/no-unused-vars

/Users/Guest_Account/Documents/Projects/plexuspharmaco-eu/app/investor-relation/page.tsx
  3:44  warning  'ArrowRight' is defined but never used  @typescript-eslint/no-unused-vars

/Users/Guest_Account/Documents/Projects/plexuspharmaco-eu/app/logistics/page.tsx
  3:60  warning  'ArrowRight' is defined but never used  @typescript-eslint/no-unused-vars

/Users/Guest_Account/Documents/Projects/plexuspharmaco-eu/app/media/page.tsx
  3:31  warning  'PlayCircle' is defined but never used  @typescript-eslint/no-unused-vars
  6:8   warning  'Link' is defined but never used        @typescript-eslint/no-unused-vars

/Users/Guest_Account/Documents/Projects/plexuspharmaco-eu/app/page.tsx
  2:10  warning  'Suspense' is defined but never used           @typescript-eslint/no-unused-vars
  5:8   warning  'CompanyHighlights' is defined but never used  @typescript-eslint/no-unused-vars

/Users/Guest_Account/Documents/Projects/plexuspharmaco-eu/app/press-release/page.tsx
  3:31  warning  'ArrowRight' is defined but never used  @typescript-eslint/no-unused-vars
  5:8   warning  'Link' is defined but never used        @typescript-eslint/no-unused-vars

/Users/Guest_Account/Documents/Projects/plexuspharmaco-eu/app/product-catalogue/[id]/page.tsx
  4:71  warning  'Box' is defined but never used  @typescript-eslint/no-unused-vars

/Users/Guest_Account/Documents/Projects/plexuspharmaco-eu/app/product-catalogue/page.tsx
  2:29  warning  'useEffect' is defined but never used  @typescript-eslint/no-unused-vars

/Users/Guest_Account/Documents/Projects/plexuspharmaco-eu/app/profile/page.tsx
  3:37  warning  'ArrowRight' is defined but never used  @typescript-eslint/no-unused-vars

/Users/Guest_Account/Documents/Projects/plexuspharmaco-eu/app/quality-assurance/page.tsx
  3:31  warning  'FileText' is defined but never used  @typescript-eslint/no-unused-vars

/Users/Guest_Account/Documents/Projects/plexuspharmaco-eu/app/sub/biocare/page.tsx
  3:47  warning  'ArrowRight' is defined but never used  @typescript-eslint/no-unused-vars

/Users/Guest_Account/Documents/Projects/plexuspharmaco-eu/app/sub/biogenix/page.tsx
  3:37  warning  'ArrowRight' is defined but never used  @typescript-eslint/no-unused-vars

/Users/Guest_Account/Documents/Projects/plexuspharmaco-eu/components/about/HistoryTimeline.tsx
  3:20  warning  'ChevronRight' is defined but never used  @typescript-eslint/no-unused-vars

/Users/Guest_Account/Documents/Projects/plexuspharmaco-eu/components/common/AnimatedCounter.tsx
  13:50  warning  'duration' is assigned a value but never used  @typescript-eslint/no-unused-vars

/Users/Guest_Account/Documents/Projects/plexuspharmaco-eu/components/common/PageHeader.tsx
  34:35  warning  'index' is defined but never used  @typescript-eslint/no-unused-vars
"""

current_file = None
fixes = {}

for line in lint_output.strip().split("\n"):
    if line.startswith("/"):
        current_file = line
        fixes[current_file] = []
    elif "is defined but never used" in line or "is assigned a value but never used" in line:
        match = re.search(r"'([^']+)'", line)
        if match:
            fixes[current_file].append(match.group(1))

for file, vars in fixes.items():
    if not os.path.exists(file): continue
    with open(file, 'r') as f:
        content = f.read()
    
    # We will simply do regex replacement for imports.
    # Pattern: \bVarName\b\s*,\s*  -> ""
    # Pattern: ,\s*\bVarName\b -> ""
    for var in vars:
        content = re.sub(rf",\s*\b{var}\b", "", content)
        content = re.sub(rf"\b{var}\b\s*,", "", content)
        # For 'import var from' or similar single imports, it's harder, but mostly it's within {}
        # We can try to replace `{ var }` with `{}` but let's just do it simple:
        content = re.sub(rf"{{\s*{var}\s*}}", "{}", content)
        content = re.sub(rf"import\s+{var}\s+from[^\n]+", "", content)
        
    with open(file, 'w') as f:
        f.write(content)
    
print("Attempted to fix lint warnings.")
