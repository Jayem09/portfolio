type GitHubEvent = {
  id: string;
  type: string;
  repo: { name: string };
  created_at: string;
  payload: any;
};

type GitHubRepo = {
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  updated_at: string;
  stargazers_count: number;
};

async function getGitHubData(username: string) {
  try {
    const headers = {
      Accept: "application/vnd.github+json",
      "User-Agent": "portfolio",
    };
    const [userRes, eventsRes, reposRes] = await Promise.all([
      fetch(`https://api.github.com/users/${username}`, { headers, next: { revalidate: 3600 } }),
      fetch(`https://api.github.com/users/${username}/events/public?per_page=5`, { headers, next: { revalidate: 3600 } }),
      fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=3`, { headers, next: { revalidate: 3600 } }),
    ]);

    if (!userRes.ok) return null;
    const user = await userRes.json();
    const events: GitHubEvent[] = eventsRes.ok ? await eventsRes.json() : [];
    const repos: GitHubRepo[] = reposRes.ok ? await reposRes.json() : [];
    return { user, events, repos };
  } catch {
    return null;
  }
}

function timeAgo(date: string) {
  const diff = Date.now() - new Date(date).getTime();
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  if (days === 0) return "today";
  if (days === 1) return "yesterday";
  if (days < 30) return `${days}d ago`;
  const months = Math.floor(days / 30);
  if (months < 12) return `${months}mo ago`;
  return `${Math.floor(months / 12)}y ago`;
}

function eventLabel(e: GitHubEvent) {
  switch (e.type) {
    case "PushEvent":
      return `Pushed ${e.payload.commits?.length ?? 0} commits to ${e.repo.name}`;
    case "WatchEvent":
      return `Starred ${e.repo.name}`;
    case "CreateEvent":
      return `Created ${e.payload.ref_type ?? "repo"} in ${e.repo.name}`;
    case "ForkEvent":
      return `Forked ${e.repo.name}`;
    case "PullRequestEvent":
      return `${e.payload.action} PR in ${e.repo.name}`;
    case "IssuesEvent":
      return `${e.payload.action} issue in ${e.repo.name}`;
    default:
      return `${e.type.replace("Event", "")} in ${e.repo.name}`;
  }
}

export default async function GithubActivity() {
  const username = "Jayem09";
  const data = await getGitHubData(username);

  if (!data || !data.user) {
    return (
      <section className="w-full space-y-4">
        <div className="flex items-center justify-between">
          <p className="text-2xl sm:text-3xl font-light tracking-tight text-gray-900 dark:text-white">GitHub Activity</p>
          <a href={`https://github.com/${username}`} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-gray-900 dark:hover:text-white">@{username} →</a>
        </div>
        <div className="rounded-xl border border-dashed border-gray-300 dark:border-gray-700 p-6 text-sm text-gray-500 dark:text-gray-400 bg-white dark:bg-ink">
          No recent public activity to show right now.
        </div>
      </section>
    );
  }

  const { user, events, repos } = data;
  const hasEvents = events && events.length > 0;

  return (
    <section className="w-full space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-2xl sm:text-3xl font-light tracking-tight text-gray-900 dark:text-white">GitHub Activity</p>
        <a href={`https://github.com/${username}`} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-1 text-sm text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
          @{username} <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
        </a>
      </div>

      <div className="rounded-xl border border-dashed border-gray-300 dark:border-gray-700 bg-white dark:bg-ink p-4 sm:p-5 space-y-4">
        <div className="flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={user.avatar_url} alt={username} className="h-10 w-10 rounded-full border border-gray-200 dark:border-gray-700" />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-gray-900 dark:text-white truncate">{user.name ?? username} <span className="font-normal text-gray-500">· {user.public_repos} repos · {user.followers} followers</span></p>
            <p className="text-xs text-gray-500 dark:text-gray-400 truncate">{user.location ?? "Philippines"} · Updated {timeAgo(user.updated_at)}</p>
          </div>
        </div>

        {hasEvents ? (
          <div className="space-y-3">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-gray-500 dark:text-gray-400">Recent activity</p>
            <ul className="space-y-2.5">
              {events.slice(0, 5).map((e) => (
                <li key={e.id} className="flex gap-3 text-sm">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gray-400 dark:bg-gray-500 shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-gray-700 dark:text-gray-300 leading-snug truncate">{eventLabel(e)}</p>
                    <p className="text-xs text-gray-400 dark:text-gray-500">{timeAgo(e.created_at)}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p className="text-sm text-gray-500 dark:text-gray-400">No recent public activity to show right now.</p>
        )}

        {repos && repos.length > 0 && (
          <div className="space-y-3 pt-2 border-t border-dashed border-gray-200 dark:border-gray-800">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-gray-500 dark:text-gray-400">Recently updated</p>
            <div className="grid gap-2">
              {repos.map((r) => (
                <a key={r.name} href={r.html_url} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between rounded-lg border border-dashed border-gray-200 dark:border-gray-700 px-3 py-2 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-gray-900 dark:text-white group-hover:underline truncate">{r.name}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 truncate">{r.language ?? "—"} · ★ {r.stargazers_count} · {timeAgo(r.updated_at)}</p>
                  </div>
                  <span className="text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white text-sm">→</span>
                </a>
              ))}
            </div>
          </div>
        )}

        <div className="pt-1">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`https://ghchart.rshah.org/${username}`} alt={`${username} contributions`} className="w-full rounded-lg border border-dashed border-gray-200 dark:border-gray-700 bg-white dark:bg-ink p-2" loading="lazy" />
          <p className="text-[11px] text-gray-400 dark:text-gray-500 mt-1 text-center">Contribution chart · <a href={`https://github.com/${username}`} target="_blank" className="underline hover:text-gray-900">View profile</a></p>
        </div>
      </div>
    </section>
  );
}
