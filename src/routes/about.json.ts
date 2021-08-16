import projects from '$lib/projects';

export function get() {
  return {
    body: JSON.stringify(projects),
  };
}
