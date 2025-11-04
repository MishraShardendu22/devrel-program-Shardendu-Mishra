'use client';

import * as React from 'react';
import * as SwitchPrimitive from '@radix-ui/react-switch';

import { cn } from '@/lib/utils';

function Switch({ className, ...props }: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        'peer data-[state=checked]:bg-orange-500 data-[state=unchecked]:bg-transparent data-[state=unchecked]:border-gray-300 dark:data-[state=unchecked]:border-gray-600 inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border-2 transition-all outline-none focus-visible:ring-2 focus-visible:ring-orange-500/50 disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          'bg-white dark:bg-gray-800 pointer-events-none block size-4 rounded-full transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0 shadow-sm'
        )}
      />
    </SwitchPrimitive.Root>
  );
}

export { Switch };
