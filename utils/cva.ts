type ClassValue = string | number | boolean | undefined | null;
type ClassArray = ClassValue[];
type ClassDictionary = Record<string, any>;
type ClassProp = ClassValue | ClassArray | ClassDictionary;

export function clsx(...classes: ClassProp[]): string {
  const result: string[] = [];

  for (const cls of classes) {
    if (!cls) continue;

    if (typeof cls === "string" || typeof cls === "number") {
      result.push(String(cls));
    } else if (Array.isArray(cls)) {
      const inner = clsx(...cls);
      if (inner) result.push(inner);
    } else if (typeof cls === "object") {
      for (const key in cls) {
        if (cls[key]) result.push(key);
      }
    }
  }

  return result.join(" ");
}

export interface VariantProps<T> {
  [key: string]: any;
}

export function cva(base: string, config?: any) {
  return (props?: any) => {
    if (!config || !props) return base;

    let result = base;
    const { variants, defaultVariants } = config;

    if (variants && defaultVariants) {
      for (const key in defaultVariants) {
        const variantKey = props[key] || defaultVariants[key];
        if (variants[key] && variants[key][variantKey]) {
          result += " " + variants[key][variantKey];
        }
      }
    }

    return result;
  };
}
