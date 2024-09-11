import styled from "@emotion/styled";

export const RoleBox = styled.div`
  width: 20%;
`;

export const Role = styled.div`
  --color: ${({ color }: { color: string }) => color};
  width: max-content;
  display: flex;
  gap: 0.5em;
  align-items: center;
  padding: 0.25em 0.75em 0.25em 0.5em;
  border: 1px solid var(--color);
  border-radius: 2.5em;
  color: var(--color);
`;

export const ColorDot = styled.span`
  width: 0.5em;
  height: 0.5em;
  background: var(--color);
  border-radius: 0.5em;
`;
