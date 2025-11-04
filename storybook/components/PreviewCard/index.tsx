import cls from 'classnames/bind';
import React, { type ReactNode, useRef, useState } from 'react';

import { Flex, Typography } from '@emingy/core/ui';

import styles from './index.module.scss';

const BLOCK_NAME = 'PreviewCard';
const cn = cls.bind(styles);

const COPIED_TIMEOUT_MS = 1500;

type TProps = {
    varKey: string;
    label: string;
    previewContent: ReactNode;
    width?: number | string;
    height?: number | string;
    badges?: string[];
    params?: string[];
};

export const PreviewCard = ({
    varKey,
    label,
    previewContent,
    width = 150,
    height = 200,
    badges,
    params,
}: TProps) => {
    const [copiedVarKey, setCopiedVarKey] = useState<string | null>(null);

    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const handleColorItemClick = (targetColorVarKey: string) => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }

        navigator.clipboard.writeText(targetColorVarKey);

        setCopiedVarKey(targetColorVarKey);

        timeoutRef.current = setTimeout(() => {
            setCopiedVarKey(null);
            timeoutRef.current = null;
        }, COPIED_TIMEOUT_MS);
    };

    return (
        <button onClick={() => handleColorItemClick(varKey)}>
            <Flex
                direction="column"
                key={varKey}
                className={cn(`${BLOCK_NAME}`)}
                style={{ width, height }}
            >
                <div className={cn(`${BLOCK_NAME}__hint`)}>
                    <Typography.Large isBold={true}>
                        {copiedVarKey === varKey ? (
                            'Copied 🎉'
                        ) : (
                            <>
                                Click to copy
                                <br />
                                {varKey}
                            </>
                        )}
                    </Typography.Large>
                </div>
                <div className={cn(`${BLOCK_NAME}__preview`)}>{previewContent}</div>
                <Flex direction="column" gap="1x" className={cn(`${BLOCK_NAME}__description`)}>
                    <Flex gap="2x" justify="space-between">
                        <Typography.Large>{label}</Typography.Large>
                        {Boolean(badges && badges.length) && (
                            <Flex gap="1x">
                                {badges?.map((value) => (
                                    <Typography.Small className={cn(`${BLOCK_NAME}__badge`)}>
                                        {value}
                                    </Typography.Small>
                                ))}
                            </Flex>
                        )}
                    </Flex>
                    {Boolean(params && params.length) &&
                        params?.map((value) => (
                            <Typography.Small className={cn(`${BLOCK_NAME}__param`)}>
                                {value}
                            </Typography.Small>
                        ))}
                </Flex>
            </Flex>
        </button>
    );
};
