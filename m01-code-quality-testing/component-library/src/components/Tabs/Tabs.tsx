import { useEffect, useId, useRef, useState } from 'react';
import type { KeyboardEvent, ReactNode } from 'react';

export interface TabItem {
  id: string;
  label: string;
  content: ReactNode;
}

export interface TabsProps {
  tabs: TabItem[];
  defaultTabId?: string;
  activeTabId?: string;
  onChange?: (id: string) => void;
  pageSize?: number;
}

export function Tabs({ tabs, defaultTabId, activeTabId, onChange, pageSize = 5 }: TabsProps) {
  const baseId = useId();
  const isControlled = activeTabId !== undefined;
  const [internalActiveId, setInternalActiveId] = useState<string | undefined>(
    defaultTabId ?? tabs[0]?.id,
  );
  const currentId = isControlled ? activeTabId : internalActiveId;
  const activeIndex = Math.max(
    0,
    tabs.findIndex((tab) => tab.id === currentId),
  );
  const activeTab = tabs[activeIndex];

  const size = Math.max(1, pageSize);
  const paginated = tabs.length > size;
  const pageCount = Math.ceil(tabs.length / size);
  const [page, setPage] = useState(() => Math.floor(activeIndex / size));
  const [pendingFocusId, setPendingFocusId] = useState<string | null>(null);
  const tabRefs = useRef(new Map<string, HTMLButtonElement>());

  useEffect(() => {
    setPage(Math.floor(activeIndex / size));
  }, [activeIndex, size]);

  useEffect(() => {
    if (pendingFocusId === null) return;
    tabRefs.current.get(pendingFocusId)?.focus();
    setPendingFocusId(null);
  }, [pendingFocusId, page]);

  if (!activeTab) return null;

  const start = paginated ? page * size : 0;
  const visibleTabs = paginated ? tabs.slice(start, start + size) : tabs;
  const canGoPrevious = page > 0;
  const canGoNext = page < pageCount;

  const selectTab = (id: string) => {
    if (!isControlled) {
      setInternalActiveId(id);
    }
    onChange?.(id);
  };

  const moveTo = (index: number) => {
    const target = tabs[index];
    setPage(Math.floor(index / size));
    setPendingFocusId(target.id);
    selectTab(target.id);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      moveTo((index + 1) % tabs.length);
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault();
      moveTo((index - 1 + tabs.length) % tabs.length);
    } else if (event.key === 'Home') {
      event.preventDefault();
      moveTo(0);
    } else if (event.key === 'End') {
      event.preventDefault();
      moveTo(tabs.length - 1);
    }
  };

  const tabId = (id: string) => `${baseId}-tab-${id}`;
  const panelId = (id: string) => `${baseId}-panel-${id}`;

  return (
    <div className="tabs">
      <div className="tabs__bar">
        {paginated && (
          <button
            type="button"
            className="tabs__page-btn"
            onClick={() => setPage((p) => p - 1)}
            disabled={!canGoPrevious}
          >
            Previous tabs
          </button>
        )}
        <div role="tablist" className="tabs__list">
          {visibleTabs.map((tab, offset) => {
            const index = start + offset;
            const selected = tab.id === activeTab.id;
            return (
              <button
                key={tab.id}
                ref={(node) => {
                  if (node) tabRefs.current.set(tab.id, node);
                  else tabRefs.current.delete(tab.id);
                }}
                type="button"
                role="tab"
                id={tabId(tab.id)}
                className={selected ? 'tabs__tab tabs__tab--active' : 'tabs__tab'}
                aria-selected={selected}
                aria-controls={panelId(tab.id)}
                tabIndex={selected ? 0 : -1}
                onClick={() => selectTab(tab.id)}
                onKeyDown={(event) => handleKeyDown(event, index)}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
        {paginated && (
          <button
            type="button"
            className="tabs__page-btn"
            onClick={() => setPage((p) => p + 1)}
            disabled={!canGoNext}
          >
            Next tabs
          </button>
        )}
      </div>
      {paginated && (
        <p className="tabs__page-label">
          Page {page + 1} of {pageCount}
        </p>
      )}
      <div
        role="tabpanel"
        id={panelId(activeTab.id)}
        aria-labelledby={tabId(activeTab.id)}
        className="tabs__panel"
        tabIndex={0}
      >
        {activeTab.content}
      </div>
    </div>
  );
}
