import projects from './_projects';

export function get() {
  return {
    body: JSON.stringify(projects),
  };
}
