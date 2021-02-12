import React, { useCallback, useState } from 'react';
import { ListCard } from '../components/list-card';
import { ActionButton } from '../components/action-button';
import * as Styled from './styled';

enum DisplayState {
    Student,
    Pairs,
    Groups,
    Rows
}

export const Home:React.FC<{}> = () => {
    const [activeClass, setActiveClass] = useState<Class>(dummyClasses[0]);
    const [displayState, setDisplayState] = useState<DisplayState>(DisplayState.Student);
    const [activeStudentIndex, setActiveStudentIndex] = useState<number>();
    const [groups, setGroups] = useState<Student[][]>();
    const [sizeOfGroup, setSizeOfGroup] = useState<number>(3);
    const [rowCount, setRowCount] = useState<number>(3);

    const randomStudent = useCallback(() => 
        Math.floor(Math.random() * Math.floor(activeClass.students.length)), [activeClass]
    );

    const randomPairs = useCallback(() =>
        [
            [activeClass.students[0], activeClass.students[1]],
            [activeClass.students[2], activeClass.students[3]],
            [activeClass.students[4], activeClass.students[5]],
            [activeClass.students[6]],
        ], [activeClass]
    );

    const randomGroups = useCallback(() => 
        [
            [activeClass.students[0], activeClass.students[1], activeClass.students[2]],
            [activeClass.students[3], activeClass.students[4], activeClass.students[5]],
            [activeClass.students[6]]
        ], [activeClass]);

    const randomRows = useCallback(() => 
        [
            [activeClass.students[0], activeClass.students[3], activeClass.students[5]],
            [activeClass.students[1], activeClass.students[4], activeClass.students[6]],
            [activeClass.students[2]]
        ], [activeClass]);

    const getStudentSubtitle = useCallback((student: Student) => {
        const partner = groups && groups.find(x => x.includes(student))?.find(x => x.id !== student.id)?.name;

        let group = groups && groups.findIndex(x => x.includes(student)) + 1;
        
        if (groups && activeClass.students.length % groups.length !== 0 && group === groups.length) {
            group = undefined;
        }

        const position = groups && group && groups[group - 1].findIndex(x => x.id === student.id) + 1;

        switch (displayState) {
            case DisplayState.Student:
                return `Bad Pairs:${student.badPairs.map(x => ' ' + x)}`;
            case DisplayState.Pairs:
                return partner ? `Partner: ${partner}` : 'Extra';
            case DisplayState.Groups:
                return group ? `Group #${group}` : 'Extra';
            case DisplayState.Rows:
                return group ? `Row #${group}, Position #${position}` : 'Extra';
        }
    }, [activeClass, displayState]);

    return (
        <Styled.Background>
            <Styled.Header />
            <Styled.Title>{activeClass.name}</Styled.Title>
            <Styled.Content>
                <Styled.Sidebar>
                    <Styled.Subtitle>{'My Classes'}</Styled.Subtitle>
                    <Styled.ScrollableContainer>
                        {dummyClasses.map(course => (
                            <ListCard
                                title={course.name}
                                subtitle={course.students.length + ' students'}
                                isActive={activeClass.id === course.id}
                                onClick={() => {
                                    setActiveClass(course);
                                    setDisplayState(DisplayState.Student);
                                }}
                            />
                        ))}
                    </Styled.ScrollableContainer>
                </Styled.Sidebar>
                <Styled.ActionsContainer>
                    <Styled.ActionsRow>
                        <ActionButton
                            label={'Random Student'}
                            onClick={() => {
                                setActiveStudentIndex(randomStudent());
                                setDisplayState(DisplayState.Student);
                            }} />
                        <ActionButton 
                            label={'Pairs'}
                            onClick={() => {
                                setActiveStudentIndex(undefined);
                                setGroups(randomPairs());
                                setDisplayState(DisplayState.Pairs);
                            }}
                        />
                    </Styled.ActionsRow>
                    <Styled.ActionsRow>
                        <ActionButton
                            label={`Groups of ${sizeOfGroup}`}
                            onClick={() => {
                                setActiveStudentIndex(undefined);
                                setGroups(randomGroups());
                                setDisplayState(DisplayState.Groups);
                            }} />
                        <ActionButton
                            label={`${rowCount} Rows`}
                            onClick={() => {
                                setActiveStudentIndex(undefined);
                                setGroups(randomRows());
                                setDisplayState(DisplayState.Rows);
                            }} />
                    </Styled.ActionsRow>
                </Styled.ActionsContainer>
                <Styled.Sidebar>
                    <Styled.Subtitle>{'Student Profiles'}</Styled.Subtitle>
                    <button onClick={() => setActiveStudentIndex(undefined)}>{'Reset'}</button>
                    <Styled.ScrollableContainer>
                        {activeClass.students.map((student, index) => (
                            <ListCard
                                title={student.name}
                                subtitle={getStudentSubtitle(student)}
                                isActive={activeStudentIndex === index}
                                onClick={() => console.log(index)}
                            />
                        ))}
                    </Styled.ScrollableContainer>
                </Styled.Sidebar>
            </Styled.Content>
        </Styled.Background>
    );
}

interface Student {
    id: string;
    name: string;
    badPairs: string[];
}

interface Class {
    id: string;
    name: string;
    students: Student[];
}

const dummyClasses = [
    {
        id: 'Class0',
        name: 'First Period',
        students: [
            {
                id: 'Student0',
                name: 'Scott',
                badPairs: ['Cooper']
            },
            {
                id: 'Student1',
                name: 'Cooper',
                badPairs: ['Scott']
            },
            {
                id: 'Student2',
                name: 'John',
                badPairs: ['Parker']
            },
            {
                id: 'Student3',
                name: 'Parker',
                badPairs: ['John']
            },
            {
                id: 'Student4',
                name: 'Kaleb',
                badPairs: []
            },
            {
                id: 'Student5',
                name: 'Micheal',
                badPairs: []
            },
            {
                id: 'Student6',
                name: 'Gideon',
                badPairs: []
            },
        ]
    },
    {
        id: 'Class1',
        name: 'Second Period',
        students: [
            {
                id: 'Student0',
                name: 'Scott',
                badPairs: ['Mason']
            },
            {
                id: 'Student1',
                name: 'Luke',
                badPairs: []
            },
            {
                id: 'Student2',
                name: 'Bax',
                badPairs: []
            },
            {
                id: 'Student3',
                name: 'Wesley',
                badPairs: ['Mason']
            },
            {
                id: 'Student4',
                name: 'Michael',
                badPairs: []
            },
            {
                id: 'Student5',
                name: 'Caleb',
                badPairs: []
            },
            {
                id: 'Student6',
                name: 'Mason',
                badPairs: ['Wesley', 'Scott']
            },
        ]
    },
    {
        id: 'Class2',
        name: 'Third Period',
        students: [
            {
                id: 'Student0',
                name: 'Scott',
                badPairs: []
            },
            {
                id: 'Student1',
                name: 'Daniel',
                badPairs: []
            },
            {
                id: 'Student2',
                name: 'James',
                badPairs: ['Anna']
            },
            {
                id: 'Student3',
                name: 'Anna',
                badPairs: ['James', 'Jon']
            },
            {
                id: 'Student4',
                name: 'Alex',
                badPairs: []
            },
            {
                id: 'Student5',
                name: 'Susie',
                badPairs: ['Jon']
            },
            {
                id: 'Student6',
                name: 'Jon',
                badPairs: ['Anna', 'Susie']
            },
        ]
    },
    {
        id: 'Class3',
        name: 'Fourth Period',
        students: [
            {
                id: 'Student0',
                name: 'Scott',
                badPairs: []
            },
            {
                id: 'Student1',
                name: 'Josh',
                badPairs: []
            },
            {
                id: 'Student2',
                name: 'Thomas',
                badPairs: ['Tanner']
            },
            {
                id: 'Student3',
                name: 'Carter',
                badPairs: []
            },
            {
                id: 'Student4',
                name: 'Cairns',
                badPairs: []
            },
            {
                id: 'Student5',
                name: 'Akins',
                badPairs: []
            },
            {
                id: 'Student6',
                name: 'Tanner',
                badPairs: ['Thomas']
            },
        ]
    },
    {
        id: 'Class4',
        name: 'Fifth Period',
        students: [
            {
                id: 'Student0',
                name: 'Scott',
                badPairs: []
            },
            {
                id: 'Student1',
                name: 'Schyler',
                badPairs: []
            },
            {
                id: 'Student2',
                name: 'Kurt',
                badPairs: []
            },
            {
                id: 'Student3',
                name: 'Tim',
                badPairs: []
            },
            {
                id: 'Student4',
                name: 'Ryan',
                badPairs: []
            },
            {
                id: 'Student5',
                name: 'Korbin',
                badPairs: []
            },
            {
                id: 'Student6',
                name: 'Mitch',
                badPairs: []
            },
            {
                id: 'Student7',
                name: 'Hugo',
                badPairs: []
            },
            {
                id: 'Student8',
                name: 'Tina',
                badPairs: []
            },
        ]
    }
];
