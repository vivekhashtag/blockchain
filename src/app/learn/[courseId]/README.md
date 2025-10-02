# [courseId] - Old Dynamic Route (ARCHIVED)

## Status: BACKUP ONLY - NOT IN USE

This directory contains the old dynamic route implementation that was used before the restructuring on 2025-10-01.

### What Happened?

**Before (Old):**
- Single file: `page.tsx` (6,785 lines)
- Route: `/learn/[courseId]` (dynamic)
- Contained ALL 6 courses in one massive file

**After (New - Current):**
- Separate files for each course
- Routes: `/learn/introduction`, `/learn/security`, etc. (static)
- Better organization, performance, and maintainability

### Files in This Directory

- **`page.backup.tsx`** - Original monolithic file with all 6 courses
  - Lines 45-2053: Introduction to Blockchain
  - Lines 2056-4757: Security Foundations
  - Lines 4761-6037: Hashing and Integrity (partial)
  - Remaining lines: Placeholders for other courses

### Why Keep This?

- Reference for course content structure
- Backup in case we need to check original implementation
- Historical record of the project evolution

### Current Active Routes

The app now uses these dedicated pages:
- `/learn/introduction/page.tsx` (2,046 lines)
- `/learn/security/page.tsx` (2,738 lines)
- `/learn/hashing/page.tsx` (1,276 lines)
- `/learn/financial/page.tsx` (placeholder)
- `/learn/smart-contracts/page.tsx` (placeholder)
- `/learn/advanced/page.tsx` (placeholder)

### Important Notes

⚠️ **DO NOT rename `page.backup.tsx` back to `page.tsx`**
- Next.js would use this dynamic route as fallback
- Could cause confusion and routing conflicts
- The new static routes are the source of truth

✅ **This backup is safe to delete** if you're confident you won't need the reference
- All course content has been migrated to new files
- Git history contains the full version history

---

**Archived on:** 2025-10-01
**Reason:** Project restructuring to separate pages per course
**Replacement:** Static routes in `/learn/{course-name}/page.tsx`
