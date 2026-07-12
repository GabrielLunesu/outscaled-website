// Per-instance Ditto metadata. Validation-only node ids stay in .clone/generated.
export type DittoNodeMeta = { anchor?: string };
export type DittoNodeMetaMap = Record<number, DittoNodeMeta | undefined>;

export const Logo2_meta: DittoNodeMetaMap[] = [
    { 0: { anchor: "motion-4" } },
    { 0: { anchor: "motion-5" } },
    {  },
    {  }
];
export const Logo3_meta: DittoNodeMetaMap[] = [
    { 0: { anchor: "motion-6" } },
    { 0: { anchor: "motion-7" } },
    {  },
    {  }
];
