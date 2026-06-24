import { useState, useEffect } from 'react';
import { type TaskRequest, COLOR_PRESETS, PRIVACY_OPTIONS } from '../hooks/useTasks';

interface Props {
    task: TaskRequest;
    isNew: boolean;
    onChange: (task: TaskRequest) => void;
    onSave: (task: TaskRequest, createStub?: boolean) => void; 
    onCancel: () => void;
}

function formatDateTime(timestamp: number): string {
    if (!timestamp) return '';
    const d = new Date(timestamp);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    const hours = String(d.getHours()).padStart(2, '0');
    const minutes = String(d.getMinutes()).padStart(2, '0');
    return `${year}-${month}-${day}T${hours}:${minutes}`;
}

export function TaskEditor({ task, isNew, onChange, onSave, onCancel }: Props) {
    const [title, setTitle] = useState(task.title);
    const [body, setBody] = useState(task.body);
    const [importance, setImportance] = useState(task.importance);
    const [colour, setColour] = useState(task.colour || 'FFFFFF');
    const [privacy, setPrivacy] = useState(task.privacy);
    const [startStr, setStartStr] = useState(formatDateTime(task.start));
    const [endStr, setEndStr] = useState(formatDateTime(task.time_end));
    const [noEndTime, setNoEndTime] = useState(task.time_end === 0 || task.time_end === task.start);
    const [noTime, setNoTime] = useState(task.start === 0);
    const [createPublicStub, setCreatePublicStub] = useState(false);

    useEffect(() => {
        setTitle(task.title);
        setBody(task.body);
        setImportance(task.importance);
        setColour(task.colour || 'FFFFFF');
        setPrivacy(task.privacy);
        setStartStr(formatDateTime(task.start));
        setEndStr(formatDateTime(task.time_end));
        setNoEndTime(task.time_end === 0 || task.time_end === task.start);
        setNoTime(task.start === 0);
    }, [task]);

    function update(updates: Partial<TaskRequest>) {
        onChange({ ...task, ...updates, updated_at: Date.now() });
    }

    function parseDateTime(value: string): number | null {
        const d = new Date(value);
        if (!isNaN(d.getTime())) return d.getTime();
        return null;
    }

    function handleStartChange(value: string) {
        setStartStr(value);
        const parsed = parseDateTime(value);
        if (parsed) {
            update({ start: parsed });
        }
    }

    function handleEndChange(value: string) {
        setEndStr(value);
        const parsed = parseDateTime(value);
        if (parsed) {
            update({ time_end: parsed });
        }
    }

    function handleSave() {
        if (!title.trim()) return;

        let finalStart = noTime ? 0 : task.start;
        let finalEnd = noTime || noEndTime ? 0 : task.time_end;

        // Финальная проверка только при сохранении
        if (!noTime && !noEndTime && finalEnd <= finalStart) {
            finalEnd = finalStart + 30 * 60000;
        }

        const finalTask = {
            ...task,
            title: title.trim(),
            body: body.trim(),
            importance,
            colour: colour.replace('#', ''),
            privacy,
            start: finalStart,
            time_end: finalEnd,
        };

        update(finalTask);
        onSave(finalTask, createPublicStub); // Передаем флаг сюда
    }
    const hexColor = colour.startsWith('#') ? colour : `#${colour}`;
    
    return (
        <div style={{
            background: 'white',
            borderRadius: '12px',
            padding: '20px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            height: 'fit-content',
            position: 'sticky',
            top: '24px',
        }}>
            <h3 style={{ margin: '0 0 16px 0', fontSize: '16px' }}>
                {isNew ? 'Новая задача' : 'Редактирование'}
            </h3>

            {/* Название (до 30 символов) */}
            <div style={{ marginBottom: '12px' }}>
                <label style={labelStyle}>Название *</label>
                <input
                    value={title}
                    onChange={(e) => {
                        setTitle(e.target.value);
                        update({ title: e.target.value });
                    }}
                    maxLength={30}
                    style={inputStyle}
                    placeholder="Введите название"
                />
                {title.length >= 30 && (
                    <span style={{ color: '#ef4444', fontSize: '12px' }}>Максимум 30 символов</span>
                )}
            </div>

            <div style={{ marginBottom: '12px' }}>
                <label style={labelStyle}>Описание</label>
                <textarea
                    value={body}
                    onChange={(e) => {
                        setBody(e.target.value);
                        update({ body: e.target.value });
                    }}
                    style={{ ...inputStyle, minHeight: '60px', resize: 'vertical' }}
                    placeholder="Описание задачи"
                />
            </div>

            <div style={{ marginBottom: '12px' }}>
                <label style={labelStyle}>Важность</label>
                <select
                    value={importance}
                    onChange={(e) => {
                        setImportance(+e.target.value);
                        update({ importance: +e.target.value });
                    }}
                    style={inputStyle}
                >
                    <option value={1}>Простая</option>
                    <option value={2}>Важная</option>
                    <option value={3}>Крайне важная</option>
                </select>
            </div>

            <div style={{ marginBottom: '12px' }}>
                <label style={labelStyle}>Видимость</label>
                {/* Контейнер с кнопками в ряд */}
                <div style={{ display: 'flex', gap: '6px' }}>
                    {PRIVACY_OPTIONS.map((opt) => (
                        <button
                            key={opt.value}
                            onClick={() => {
                                setPrivacy(opt.value);
                                update({ privacy: opt.value });
                            }}
                            style={{
                                flex: 1,
                                padding: '8px',
                                border: privacy === opt.value ? '2px solid #3b82f6' : '1px solid #d1d5db',
                                borderRadius: '8px',
                                background: privacy === opt.value ? '#dbeafe' : 'white',
                                cursor: 'pointer',
                                fontSize: '12px',
                                fontWeight: privacy === opt.value ? 600 : 400,
                            }}
                        >
                            {opt.label}
                        </button>
                    ))}
                </div>

                {isNew && privacy !== 'PUBLIC' && (
                    <div style={{ marginTop: '12px', padding: '8px', background: '#f9fafb', borderRadius: '8px' }}>
                        <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#374151', cursor: 'pointer' }}>
                            <input
                                type="checkbox"
                                checked={createPublicStub}
                                onChange={(e) => setCreatePublicStub(e.target.checked)}
                            />
                            Создать заглушку в "публичных" на это время
                        </label>
                    </div>
                )}
            </div>

            <div style={{ marginBottom: '12px' }}>
                <label style={{ ...labelStyle, display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <input
                        type="checkbox"
                        checked={noTime}
                        onChange={(e) => {
                            setNoTime(e.target.checked);
                            update({ start: e.target.checked ? 0 : Date.now(), time_end: 0 });
                        }}
                    />
                    Без времени
                </label>
            </div>

            {!noTime && (
                <>
                    <div style={{ marginBottom: '12px' }}>
                        <label style={labelStyle}>Начало</label>
                        <input
                            type="datetime-local"
                            value={startStr}
                            onChange={(e) => handleStartChange(e.target.value)}
                            style={inputStyle}
                        />
                    </div>
                    <div style={{ marginBottom: '12px' }}>
                        <label style={{ ...labelStyle, display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <input
                                type="checkbox"
                                checked={noEndTime}
                                onChange={(e) => {
                                    setNoEndTime(e.target.checked);
                                    update({ time_end: e.target.checked ? 0 : task.start + 3600000 });
                                }}
                            />
                            Без времени окончания
                        </label>
                    </div>
                    {!noEndTime && (
                        <div style={{ marginBottom: '12px' }}>
                            <label style={labelStyle}>Окончание</label>
                            <input
                                type="datetime-local"
                                value={endStr}
                                onChange={(e) => handleEndChange(e.target.value)}
                                style={inputStyle}
                            />
                        </div>
                    )}
                </>
            )}

            <div style={{ marginBottom: '20px' }}>
                <label style={labelStyle}>Цвет задачи</label>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <input
                            type="color"
                            value={hexColor}
                            onChange={(e) => {
                                const newColor = e.target.value.replace('#', '');
                                setColour(newColor);
                                update({ colour: newColor });
                            }}
                            title="Выбрать любой цвет"
                            style={{
                                width: '36px', height: '36px', padding: '0', border: 'none',
                                borderRadius: '8px', cursor: 'pointer', background: 'transparent'
                            }}
                        />
                    </div>
                    
                    <div style={{ width: '1px', height: '24px', background: '#d1d5db' }} />

                    {COLOR_PRESETS.map((c) => (
                        <button
                            key={c.value}
                            onClick={() => {
                                setColour(c.value);
                                update({ colour: c.value });
                            }}
                            title={c.label}
                            style={{
                                width: '28px', height: '28px', borderRadius: '50%', background: `#${c.value}`,
                                border: colour === c.value ? '3px solid #3b82f6' : '1px solid #d1d5db', cursor: 'pointer',
                            }}
                        />
                    ))}
                </div>
            </div>

            <div style={{ display: 'flex', gap: '8px' }}>
                <button onClick={handleSave} style={saveBtnStyle}>
                    {isNew ? 'Создать' : 'Сохранить'}
                </button>
                <button onClick={onCancel} style={cancelBtnStyle}>
                    Отмена
                </button>
            </div>
        </div>
    );
}

const labelStyle: React.CSSProperties = { display: 'block', fontSize: '13px', fontWeight: 600, color: '#374151', marginBottom: '4px' };
const inputStyle: React.CSSProperties = { width: '100%', padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '14px', boxSizing: 'border-box' };
const saveBtnStyle: React.CSSProperties = { flex: 1, padding: '10px', background: '#3b82f6', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontSize: '14px', fontWeight: 600 };
const cancelBtnStyle: React.CSSProperties = { flex: 1, padding: '10px', background: '#f3f4f6', color: '#374151', border: '1px solid #d1d5db', borderRadius: '8px', cursor: 'pointer', fontSize: '14px' };