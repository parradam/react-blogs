import {
  frontMatterBasic,
  frontMatterBasicListHyphenated,
  frontMatterBasicWithContent,
  frontMatterComplexJSON,
  frontMatterDeeplyNested,
  frontMatterEmpty,
  frontMatterEscapedChars,
  frontMatterIncomplete,
  frontMatterIncorrectFormat,
  frontMatterIndented,
  frontMatterJSON,
  frontMatterNumerousIndented,
  frontMatterQuotedValues,
  frontMatterSpecialCharacters,
  frontMatterUnquotedValues,
  frontMatterVoid,
  frontMatterWithDotDelim,
  frontMatterWithSemiColonDelim,
  frontMatterWithTildeDelim,
  frontMatterWithYAMLDelim,
} from '__mocks__/frontMatterMockData';
import processBlog from 'utils/processBlog';
import praseFrontMatter from '..';

// ? Questions
// How munch indentation are we allowed?

describe('parseFrontMatter', () => {
  test('should output no front matter with a void yaml input', () => {
    expect(processBlog({ blog: frontMatterVoid })).toStrictEqual({
      blog: 'No Front Matter',
      frontMatter: null,
    });
  });

  test('should output no front matter with a empty string', () => {
    expect(processBlog({ blog: frontMatterEmpty })).toStrictEqual({
      blog: '',
      frontMatter: null,
    });
  });

  test('should output incomplete front matter as blog', () => {
    expect(processBlog({ blog: frontMatterIncomplete })).toStrictEqual({
      blog: `
    ---
    one: foo
    two: bar
    three: baz
`,
      frontMatter: null,
    });
  });

  test('should output error for incorrectly formatted front matter', () => {
    expect(praseFrontMatter(frontMatterIncorrectFormat)).toStrictEqual({
      error: 'Front Matter Not Formatted Correctly.',
    });
  });

  test('should output data correctly with a basic front matter input', () => {
    expect(praseFrontMatter(frontMatterBasic)).toStrictEqual({
      title: 'yaml',
      job: 'software engineer',
    });
  });

  test('should output data correctly with a basic yaml input', () => {
    expect(processBlog({ blog: frontMatterBasicWithContent })).toStrictEqual({
      blog: 'Content',
      frontMatter: {
        title: 'Admin',
        user: 'BenjiTheGreat',
      },
    });
  });

  test('should output front matter with semi colon delimeter', () => {
    expect(processBlog({ blog: frontMatterWithSemiColonDelim, delimeter: ';;;' })).toStrictEqual({
      blog: '',
      frontMatter: { title: 'custom-delim', user: 'BenjiTheGreat' },
    });
  });

  test('should output front matter with tilde delimeter', () => {
    expect(processBlog({ blog: frontMatterWithTildeDelim, delimeter: '~~~' })).toStrictEqual({
      blog: '',
      frontMatter: {
        title: 'custom-delims',
        foo: 'bar',
        version: '2',
      },
    });
  });

  test('should output front matter with elipsis delimeter', () => {
    expect(processBlog({ blog: frontMatterWithDotDelim, delimeter: '...' })).toStrictEqual({
      blog: '',
      frontMatter: {
        foo: 'bar',
        title: 'custom-delims',
        version: '2',
      },
    });
  });

  test('should output front matter with YAML delimeter', () => {
    expect(processBlog({ blog: frontMatterWithYAMLDelim, delimeter: '-- YAML --' })).toStrictEqual({
      blog: '',
      frontMatter: { title: 'YAML', user: 'BenjiTheGreat' },
    });
  });

  // test('should output data correctly with a basic yaml input', () => {
  //   expect(praseFrontMatter({ frontMatter: frontMatterUnquotedValues })).toStrictEqual({
  //     error: 'Front Matter Not Formatted Correctly.',
  //   });
  // });

  test('should output front matter correctly with escaped chars', () => {
    expect(praseFrontMatter(frontMatterEscapedChars)).toStrictEqual({
      'more-random-chars': "hello:hi123 : 123 12£: :123:123:123:123 ''123'123'123'123'123'123",
    });
  });

  test('should output front matter correctly with values surrounded by quotes', () => {
    expect(praseFrontMatter(frontMatterQuotedValues)).toStrictEqual({
      'with-random-chars': 'this-is-a-test 123 : 456: abc - 890!',
      'current time': 'Thursday, December 22nd 2022, 10:09:56 pm',
      'time tomorrow': 'Friday,--------December 23nd 2022, 10:09:55 pm',
      'access areas': 'all : 123',
    });
  });

  // ! Is this the required output?
  test('should output front matter correctly with special chars', () => {
    expect(praseFrontMatter(frontMatterSpecialCharacters)).toStrictEqual({
      title: "!@£$%^&*()[]{};':|,./<>?`~",
    });
  });

  test('should output front matter correctly with a basic list', () => {
    expect(praseFrontMatter(frontMatterBasicListHyphenated)).toStrictEqual({
      title: 'Members',
      users: ['BenjiTheGreat', 'Steve_The_Great', 'John The Great'],
    });
  });

  test('should output front matter correctly with a basic indented list', () => {
    expect(praseFrontMatter(frontMatterIndented)).toStrictEqual({
      title: 'Members',
      users: ['BenjiTheGreat', 'Steve_The_Great', 'John The Great'],
    });
  });

  test('should output data correctly with JSON front matter', () => {
    expect(processBlog({ blog: frontMatterJSON })).toStrictEqual({
      blog: '# This page has JSON front matter!',
      frontMatter: {
        title: 'JSON',
        description: 'Front Matter',
      },
    });
  });

  test('should output data correctly with complex JSON front matter', () => {
    expect(processBlog({ blog: frontMatterComplexJSON })).toStrictEqual({
      blog: '',
      frontMatter: {
        cascade: [
          {
            _target: {
              kind: 'page',
              lang: 'en',
              path: '/blog/**',
            },
            background: 'yosemite.jpg',
          },
          {
            _target: {
              kind: 'section',
            },
            background: 'goldenbridge.jpg',
          },
        ],
        title: 'Blog',
      },
    });
  });

  test('should output front matter correctly with numerous indented lists', () => {
    expect(praseFrontMatter(frontMatterNumerousIndented)).toStrictEqual({
      title: 'Members',
      users: ['BenjiTheGreat', 'Steve_The_Great', 'John The Great'],
      permissions: ['members area', 'chat'],
    });
  });

  test('should output data correctly with a deeply nested list', () => {
    expect(processBlog({ blog: frontMatterDeeplyNested })).toStrictEqual({
      blog: '# This page has JSON front matter!',
      frontMatter: {
        title: 'JSON',
        description: 'Front Matter',
      },
    });
  });
});
