import { FC, memo } from 'react';

import { IconProps } from './types';

const Idea: FC<IconProps> = ({
  title,
  width = 100,
  height = 100,
  ...props
}): JSX.Element => (
  <svg
    viewBox="0 0 100 100"
    width={width}
    height={height}
    aria-labelledby={title}
    {...props}
  >
    <title>{title ?? 'Idea'}</title>
    <path
      fill="#fef6aa"
      d="M59.888 70.332c2.031-1.277 2.875-4.239 2.422-5.765l-.541-4.415c8.007-4.104 13.918-12.381 13.918-21.997 0-13.68-11.509-24.81-25.189-24.81s-24.769 11.09-24.769 24.769c0 9.616 5.491 17.933 13.498 22.037l-.541 4.415c0 2.568 1.674 4.764 3.986 5.551"
    />
    <path
      fill="#1f212b"
      d="M59.889 71.332a1 1 0 01-.534-1.847c1.621-1.019 2.328-3.513 1.996-4.634a.99.99 0 01-.033-.162l-.542-4.415a.998.998 0 01.536-1.012c8.124-4.164 13.374-12.449 13.374-21.107 0-13.128-10.851-23.81-24.188-23.81-13.106 0-23.77 10.663-23.77 23.769 0 8.949 4.964 17.053 12.954 21.147a1 1 0 01.536 1.012l-.534 4.351a4.867 4.867 0 003.309 4.546 1 1 0 11-.645 1.894 6.866 6.866 0 01-4.664-6.498c0-.041.003-.082.008-.122l.458-3.731c-8.297-4.535-13.422-13.13-13.422-22.599 0-14.209 11.561-25.769 25.77-25.769 14.44 0 26.188 11.578 26.188 25.81 0 9.178-5.41 17.958-13.842 22.559l.449 3.656c.546 2.04-.547 5.346-2.874 6.809a.989.989 0 01-.53.153z"
    />
    <path
      fill="#1f212b"
      d="M47.542 67.739c-.016 0-.03 0-.045-.002a.5.5 0 01-.454-.542c.522-5.9.102-10.628-1.361-14.719-1.56.421-3.202.194-4.427-.692-1.09-.789-1.752-1.862-1.817-2.946-.054-.902.302-1.734 1.029-2.407.373-.345.77-.555 1.18-.623.954-.162 1.965.448 2.698 1.625a24.457 24.457 0 011.922 3.766c.271-.125.535-.276.785-.452.354-.249.671-.529.955-.831l-.002-.002c-.888-1.08-1.058-2.601-.507-4.521.238-.831 1.009-1.626 1.792-1.849.512-.144.996-.045 1.361.288.529.479.659 1.259.389 2.318-.28 1.094-.777 2.453-1.655 3.664.794.514 1.959.735 3.316.623 1.114-.094 2.149-.604 2.949-1.444-1.386-.92-2.019-2.167-1.753-3.519.172-.874.95-1.797 1.812-2.148.566-.232 1.116-.193 1.553.106.594.407.665 1.093.723 1.645a5.784 5.784 0 01-.832 3.593c.391.171.795.308 1.198.414.926-1.753 1.888-3.012 2.795-3.362.422-.162 1.234-.291 1.944.682 1.084 1.482.788 2.427.349 2.958-.796.963-2.685 1.176-4.541.854-2.403 5.039-4.737 13.858-4.443 16.665a.498.498 0 01-.445.549.503.503 0 01-.549-.445c-.297-2.834 1.864-11.615 4.437-16.996a8.854 8.854 0 01-1.35-.497c-.988 1.131-2.318 1.819-3.762 1.94-1.633.14-3.048-.167-4.038-.844a7.164 7.164 0 01-1.121.977 6.136 6.136 0 01-1.001.573c1.513 4.227 1.95 9.091 1.414 15.145a.502.502 0 01-.498.456zm-5.589-20.956a.872.872 0 00-.143.012c-.214.036-.437.16-.664.371-.508.469-.747 1.012-.711 1.613.047.784.56 1.583 1.405 2.195.938.68 2.238.859 3.479.556a23.516 23.516 0 00-1.824-3.568c-.364-.587-.949-1.179-1.542-1.179zm17.412 2.503c1.513.207 2.854-.019 3.303-.562.387-.467.004-1.199-.385-1.731-.321-.437-.562-.421-.778-.338-.653.251-1.391 1.226-2.14 2.631zm-9.631-4.806a.612.612 0 00-.17.026c-.456.13-.962.662-1.105 1.163-.425 1.482-.359 2.64.195 3.447.741-1.061 1.17-2.25 1.417-3.213.118-.461.198-1.066-.092-1.33-.032-.029-.102-.093-.245-.093zm6.689-.305a.885.885 0 00-.336.076c-.548.224-1.102.872-1.209 1.416-.232 1.185.588 2.018 1.389 2.533.57-.909.832-1.977.724-3.013-.05-.477-.097-.795-.294-.931a.475.475 0 00-.274-.081z"
    />
    <path
      fill="#8f9eb6"
      d="M57.228 76.614H43.592c-1.573 0-2.861-1.35-2.861-3s1.287-3 2.861-3h14.325c1.573 0 2.861 1.35 2.861 3 0 .895 0 .895-.598 1.72"
    />
    <path
      fill="#1f212b"
      d="M57.228 77.614H43.592c-2.129 0-3.86-1.794-3.86-4s1.731-4 3.86-4h14.325c2.129 0 3.86 1.794 3.86 4 0 1.151-.089 1.342-.788 2.307a1 1 0 11-1.619-1.172c.407-.563.407-.563.407-1.134 0-1.103-.835-2-1.86-2H43.592c-1.025 0-1.86.897-1.86 2s.835 2 1.86 2h13.637a1 1 0 11-.001 1.999z"
    />
    <path
      fill="#8f9eb6"
      d="M57.682 82.614H44.775a2.554 2.554 0 01-2.547-2.547v-.907a2.554 2.554 0 012.547-2.547h12.907a2.554 2.554 0 012.547 2.547v.907a2.556 2.556 0 01-2.547 2.547z"
    />
    <path
      fill="#1f212b"
      d="M57.681 83.614H44.775a3.55 3.55 0 01-3.547-3.547v-.906a3.55 3.55 0 013.547-3.547h12.906a3.55 3.55 0 013.547 3.547v.906a3.55 3.55 0 01-3.547 3.547zm-12.906-6c-.853 0-1.547.694-1.547 1.547v.906c0 .853.694 1.547 1.547 1.547h12.906c.853 0 1.547-.694 1.547-1.547v-.906c0-.853-.694-1.547-1.547-1.547H44.775z"
    />
    <path
      fill="#6474a6"
      d="M56.874 83.073c0 2.833-4.427 3.552-5.745 3.552-3.106 0-5.623-1.646-5.623-3.677"
    />
    <path
      fill="#1f212b"
      d="M51.129 87.625c-3.714 0-6.623-2.054-6.623-4.677a1 1 0 112 0c0 1.451 2.117 2.677 4.623 2.677 1.047 0 4.745-.611 4.745-2.552a1 1 0 112 0c0 3.439-4.544 4.552-6.745 4.552zm18.974-48.886a.5.5 0 01-.5-.5c0-1.682-.233-3.345-.692-4.944a.5.5 0 01.961-.277 18.9 18.9 0 01.731 5.22.5.5 0 01-.5.501zm-1.955-8.257a.5.5 0 01-.446-.275c-2.562-5.085-7.434-8.674-13.03-9.602a18.072 18.072 0 00-2.943-.241.5.5 0 010-1c1.041 0 2.087.086 3.107.255 5.91.979 11.054 4.769 13.759 10.138a.5.5 0 01-.447.725z"
    />
  </svg>
);

export default memo(Idea);
