export const JobsFull = ({ jobs, handleStatusChange }) => {
	const skillDefinitions = [
		{
			title: 'PHP',
			description: 'an older server-side language',
		},
		{
			title: 'Rust',
			description: 'a new, popular lower-level language',
		},
	];

	return (
		<div className="jobs">
			{jobs.map((job, index) => {
				return (
					<div key={index}>
						<div key={index} className={`job ${job.status}`}>
							<div className="header">
								<div className="position">
									<a href={job.url}>{job.position}</a>
								</div>
								<button
									onClick={() => handleStatusChange(job)}
									className="status"
								>
									{job.status}
								</button>
							</div>
							<div className="skills">{job.skills}</div>
							{job.status !== 'declined' && (
								<div className="bulkText">{job.bulkText}</div>
							)}
							<div className="skillDefinitions">
								<ul>
									{skillDefinitions.map((sd, index) => {
										return <li key={index}>nnn</li>;
									})}
								</ul>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};
