import "@testing-library/jest-dom";

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props) => {
    const { priority, fill, quality, placeholder, blurDataURL, ...rest } = props;
    // Return plain img for test environment compatibility.
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...rest} />;
  },
}));