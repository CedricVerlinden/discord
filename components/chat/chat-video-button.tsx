'use client';

import { Video, VideoOff } from 'lucide-react';
import qs from 'query-string';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import ActionTooltip from '../action-tooltip';

function ChatVideoButton() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const isVideo = searchParams?.get('video');

  const onClick = () => {
    const url = qs.stringifyUrl(
      {
        url: pathname || '',
        query: {
          video: isVideo ? undefined : true,
        },
      },
      { skipNull: true }
    );

    router.push(url);
  };

  const Icon = isVideo ? VideoOff : Video;
  const tooltipLabel = isVideo ? 'End video call' : 'Start video call';

  return (
    <ActionTooltip side="bottom" label={tooltipLabel}>
      <button type="button">
        <Icon
          onClick={onClick}
          className="mr-4 h-6 w-6 text-zinc-500 transition hover:opacity-75 dark:text-zinc-400"
        />
      </button>
    </ActionTooltip>
  );
}

export default ChatVideoButton;
