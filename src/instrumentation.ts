export async function register() {
  // Auto-start PostgreSQL if running in development/production
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    try {
      const { execSync } = await import('child_process');
      const pgBin = '/home/z/.local/pg/usr/lib/postgresql/17/bin/pg_ctl';
      const pgData = '/home/z/my-project/.postgres/data';
      
      // Check if PostgreSQL is running
      try {
        const result = execSync(`${pgBin} -D ${pgData} status`, { encoding: 'utf8' });
        if (result.includes('server is running')) {
          console.log('✓ PostgreSQL is already running');
          return;
        }
      } catch {
        // PostgreSQL is not running, try to start it
      }
      
      // Start PostgreSQL
      try {
        execSync(`${pgBin} -D ${pgData} -l /home/z/my-project/.postgres/logfile start`, {
          encoding: 'utf8',
          timeout: 10000,
        });
        console.log('✓ PostgreSQL started successfully');
      } catch (err) {
        console.warn('⚠ Could not start PostgreSQL:', err);
      }
    } catch (err) {
      console.warn('⚠ PostgreSQL auto-start failed:', err);
    }
  }
}
